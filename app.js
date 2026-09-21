// ============ tabs ============
const tabCalendarBtn = document.getElementById('tabCalendarBtn');
const tabStandingsBtn = document.getElementById('tabStandingsBtn');
const tabPerfBtn = document.getElementById('tabPerfBtn');
const calendarPanel = document.getElementById('calendarPanel');
const standingsPanel = document.getElementById('standingsPanel');
const perfPanel = document.getElementById('perfPanel');
function setTab(tab){
  tabCalendarBtn.dataset.active = tab === 'calendar';
  tabStandingsBtn.dataset.active = tab === 'standings';
  tabPerfBtn.dataset.active = tab === 'perf';
  calendarPanel.hidden = tab !== 'calendar';
  standingsPanel.hidden = tab !== 'standings';
  perfPanel.hidden = tab !== 'perf';
  try{ localStorage.setItem('paddock-tab', tab); }catch(e){}
}
tabCalendarBtn.addEventListener('click', ()=>setTab('calendar'));
tabStandingsBtn.addEventListener('click', ()=>setTab('standings'));
tabPerfBtn.addEventListener('click', ()=>setTab('perf'));

// ============ timezone control ============
const TZ_OPTIONS = [
  {value:"auto", label:"My device"},
  {value:"America/New_York", label:"Eastern (ET)"},
  {value:"America/Chicago", label:"Central (CT)"},
  {value:"America/Denver", label:"Mountain (MT)"},
  {value:"America/Los_Angeles", label:"Pacific (PT)"},
  {value:"Europe/London", label:"UK (GMT/BST)"},
];
const tzSelect = document.getElementById('tz');
TZ_OPTIONS.forEach(o=>{
  const opt = document.createElement('option');
  opt.value = o.value; opt.textContent = o.label;
  tzSelect.appendChild(opt);
});
let savedTz = "auto";
try{ savedTz = localStorage.getItem('paddock-tz') || "auto"; }catch(e){}
tzSelect.value = savedTz;
tzSelect.addEventListener('change', ()=>{
  try{ localStorage.setItem('paddock-tz', tzSelect.value); }catch(e){}
  renderAll();
});
function activeTz(){
  const v = tzSelect.value;
  if(v === "auto"){
    try{ return Intl.DateTimeFormat().resolvedOptions().timeZone || "America/New_York"; }
    catch(e){ return "America/New_York"; }
  }
  return v;
}
function fmtTime(iso, tz){
  const d = new Date(iso);
  return d.toLocaleString('en-US', {timeZone:tz, weekday:'short', month:'short', day:'numeric', hour:'numeric', minute:'2-digit'});
}
function fmtTimeShort(iso, tz){
  const d = new Date(iso);
  return d.toLocaleString('en-US', {timeZone:tz, hour:'numeric', minute:'2-digit'});
}
function fmtDayShort(iso, tz){
  const d = new Date(iso);
  return d.toLocaleString('en-US', {timeZone:tz, weekday:'short', month:'short', day:'numeric'});
}
function localDateKey(iso, tz){
  const d = new Date(iso);
  return new Intl.DateTimeFormat('en-CA', {timeZone:tz, year:'numeric', month:'2-digit', day:'2-digit'}).format(d);
}

// ============ filters ============
// Persist which series are turned OFF, not which are on. If we stored the "on" set, every
// series added to FILTER_ORDER after a user's last save (like this one) would be missing from
// their saved list and default to hidden, even though they never chose to hide it. Storing the
// "off" set means anything new is visible by default and only explicit opt-outs stick.
let activeSeries = new Set(FILTER_ORDER);
try{
  const off = JSON.parse(localStorage.getItem('paddock-filters-off'));
  if(Array.isArray(off)) off.forEach(k=> activeSeries.delete(k));
}catch(e){}

const filtersEl = document.getElementById('filters');
function renderFilters(){
  filtersEl.innerHTML = '';
  FILTER_ORDER.forEach(key=>{
    const s = SERIES[key];
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.dataset.active = activeSeries.has(key);
    chip.innerHTML = `<span class="dot" style="background:${s.color}"></span>${s.name}`;
    chip.addEventListener('click', ()=>{
      if(activeSeries.has(key)) activeSeries.delete(key); else activeSeries.add(key);
      try{ localStorage.setItem('paddock-filters-off', JSON.stringify(FILTER_ORDER.filter(k=>!activeSeries.has(k)))); }catch(e){}
      renderAll();
    });
    filtersEl.appendChild(chip);
  });
}

// ============ hero ============
function allSessionsFlat(){
  const out = [];
  EVENTS.forEach(ev=>{
    if(!activeSeries.has(ev.series)) return;
    ev.sessions.forEach(se=>{ out.push({...se, event:ev}); });
  });
  return out.sort((a,b)=> new Date(a.start) - new Date(b.start));
}

let countdownTimer = null;
function renderHero(){
  const hero = document.getElementById('hero');
  const tz = activeTz();
  const now = new Date();
  const flat = allSessionsFlat();

  const live = flat.find(s=>{
    const st = new Date(s.start), en = new Date(st.getTime() + (s.dur||60)*60000);
    return now >= st && now < en;
  });
  const next = flat.find(s=> new Date(s.start) > now);
  const target = live || next;

  if(countdownTimer) clearInterval(countdownTimer);

  if(!target){
    hero.innerHTML = `<div class="hero-left"><h2 class="hero-session">No sessions match your filters</h2><p class="hero-meta">Turn a series back on above to see what's next.</p></div>`;
    return;
  }

  const s = SERIES[target.event.series];
  hero.style.setProperty('--hero-color', s.color);

  hero.innerHTML = `
    <div class="hero-left">
      <div class="hero-tag">
        <span class="dot" style="background:${s.color}"></span>
        <span class="hero-series">${s.name}</span>
        ${live ? '<span class="hero-badge">● Live now</span>' : ''}
      </div>
      <div class="hero-session">${target.type} — ${target.event.name}</div>
      <div class="hero-meta">${target.event.location}</div>
    </div>
    <div class="hero-right">
      <div class="countdown" id="countdown"></div>
      <div class="hero-time">${live ? 'Started ' + fmtTime(target.start, tz) : fmtTime(target.start, tz)}</div>
      <div class="hero-watch">
        ${target.event.watch.map(w=>`<a class="watch-btn" href="${w.url}" target="_blank" rel="noopener">${w.name} <span class="arrow">↗</span></a>`).join('')}
      </div>
    </div>
  `;

  function tick(){
    const diff = new Date(target.start) - new Date();
    const cd = document.getElementById('countdown');
    if(!cd) return;
    if(diff <= 0 && !live){ renderAll(); return; }
    const abs = Math.max(diff,0);
    const d = Math.floor(abs/86400000);
    const h = Math.floor(abs%86400000/3600000);
    const m = Math.floor(abs%3600000/60000);
    const sec = Math.floor(abs%60000/1000);
    cd.innerHTML = live ? '' : [[d,'days'],[h,'hrs'],[m,'min'],[sec,'sec']]
      .map(([v,u])=>`<div class="seg"><div class="num">${String(v).padStart(2,'0')}</div><div class="unit">${u}</div></div>`).join('');
  }
  tick();
  countdownTimer = setInterval(tick, 1000);
}

// ============ calendar grid ============
const SHORT_LABELS = {
  "Practice 1":"FP1", "Practice 2":"FP2", "Practice 3":"FP3", "Practice":"FP",
  "Free Practice 1":"FP1", "Free Practice 2":"FP2",
  "Qualifying":"QUALI", "Sprint Qualifying":"SQ", "Sprint":"SPR", "Sprint Race":"SPR",
  "Feature Race":"FEAT", "Race":"RACE", "Race (6h)":"RACE", "Race (10h)":"RACE",
  "Hyperpole":"HYP", "Practice & Qualifying":"P&Q", "Race 1":"RACE 1", "Race 2":"RACE 2",
  "Shakedown":"SHAKE", "Leg 1 (Stages)":"LEG 1", "Leg 2 (Stages)":"LEG 2", "Leg 3 + Power Stage":"LEG 3",
};
function shortLabel(type){ return SHORT_LABELS[type] || type.slice(0,6).toUpperCase(); }

// The month grid is never a fixed year — it's computed fresh from the device clock every time
// the page loads, so the calendar keeps rolling forward on its own: open this in Dec 2026 and
// you can already browse into 2027; open it next September and it's centered on 2027 automatically.
// It always covers at least 18 months from "today" plus whatever EVENTS data actually exists
// (so nothing already scheduled ever falls outside the navigable range). Months past the known
// schedule just render empty — see the "nothing on the books yet" note in renderCalendar.
function computeMonths(){
  const now = new Date();
  let minY = now.getFullYear(), minM = now.getMonth();
  let maxY = minY + Math.floor((minM + 17) / 12), maxM = (minM + 17) % 12; // always at least ~18 months of runway from today
  EVENTS.forEach(ev=> ev.sessions.forEach(se=>{
    const d = new Date(se.start);
    const y = d.getUTCFullYear(), m = d.getUTCMonth();
    if(y < minY || (y === minY && m < minM)){ minY = y; minM = m; }
    if(y > maxY || (y === maxY && m > maxM)){ maxY = y; maxM = m; }
  }));
  const months = [];
  let y = minY, m = minM;
  while(y < maxY || (y === maxY && m <= maxM)){
    months.push({y, m});
    m++; if(m > 11){ m = 0; y++; }
  }
  return months;
}
const MONTHS = computeMonths();
let monthIdx = 0;
(function initMonthIdx(){
  const now = new Date();
  const idx = MONTHS.findIndex(mo=> mo.y===now.getFullYear() && mo.m===now.getMonth());
  monthIdx = idx >= 0 ? idx : 0;
})();

const calPrev = document.getElementById('calPrev');
const calNext = document.getElementById('calNext');
calPrev.addEventListener('click', ()=>{ if(monthIdx>0){ monthIdx--; renderCalendar(); }});
calNext.addEventListener('click', ()=>{ if(monthIdx<MONTHS.length-1){ monthIdx++; renderCalendar(); }});

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function renderCalendar(){
  const tz = activeTz();
  const {y, m} = MONTHS[monthIdx];
  document.getElementById('calMonthLabel').textContent = `${MONTH_NAMES[m]} ${y}`;
  calPrev.disabled = monthIdx === 0;
  calNext.disabled = monthIdx === MONTHS.length - 1;

  const firstWeekday = new Date(Date.UTC(y,m,1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(y,m+1,0)).getUTCDate();
  const now = new Date();
  const todayKey = new Intl.DateTimeFormat('en-CA', {timeZone:tz}).format(now);

  const byDay = {};
  EVENTS.forEach(ev=>{
    if(!activeSeries.has(ev.series)) return;
    const byDayThisEvent = {};
    ev.sessions.forEach(se=>{
      const key = localDateKey(se.start, tz);
      if(!byDayThisEvent[key]) byDayThisEvent[key] = [];
      byDayThisEvent[key].push(se);
    });
    Object.entries(byDayThisEvent).forEach(([key, sessions])=>{
      if(!byDay[key]) byDay[key] = [];
      byDay[key].push({event:ev, sessions});
    });
  });

  const cells = [];
  for(let i=0;i<firstWeekday;i++) cells.push(null);
  for(let d=1; d<=daysInMonth; d++) cells.push(d);
  while(cells.length % 7 !== 0) cells.push(null);

  const grid = document.getElementById('calGrid');
  grid.innerHTML = '';
  cells.forEach(dayNum=>{
    const cell = document.createElement('div');
    if(dayNum === null){
      cell.className = 'cal-cell blank';
      grid.appendChild(cell);
      return;
    }
    const key = `${y}-${String(m+1).padStart(2,'0')}-${String(dayNum).padStart(2,'0')}`;
    cell.className = 'cal-cell' + (key === todayKey ? ' today' : '');
    const num = document.createElement('div');
    num.className = 'cal-daynum';
    num.textContent = dayNum;
    cell.appendChild(num);

    (byDay[key] || []).sort((a,b)=> new Date(a.sessions[0].start) - new Date(b.sessions[0].start))
      .forEach(({event, sessions})=>{
        const s = SERIES[event.series];
        const chip = document.createElement('button');
        chip.className = 'cal-chip';
        chip.style.setProperty('--chip-color', s.color);
        const labels = sessions.map(se=>shortLabel(se.type)).join(' + ');
        chip.innerHTML = `<span class="chip-series">${s.short}</span>${labels}`;
        chip.addEventListener('click', ()=> openModal(event));
        cell.appendChild(chip);
      });

    grid.appendChild(cell);
  });

  const monthPrefix = `${y}-${String(m+1).padStart(2,'0')}-`;
  const hasEventsThisMonth = Object.keys(byDay).some(k=> k.startsWith(monthPrefix));
  const emptyNote = document.getElementById('calEmptyNote');
  if(hasEventsThisMonth){
    emptyNote.hidden = true;
  } else {
    emptyNote.hidden = false;
    emptyNote.textContent = activeSeries.size === 0
      ? "No series selected — turn one back on above to see events."
      : `Nothing on the books yet for ${MONTH_NAMES[m]} ${y}. This far out, most series haven't announced next year's calendar — check back as they do, or browse a nearer month.`;
  }
}

// ============ modal ============
const modal = document.getElementById('eventModal');
const modalBody = document.getElementById('modalBody');
document.getElementById('modalClose').addEventListener('click', ()=> modal.close());
modal.addEventListener('click', (e)=>{ if(e.target === modal) modal.close(); });

function openModal(ev){
  const tz = activeTz();
  const s = SERIES[ev.series];
  modal.style.setProperty('--modal-color', s.color);
  modalBody.innerHTML = `
    <div class="modal-series"><span class="dot" style="background:${s.color}"></span>${s.name}</div>
    <div class="modal-title">${ev.name}</div>
    <div class="modal-loc">${ev.location}</div>
    <div class="modal-daterange">${ev.dateRange}</div>
    <div class="sessions">
      ${ev.sessions.map(se=>`
        <div class="session-row">
          <div class="session-day">${fmtDayShort(se.start, tz)}</div>
          <div class="session-name">${se.type}</div>
          <div class="session-time">${se.tba ? '<span class="tba">Time TBA</span>' : fmtTimeShort(se.start, tz) + (se.approx ? ' <span class="approx-mark" title="Estimated — confirm on the official series site">⟡</span>' : '')}</div>
        </div>
      `).join('')}
    </div>
    <div class="watch">
      <span class="watch-label">Stream it</span>
      ${ev.watch.map(w=>`<a class="watch-btn" href="${w.url}" target="_blank" rel="noopener">${w.name} <span class="arrow">↗</span></a>`).join('')}
      ${ev.watch.some(w=>w.note) ? `<div class="watch-note">${ev.watch.filter(w=>w.note).map(w=>`<b>${w.name}:</b> ${w.note}`).join(' &nbsp;·&nbsp; ')}</div>` : ''}
    </div>
  `;
  modal.showModal();
}

// ============ standings ============
function renderStandings(){
  standingsPanel.innerHTML = STANDINGS.map(group=>`
    <div class="standings-group">
      <h2>${group.group}</h2>
      <div class="standings-grid">
        ${group.items.map(item=>{
          const meta = STANDINGS_META[item.key];
          const live = LIVE[item.key];
          const liveBadge = live ? `<span class="live-badge live-badge-${live.status}">${live.status==='live' ? '● Live' : live.status==='pending' ? 'Checking…' : 'Snapshot'}</span>` : '';
          return `
          <div class="standings-card" style="--card-color:${meta.color}">
            <h3>${meta.name}</h3>
            <div class="standings-status">${item.status}${liveBadge}</div>
            <ul class="standings-list">
              ${item.entries.length ? item.entries.map(e=>`
                <li>
                  <span class="standings-pos">${e.pos}</span>
                  <span class="standings-who">
                    <span class="standings-name">${e.name}</span>
                    ${e.team && e.team !== '—' ? `<span class="standings-team">${e.team}</span>` : ''}
                  </span>
                  ${e.pts ? `<span class="standings-pts">${e.pts}</span>` : ''}
                </li>
              `).join('') : ''}
            </ul>
            ${item.note ? `<div class="standings-note">${item.note}</div>` : ''}
            <a class="standings-link" href="${item.link}" target="_blank" rel="noopener">Official standings ↗</a>
          </div>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

// ============ championship math ============
function tablePoints(table, pos){
  if(pos === 'dnf') return 0;
  const idx = parseInt(pos,10) - 1;
  return table[idx] ?? 0;
}
// Minimum-effort scenario: rather than assuming a driver wins every remaining race (the
// extreme, obvious case), find the FEWEST wins they need if every other remaining race is
// a P2 finish (the best non-win outcome) — i.e. the actual minimum required, not the ceiling.
// Returns null if even winning everything still isn't enough.
function minWinsNeeded(table, remaining, currentPts, targetPts){
  const p2 = table[1] ?? 0;
  for(let wins=0; wins<=remaining; wins++){
    const total = currentPts + wins*table[0] + (remaining-wins)*p2;
    if(total > targetPts) return wins;
  }
  return null;
}

function renderMathSeries(cfg){
  const meta = STANDINGS_META[cfg.key];
  const table = POINTS_TABLES[cfg.key];
  const maxRemaining = table[0] * cfg.remaining;

  // Pass 1: work out leader / alive / eliminated status for every driver up front, so the
  // per-row detail can reference every OTHER driver's status too (for the field comparison),
  // not just the row being rendered. "Ahead" is read from raw points directly (with position
  // only as a tiebreak, e.g. a countback-decided tie) — every driver vs. every driver, not a
  // shortcut through the pre-sorted standings order.
  const statusByPos = new Map();
  cfg.entries.forEach(e=>{
    const maxPossible = e.raw + maxRemaining;
    const rivals = cfg.entries.filter(r => r !== e && (r.raw > e.raw || (r.raw === e.raw && r.pos < e.pos)));
    if(rivals.length === 0){
      statusByPos.set(e.pos, {kind:'leader', e, maxPossible});
    } else {
      const toughest = rivals.reduce((mx,r)=> r.raw > mx.raw ? r : mx, rivals[0]);
      const eliminated = maxPossible < toughest.raw;
      statusByPos.set(e.pos, {kind: eliminated ? 'eliminated' : 'alive', e, maxPossible, rivals, toughest});
    }
  });
  const leaderStatus = [...statusByPos.values()].find(s => s.kind === 'leader');
  const leaderPts = leaderStatus.e.raw;

  const rows = cfg.entries.map(e=>{
    const st = statusByPos.get(e.pos);
    const gap = leaderPts - e.raw;
    const maxPossible = st.maxPossible;

    let statusHtml, detailHtml = '';
    if(st.kind === 'leader'){
      statusHtml = `<span class="status-pill status-leader">Leader</span>`;
    } else if(st.kind === 'eliminated'){
      const { toughest, rivals } = st;
      const short = toughest.raw - maxPossible;
      const rivalList = rivals.slice().sort((a,b)=> b.raw - a.raw)
        .map(r => `${r.name} (${r.raw.toLocaleString()}${maxPossible >= r.raw ? ', clears by ' + (maxPossible-r.raw).toLocaleString() : ', short by ' + (r.raw-maxPossible).toLocaleString()})`)
        .join(' · ');
      statusHtml = `<button class="status-pill status-out" aria-expanded="false"><span class="caret">▾</span>Eliminated</button>`;
      detailHtml = `Even a win in every remaining race (+${maxRemaining.toLocaleString()}) only gets ${e.name} to <b>${maxPossible.toLocaleString()}</b> — ${short.toLocaleString()} short of ${toughest.name}'s current <b>${toughest.raw.toLocaleString()}</b>, the closest of the ${rivals.length} driver${rivals.length>1?'s':''} still ahead. That gap can no longer be closed.<br><br>Against everyone currently ahead: ${rivalList}.`;
    } else {
      const { toughest, rivals } = st;
      // The only number that matters: since both sides just add points per remaining race,
      // the gap between them only depends on the DIFFERENCE in pace, not either one's absolute
      // total. No assumption about what the rival actually scores — true whether they go cold
      // or keep winning, because it's the gap that has to close.
      const marginPerRace = (toughest.raw - e.raw) / cfg.remaining;
      const rivalList = rivals.slice().sort((a,b)=> b.raw - a.raw)
        .map(r => `${r.name} (${r.raw.toLocaleString()} pts, needs +${((r.raw - e.raw)/cfg.remaining).toFixed(1)}/race to clear)`)
        .join(' · ');

      // Compare this driver's own required margin against everyone ELSE still mathematically
      // alive (or leading), measured against the same target (the series leader) so the numbers
      // are directly comparable — this is what actually answers "what would other drivers need
      // to do too," not a claim about who will or won't do it.
      const field = [...statusByPos.values()]
        .filter(s => s.kind !== 'eliminated')
        .map(s => ({
          name: s.e.name, pts: s.e.raw, isSelf: s.e.pos === e.pos, isLeader: s.kind === 'leader',
          margin: (leaderPts - s.e.raw) / cfg.remaining,
        }))
        .sort((a,b)=> a.margin - b.margin);

      const fieldRowsHtml = field.map(f => `
        <tr class="${f.isSelf ? 'field-self' : ''}">
          <td>${f.name}${f.isLeader ? ' <span class="field-tag">Leader</span>' : ''}</td>
          <td class="field-pts">${f.pts.toLocaleString()}</td>
          <td class="field-margin">${f.isLeader ? '—' : '+' + f.margin.toFixed(1) + '/race'}</td>
        </tr>`).join('');

      // A concrete, non-extreme point of comparison: the closest other still-alive driver
      // currently behind e — what it'd take for THEM to catch e directly, a smaller ask than
      // catching the leader outright, since it's measured driver-to-driver instead of routing
      // through the leader.
      const behind = field.filter(f => !f.isSelf && !f.isLeader && f.pts < e.raw).sort((a,b)=> b.pts - a.pts)[0];
      let behindLine = '';
      if(behind){
        const directMargin = (e.raw - behind.pts) / cfg.remaining;
        behindLine = ` For reference, the closest driver still alive behind ${e.name} is ${behind.name} — they'd need to average ${directMargin.toFixed(1)} more points per race than ${e.name}, specifically, to catch ${e.name} (not ${toughest.name}) directly.`;
      }

      statusHtml = `<button class="status-pill status-alive" aria-expanded="false"><span class="caret">▾</span>Mathematically alive</button>`;
      detailHtml = `To win it, ${e.name} has to end up ahead of all ${rivals.length} driver${rivals.length>1?'s':''} currently in front of them: ${rivalList}.<br><br>${e.name} needs to out-score ${toughest.name} by an average of at least <b>${marginPerRace.toFixed(1)} point${marginPerRace!==1?'s':''} per race</b> across the remaining ${cfg.remaining} races to take the lead — clearing ${toughest.name} clears the rest of the field too, since everyone else on the list already trails them.${behindLine}<br><br><div class="field-compare-label">How that compares to everyone else still mathematically in it (same target: ${leaderStatus.e.name})</div><table class="field-compare"><thead><tr><th>Driver</th><th>Pts</th><th>Needs</th></tr></thead><tbody>${fieldRowsHtml}</tbody></table>`;
    }

    return `<tr>
      <td class="perf-pos">${e.pos}</td>
      <td><span class="perf-name">${e.name}</span>${e.team && e.team!=='—' ? `<span class="perf-team">${e.team}</span>` : ''}</td>
      <td class="perf-pts">${e.raw.toLocaleString()}</td>
      <td class="perf-gap">${e.pos===1 ? '—' : '-'+gap.toLocaleString()}</td>
      <td class="perf-max">${maxPossible.toLocaleString()}</td>
      <td>${statusHtml}</td>
    </tr>${detailHtml ? `<tr class="perf-detail-row" hidden><td colspan="6"><div class="perf-detail">${detailHtml}</div></td></tr>` : ''}`;
  }).join('');

  const options = cfg.entries.map(e=>`<option value="${e.pos}">${e.pos}. ${e.name}</option>`).join('');
  const finishOptions = ['1','2','3','4','5','6','7','8','9','10','dnf']
    .map(p=>`<option value="${p}">${p==='dnf' ? 'DNF' : `P${p}`} (${p==='dnf' ? 0 : table[parseInt(p,10)-1] ?? 0}pt)</option>`).join('');
  const raceCells = (slot)=> cfg.raceLabels.map((lbl,i)=>`
    <div class="calc-race-cell">
      <span>${lbl}</span>
      <select class="math-race" data-slot="${slot}" data-race="${i}">${finishOptions}</select>
    </div>`).join('');

  return `
  <div class="perf-series">
    <div class="perf-head"><span class="dot" style="background:${meta.color}"></span><h2>${meta.name}</h2>${LIVE[cfg.key] ? `<span class="live-badge live-badge-${LIVE[cfg.key].status}">${LIVE[cfg.key].status==='live' ? '● Live' : LIVE[cfg.key].status==='pending' ? 'Checking…' : 'Snapshot'}</span>` : ''}</div>
    <div class="perf-sub">${cfg.remaining} races remaining this season · max ${maxRemaining} pts still available</div>
    <table class="perf-table">
      <thead><tr><th>Pos</th><th>Driver</th><th style="text-align:right">Points</th><th style="text-align:right">Gap</th><th style="text-align:right">Max poss.</th><th>Status</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="calc-box" data-math="${cfg.key}">
      <div class="calc-title">Run a scenario — set a finish for each remaining race, per driver</div>
      <div class="calc-row">
        <div class="calc-driver">
          <label>Driver A</label>
          <select class="math-driver driver-select" data-slot="a">${options}</select>
          <div class="calc-fill-row">
            <label>Fill all with</label>
            <select class="math-fill" data-slot="a">${finishOptions}</select>
          </div>
          <div class="calc-race-grid" data-race-grid="a">${raceCells('a')}</div>
        </div>
        <div class="calc-driver">
          <label>Driver B</label>
          <select class="math-driver driver-select" data-slot="b">${options}</select>
          <div class="calc-fill-row">
            <label>Fill all with</label>
            <select class="math-fill" data-slot="b">${finishOptions}</select>
          </div>
          <div class="calc-race-grid" data-race-grid="b">${raceCells('b')}</div>
        </div>
      </div>
      <div class="calc-result" data-result="${cfg.key}"></div>
    </div>
  </div>`;
}

function wireEliminationToggles(container){
  container.querySelectorAll('.status-pill.status-alive, .status-pill.status-out').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const row = btn.closest('tr').nextElementSibling;
      if(!row || !row.classList.contains('perf-detail-row')) return;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      row.hidden = expanded;
    });
  });
}

function wireMathCalculators(){
  MATH_SERIES.forEach(cfg=>{
    const box = document.querySelector(`.calc-box[data-math="${cfg.key}"]`);
    if(!box) return;
    const table = POINTS_TABLES[cfg.key];
    const driverA = box.querySelector('select.math-driver[data-slot="a"]');
    const driverB = box.querySelector('select.math-driver[data-slot="b"]');
    const fillA = box.querySelector('select.math-fill[data-slot="a"]');
    const fillB = box.querySelector('select.math-fill[data-slot="b"]');
    const racesA = [...box.querySelectorAll('select.math-race[data-slot="a"]')];
    const racesB = [...box.querySelectorAll('select.math-race[data-slot="b"]')];
    driverA.value = cfg.entries[0].pos;
    driverB.value = cfg.entries[1].pos;
    fillA.value = '1'; fillB.value = '3';
    racesA.forEach(sel=> sel.value = '1');
    racesB.forEach(sel=> sel.value = '3');

    fillA.addEventListener('change', ()=>{ racesA.forEach(sel=> sel.value = fillA.value); update(); });
    fillB.addEventListener('change', ()=>{ racesB.forEach(sel=> sel.value = fillB.value); update(); });

    function sumRaces(selects){
      return selects.reduce((sum, sel)=> sum + tablePoints(table, sel.value), 0);
    }

    function update(){
      const a = cfg.entries.find(e=>String(e.pos)===driverA.value);
      const b = cfg.entries.find(e=>String(e.pos)===driverB.value);
      const addedA = sumRaces(racesA);
      const addedB = sumRaces(racesB);
      const totalA = a.raw + addedA;
      const totalB = b.raw + addedB;
      const result = document.querySelector(`[data-result="${cfg.key}"]`);
      const diff = totalA - totalB;
      let verdict;
      if(diff > 0) verdict = `${a.name} would be champion over ${b.name} by <b>${diff}</b> pts.`;
      else if(diff < 0) verdict = `${b.name} would be champion over ${a.name} by <b>${-diff}</b> pts.`;
      else verdict = `${a.name} and ${b.name} would be tied on points.`;

      const minWins = minWinsNeeded(table, cfg.remaining, b.raw, totalA);
      let needLine;
      if(minWins === null){
        needLine = `Even winning every remaining race, ${b.name} can't reach ${totalA.toLocaleString()} pts under this Driver A scenario — mathematically out of it.`;
      } else if(minWins === 0){
        needLine = `As a reference, ${b.name} doesn't even need a win to beat that total — finishing P2 in every remaining race would already be enough.`;
      } else if(minWins === cfg.remaining){
        needLine = `As a reference, ${b.name} would need to win every remaining race to beat that total — there's no lighter path.`;
      } else {
        needLine = `As a reference, the minimum for ${b.name}: win just <b>${minWins}</b> of the remaining ${cfg.remaining} races and finish P2 in the rest — that alone would beat this Driver A scenario.`;
      }

      result.innerHTML = `
        ${a.name}: <b>${totalA.toLocaleString()}</b> pts projected (${a.raw.toLocaleString()} + ${addedA.toLocaleString()} from the races above)<br>
        ${b.name}: <b>${totalB.toLocaleString()}</b> pts projected (${b.raw.toLocaleString()} + ${addedB.toLocaleString()} from the races above)
        <div class="calc-verdict">${verdict}</div>
        <div>${needLine}</div>
      `;
    }
    [driverA,driverB,...racesA,...racesB].forEach(el=> el.addEventListener('change', update));
    update();
  });
}

function renderRisingStars(){
  const ranked = PROSPECTS.map(p=>({
    ...p,
    score: (TIER_WEIGHT[p.cat]||1) * (POS_MULT[p.pos] || 0.4)
  })).sort((a,b)=> b.score - a.score);

  return `
  <div class="perf-series">
    <div class="perf-head"><h2>Rising Stars</h2></div>
    <div class="perf-sub" style="font-family:'Inter'; font-style:italic;">A simplified composite of category level × championship standing — not a scouting report, just a quick read on who's doing well at the highest level right now.</div>
    <div class="stars-grid">
      ${ranked.map((p,i)=>{
        const meta = STANDINGS_META[p.cat];
        return `<div class="star-row">
          <span class="star-rank">${i+1}</span>
          <span class="star-name">${p.name}</span>
          <span class="star-cat" style="background:${meta.color}">${meta.name}</span>
          <span class="star-note">${p.note}</span>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function renderPerf(){
  perfPanel.innerHTML = `
    ${MATH_SERIES.map(renderMathSeries).join('')}
    ${renderRisingStars()}
  `;
  wireEliminationToggles(perfPanel);
  wireMathCalculators();
}

// ============ live F1 data ============
// F1 is the one series here with a solid free public API (Jolpica, the open-source successor to
// Ergast) — every other series in this app has no equivalent structured feed, so it stays a
// hand-maintained snapshot updated by hand from research. This fetch is deliberately best-effort:
// some hosting contexts (e.g. the Claude Artifact platform's CSP) block outbound fetches entirely,
// so on any failure this just leaves the snapshot baked into data.js in place — the page never
// ends up worse off than before this existed, and it "just works" live wherever fetch isn't blocked.
const LIVE = { f1: { status: 'pending', asOf: null } }; // 'pending' | 'live' | 'fallback'

async function refreshLiveF1(){
  try{
    const [standingsRes, scheduleRes] = await Promise.all([
      fetch('https://api.jolpi.ca/ergast/f1/current/driverStandings.json'),
      fetch('https://api.jolpi.ca/ergast/f1/current.json'),
    ]);
    if(!standingsRes.ok || !scheduleRes.ok) throw new Error('bad response');
    const standingsJson = await standingsRes.json();
    const scheduleJson = await scheduleRes.json();

    const list = standingsJson.MRData.StandingsTable.StandingsLists[0];
    const completedRounds = parseInt(list.round, 10);
    const races = scheduleJson.MRData.RaceTable.Races;
    const remaining = Math.max(races.length - completedRounds, 0);
    const upcoming = races.slice(completedRounds, completedRounds + remaining);
    const raceLabels = upcoming.map(r => (r.raceName.replace(/ Grand Prix.*/i, '').trim().slice(0, 3) || 'TBD').toUpperCase());

    const entries = list.DriverStandings.map(d => ({
      pos: parseInt(d.position, 10),
      name: `${d.Driver.givenName} ${d.Driver.familyName}`,
      team: d.Constructors[0]?.name || '—',
      raw: parseInt(d.points, 10),
    })).sort((a, b) => a.pos - b.pos);

    const top10 = entries.slice(0, 10);
    const top5 = entries.slice(0, 5).map(e => ({ ...e, pts: `${e.raw.toLocaleString()} pts` }));
    const restNote = entries.slice(5, 10).map(e => `${e.name.split(' ').slice(-1)[0]} (${e.raw})`).join(', ');

    if(!remaining){
      throw new Error('season complete or schedule unavailable — keep the hand-maintained snapshot');
    }

    const mathEntry = MATH_SERIES.find(m => m.key === 'f1');
    mathEntry.entries = top10;
    mathEntry.remaining = remaining;
    mathEntry.raceLabels = raceLabels.length === remaining ? raceLabels : Array.from({ length: remaining }, (_, i) => `R${i + 1}`);

    const standingsItem = STANDINGS.flatMap(g => g.items).find(i => i.key === 'f1');
    standingsItem.entries = top5;
    standingsItem.status = `In progress · ${remaining} round${remaining === 1 ? '' : 's'} left`;
    if(restNote) standingsItem.note = `${restNote} round out the top 10.`;

    LIVE.f1 = { status: 'live', asOf: new Date() };
  }catch(e){
    LIVE.f1 = { status: 'fallback', asOf: null };
  }
  renderStandings();
  renderPerf();
}

function renderAll(){
  renderFilters();
  renderHero();
  renderCalendar();
}
renderAll();
renderStandings();
renderPerf();
refreshLiveF1();

let savedTab = 'calendar';
try{ savedTab = localStorage.getItem('paddock-tab') || 'calendar'; }catch(e){}
setTab(savedTab);
