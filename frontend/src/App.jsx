import { useState, useEffect, useCallback } from 'react';
import './index.css';

// ─── Helpers ────────────────────────────────────────────────────────────────

const getGreeting = () => {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
};

const todayLabel = () => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  }).toUpperCase();
};

const fmt = (n) => {
  if (n === undefined || n === null) return '—';
  return Number(n).toLocaleString('en-US', { maximumFractionDigits: 0 });
};

const significanceColor = (s) => {
  if (s === 'High') return 'tag-red';
  if (s === 'Medium') return 'tag-orange';
  return 'tag-teal';
};

// ─── Option Card ─────────────────────────────────────────────────────────────

function OptionCard({ option, index }) {
  const [rationaleOpen, setRationaleOpen] = useState(false);
  const [actionsOpen, setActionsOpen] = useState(false);
  const isUrgent = option.urgency_rank === 1;

  const toggleRationale = () => {
    setRationaleOpen(o => !o);
    if (!rationaleOpen) setActionsOpen(false);
  };

  const toggleActions = () => {
    setActionsOpen(o => !o);
    if (!actionsOpen) setRationaleOpen(false);
  };

  return (
    <article className={`option-card ${isUrgent ? 'urgent-option' : ''}`}>
      <span className="option-number">
        {String(index + 1).padStart(2, '0')}{isUrgent ? ' · URGENT' : ''}
      </span>
      <h3>{option.title}</h3>

      <div className="option-controls">
        <button className="rationale-toggle" onClick={toggleRationale}>
          {rationaleOpen ? 'Hide rationale ⌃' : 'View rationale ⌄'}
        </button>
        <button className="action-toggle" onClick={toggleActions}>
          {actionsOpen ? 'Hide action steps ⌃' : 'View action steps ⌄'}
        </button>
      </div>

      <div className={`rationale-body ${rationaleOpen ? 'open' : ''}`}>
        {option.rationale}
      </div>

      <div className={`action-list ${actionsOpen ? 'open' : ''}`}>
        {(option.actions || []).map((a, i) => (
          <div key={i} className="action">
            <b>{a.owner} · {a.due_date}</b>
            <span>{a.description}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

// ─── Advisory Brief View ──────────────────────────────────────────────────────

function AdvisoryBriefView({ brief }) {
  if (!brief) return null;
  if (brief.error) return <p style={{ color: '#b91c1c', fontSize: 12 }}>{brief.error}</p>;

  const { mandate_breaches, cash_flow_gap, credit_facility_status, options } = brief;

  return (
    <>
      {/* Constraint pills */}
      <div className="constraint-row">
        {credit_facility_status && (
          <div className={`constraint-pill ${credit_facility_status.urgent ? 'urgent-pill' : ''}`}>
            <span>CREDIT FACILITY · LTV</span>
            <b>{credit_facility_status.ltv_pct}% of {credit_facility_status.margin_call_ltv_pct}% limit</b>
            <div style={{ fontSize: 10, color: '#8a989e', marginTop: 3 }}>
              {credit_facility_status.facility_type}
              {credit_facility_status.urgent && ' · Margin call imminent'}
            </div>
          </div>
        )}
        {cash_flow_gap && (
          <div className={`constraint-pill ${cash_flow_gap.shortfall > 0 ? 'urgent-pill' : ''}`}>
            <span>CASH FLOW</span>
            <b>
              {cash_flow_gap.shortfall > 0
                ? `Shortfall $${fmt(cash_flow_gap.shortfall)}`
                : 'No shortfall'}
            </b>
            <div style={{ fontSize: 10, color: '#8a989e', marginTop: 3 }}>
              Needs ${fmt(cash_flow_gap.total_planned_needs)} · Available ${fmt(cash_flow_gap.liquid_assets_available)}
            </div>
          </div>
        )}
      </div>

      {/* Mandate breaches */}
      {mandate_breaches && mandate_breaches.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <span className="eyebrow">MANDATE BREACHES · {mandate_breaches.length}</span>
          <div className="breach-list">
            {mandate_breaches.slice(0, 4).map((b, i) => (
              <div key={i} className="breach-item">{b.description}</div>
            ))}
          </div>
        </div>
      )}

      {/* Options grid */}
      {options && options.length > 0 && (
        <section className="advisory-section">
          <div className="section-heading">
            <div>
              <span className="portfolio-kicker">RM NEXT STEPS</span>
              <h2>Options going forward</h2>
            </div>
            <span className="section-note">Based on performance and client needs</span>
          </div>
          <div className="options-grid">
            {options.map((o, i) => <OptionCard key={i} option={o} index={i} />)}
          </div>
        </section>
      )}
    </>
  );
}

// ─── Alert Detail View ────────────────────────────────────────────────────────

function AlertDetail({ alert, onBack, onBriefGenerated }) {
  const [loading, setLoading] = useState(false);
  const brief = alert.advisory_brief ? (() => { try { return JSON.parse(alert.advisory_brief); } catch { return null; } })() : null;

  const isUrgent = alert.financial_significance === 'High' && alert.client_impact === 'High';
  const createdDate = alert.created_at ? new Date(alert.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '';

  const generateBrief = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/v1/alerts/${alert.alert_id}/generate-brief`, { method: 'POST' });
      const data = await res.json();
      if (data.brief) onBriefGenerated(alert.alert_id, JSON.stringify(data.brief));
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div className="portfolio-page">
      <button className="back-btn" onClick={onBack}>← Back to alert book</button>

      {/* Hero */}
      <section className={`portfolio-hero ${isUrgent ? 'hero-with-alert' : ''}`}>
        <span className="portfolio-kicker">AGENT ALERT · {alert.asset_id}</span>
        <h1>{alert.asset_name}</h1>
        <p className="portfolio-sub">{alert.client_id} · {alert.portfolio_id}</p>

        {isUrgent && (
          <div className="hero-alert">
            <span>URGENT · LTV ALERT</span>
            <b>Margin Call Risk</b>
            <small>Client's credit facility LTV is dangerously close to the trigger level. Immediate action needed.</small>
          </div>
        )}
      </section>

      {/* Insight grid */}
      <div className="insight-grid">
        <div className="insight">
          <span>PRICE DROP</span>
          <b style={{ color: '#b91c1c' }}>−{alert.price_drop_pct}%</b>
        </div>
        <div className="insight">
          <span>FINANCIAL SIGNIFICANCE</span>
          <b>{alert.financial_significance}</b>
        </div>
        <div className="insight">
          <span>CLIENT IMPACT</span>
          <b>{alert.client_impact}</b>
        </div>
      </div>

      {/* Market Movements */}
      {(alert.agent_1_summary || alert.catalyst_summary) && (
        <section className="advisory-section">
          <div className="section-heading">
            <div>
              <span className="portfolio-kicker">MARKET MOVEMENTS</span>
              <h2>What changed in this portfolio</h2>
            </div>
            {createdDate && <span className="section-note">Detected on {createdDate}</span>}
          </div>
          <div className="movement-grid">
            <article className="movement-card">
              <div className="movement-symbol">↕</div>
              <div>
                <span className="movement-event-label">EVENT · {createdDate}</span>
                <p className="movement-summary">{alert.agent_1_summary}</p>
              </div>
            </article>
            <article className="reason-card">
              <span>EVENT EXPLANATION · {createdDate}</span>
              <h3>{alert.root_event_description || 'Macro Catalyst'}</h3>
              <p>{alert.catalyst_summary || 'No catalyst data available.'}</p>
            </article>
          </div>
        </section>
      )}

      {/* Advisory Brief / Generate */}
      {brief ? (
        <AdvisoryBriefView brief={brief} />
      ) : (
        <section className="advisory-section">
          <div className="section-heading">
            <div>
              <span className="portfolio-kicker">RM NEXT STEPS</span>
              <h2>Options going forward</h2>
            </div>
          </div>
          <p style={{ fontSize: 13, color: '#8a989e', margin: '0 0 4px' }}>
            Agent 3 will cross-reference LTV headroom, cash flow gaps, and mandate breaches to generate tailored advisory options.
          </p>
          <button className="generate-btn" onClick={generateBrief} disabled={loading}>
            {loading ? <><span className="loading-spinner" /> Synthesizing…</> : '⚡ Generate Advisory Brief'}
          </button>
        </section>
      )}
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

function Dashboard({ alerts, onSelect }) {
  const [search, setSearch] = useState('');
  const filtered = alerts.filter(a =>
    !search ||
    a.asset_name?.toLowerCase().includes(search.toLowerCase()) ||
    a.client_id?.toLowerCase().includes(search.toLowerCase()) ||
    a.alert_id?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="topbar">
        <div>
          <p className="eyebrow">{todayLabel()}</p>
          <h1>{getGreeting()}, Priscilla <span className="wave">✦</span></h1>
        </div>
      </div>

      <div className="summary-row">
        <div>
          <span className="summary-label">TOTAL ALERTS</span>
          <strong>{alerts.length}</strong>
        </div>
        <div>
          <span className="summary-label">HIGH PRIORITY</span>
          <strong>{alerts.filter(a => a.financial_significance === 'High' && a.client_impact === 'High').length}</strong>
        </div>
        <div>
          <span className="summary-label">UNREAD</span>
          <strong>{alerts.filter(a => a.status === 'unread').length}</strong>
        </div>
        <div className="status-note">
          <span className="pulse" />
          Agents active
        </div>
      </div>

      <div className="book-header">
        <div>
          <p className="eyebrow" style={{ margin: 0 }}>ALERT BOOK</p>
          <h2>Alerts <span className="count">{filtered.length}</span></h2>
        </div>
        <label className="search">
          <span>⌕</span>
          <input
            type="search"
            placeholder="Search clients or assets"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </label>
      </div>

      <div className="client-list">
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px', color: '#8a989e' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>⌕</div>
            <h3 style={{ fontFamily: 'Manrope', margin: '0 0 6px' }}>No alerts found</h3>
            <p style={{ fontSize: 13 }}>
              {alerts.length === 0
                ? 'No alerts have been generated yet. Trigger a market event to get started.'
                : 'Try a different search term.'}
            </p>
          </div>
        )}
        {filtered.map(alert => {
          const isUnread = alert.status === 'unread';
          const isUrgent = alert.financial_significance === 'High' && alert.client_impact === 'High';
          return (
            <div key={alert.alert_id} className="client-card" onClick={() => onSelect(alert)}>
              <div className="client-head">
                <div className="client-title">
                  <div className="avatar">{alert.client_id?.replace('CL-', '') || '?'}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <p className="client-name">{alert.asset_name}</p>
                      {isUnread && <span className="unread-dot" />}
                    </div>
                    <p className="client-meta">{alert.client_id} · {alert.portfolio_id} · {alert.asset_id}</p>
                    <div className="tags-row">
                      <span className="tag tag-red">−{alert.price_drop_pct}% drop</span>
                      <span className={`tag ${significanceColor(alert.financial_significance)}`}>
                        {alert.financial_significance} significance
                      </span>
                      <span className={`tag ${significanceColor(alert.client_impact)}`}>
                        {alert.client_impact} impact
                      </span>
                      {isUrgent && <span className="tag tag-orange">⚠ Action required</span>}
                      {alert.advisory_brief && <span className="tag tag-teal">Brief ready</span>}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: 12, color: '#91a0a5', marginBottom: 4 }}>Status</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: isUnread ? '#b91c1c' : '#068e91' }}>
                    {isUnread ? 'Unread' : 'Acknowledged'}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

// ─── App root ─────────────────────────────────────────────────────────────────

export default function App() {
  const [alerts, setAlerts] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchAlerts = useCallback(async () => {
    try {
      const res = await fetch('/api/v1/alerts');
      const data = await res.json();
      setAlerts(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error('Failed to fetch alerts', e);
    }
  }, []);

  useEffect(() => {
    fetchAlerts();
    const id = setInterval(fetchAlerts, 10000);
    return () => clearInterval(id);
  }, [fetchAlerts]);

  const handleBriefGenerated = (alertId, briefJson) => {
    setAlerts(prev => prev.map(a =>
      a.alert_id === alertId ? { ...a, advisory_brief: briefJson, status: 'acknowledged' } : a
    ));
    setSelected(prev => prev?.alert_id === alertId ? { ...prev, advisory_brief: briefJson, status: 'acknowledged' } : prev);
  };

  return (
    <div className="app-shell">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src="/photo_2026-09-05_16-00-17.jpg" alt="Juniper Private Wealth" className="sidebar-logo" />
        <nav className="main-nav">
          <a className={selected ? '' : 'active'} onClick={() => setSelected(null)}>
            <span>⌂</span> Alert book
          </a>
          <a><span>◷</span> Activity</a>
          <a><span>◒</span> Insights</a>
        </nav>
        <div className="sidebar-bottom">
          <button className="profile" style={{ cursor: 'default' }}>
            <span className="avatar">PO</span>
            <span>
              <b>Priscilla Ong</b>
              <small>Relationship Manager</small>
            </span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="content">
        {selected ? (
          <AlertDetail
            alert={selected}
            onBack={() => setSelected(null)}
            onBriefGenerated={handleBriefGenerated}
          />
        ) : (
          <Dashboard alerts={alerts} onSelect={setSelected} />
        )}
      </main>
    </div>
  );
}
