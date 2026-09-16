# Paddock Pass

An interactive motorsport calendar covering the remaining 2026 season across thirteen championships — Formula 1, Formula 2, F1 Academy, WEC, IMSA, MotoGP, NASCAR Cup, WRC, Super Formula, Formula E, IndyCar, Indy NXT, and Formula 3.

No build step, no dependencies — plain HTML, CSS, and JavaScript. Open `index.html` directly, or serve the folder with any static file server.

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## What's in it

- **Calendar** — a month grid that rolls forward on its own (always covers the current month plus roughly the next 18 months), with every remaining session for each series. Click any event chip for session times (auto-converted to your timezone) and where to stream it.
- **Standings** — current points across the majors and the full junior/regional ladder in the US and Europe.
- **Performance** — championship math: who's mathematically still in contention (checked against every other driver's own points ceiling/floor, not just the standings leader), the points-per-race margin a trailing driver needs to close the gap, and an interactive calculator to build your own per-race scenario for any two drivers.

## Files

| File | Contents |
|---|---|
| `index.html` | Page structure only |
| `styles.css` | All styling, light/dark theme tokens |
| `data.js` | Series metadata, event schedule, standings, and championship-math source data |
| `app.js` | Rendering and interaction logic |

## Data accuracy

Schedule and standings were compiled from official series and broadcaster sources as of September 2026. Standings move fast — treat the numbers as a snapshot, not a live feed. Where an exact session time wasn't published yet, it's marked "Time TBA"; where a time is inferred from a series' typical weekend pattern rather than confirmed, it's marked with a ⟡.
