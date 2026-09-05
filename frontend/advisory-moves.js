const renderPortfolioMovements = () => {
  const movementId = new URLSearchParams(location.search).get('id');
  const movementPortfolio = window.LOCAL_DATA?.portfolios?.find((p) => p.portfolio_id === movementId);
  const movementGrid = document.querySelector('.movement-grid');
  if (!movementGrid || !movementPortfolio) return false;
  const movementData = window.ADVISORY_MOVEMENT_DATA || { events: {}, lastMeetingByClient: {} };
  const lastMeeting = movementData.lastMeetingByClient?.[movementPortfolio.client_id];
  const rawEvents = movementData.events?.[movementPortfolio.portfolio_id] || [];
  const movementEvents = rawEvents
    .filter((event) => !lastMeeting || !event.event_date || new Date(event.event_date + 'T00:00:00') >= new Date(lastMeeting + 'T00:00:00'))
    .filter((event, index, events) => index === events.findIndex((candidate) => candidate.event_date === event.event_date && candidate.description === event.description));
  if (movementPortfolio.service_model === 'Advisory' || movementPortfolio.service_model === 'Discretionary') {
    movementGrid.innerHTML = movementEvents.length
      ? movementEvents.map((event) => `<article class="movement-card"><div class="movement-symbol">↕</div><div><span class="movement-event-label">EVENT · ${event.event_date}</span><p class="movement-summary">${event.summary}</p></div></article><article class="reason-card"><span>EVENT EXPLANATION · ${event.event_date}</span><h3>${event.description}</h3><p>${event.catalyst_summary}</p></article>`).join('')
      : '<div class="empty-moves">No sharp moves recorded since the last client meeting.</div>';
  }
  return true;
};
let movementAttempts = 0;
const movementTimer = setInterval(() => { if (renderPortfolioMovements() || ++movementAttempts > 20) clearInterval(movementTimer); }, 50);


