import json
from sqlalchemy.orm import Session
from app.db.models import Holding, Portfolio, Client, CreditFacility
from app.db.database import get_chroma_client

def calculate_financial_significance(session: Session, client_id: str, portfolio_id: str, asset_id: str, price_drop_pct: float) -> str:
    """
    Calculates quantitative Financial Significance based on portfolio weight and credit utilization.
    Low: Portfolio drop < 0.5%
    Medium: Portfolio drop 0.5% - 2%
    High: Portfolio drop > 2% OR margin call headroom is tight
    """
    holding = session.query(Holding).filter(
        Holding.portfolio_id == portfolio_id, 
        Holding.instrument_id == asset_id
    ).first()
    
    if not holding:
        return "Low"

    # Weight is usually a percentage (e.g., 5.0 for 5%)
    portfolio_drop_pct = (holding.weight_pct / 100) * price_drop_pct
    
    significance = "Low"
    if portfolio_drop_pct > 2.0:
        significance = "High"
    elif portfolio_drop_pct > 0.5:
        significance = "Medium"

    # Check margin call utilization if significance isn't already high
    if significance != "High":
        cf = session.query(CreditFacility).filter_by(client_id=client_id).first()
        if cf:
            # If they are within 3% of margin call, any drop is High significance
            gap = cf.margin_call_ltv_pct - cf.ltv_pct_current
            if gap < 3.0:
                significance = "High"
            
    return significance

def evaluate_client_impact(client_id: str, asset_name: str, asset_category: str) -> str:
    """
    Queries ChromaDB for relevant RM notes and uses Gemini to score Client Impact.
    """
    chroma_client = get_chroma_client()
    notes_collection = chroma_client.get_or_create_collection("rm_notes")
    
    query = f"{asset_name} {asset_category} market concerns"
    results = notes_collection.query(
        query_texts=[query],
        where={"client_id": client_id},
        n_results=3
    )
    
    retrieved_notes = results['documents'][0] if results['documents'] else []
    notes_context = "\\n".join(retrieved_notes)
    
    if not notes_context:
        return "Low" # Defaults to Low if no RM notes exist
        
    prompt = f"""
    You are Agent 1 in a wealth management system. Your job is to score the 'Client Impact' of a market drop.
    The asset that dropped is: {asset_name} ({asset_category}).
    
    Here are the recent notes from the Relationship Manager for this client:
    {notes_context}
    
    Based on these notes, evaluate the qualitative Client Impact if this asset drops significantly.
    - Output "High" if the client has a deep emotional attachment, explicit concerns, or upcoming liquidity needs tied to this.
    - Output "Medium" if the client holds it actively but hasn't expressed major anxiety.
    - Output "Low" if the client is indifferent or views drops as buying opportunities.
    
    Output exactly one word: Low, Medium, or High.
    """
    
    from app.agents.llm_utils import generate_llm_response
    impact = generate_llm_response(prompt, json_mode=False)
    if impact not in ["Low", "Medium", "High"]:
        impact = "Medium" # Fallback
        
    return impact

def evaluate_flag_matrix(significance: str, impact: str) -> bool:
    """
    Implements the logic from agent1_flag_matrix
    """
    matrix = {
        ("Low", "Low"): False,
        ("Low", "Medium"): False,
        ("Low", "High"): True,
        ("Medium", "Low"): False,
        ("Medium", "Medium"): True,
        ("Medium", "High"): True,
        ("High", "Low"): True,
        ("High", "Medium"): True,
        ("High", "High"): True
    }
    return matrix.get((significance, impact), False)

def process_agent1(session: Session, client_id: str, portfolio_id: str, asset_id: str, asset_name: str, asset_category: str, price_drop_pct: float):
    """
    Runs the Agent 1 pipeline and returns a data package if flagged.
    """
    significance = calculate_financial_significance(session, client_id, portfolio_id, asset_id, price_drop_pct)
    impact = evaluate_client_impact(client_id, asset_name, asset_category)
    
    flagged = evaluate_flag_matrix(significance, impact)
    
    summary = ""
    if flagged:
        summary = f"Client's {asset_category} holdings ({asset_name}) dropped {price_drop_pct}%, triggering {impact.lower()} concern."
        
    return {
        "flagged": flagged,
        "significance": significance,
        "impact": impact,
        "summary": summary
    }
