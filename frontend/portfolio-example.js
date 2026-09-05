const exampleId=new URLSearchParams(location.search).get('id');const currentPortfolio=window.LOCAL_DATA.portfolios.find(p=>p.portfolio_id===exampleId);const portfolioClient=window.LOCAL_DATA.clients.find(c=>c.client_id===currentPortfolio?.client_id);const clientNotes=window.LOCAL_DATA.notes?.filter(n=>n.client_id===portfolioClient?.client_id).sort((a,b)=>new Date(b.note_date)-new Date(a.note_date));const lastMeeting=clientNotes?.find(n=>n.channel==='Meeting');
if(exampleId==='PF-0016'){
document.querySelector('.movement-grid').innerHTML='<article class="movement-card"><div class="movement-symbol">A</div><div><h3>Asia High Yield Bond Fund</h3><p>Fixed income · illustrative movement</p></div><strong class="down">−8.6%</strong></article><article class="reason-card"><span>EVENT LOG · 30 APR 2026</span><h3>Central banks raised policy rates</h3><p>Rates were raised in response to an energy-driven inflation impulse, putting pressure on longer-duration and higher-yield credit.</p></article><article class="movement-card"><div class="movement-symbol">B</div><div><h3>Pacific Rim Bank Perpetual</h3><p>Fixed income · illustrative movement</p></div><strong class="down">−5.2%</strong></article><article class="reason-card"><span>EVENT LOG · 30 JUN 2026</span><h3>Redemption stress in private credit</h3><p>Continued redemption stress across non-traded private-credit vehicles weakened sentiment across parts of the credit market.</p></article>';
document.querySelector('.options-grid').innerHTML='<article class="option-card urgent-option"><span class="option-number">01 · URGENT</span><h3>Pay down existing credit facility</h3><p>Ask whether outside cash is available to reduce the $58M drawn on CF-0002.</p><div class="action"><b>RM · 02 Sep 2026</b><span>Ask client about available cash.</span></div><div class="action"><b>RM · 05 Sep 2026</b><span>Calculate paydown needed to bring LTV below 60%.</span></div></article><article class="option-card"><span class="option-number">02</span><h3>Sell a small slice of bonds</h3><p>Fund near-term withdrawals while addressing the duration breach.</p><div class="action"><b>RM · 10 Sep 2026</b><span>Identify shortest-duration bonds and calculate the loss.</span></div><div class="action"><b>IC/Risk · 15 Sep 2026</b><span>Log the trade for mandate-breach review.</span></div></article>';
}
if(document.querySelector('#movementPeriod'))document.querySelector('#movementPeriod').textContent=lastMeeting?'Since last meeting · '+new Date(lastMeeting.note_date+'T00:00:00').toLocaleDateString('en-SG',{day:'numeric',month:'short',year:'numeric'}):'Last 30 days';
document.querySelectorAll('.option-card').forEach(card=>{const steps=card.querySelectorAll('.action');if(!steps.length)return;const toggle=document.createElement('button');toggle.className='action-toggle';toggle.textContent='View action steps ⌄';card.insertBefore(toggle,steps[0]);toggle.addEventListener('click',e=>{e.stopPropagation();const open=card.classList.toggle('open');toggle.textContent=open?'Hide action steps ⌃':'View action steps ⌄';});});

if(document.querySelector('.movement-grid')){}
if(exampleId==='PF-0016'){}
if(exampleId==='PF-0016'){}
if(currentPortfolio?.service_model==='Advisory'||currentPortfolio?.service_model==='Discretionary'){const loading=document.querySelectorAll('.movement-grid,.options-grid');loading.forEach(item=>item.classList.add('data-loading'));setTimeout(()=>loading.forEach(item=>{item.classList.remove('data-loading');item.classList.add('data-ready')}),2000);}








