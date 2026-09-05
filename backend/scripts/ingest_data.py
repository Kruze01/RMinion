import os
import sys
import pandas as pd
import json
import uuid

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app.db.database import engine, Base, get_chroma_client
from app.db.models import Client, Portfolio, Holding, PlannedCashNeed, CreditFacility
from sqlalchemy.orm import Session

DATA_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../data'))

def ingest_relational_data():
    print("Creating database tables...")
    Base.metadata.create_all(bind=engine)

    print("Loading data into relational database...")
    with Session(engine) as session:
        # Load Clients
        clients_df = pd.read_csv(os.path.join(DATA_DIR, 'clients.csv'))
        for _, row in clients_df.iterrows():
            client = session.query(Client).filter_by(client_id=row['client_id']).first()
            if not client:
                client = Client(
                    client_id=row['client_id'],
                    client_name=row['client_name'],
                    risk_profile=row['risk_profile'],
                    risk_tolerance_score=str(row['risk_tolerance_score']),
                    base_currency=row['base_currency'],
                    wealth_band=row['wealth_band'],
                    total_aum_usd=row['total_aum_usd']
                )
                session.add(client)
        
        # Load Portfolios
        portfolios_df = pd.read_csv(os.path.join(DATA_DIR, 'portfolios.csv'))
        for _, row in portfolios_df.iterrows():
            portfolio = session.query(Portfolio).filter_by(portfolio_id=row['portfolio_id']).first()
            if not portfolio:
                portfolio = Portfolio(
                    portfolio_id=row['portfolio_id'],
                    client_id=row['client_id'],
                    portfolio_name=row['portfolio_name'],
                    mandate_code=row['mandate_code'],
                    service_model=row['service_model'],
                    base_currency=row['base_currency'],
                    aum_usd_current=row['aum_usd_current']
                )
                session.add(portfolio)

        # Load Holdings
        holdings_df = pd.read_csv(os.path.join(DATA_DIR, 'holdings.csv'))
        # Clear existing holdings to prevent duplication if script is run multiple times
        session.query(Holding).delete()
        for _, row in holdings_df.iterrows():
            holding = Holding(
                snapshot_date=row['snapshot_date'],
                portfolio_id=row['portfolio_id'],
                client_id=row['client_id'],
                instrument_id=row['instrument_id'],
                instrument_name=row['instrument_name'],
                asset_class=row['asset_class'],
                quantity=row['quantity'],
                weight_pct=row['weight_pct'],
                market_value_usd=row['market_value_usd']
            )
            session.add(holding)

        # Load Planned Cash Needs
        cash_needs_df = pd.read_csv(os.path.join(DATA_DIR, 'planned_cash_needs.csv'))
        for _, row in cash_needs_df.iterrows():
            need = session.query(PlannedCashNeed).filter_by(need_id=row['need_id']).first()
            if not need:
                need = PlannedCashNeed(
                    need_id=row['need_id'],
                    client_id=row['client_id'],
                    description=row['description'],
                    currency=row['currency'],
                    amount=row['amount'],
                    due_from=row['due_from'],
                    due_to=row['due_to'],
                    certainty=row['certainty']
                )
                session.add(need)

        # Load Credit Facilities
        cf_df = pd.read_csv(os.path.join(DATA_DIR, 'credit_facilities.csv'))
        for _, row in cf_df.iterrows():
            cf = session.query(CreditFacility).filter_by(facility_id=row['facility_id']).first()
            if not cf:
                cf = CreditFacility(
                    facility_id=row['facility_id'],
                    client_id=row['client_id'],
                    facility_type=row['facility_type'],
                    margin_call_ltv_pct=row['margin_call_ltv_pct'],
                    drawn_current=row['drawn_2026-08-26'], # Using the latest date
                    collateral_value_current=row['collateral_market_value_2026-08-26'],
                    ltv_pct_current=row['ltv_pct_2026-08-26']
                )
                session.add(cf)
        
        session.commit()
        print("Relational data ingested successfully.")

def ingest_vector_data():
    print("Ingesting data into ChromaDB...")
    client = get_chroma_client()
    
    # Process RM Notes
    notes_collection = client.get_or_create_collection("rm_notes")
    with open(os.path.join(DATA_DIR, 'rm_notes.json'), 'r', encoding='utf-8') as f:
        rm_notes = json.load(f)
    
    note_ids = []
    note_docs = []
    note_metadatas = []
    for note in rm_notes:
        note_ids.append(note['note_id'])
        note_docs.append(note['note'])
        note_metadatas.append({
            "client_id": note['client_id'],
            "date": note['note_date'],
            "rm_id": note['rm_id'],
            "channel": note['channel']
        })
    
    if note_docs:
        notes_collection.add(
            documents=note_docs,
            metadatas=note_metadatas,
            ids=note_ids
        )
        print(f"Added {len(note_docs)} RM notes to vector store.")

    # Process Event Log
    events_collection = client.get_or_create_collection("event_log")
    events_df = pd.read_csv(os.path.join(DATA_DIR, 'event_log.csv'))
    
    event_ids = []
    event_docs = []
    event_metadatas = []
    
    for _, row in events_df.iterrows():
        event_ids.append(str(uuid.uuid4()))
        event_docs.append(row['description'])
        event_metadatas.append({
            "event_date": row['event_date'],
            "event_type": row['event_type'],
            "severity": row['severity'],
            "region": row['region'],
            "primary_transmission": row['primary_transmission']
        })
        
    if event_docs:
        events_collection.add(
            documents=event_docs,
            metadatas=event_metadatas,
            ids=event_ids
        )
        print(f"Added {len(event_docs)} macro events to vector store.")

if __name__ == "__main__":
    ingest_relational_data()
    ingest_vector_data()
