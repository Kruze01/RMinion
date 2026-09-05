import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.cron import CronTrigger
from sqlalchemy.orm import Session
from pydantic import BaseModel
import pandas as pd

from app.db.database import engine, Base, get_db
from app.db.models import Holding, AgentAlert
from app.agents.agent1 import process_agent1
from app.agents.agent2 import process_agent2

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Base.metadata.create_all(bind=engine)  # Handled by ingest script

scheduler = AsyncIOScheduler()

def run_market_sweep():
    """
    Scheduled task that simulates sweeping market prices and passing them to Agent 1.
    In a real app, this reads live prices and compares with last close.
    """
    logger.info("Running daily market sweep...")
    # For prototype, this function might just log. We rely on the manual trigger below to test specific assets.
    pass

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("Starting scheduler...")
    scheduler.add_job(
        run_market_sweep,
        CronTrigger(day_of_week='mon-fri', hour=17, minute=0)
    )
    scheduler.start()
    yield
    # Shutdown
    logger.info("Stopping scheduler...")
    scheduler.shutdown()

app = FastAPI(lifespan=lifespan)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MarketTriggerRequest(BaseModel):
    asset_id: str
    asset_category: str
    price_drop_pct: float

def execute_pipeline(asset_id: str, asset_category: str, price_drop_pct: float, db: Session):
    """
    Finds affected portfolios and runs Agents 1 and 2.
    """
    # 1. Identify affected portfolios
    holdings = db.query(Holding).filter(Holding.instrument_id == asset_id).limit(2).all()
    
    for holding in holdings:
        # Agent 1
        a1_res = process_agent1(
            session=db,
            client_id=holding.client_id,
            portfolio_id=holding.portfolio_id,
            asset_id=asset_id,
            asset_name=holding.instrument_name,
            asset_category=asset_category,
            price_drop_pct=price_drop_pct
        )
        
        if not a1_res["flagged"]:
            continue
            
        # Agent 2
        a2_res = process_agent2(
            asset_name=holding.instrument_name,
            asset_category=asset_category,
            price_drop_pct=price_drop_pct
        )
        
        # Persist Alert
        alert_id = f"ALT-{holding.portfolio_id}-{asset_id}"
        existing_alert = db.query(AgentAlert).filter_by(alert_id=alert_id).first()
        if not existing_alert:
            alert = AgentAlert(
                alert_id=alert_id,
                client_id=holding.client_id,
                portfolio_id=holding.portfolio_id,
                asset_id=asset_id,
                asset_name=holding.instrument_name,
                price_drop_pct=price_drop_pct,
                financial_significance=a1_res["significance"],
                client_impact=a1_res["impact"],
                agent_1_summary=a1_res["summary"],
                catalyst_summary=a2_res.get("catalyst_summary", ""),
                root_event_description=a2_res.get("root_event_description", ""),
                status="unread"
            )
            db.add(alert)
    db.commit()

@app.post("/api/v1/market-trigger")
def trigger_market_event(payload: MarketTriggerRequest, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    """
    Manually inject a market event to run the AI pipeline for testing.
    Runs pipeline in background so API returns quickly.
    """
    background_tasks.add_task(
        execute_pipeline, 
        payload.asset_id, 
        payload.asset_category, 
        payload.price_drop_pct, 
        db
    )
    return {"status": "accepted", "message": "Pipeline triggered in background."}

@app.get("/api/v1/alerts")
def get_alerts(db: Session = Depends(get_db)):
    """
    Fetches the list of active alerts to populate the dashboard.
    """
    alerts = db.query(AgentAlert).all()
    return alerts

from app.agents.agent3 import generate_advisory_brief
import json

@app.post("/api/v1/alerts/{alert_id}/generate-brief")
def create_advisory_brief(alert_id: str, db: Session = Depends(get_db)):
    alert = db.query(AgentAlert).filter_by(alert_id=alert_id).first()
    if not alert:
        raise HTTPException(status_code=404, detail="Alert not found")
        
    brief = generate_advisory_brief(
        session=db, 
        client_id=alert.client_id, 
        portfolio_id=alert.portfolio_id, 
        agent1_summary=alert.agent_1_summary, 
        agent2_catalyst=alert.catalyst_summary
    )
    
    alert.advisory_brief = json.dumps(brief)
    alert.status = "acknowledged"
    db.commit()
    
    return {"status": "success", "brief": brief}
