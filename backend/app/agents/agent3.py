import json
from sqlalchemy.orm import Session
from app.db.models import Holding, Portfolio, Client, CreditFacility, PlannedCashNeed
from app.db.database import get_chroma_client

def get_mandate_breaches(session: Session, portfolio_id: str):
    """Detect concentration and (simplified) asset allocation breaches."""
    breaches = []
    holdings = session.query(Holding).filter_by(portfolio_id=portfolio_id).all()
    
    # Concentration check per position
    for h in holdings:
        if h.weight_pct and h.weight_pct > 15.0:
            breaches.append({
                "type": "concentration",
                "instrument_name": h.instrument_name,
                "actual_pct": round(h.weight_pct, 2),
                "max_single_position_pct": 15.0,
                "description": f"{h.instrument_name} is {round(h.weight_pct, 1)}% of the portfolio, above the mandate's single-position limit of 15.0%."
            })
    
    # Asset class allocation check (simplified bands by class)
    MANDATE_BANDS = {
        "Equity": (10, 78),
        "Fixed Income": (5, 75),
        "Cash and Equivalents": (1, 18),
        "Alternatives": (0, 30),
    }
    
    total_mv = sum((h.market_value_usd or 0) for h in holdings) or 1
    class_totals = {}
    for h in holdings:
        cls = h.asset_class or "Other"
        class_totals[cls] = class_totals.get(cls, 0) + (h.market_value_usd or 0)
    
    for cls, (min_pct, max_pct) in MANDATE_BANDS.items():
        actual_pct = round((class_totals.get(cls, 0) / total_mv) * 100, 2)
        if actual_pct < min_pct or actual_pct > max_pct:
            breaches.append({
                "type": "asset_allocation",
                "asset_class": cls,
                "actual_pct": actual_pct,
                "min_pct": min_pct,
                "max_pct": max_pct,
                "description": f"{cls} is at {round(actual_pct, 1)}% of the portfolio, outside the mandate's allowed range of {min_pct}-{max_pct}%."
            })
    
    return breaches

def get_cash_flow_details(session: Session, client_id: str):
    """Returns detailed cash flow gap with individual planned needs."""
    needs = session.query(PlannedCashNeed).filter_by(client_id=client_id).all()
    total_needs = sum([n.amount for n in needs])
    
    # Liquid assets = Cash and Equivalents holdings
    liquid_holdings = session.query(Holding).filter(
        Holding.client_id == client_id,
        Holding.asset_class == 'Cash and Equivalents'
    ).all()
    liquid_cash = sum([h.market_value_usd for h in liquid_holdings]) or 1000000.0
    shortfall = max(0, total_needs - liquid_cash)
    
    return {
        "planned_needs": [
            {
                "description": n.description,
                "amount": n.amount,
                "currency": n.currency,
                "due_from": n.due_from,
                "due_to": n.due_to,
                "certainty": n.certainty
            } for n in needs
        ],
        "total_planned_needs": total_needs,
        "liquid_assets_available": liquid_cash,
        "shortfall": shortfall,
        "has_shortfall": str(shortfall > 0)
    }

def get_credit_facility_details(session: Session, client_id: str):
    """Returns enriched credit facility status with headroom."""
    cf = session.query(CreditFacility).filter_by(client_id=client_id).first()
    if not cf:
        return None
    
    gap = (cf.margin_call_ltv_pct or 75) - (cf.ltv_pct_current or 0)
    headroom_value = (gap / 100) * (cf.collateral_value_current or 0)
    
    return {
        "facility_id": cf.facility_id,
        "facility_type": cf.facility_type,
        "as_of": "2026-08-26",
        "drawn": cf.drawn_current,
        "ltv_pct": cf.ltv_pct_current,
        "margin_call_ltv_pct": cf.margin_call_ltv_pct,
        "headroom": round(headroom_value, 0),
        "gap_to_margin_call_pct_points": round(gap, 2),
        "urgent": gap < 3.0,
        "note": "LTV (Loan-to-Value) is the loan amount as a percentage of the collateral backing it. If it crosses the margin call threshold, the bank can force-sell collateral automatically."
    }

def get_risk_profile_check(session: Session, client_id: str, portfolio_id: str):
    """Checks if the portfolio equity weight aligns with the client's risk score."""
    client = session.query(Client).filter_by(client_id=client_id).first()
    if not client or not client.risk_tolerance_score:
        return None
    
    holdings = session.query(Holding).filter_by(portfolio_id=portfolio_id).all()
    total_mv = sum((h.market_value_usd or 0) for h in holdings) or 1
    equity_mv = sum((h.market_value_usd or 0) for h in holdings if h.asset_class == 'Equity')
    actual_equity_pct = round((equity_mv / total_mv) * 100, 2)
    
    # Rough expected equity % = risk_score * 10 (e.g., score 8 → ~80%, capped at 90%)
    try:
        score = int(client.risk_tolerance_score)
        expected = min(90, score * 10)
        diff = actual_equity_pct - expected
        if abs(diff) < 10:
            return None  # Within tolerance, no flag needed
        return {
            "risk_tolerance_score": str(score),
            "actual_equity_pct": actual_equity_pct,
            "expected_equity_pct_approx": str(expected),
            "direction": "higher" if diff > 0 else "lower",
            "description": f"Portfolio equity weight ({round(actual_equity_pct, 1)}%) is notably {'higher' if diff > 0 else 'lower'} than what the client's stated risk tolerance score of {score}/10 would suggest."
        }
    except (ValueError, TypeError):
        return None

def get_relevant_rm_notes(client_id: str, agent1_summary: str):
    """Retrieve the top RM notes via semantic search."""
    chroma = get_chroma_client()
    notes_coll = chroma.get_or_create_collection("rm_notes")
    res = notes_coll.query(
        query_texts=[agent1_summary or "client concerns market drop"],
        where={"client_id": client_id},
        n_results=3
    )
    notes = []
    if res['documents']:
        for i, doc in enumerate(res['documents'][0]):
            meta = res['metadatas'][0][i] if res['metadatas'] else {}
            notes.append({
                "date": meta.get("date", ""),
                "note": doc
            })
    return notes

def generate_advisory_brief(session: Session, client_id: str, portfolio_id: str, agent1_summary: str, agent2_catalyst: str):
    client = session.query(Client).filter_by(client_id=client_id).first()
    portfolio = session.query(Portfolio).filter_by(portfolio_id=portfolio_id).first()
    
    mandate_breaches = get_mandate_breaches(session, portfolio_id)
    cash_flow = get_cash_flow_details(session, client_id)
    credit_facility = get_credit_facility_details(session, client_id)
    risk_check = get_risk_profile_check(session, client_id, portfolio_id)
    relevant_notes = get_relevant_rm_notes(client_id, agent1_summary)
    
    notes_context = "\n".join([f"[{n['date']}] {n['note']}" for n in relevant_notes])
    
    prompt = f"""
    You are Agent 3, an Advisory Engine for a Private Wealth Relationship Manager (RM).
    Generate actionable "options" for the RM to propose to the client.
    
    CLIENT CONTEXT:
    - Client: {client.client_name if client else client_id}
    - Risk Profile: {client.risk_profile if client else 'Unknown'}
    - Portfolio: {portfolio.portfolio_name if portfolio else portfolio_id}
    
    ALERT DETAILS:
    - Market Alert: {agent1_summary}
    - Macro Catalyst: {agent2_catalyst}
    
    CLIENT CONSTRAINTS:
    - Mandate Breaches: {json.dumps(mandate_breaches[:3])}
    - Cash Flow: Needs ${cash_flow['total_planned_needs']:,.0f}, Available ${cash_flow['liquid_assets_available']:,.0f}, Shortfall ${cash_flow['shortfall']:,.0f}
    - Credit Facility: {json.dumps(credit_facility) if credit_facility else 'None'}
    - Risk Profile Check: {json.dumps(risk_check) if risk_check else 'Aligned'}
    
    RELEVANT RM NOTES:
    {notes_context if notes_context else 'No recent notes.'}
    
    Generate EXACTLY 2-3 strategic options. For each option you must reference SPECIFIC numbers from the constraints above (e.g. actual LTV percentage, specific shortfall amount, specific position name and concentration percentage).
    
    Format as a JSON ARRAY with this exact structure:
    [
      {{
        "title": "Concise action title (max 8 words)",
        "rationale": "1-2 sentences with specific numbers explaining WHY this is needed now.",
        "urgency_rank": 1,
        "recommended_lead_option": true,
        "actions": [
          {{"owner": "RM", "due_date": "Within 24 hours", "description": "Specific concrete action step"}},
          {{"owner": "IC/Risk", "due_date": "TBD", "description": "Specific concrete action step"}}
        ]
      }}
    ]
    
    Rules:
    - urgency_rank 1 = most urgent, set recommended_lead_option=true only for rank 1
    - Always prioritize credit facility LTV risk if urgent (gap < 3%)
    - Next prioritize mandate breaches
    - Then cash flow gaps
    - Then risk profile misalignment
    - Output ONLY the JSON array, no other text.
    """
    
    from app.agents.llm_utils import generate_llm_response
    response_text = generate_llm_response(prompt, json_mode=True)
    
    try:
        options = json.loads(response_text)
        
        # Find the recommended lead option title
        lead = next((o['title'] for o in options if o.get('recommended_lead_option')), options[0]['title'] if options else '')
        
        return {
            "situation_summary": f"{client.client_name if client else client_id} ({client.risk_profile if client else 'Unknown'} risk profile). Alert: {agent1_summary}",
            "mandate_breaches": mandate_breaches,
            "cash_flow_gap": cash_flow,
            "credit_facility_status": credit_facility,
            "risk_profile_check": risk_check,
            "relevant_rm_notes": relevant_notes,
            "options": options,
            "recommended_lead_option": lead
        }
    except Exception as e:
        return {
            "error": "Failed to generate options",
            "raw": response_text,
            "mandate_breaches": mandate_breaches,
            "cash_flow_gap": cash_flow,
            "credit_facility_status": credit_facility,
            "options": []
        }
