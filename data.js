// ============ CALENDAR SERIES ============
const SERIES = {
  f1:         { name:"Formula 1",                     short:"F1",        color:"var(--f1)" },
  f2:         { name:"Formula 2",                     short:"F2",        color:"var(--f2)" },
  f1academy:  { name:"F1 Academy",                    short:"F1 Acad.",  color:"var(--f1academy)" },
  wec:        { name:"World Endurance Championship",  short:"WEC",       color:"var(--wec)" },
  imsa:       { name:"IMSA WeatherTech Championship",  short:"IMSA",      color:"var(--imsa)" },
  motogp:     { name:"MotoGP",                        short:"MotoGP",    color:"var(--motogp)" },
  nascar:     { name:"NASCAR Cup Series",              short:"NASCAR",    color:"var(--nascar)" },
  wrc:        { name:"World Rally Championship",       short:"WRC",       color:"var(--wrc)" },
  indycar:    { name:"IndyCar",                        short:"IndyCar",   color:"var(--indycar)" },
  indynxt:    { name:"Indy NXT",                       short:"IndyNXT",   color:"var(--indynxt)" },
  f3:         { name:"Formula 3",                      short:"F3",        color:"var(--f3)" },
  superformula: { name:"Super Formula",                short:"S.Formula", color:"var(--superformula)" },
  fe:         { name:"Formula E",                      short:"FE",        color:"var(--fe)" },
  supergt:    { name:"Super GT",                        short:"S.GT",      color:"var(--supergt)" },
  asianlemans:{ name:"Asian Le Mans Series",            short:"Asian LMS", color:"var(--asianlemans)" },
  supertaikyu:{ name:"Super Taikyu Series",             short:"S.Taikyu",  color:"var(--supertaikyu)" },
  elms:       { name:"European Le Mans Series",         short:"ELMS",      color:"var(--elms)" },
  porschesupercup: { name:"Porsche Supercup",           short:"P.Supercup", color:"var(--porschesupercup)" },
};
const FILTER_ORDER = ["f1","f2","f1academy","wec","elms","imsa","motogp","nascar","wrc","superformula","supergt","asianlemans","supertaikyu","fe","indycar","indynxt","f3","porschesupercup"];

const EVENTS = [
  // ---------------- FORMULA 1 ----------------
  { series:"f1", name:"Las Vegas Grand Prix", location:"Las Vegas Strip Circuit, NV", dateRange:"Nov 19–21 (local dates)",
    sessions:[
      {type:"Practice 1", start:"2026-11-20T00:30:00Z", dur:60},
      {type:"Practice 2", start:"2026-11-20T04:00:00Z", dur:60},
      {type:"Practice 3", start:"2026-11-21T00:30:00Z", dur:60},
      {type:"Qualifying", start:"2026-11-21T04:00:00Z", dur:60},
      {type:"Race",       start:"2026-11-22T04:00:00Z", dur:120},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"Night race — sessions run late (post-midnight Vegas time)."}]
  },
  { series:"f1", name:"Qatar Grand Prix", location:"Lusail International Circuit, Qatar", dateRange:"Nov 27–29",
    sessions:[
      {type:"Practice 1", start:"2026-11-27T13:30:00Z", dur:60},
      {type:"Practice 2", start:"2026-11-27T17:00:00Z", dur:60},
      {type:"Practice 3", start:"2026-11-28T14:30:00Z", dur:60},
      {type:"Qualifying", start:"2026-11-28T18:00:00Z", dur:60},
      {type:"Race",       start:"2026-11-29T16:00:00Z", dur:120},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"All sessions live. F1 confirmed in early October that this round and Abu Dhabi will proceed as scheduled despite the regional conflict, with no further calendar changes planned."}]
  },
  { series:"f1", name:"Abu Dhabi Grand Prix", location:"Yas Marina Circuit, Abu Dhabi", dateRange:"Dec 4–6 · Season finale",
    sessions:[
      {type:"Practice 1", start:"2026-12-04T09:30:00Z", dur:60},
      {type:"Practice 2", start:"2026-12-04T13:00:00Z", dur:60},
      {type:"Practice 3", start:"2026-12-05T10:30:00Z", dur:60},
      {type:"Qualifying", start:"2026-12-05T14:00:00Z", dur:60},
      {type:"Race",       start:"2026-12-06T13:00:00Z", dur:120},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"Final round — championship decided. Confirmed proceeding as scheduled alongside Qatar."}]
  },

  // ---------------- FORMULA 2 ----------------
  { series:"f2", name:"Qatar Round", location:"Lusail International Circuit, Qatar", dateRange:"Nov 27–29",
    sessions:[
      {type:"Practice",      start:"2026-11-27T12:00:00Z", tba:true},
      {type:"Qualifying",    start:"2026-11-27T12:00:00Z", tba:true},
      {type:"Sprint Race",   start:"2026-11-28T12:00:00Z", tba:true},
      {type:"Feature Race",  start:"2026-11-29T12:00:00Z", tba:true},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"Included with your Apple TV / F1 TV subscription. This round shares F1's mid-October uncertainty over whether the Qatar/Abu Dhabi doubleheader can proceed."}]
  },
  { series:"f2", name:"Abu Dhabi Round", location:"Yas Marina Circuit, Abu Dhabi", dateRange:"Dec 4–6 · Season finale",
    sessions:[
      {type:"Practice",      start:"2026-12-04T12:00:00Z", tba:true},
      {type:"Qualifying",    start:"2026-12-04T12:00:00Z", tba:true},
      {type:"Sprint Race",   start:"2026-12-05T12:00:00Z", tba:true},
      {type:"Feature Race",  start:"2026-12-06T12:00:00Z", tba:true},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"Title-deciding round — included with Apple TV / F1 TV. Also provisional pending F1's Middle East scheduling decision."}]
  },

  // ---------------- F1 ACADEMY ----------------
  { series:"f1academy", name:"Las Vegas Round", location:"Las Vegas Strip Circuit, NV", dateRange:"Nov 19–21 · Season finale",
    sessions:[
      {type:"Practice",   start:"2026-11-19T12:00:00Z", tba:true},
      {type:"Qualifying", start:"2026-11-19T12:00:00Z", tba:true},
      {type:"Race 1",     start:"2026-11-20T12:00:00Z", tba:true},
      {type:"Race 2",     start:"2026-11-21T12:00:00Z", tba:true},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"Title-deciding round, alongside the Vegas GP."}]
  },

  // ---------------- MOTOGP ----------------
  { series:"motogp", name:"Portuguese Grand Prix", location:"Autódromo Internacional do Algarve, Portimão", dateRange:"Nov 20–22",
    sessions:[
      {type:"Free Practice 1", start:"2026-11-20T10:45:00Z", dur:45, approx:true},
      {type:"Practice",        start:"2026-11-20T15:00:00Z", dur:45, approx:true},
      {type:"Free Practice 2", start:"2026-11-21T10:10:00Z", dur:30, approx:true},
      {type:"Qualifying",      start:"2026-11-21T10:50:00Z", dur:35, approx:true},
      {type:"Sprint",          start:"2026-11-21T15:00:00Z", dur:30, approx:true},
      {type:"Race",            start:"2026-11-22T14:00:00Z", dur:45, approx:true},
    ],
    watch:[
      {name:"Fox One", url:"https://www.foxsports.com/foxone"},
      {name:"FS1 / FS2", url:"https://www.foxsports.com/live"},
      {name:"The MotoGP Channel", url:"https://www.motogp.com/en/videos/motogp-channel", note:"Free, ad-supported."},
    ]
  },
  { series:"motogp", name:"Valencian Community Grand Prix", location:"Circuit Ricardo Tormo, Valencia", dateRange:"Nov 27–29 · Season finale",
    sessions:[
      {type:"Free Practice 1", start:"2026-11-27T09:45:00Z", dur:45, approx:true},
      {type:"Practice",        start:"2026-11-27T14:00:00Z", dur:45, approx:true},
      {type:"Free Practice 2", start:"2026-11-28T09:10:00Z", dur:30, approx:true},
      {type:"Qualifying",      start:"2026-11-28T09:50:00Z", dur:35, approx:true},
      {type:"Sprint",          start:"2026-11-28T14:00:00Z", dur:30, approx:true},
      {type:"Race",            start:"2026-11-29T13:00:00Z", dur:45, approx:true},
    ],
    watch:[
      {name:"Fox One", url:"https://www.foxsports.com/foxone", note:"Title-deciding round."},
      {name:"FS1 / FS2", url:"https://www.foxsports.com/live"},
      {name:"The MotoGP Channel", url:"https://www.motogp.com/en/videos/motogp-channel", note:"Free, ad-supported."},
    ]
  },

  // ---------------- SUPER FORMULA ----------------
  { series:"superformula", name:"Suzuka Round", location:"Suzuka Circuit, Japan", dateRange:"Nov 20–22 · Season finale",
    sessions:[
      {type:"Practice",   start:"2026-11-20T02:00:00Z", tba:true},
      {type:"Qualifying", start:"2026-11-21T06:00:00Z", tba:true},
      {type:"Race",       start:"2026-11-22T05:00:00Z", tba:true},
    ],
    watch:[{name:"Super Formula Official", url:"https://www.youtube.com/superformulavideo/live", note:"Title decided here — free live stream on YouTube."}]
  },

  // ---------------- FORMULA E ----------------
  { series:"fe", name:"Jeddah E-Prix", location:"Jeddah Corniche Circuit, Saudi Arabia", dateRange:"Dec 18–19 · Season 13 opener",
    sessions:[
      {type:"Practice",              start:"2026-12-18T14:00:00Z", tba:true},
      {type:"Qualifying",            start:"2026-12-18T16:00:00Z", tba:true},
      {type:"Race 1 (E-Prix Unleashed)", start:"2026-12-18T19:00:00Z", tba:true},
      {type:"Race 2",                start:"2026-12-19T19:00:00Z", tba:true},
    ],
    watch:[{name:"Disney+", url:"https://www.disneyplus.com/", note:"Formula E's new U.S. home from Season 13 (this event) onward."}, {name:"ESPN+", url:"https://plus.espn.com/", note:"Also streams every session from Season 13 on."}]
  },

  // ---------------- ASIAN LE MANS SERIES ----------------
  { series:"asianlemans", name:"4 Hours of Le Castellet (Rounds 1 & 2)", location:"Circuit Paul Ricard, France — 2026/27 season moved entirely to Europe", dateRange:"Nov 13–15",
    sessions:[
      {type:"Practice",       start:"2026-11-13T12:00:00Z", tba:true},
      {type:"Qualifying",     start:"2026-11-13T12:00:00Z", tba:true},
      {type:"Race 1 (4h)",    start:"2026-11-14T12:00:00Z", tba:true, dur:240},
      {type:"Race 2 (4h)",    start:"2026-11-15T12:00:00Z", tba:true, dur:240},
    ],
    watch:[{name:"Asian Le Mans Series (YouTube)", url:"https://www.youtube.com/c/AsianLeMansSeries", note:"Free live stream, every race."}]
  },
  { series:"asianlemans", name:"4 Hours of Jerez (Rounds 3 & 4)", location:"Circuito de Jerez, Spain — 2026/27 season moved entirely to Europe", dateRange:"Jan 15–17, 2027",
    sessions:[
      {type:"Practice",       start:"2027-01-15T12:00:00Z", tba:true},
      {type:"Qualifying",     start:"2027-01-15T12:00:00Z", tba:true},
      {type:"Race 1 (4h)",    start:"2027-01-16T12:00:00Z", tba:true, dur:240},
      {type:"Race 2 (4h)",    start:"2027-01-17T12:00:00Z", tba:true, dur:240},
    ],
    watch:[{name:"Asian Le Mans Series (YouTube)", url:"https://www.youtube.com/c/AsianLeMansSeries", note:"Free live stream, every race."}]
  },
  { series:"asianlemans", name:"4 Hours of Portimão (Rounds 5 & 6)", location:"Algarve International Circuit, Portugal — 2026/27 season moved entirely to Europe", dateRange:"Feb 19–21, 2027 · Season finale",
    sessions:[
      {type:"Practice",       start:"2027-02-19T12:00:00Z", tba:true},
      {type:"Qualifying",     start:"2027-02-19T12:00:00Z", tba:true},
      {type:"Race 1 (4h)",    start:"2027-02-20T12:00:00Z", tba:true, dur:240},
      {type:"Race 2 (4h)",    start:"2027-02-21T12:00:00Z", tba:true, dur:240},
    ],
    watch:[{name:"Asian Le Mans Series (YouTube)", url:"https://www.youtube.com/c/AsianLeMansSeries", note:"Title decided here."}]
  },

  // ---------------- SUPER TAIKYU ----------------
  { series:"supertaikyu", name:"Fuji Round", location:"Fuji International Speedway, Japan", dateRange:"Nov 14–15 · Season finale",
    sessions:[
      {type:"Practice",   start:"2026-11-14T12:00:00Z", tba:true},
      {type:"Qualifying", start:"2026-11-14T12:00:00Z", tba:true},
      {type:"Race",       start:"2026-11-15T12:00:00Z", tba:true},
    ],
    watch:[{name:"Super Taikyu TV (YouTube)", url:"https://www.youtube.com/@supertaikyutvstaitv5599/streams", note:"Free live stream — title decided here."}]
  },
];

// ============ STANDINGS ============
const STANDINGS = [
  { group:"USA", items:[
    { key:"nascar", status:"Season complete · Homestead-Miami, Nov 8", entries:[
        {pos:1, name:"Kyle Larson", team:"Hendrick Motorsports", pts:"Champion — 3rd title"},
        {pos:2, name:"Christopher Bell", team:"Joe Gibbs Racing", pts:"Runner-up"},
        {pos:3, name:"Denny Hamlin", team:"Joe Gibbs Racing", pts:"3rd"},
      ], note:"Larson clinched his third Cup championship — and second straight, the first repeat champion since Jimmie Johnson — by virtue of a 4th-place finish in Stage 1 at Homestead, enough that neither Bell (3rd in the stage) nor Hamlin (6th) could catch him regardless of the race result. Ryan Blaney won the race itself after a late battle with Tyler Reddick (2nd) that also involved William Byron; Larson brought his car home 12th. Next season's calendar isn't announced yet.", link:"https://www.nascar.com/standings/nascar-cup-series/" },
    { key:"imsa", status:"Season complete · Petit Le Mans, Oct 3", entries:[
        {pos:1, name:"Aitken / Bamber", team:"Cadillac Racing (Whelen Engineering)", pts:"GTP Champions"},
        {pos:2, name:"Heinrich / Estre", team:"Porsche Penske Motorsport"},
      ], note:"Aitken/Bamber's points lead held up at the Road Atlanta finale to clinch the GTP title. Porsche Penske actually won the race itself outright (Vanthoor/Estre/Campbell in the #6, with Estre doubling up from his regular GTP seat) but it wasn't enough to deny Aitken/Bamber the championship. Exact final point margins were inconsistent across secondary coverage — confirm at IMSA's official standings.", link:"https://www.imsa.com/weathertech/standings/" },
    { key:"indycar", status:"Season complete · Sept 6", entries:[
        {pos:1, name:"Alex Palou", team:"Chip Ganassi Racing", pts:"Champion"},
        {pos:2, name:"Kyle Kirkwood", team:"Andretti", pts:"−86"},
        {pos:3, name:"Christian Lundgaard", team:"Arrow McLaren"},
        {pos:4, name:"Pato O'Ward", team:"Arrow McLaren"},
        {pos:5, name:"David Malukas", team:"Team Penske"},
      ], note:"Palou's fifth title in six years.", link:"https://www.indycar.com/Standings" },
    { key:"indynxt", status:"Season complete · Laguna Seca, Sept 6", entries:[
        {pos:1, name:"Nikita Johnson", team:"Cape Motorsports w/ Rod Reid", pts:"Champion"},
      ], link:"https://www.indynxt.com/" },
    { key:"f4us", status:"In progress · concludes October", entries:[
        {pos:1, name:"Gastón Irazú", team:"—", pts:"leader"},
        {pos:2, name:"Caleb Campbell", team:"—"},
      ], note:"Point totals looked inconsistent across sources — confirm at f4uschampionship.com.", link:"https://www.f4uschampionship.com/pages/fia-championship" },
    { key:"fregam", status:"In progress · concludes October", entries:[], note:"Current 2026 standings weren't available at time of writing. 2025 champion was Titus Sherlock (Crosslink Motorsports).", link:"https://en.wikipedia.org/wiki/2026_Formula_Regional_Americas_Championship" },
  ]},
  { group:"Europe", items:[
    { key:"f1", status:"In progress · 7 rounds left", entries:[
        {pos:1, name:"Kimi Antonelli", team:"Mercedes", pts:"292 pts"},
        {pos:2, name:"George Russell", team:"Mercedes", pts:"211 pts"},
        {pos:3, name:"Lewis Hamilton", team:"Ferrari", pts:"191 pts"},
        {pos:4, name:"Lando Norris", team:"McLaren", pts:"186 pts"},
        {pos:5, name:"Charles Leclerc", team:"Ferrari", pts:"167 pts"},
      ], note:"Verstappen (145), Piastri (120), Hadjar (71), Lawson (59) and Gasly (41) round out the top 10.", link:"https://www.formula1.com/en/results/2026/drivers" },
    { key:"motogp", status:"In progress · after Qatar, 2 rounds left", entries:[
        {pos:1, name:"Marc Márquez", team:"Ducati Lenovo", pts:"431 pts"},
        {pos:2, name:"Jorge Martín", team:"Aprilia Racing", pts:"371 pts"},
        {pos:3, name:"Marco Bezzecchi", team:"Aprilia Racing", pts:"357 pts"},
      ], note:"Márquez won Saturday's Sprint at Lusail (his 25th Sprint win) with Martín — back from the wrist injury that sidelined him for Malaysia — fighting to 3rd, meaning Márquez needed a GP win plus a Martín no-score to clinch on Sunday. He missed that first title chance when Bezzecchi led every lap to win the Qatar Grand Prix outright, with Márquez 2nd and Raúl Fernández 3rd; Martín salvaged 7th to keep the fight alive. Márquez still leaves Qatar 60 points clear of Martín and can seal a 10th world title (8th premier-class) with victory in the Portimão Sprint. Pedro Acosta (309), Ai Ogura (294) and Fabio Di Giannantonio (282) round out the top 6; the rest of the top 10 wasn't consistently reported across outlets at time of writing — confirm at MotoGP's official site.", link:"https://www.motogp.com/en/world-standing/2026/motogp/championship-standings" },
    { key:"wec", status:"Season complete · Monza, Nov 8", entries:[
        {pos:1, name:"Buemi / Hartley / Hirakawa", team:"Toyota Gazoo Racing (#8)", pts:"Champions, 114 pts"},
        {pos:2, name:"Conway / Kobayashi / de Vries", team:"Toyota Gazoo Racing (#7)", pts:"97 pts"},
      ], note:"The Monza finale went to Cadillac Hertz Team JOTA (Aitken/Bourdais/Bamber) outright, with the Alpine #36 2nd and the Ferrari #51 3rd — but neither title-contending Toyota scored well (#8 11th, #7 12th), so the #8 crew's points lead held up and Buemi/Hartley/Hirakawa clinched the drivers' title by a final margin of 17 points. Toyota had already secured the manufacturers' title. Point totals are from secondary post-round coverage; confirm at FIA WEC's official site. Next season's calendar isn't announced yet.", link:"https://www.fiawec.com/en/page/drivers-classification" },
    { key:"wrc", status:"Season complete · Sardegna, Oct 4", entries:[
        {pos:1, name:"Elfyn Evans", team:"Toyota Gazoo Racing", pts:"Champion"},
        {pos:2, name:"Sami Pajari", team:"Toyota Gazoo Racing"},
        {pos:3, name:"Oliver Solberg", team:"—"},
      ], note:"Evans and co-driver Scott Martin clinched Evans' first world title at the season-ending Rally Italia Sardegna — the last round of the season after Rally Saudi Arabia's cancellation. Solberg won the rally itself, but it wasn't enough to overturn Evans' points lead. Toyota had already secured the manufacturers' title. Final points margins weren't confirmed across secondary coverage at time of writing — confirm at WRC's official site.", link:"https://www.wrc.com/en/calendar" },
    { key:"fe", status:"Season 12 complete · Season 13 opens Dec 18–19 (Jeddah)", entries:[
        {pos:1, name:"Pascal Wehrlein", team:"—", pts:"169 pts"},
      ], note:"Wehrlein led entering the season's final rounds in August — final-standings confirmation wasn't available at time of writing. Season 13 starts fresh with zero points for everyone at Jeddah.", link:"https://www.fiaformulae.com/en/results-and-standings" },
    { key:"f2", status:"In progress · 2 rounds left", entries:[
        {pos:1, name:"Rafael Câmara", team:"—", pts:"207 pts"},
        {pos:2, name:"Nikola Tsolov", team:"—", pts:"200 pts"},
        {pos:3, name:"Alexander Dunne", team:"—", pts:"189 pts"},
      ], note:"Câmara took the lead late in Baku after Tsolov retired in a Friday crash. Minì (163) is closest outside the top three. The two remaining rounds (Qatar, Abu Dhabi) share F1's Middle East scheduling uncertainty.", link:"https://www.fiaformula2.com/Standings" },
    { key:"f3", status:"Season complete · Madrid, Sept 13", entries:[
        {pos:1, name:"Ugo Ugochukwu", team:"Campos Racing", pts:"159 pts — Champion"},
        {pos:2, name:"Freddie Slater", team:"TRIDENT", pts:"145 pts"},
        {pos:3, name:"Tuukka Taponen", team:"MP Motorsport", pts:"109 pts"},
      ], link:"https://www.fiaformula3.com/Standings" },
    { key:"f1academy", status:"Champion decided (Palmowski) · 1 round left (Las Vegas)", entries:[
        {pos:1, name:"Alisha Palmowski", team:"—", pts:"≈172 pts — Champion"},
        {pos:2, name:"Nina Gademan", team:"—", pts:"≈119 pts"},
        {pos:3, name:"Emma Felbermayr", team:"—", pts:"≈113 pts"},
      ], note:"Palmowski clinched the 2026 title at Austin's Reverse Grid Race, finishing 2nd behind Alba Larsen's maiden win — enough to seal it with the three-race Las Vegas finale still to run. Gademan then won Austin's Feature Race to move up to 2nd ahead of Felbermayr. Larsen and Westcott are tied for 4th on roughly 76 points each. Point totals are approximate from secondary coverage — confirm at f1academy.com.", link:"https://www.f1academy.com/Racing-Series/Standings" },
    { key:"italianf4", status:"In progress", entries:[
        {pos:1, name:"Luka Sammalisto", team:"US Racing", pts:"leads by 47"},
        {pos:2, name:"David Cosma-Cristofor", team:"—"},
        {pos:3, name:"Alp Hasan Aksoy", team:"—", pts:"Rookie leader"},
      ], link:"https://www.f4championship.com" },
    { key:"freca", status:"Season complete", entries:[
        {pos:1, name:"Emanuele Olivieri", team:"R-ace GP", pts:"Champion, +9"},
        {pos:2, name:"Sebastian Wheldon", team:"MP Motorsport"},
      ], link:"https://api.fia.com/events/fia-formula-regional-european-championship/season-2026/fia-formula-regional-european" },
    { key:"elms", status:"Season complete · Algarve, Oct 8–10", entries:[
        {pos:1, name:"United Autosports", team:"LMP2 Champions", pts:"—"},
        {pos:1, name:"Algarve Pro Racing", team:"LMP2 Pro/Am Champions", pts:"—"},
        {pos:1, name:"CLX Motorsport", team:"LMP3 Champions", pts:"—"},
        {pos:1, name:"TF Sport", team:"LMGT3 Champions", pts:"88 pts"},
      ], note:"United Autosports (Peebles/Saucy/Hanley) won the Algarve finale outright to seal the overall/LMP2 title; Algarve Pro Racing clinched LMP2 Pro/Am and CLX Motorsport retained LMP3. LMGT3 went to the wire — Proton Competition won the race but TF Sport (Eastwood/McDonald/Udell) took the title by 2 points, 88–86.", link:"https://www.europeanlemansseries.com/" },
    { key:"porschesupercup", status:"Season complete · Monza, Sept 4–6", entries:[
        {pos:1, name:"Flynt Schuring", team:"Porsche Junior", pts:"Champion, 3 wins"},
      ], link:"https://racing.porsche.com/mobil-1-supercup/results-season-2026" },
  ]},
  { group:"Asia", items:[
    { key:"superformula", status:"In progress · after Fuji (Rds 9–10), 1 round left", entries:[
        {pos:1, name:"Kakunoshin Ohta", team:"DOCOMO TEAM DANDELION RACING", pts:"leads"},
        {pos:2, name:"Ayumu Iwasa", team:"TEAM MUGEN", pts:"Fuji Race 2 winner"},
        {pos:3, name:"Igor Fraga", team:"PONOS Nakajima Racing", pts:"Fuji Race 1 winner"},
      ], note:"Fraga won Saturday's Race 1 at Fuji for his first full-length SF victory; Iwasa won a chaotic, crash-marked Race 2 Sunday after title leader Ohta retired following contact with Fraga. Ohta's points lead narrowed from roughly 48 to the low-30s, but exact updated totals were reported inconsistently across outlets at time of writing — confirm at Super Formula's official site. The Nov 20–22 Suzuka finale decides the title.", link:"https://www.driverdb.com/championships/super-formula/2026/standings" },
    { key:"supergt", status:"Season complete · Motegi, Nov 7–8", entries:[
        {pos:1, name:"Yamamoto / Makino", team:"STANLEY Team Kunimitsu (Honda)", pts:"GT500 Champions"},
        {pos:1, name:"de Oliveira / Kimura", team:"Kondo Racing", pts:"GT300 Champions"},
      ], note:"Naoki Yamamoto and Tadasuke Makino won the Grand Final from pole to take the GT500 title — Honda's first GT500 crown since 2020, and a third title for Yamamoto. Defending champion Sho Tsuboi's bid for a fifth retired just 8 laps from the flag. João Paulo de Oliveira and Ikuo Kimura (Kondo Racing) clinched GT300, de Oliveira's third title in the class. Team Impul's Hiramine/Baguette had won Saturday's Race 1. Full final-round classification and point totals weren't consistently reported across outlets at time of writing — confirm at Super GT's official site. Next season's calendar isn't announced yet.", link:"https://www.motorsport.com/supergt/standings/2026/" },
    { key:"asianlemans", status:"2026–27 season not yet underway · opens Nov 13", entries:[], note:"This edition is branded and organized as the Asian Le Mans Series but the entire six-round calendar was relocated to Europe (Paul Ricard, Jerez, Portimão) for geopolitical reasons.", link:"https://www.asianlemansseries.com/" },
    { key:"supertaikyu", status:"In progress · 2 rounds left", entries:[
        {pos:1, name:"Hitonowa The Team Standard", team:"—", pts:"ST-TCR class leader"},
      ], note:"A multi-class endurance series (ST-Q down through ST-1–ST-5, plus ST-TCR) — this shows the ST-TCR class only. Full cross-class standings weren't available at time of writing.", link:"https://en.wikipedia.org/wiki/2026_Super_Taikyu_Series" },
    { key:"superformulalights", status:"Season complete", entries:[
        {pos:1, name:"Evan Giltaire", team:"—", pts:"Champion"},
      ], note:"Clinched with a race to spare — first non-Japanese champion in the series' current guise. TOM'S retained the Teams' title.", link:"https://en.wikipedia.org/wiki/2026_Super_Formula_Lights" },
  ]},
];
const STANDINGS_META = {
  f1:{name:"Formula 1", color:"var(--f1)"},
  motogp:{name:"MotoGP", color:"var(--motogp)"},
  nascar:{name:"NASCAR Cup Series", color:"var(--nascar)"},
  wrc:{name:"World Rally Championship", color:"var(--wrc)"},
  wec:{name:"World Endurance Championship", color:"var(--wec)"},
  imsa:{name:"IMSA WeatherTech Championship", color:"var(--imsa)"},
  indycar:{name:"IndyCar", color:"var(--indycar)"},
  f2:{name:"Formula 2", color:"var(--f2)"},
  f3:{name:"Formula 3", color:"var(--f3)"},
  f1academy:{name:"F1 Academy", color:"var(--f1academy)"},
  indynxt:{name:"Indy NXT", color:"var(--indynxt)"},
  italianf4:{name:"Italian F4 Championship", color:"var(--italianf4)"},
  freca:{name:"Formula Regional European Championship", color:"var(--freca)"},
  f4us:{name:"F4 United States Championship", color:"var(--f4us)"},
  fregam:{name:"Formula Regional Americas Championship", color:"var(--fregam)"},
  superformula:{name:"Super Formula", color:"var(--superformula)"},
  fe:{name:"Formula E", color:"var(--fe)"},
  supergt:{name:"Super GT", color:"var(--supergt)"},
  asianlemans:{name:"Asian Le Mans Series", color:"var(--asianlemans)"},
  supertaikyu:{name:"Super Taikyu Series", color:"var(--supertaikyu)"},
  superformulalights:{name:"Super Formula Lights", color:"var(--superformulalights)"},
  elms:{name:"European Le Mans Series", color:"var(--elms)"},
  porschesupercup:{name:"Porsche Supercup", color:"var(--porschesupercup)"},
};

// ============ CHAMPIONSHIP MATH ============
const POINTS_TABLES = {
  f1:           [25,18,15,12,10,8,6,4,2,1],
  motogp:       [25,20,16,13,11,10,9,8,7,6],
  nascar:       [40,39,38,37,36,35,34,33,32,31],
  superformula: [30,25,20,15,12,9,7,5,3,2],
};
const POINTS_NOTE = {
  f1: "Race points only (25–18–15…). The one remaining sprint weekend (Singapore) isn't modeled separately.",
  motogp: "Race points only (25–20–16…). Sprint points aren't modeled separately.",
  nascar: "Simplified to finishing position only — real NASCAR scoring adds stage points and race-win playoff bonuses on top of this.",
  superformula: "Real 2026 scale (30–25–20…). Treats each remaining round as one race — any separate sprint-race points aren't modeled.",
};
const MATH_SERIES = [
  { key:"f1", remaining:7, raceLabels:["SIN","USA","MEX","BRA","LAS","QAT","ABU"],
    entries: STANDINGS.flatMap(g=>g.items).find(i=>i.key==="f1").entries.concat([
      {pos:6,name:"Max Verstappen",team:"Red Bull",pts:"145 pts",raw:145},
      {pos:7,name:"Oscar Piastri",team:"McLaren",pts:"120 pts",raw:120},
      {pos:8,name:"Isack Hadjar",team:"Red Bull",pts:"71 pts",raw:71},
      {pos:9,name:"Liam Lawson",team:"RB F1 Team",pts:"59 pts",raw:59},
      {pos:10,name:"Pierre Gasly",team:"Alpine",pts:"41 pts",raw:41},
    ]).map(e=>({...e, raw: e.raw ?? parseInt(e.pts)})) },
  { key:"motogp", remaining:2, raceLabels:["POR","VAL"], entries:[
      {pos:1,name:"Marc Márquez",team:"Ducati Lenovo",raw:431},
      {pos:2,name:"Jorge Martín",team:"Aprilia Racing",raw:371},
      {pos:3,name:"Marco Bezzecchi",team:"Aprilia Racing",raw:357},
      {pos:4,name:"Pedro Acosta",team:"Red Bull KTM",raw:309},
      {pos:5,name:"Ai Ogura",team:"Trackhouse Aprilia",raw:294},
      {pos:6,name:"Fabio di Giannantonio",team:"VR46 Ducati",raw:282},
      {pos:7,name:"Raul Fernandez",team:"Trackhouse Aprilia",raw:236},
      {pos:8,name:"Alex Márquez",team:"Gresini Ducati",raw:197},
      {pos:9,name:"Francesco Bagnaia",team:"Ducati",raw:173},
      {pos:10,name:"Enea Bastianini",team:"VR46 Ducati",raw:134},
    ]},
  { key:"superformula", remaining:1, raceLabels:["SUZ"], entries:[
      {pos:1,name:"Kakunoshin Ohta",team:"DOCOMO TEAM DANDELION RACING",raw:105},
      {pos:2,name:"Ayumu Iwasa",team:"TEAM MUGEN",raw:59.5},
      {pos:3,name:"Nirei Fukuzumi",team:"—",raw:58},
      {pos:4,name:"Igor Fraga",team:"—",raw:51},
    ]},
];

// ============ RISING STARS ============
const TIER_WEIGHT = { f2:9, f3:7, f1academy:6, indynxt:6, freca:5, fregam:5, italianf4:3, f4us:3 };
const POS_MULT = { 1:1, 2:0.75, 3:0.55 };
const PROSPECTS = [
  {name:"Rafael Câmara", cat:"f2", pos:1, note:"Leads F2 by 7, 2 rounds left"},
  {name:"Nikola Tsolov", cat:"f2", pos:2, note:"7 back in F2"},
  {name:"Ugo Ugochukwu", cat:"f3", pos:1, note:"2026 F3 champion"},
  {name:"Freddie Slater", cat:"f3", pos:2, note:"F3 runner-up, 14 back"},
  {name:"Nikita Johnson", cat:"indynxt", pos:1, note:"2026 Indy NXT champion"},
  {name:"Alisha Palmowski", cat:"f1academy", pos:1, note:"2026 F1 Academy champion, clinched in Austin"},
  {name:"Emanuele Olivieri", cat:"freca", pos:1, note:"2026 FRECA champion"},
  {name:"Sebastian Wheldon", cat:"freca", pos:2, note:"FRECA runner-up, −9"},
  {name:"Luka Sammalisto", cat:"italianf4", pos:1, note:"Leads Italian F4 by 47"},
  {name:"Gastón Irazú", cat:"f4us", pos:1, note:"Leads F4 US"},
];

