const movementId = new URLSearchParams(location.search).get('id');
const movementPortfolio = window.LOCAL_DATA.portfolios.find((p) => p.portfolio_id === movementId);
const movementGrid = document.querySelector('.movement-grid');
const movementData = window.ADVISORY_MOVEMENT_DATA || window.ADVISORY_MOVEMENT_EVENTS || { events: {}, lastMeetingByClient: {} };
const lastMeeting = movementPortfolio && movementData.lastMeetingByClient[movementPortfolio.client_id];
const movementEvents = movementPortfolio
  ? (movementData.events?.[movementPortfolio.portfolio_id] || []).filter((event) => !lastMeeting || !event.event_date || event.event_date >= lastMeeting)
  : [];
if (movementGrid && (movementPortfolio?.service_model === 'Advisory' || movementPortfolio?.service_model === 'Discretionary')) {
  movementGrid.innerHTML = movementEvents.length
    ? movementEvents.map((event) => `<article class="movement-card"><div class="movement-symbol">↕</div><div><p class="movement-summary">${event.summary}</p></div></article><article class="reason-card"><span>EVENT EXPLANATION</span><h3>${event.description}</h3><p>${event.catalyst_summary}</p></article>`).join('')
    : '<div class="empty-moves">No sharp moves recorded since the last client meeting.</div>';
}


