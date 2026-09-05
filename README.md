# RMinion - Multi-Agent Wealth Management AI Copilot

RMinion is an AI-powered copilot designed for private wealth Relationship Managers (RMs). It continuously monitors market volatility, filters noise to prevent alert fatigue, connects market events to macroeconomic catalysts, and synthesizes strategic advisory recommendations based on client constraints, credit lines, and past conversation context.

---

## Architecture Overview

RMinion operates via a **3-Agent Multi-Tier Pipeline**:

```
[ Market Move / Scheduled Sweep ]
               │
               ▼
   ┌───────────────────────┐
   │       Agent 1         │ ── (Pass / Fail Matrix)
   │     The Watchdog      │ ── Quant Financial Significance + Vector RM Sentiment
   └───────────────────────┘
               │ (Only flagged alerts proceed)
               ▼
   ┌───────────────────────┐
   │       Agent 2         │ ── ChromaDB RAG against Macro Event Log
   │    The Researcher     │ ── Synthesizes root causal drivers & single-sentence catalyst
   └───────────────────────┘
               │ (Stored in DB / Displayed in RM Dashboard)
               ▼
   ┌───────────────────────┐
   │       Agent 3         │ ── Triggered on-demand when RM clicks an alert
   │     The Advisor       │ ── Calculates LTV headroom, mandate breaches & cash gaps
   └───────────────────────┘    Generates actionable strategic options for the client
```

### 1. Agent 1: The Watchdog (Noise Gatekeeper)
- **Trigger**: Daily cron sweep or market price change event.
- **Evaluation**: Calculates quantitative **Financial Significance** (portfolio weight × asset drop percentage, credit facility utilization) and evaluates qualitative **Client Impact** by querying past RM meeting notes via ChromaDB vector embeddings.
- **Gatekeeper Matrix**: Filters out low-significance/low-impact noise so RMs only receive alerts that genuinely require attention.

### 2. Agent 2: The Researcher (Causal Synthesizer)
- **Trigger**: Automatically executed when Agent 1 flags an alert.
- **Evaluation**: Queries macroeconomic and geopolitical event logs in ChromaDB.
- **Output**: Synthesizes a causal summary linking the price drop to a verified macro driver (or outputs *"No clear logged catalyst found"* if uncorrelated).

### 3. Agent 3: The Advisor (Strategic Engine)
- **Trigger**: On-demand when the RM clicks on an active alert in the UI.
- **Evaluation**: Cross-references:
  - **Credit Facility LTV**: Current vs. margin call threshold, calculating remaining headroom.
  - **Mandate Breaches**: Position concentrations (>15%) and asset allocation limits.
  - **Cash Flow Gap**: Upcoming planned liquidity needs vs. liquid cash available.
  - **Risk Profile Alignment**: Equity weighting vs. stated risk score.
  - **Client Preferences**: Contextual constraints extracted from RM interaction history.
- **Output**: Ranked strategic action options with rationales and concrete next steps (e.g., collar options hedging, collateral top-ups, phased rebalancing).

---

## Tech Stack

- **Backend**: FastAPI, SQLAlchemy (SQLite ORM), ChromaDB (Persistent Vector Store), APScheduler
- **AI / LLM**: Dual-provider support with dynamic routing (prioritizes **OpenAI** `gpt-4o-mini`, falls back to **Google Gemini** `gemini-3.6-flash`)
- **Frontend**: React (Vite), DM Sans & Manrope design system matching private wealth workstation aesthetics

---

## Project Structure

```
RMinion/
├── backend/
│   ├── app/
│   │   ├── agents/
│   │   │   ├── agent1.py       # Gatekeeper & sentiment matrix
│   │   │   ├── agent2.py       # Macro event RAG pipeline
│   │   │   ├── agent3.py       # Strategic advisory options engine
│   │   │   └── llm_utils.py    # Dual OpenAI/Gemini router
│   │   ├── db/
│   │   │   ├── database.py     # SQLite and ChromaDB setup
│   │   │   └── models.py       # SQLAlchemy ORM models
│   │   └── main.py             # FastAPI endpoints & scheduler
│   ├── scripts/
│   │   └── ingest_data.py      # Seeds relational DB & Chroma vector stores
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── App.jsx             # RM Dashboard & Portfolio Insight View
│   │   ├── index.css           # Styling system & component styles
│   │   └── main.jsx
│   ├── public/
│   │   └── photo_2026-09-05_16-00-17.jpg # Header/brand logo
│   ├── package.json
│   └── vite.config.js          # API reverse proxy configuration
├── about_agent3/               # Reference specs and legacy test datasets
├── .env.example                # Environment variables template
└── README.md
```

---

## Quickstart Guide

### 1. Prerequisites
- Python 3.11+
- Node.js 18+ and npm

### 2. Environment Setup

Clone the repository:
```bash
git clone https://github.com/Kruze01/RMinion.git
cd RMinion
```

Create and configure `.env`:
```bash
cp .env.example .env
```

Add your API key(s) to `.env`:
```env
OPENAI_API_KEY=your_openai_api_key_here
# or
GEMINI_API_KEY=your_gemini_api_key_here
```
> *Note: If both keys are present, OpenAI is automatically prioritized.*

### 3. Backend Setup

Set up a virtual environment and install dependencies:
```bash
python -m venv .venv

# On Windows:
.venv\Scripts\Activate.ps1

# On macOS/Linux:
source .venv/bin/activate

pip install -r backend/requirements.txt
```

Seed the relational database and ChromaDB vector embeddings:
```bash
python backend/scripts/ingest_data.py
```

Start the FastAPI server:
```bash
cd backend
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```
The API documentation will be available at `http://localhost:8000/docs`.

### 4. Frontend Setup

In a new terminal:
```bash
cd frontend
npm install
npm run dev -- --host
```
Open `http://localhost:5173` in your browser.

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/v1/alerts` | Fetches all detected alerts for the RM dashboard |
| `POST` | `/api/v1/market-trigger` | Simulates a market price drop event to run Agents 1 & 2 |
| `POST` | `/api/v1/alerts/{alert_id}/generate-brief` | Runs Agent 3 on-demand to produce strategic options |

### Testing a Market Event
You can inject a simulated market move using `curl` or PowerShell:

```bash
curl -X POST "http://localhost:8000/api/v1/market-trigger" \
  -H "Content-Type: application/json" \
  -d '{"asset_id": "SYN-EQ-0003", "asset_category": "Information Technology", "price_drop_pct": 7.5}'
```

---

## License

MIT License. Developed for the Private Wealth AI Hackathon.
