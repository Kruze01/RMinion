import json
from app.db.database import get_chroma_client

def process_agent2(asset_name: str, asset_category: str, price_drop_pct: float) -> dict:
    """
    RAG pipeline against event_log to find macroeconomic catalysts.
    """
    chroma_client = get_chroma_client()
    events_collection = chroma_client.get_or_create_collection("event_log")
    
    # Query for the asset category and drop
    query = f"market event drop catalyst {asset_category} {asset_name}"
    results = events_collection.query(
        query_texts=[query],
        n_results=3
    )
    
    events = []
    if results['documents'] and len(results['documents'][0]) > 0:
        for i, doc in enumerate(results['documents'][0]):
            meta = results['metadatas'][0][i]
            events.append(f"- Date: {meta['event_date']}, Type: {meta['event_type']}, Region: {meta['region']}, Event: {doc}")
            
    events_context = "\\n".join(events)
    
    prompt = f"""
    You are Agent 2 in a wealth management system. Your job is to act as a Causal Synthesizer.
    Agent 1 has flagged that the asset '{asset_name}' (Category: {asset_category}) has dropped by {price_drop_pct}%.
    
    Here are the recent macroeconomic event logs retrieved from the system:
    {events_context if events_context else "No events found."}
    
    Your task:
    Synthesize a single causal summary linking the drop to the macro driver.
    If the retrieved event logs do not strongly correlate with the market move, you MUST output: "No clear logged catalyst found."
    
    Provide the response in strict JSON format:
    {{
      "catalyst_summary": "A single synthesized sentence linking the drop to the macro driver.",
      "root_event_description": "A short 3-5 word heading describing the root event."
    }}
    """
    
    from app.agents.llm_utils import generate_llm_response
    response_text = generate_llm_response(prompt, json_mode=True)
    
    try:
        data = json.loads(response_text)
        return data
    except Exception as e:
        return {
            "catalyst_summary": "No clear logged catalyst found.",
            "root_event_description": "Unknown Event"
        }
