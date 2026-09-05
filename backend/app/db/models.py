from sqlalchemy import Column, Integer, String, Float, ForeignKey, Boolean, DateTime
from sqlalchemy.orm import relationship
import datetime
from .database import Base

class Client(Base):
    __tablename__ = "clients"

    client_id = Column(String, primary_key=True, index=True)
    client_name = Column(String)
    risk_profile = Column(String)
    risk_tolerance_score = Column(String)
    base_currency = Column(String)
    wealth_band = Column(String)
    total_aum_usd = Column(Float)
    
    portfolios = relationship("Portfolio", back_populates="client")


class Portfolio(Base):
    __tablename__ = "portfolios"

    portfolio_id = Column(String, primary_key=True, index=True)
    client_id = Column(String, ForeignKey("clients.client_id"))
    portfolio_name = Column(String)
    mandate_code = Column(String)
    service_model = Column(String)
    base_currency = Column(String)
    aum_usd_current = Column(Float)

    client = relationship("Client", back_populates="portfolios")
    holdings = relationship("Holding", back_populates="portfolio")


class Holding(Base):
    __tablename__ = "holdings"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    snapshot_date = Column(String)
    portfolio_id = Column(String, ForeignKey("portfolios.portfolio_id"))
    client_id = Column(String, ForeignKey("clients.client_id"))
    instrument_id = Column(String)
    instrument_name = Column(String)
    asset_class = Column(String)
    quantity = Column(Float)
    weight_pct = Column(Float)
    market_value_usd = Column(Float)

    portfolio = relationship("Portfolio", back_populates="holdings")


class PlannedCashNeed(Base):
    __tablename__ = "planned_cash_needs"

    need_id = Column(String, primary_key=True, index=True)
    client_id = Column(String, ForeignKey("clients.client_id"))
    description = Column(String)
    currency = Column(String)
    amount = Column(Float)
    due_from = Column(String)
    due_to = Column(String)
    certainty = Column(String)


class CreditFacility(Base):
    __tablename__ = "credit_facilities"

    facility_id = Column(String, primary_key=True, index=True)
    client_id = Column(String, ForeignKey("clients.client_id"))
    facility_type = Column(String)
    margin_call_ltv_pct = Column(Float)
    drawn_current = Column(Float)  # We will map the latest date to this field during ingestion
    collateral_value_current = Column(Float)
    ltv_pct_current = Column(Float)


class AgentAlert(Base):
    __tablename__ = "agent_alerts"

    alert_id = Column(String, primary_key=True, index=True)
    client_id = Column(String, ForeignKey("clients.client_id"))
    portfolio_id = Column(String, ForeignKey("portfolios.portfolio_id"))
    asset_id = Column(String)
    asset_name = Column(String)
    
    # Agent 1 outputs
    price_drop_pct = Column(Float)
    financial_significance = Column(String)
    client_impact = Column(String)
    agent_1_summary = Column(String)
    
    # Agent 2 outputs
    catalyst_summary = Column(String)
    root_event_description = Column(String)
    
    # Agent 3 outputs (JSON dumped string)
    advisory_brief = Column(String, nullable=True)

    status = Column(String, default="unread")  # unread, acknowledged, dismissed
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
