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
  { series:"f1", name:"Azerbaijan Grand Prix", location:"Baku City Circuit, Azerbaijan", dateRange:"Sep 24–26",
    sessions:[
      {type:"Practice 1", start:"2026-09-24T08:30:00Z", dur:60},
      {type:"Practice 2", start:"2026-09-24T12:00:00Z", dur:60},
      {type:"Practice 3", start:"2026-09-25T08:30:00Z", dur:60},
      {type:"Qualifying", start:"2026-09-25T12:00:00Z", dur:60},
      {type:"Race",       start:"2026-09-26T11:00:00Z", dur:120},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"Exclusive U.S. home of F1 in 2026 — every session streams live, $12.99/mo or $99/yr."}]
  },
  { series:"f1", name:"Singapore Grand Prix", location:"Marina Bay Street Circuit, Singapore", dateRange:"Oct 9–11 · Sprint weekend",
    sessions:[
      {type:"Practice 1",        start:"2026-10-09T08:30:00Z", dur:60},
      {type:"Sprint Qualifying", start:"2026-10-09T12:30:00Z", dur:45},
      {type:"Sprint",            start:"2026-10-10T09:00:00Z", dur:30},
      {type:"Qualifying",        start:"2026-10-10T13:00:00Z", dur:60},
      {type:"Race",              start:"2026-10-11T12:00:00Z", dur:120},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"All five sessions stream live."}]
  },
  { series:"f1", name:"United States Grand Prix", location:"Circuit of the Americas, Austin, TX", dateRange:"Oct 23–25",
    sessions:[
      {type:"Practice 1", start:"2026-10-23T17:30:00Z", dur:60},
      {type:"Practice 2", start:"2026-10-23T21:00:00Z", dur:60},
      {type:"Practice 3", start:"2026-10-24T17:30:00Z", dur:60},
      {type:"Qualifying", start:"2026-10-24T21:00:00Z", dur:60},
      {type:"Race",       start:"2026-10-25T19:00:00Z", dur:120},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"Home race weekend — all sessions live."}]
  },
  { series:"f1", name:"Mexico City Grand Prix", location:"Autódromo Hermanos Rodríguez, Mexico City", dateRange:"Oct 30–Nov 1",
    sessions:[
      {type:"Practice 1", start:"2026-10-30T18:30:00Z", dur:60},
      {type:"Practice 2", start:"2026-10-30T22:00:00Z", dur:60},
      {type:"Practice 3", start:"2026-10-31T17:30:00Z", dur:60},
      {type:"Qualifying", start:"2026-10-31T21:00:00Z", dur:60},
      {type:"Race",       start:"2026-11-01T20:00:00Z", dur:120},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"All sessions live."}]
  },
  { series:"f1", name:"São Paulo Grand Prix", location:"Autódromo José Carlos Pace, Interlagos", dateRange:"Nov 6–8",
    sessions:[
      {type:"Practice 1", start:"2026-11-06T15:30:00Z", dur:60},
      {type:"Practice 2", start:"2026-11-06T19:00:00Z", dur:60},
      {type:"Practice 3", start:"2026-11-07T14:30:00Z", dur:60},
      {type:"Qualifying", start:"2026-11-07T18:00:00Z", dur:60},
      {type:"Race",       start:"2026-11-08T17:00:00Z", dur:120},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"All sessions live."}]
  },
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
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"All sessions live."}]
  },
  { series:"f1", name:"Abu Dhabi Grand Prix", location:"Yas Marina Circuit, Abu Dhabi", dateRange:"Dec 4–6 · Season finale",
    sessions:[
      {type:"Practice 1", start:"2026-12-04T09:30:00Z", dur:60},
      {type:"Practice 2", start:"2026-12-04T13:00:00Z", dur:60},
      {type:"Practice 3", start:"2026-12-05T10:30:00Z", dur:60},
      {type:"Qualifying", start:"2026-12-05T14:00:00Z", dur:60},
      {type:"Race",       start:"2026-12-06T13:00:00Z", dur:120},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"Final round — championship decided."}]
  },

  // ---------------- FORMULA 2 ----------------
  { series:"f2", name:"Baku Round", location:"Baku City Circuit, Azerbaijan", dateRange:"Sep 25–27",
    sessions:[
      {type:"Practice",      start:"2026-09-25T12:00:00Z", tba:true},
      {type:"Qualifying",    start:"2026-09-25T12:00:00Z", tba:true},
      {type:"Sprint Race",   start:"2026-09-26T12:00:00Z", tba:true},
      {type:"Feature Race",  start:"2026-09-27T12:00:00Z", tba:true},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"F2 runs on the F1 TV app inside your Apple TV subscription — no separate sign-up."}]
  },
  { series:"f2", name:"Qatar Round", location:"Lusail International Circuit, Qatar", dateRange:"Nov 27–29",
    sessions:[
      {type:"Practice",      start:"2026-11-27T12:00:00Z", tba:true},
      {type:"Qualifying",    start:"2026-11-27T12:00:00Z", tba:true},
      {type:"Sprint Race",   start:"2026-11-28T12:00:00Z", tba:true},
      {type:"Feature Race",  start:"2026-11-29T12:00:00Z", tba:true},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"Included with your Apple TV / F1 TV subscription."}]
  },
  { series:"f2", name:"Abu Dhabi Round", location:"Yas Marina Circuit, Abu Dhabi", dateRange:"Dec 4–6 · Season finale",
    sessions:[
      {type:"Practice",      start:"2026-12-04T12:00:00Z", tba:true},
      {type:"Qualifying",    start:"2026-12-04T12:00:00Z", tba:true},
      {type:"Sprint Race",   start:"2026-12-05T12:00:00Z", tba:true},
      {type:"Feature Race",  start:"2026-12-06T12:00:00Z", tba:true},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"Title-deciding round — included with Apple TV / F1 TV."}]
  },

  // ---------------- F1 ACADEMY ----------------
  { series:"f1academy", name:"Austin Round", location:"Circuit of the Americas, Austin, TX", dateRange:"Oct 23–25",
    sessions:[
      {type:"Practice",   start:"2026-10-23T12:00:00Z", tba:true},
      {type:"Qualifying", start:"2026-10-23T12:00:00Z", tba:true},
      {type:"Race 1",     start:"2026-10-24T12:00:00Z", tba:true},
      {type:"Race 2",     start:"2026-10-25T12:00:00Z", tba:true},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"Runs alongside the F1 weekend on the F1 TV app."}]
  },
  { series:"f1academy", name:"Las Vegas Round", location:"Las Vegas Strip Circuit, NV", dateRange:"Nov 19–21 · Season finale",
    sessions:[
      {type:"Practice",   start:"2026-11-19T12:00:00Z", tba:true},
      {type:"Qualifying", start:"2026-11-19T12:00:00Z", tba:true},
      {type:"Race 1",     start:"2026-11-20T12:00:00Z", tba:true},
      {type:"Race 2",     start:"2026-11-21T12:00:00Z", tba:true},
    ],
    watch:[{name:"Apple TV", url:"https://tv.apple.com/", note:"Title-deciding round, alongside the Vegas GP."}]
  },

  // ---------------- WEC ----------------
  { series:"wec", name:"6 Hours of Fuji", location:"Fuji Speedway, Japan", dateRange:"Sep 25–27",
    sessions:[
      {type:"Free Practice 1", start:"2026-09-25T12:00:00Z", tba:true},
      {type:"Free Practice 2", start:"2026-09-26T12:00:00Z", tba:true},
      {type:"Hyperpole",       start:"2026-09-26T12:00:00Z", tba:true},
      {type:"Race (6h)",       start:"2026-09-27T12:00:00Z", tba:true, dur:360},
    ],
    watch:[
      {name:"FIAWEC+", url:"https://www.fiawec.com/", note:"Official global stream — every session, every class."},
      {name:"MotorTrend", url:"https://www.motortrend.com/", note:"U.S. linear TV partner."},
      {name:"HBO Max", url:"https://www.max.com/", note:"U.S. streaming."},
    ]
  },
  { series:"wec", name:"6 Hours of Barcelona", location:"Circuit de Barcelona-Catalunya, Spain", dateRange:"Oct 16–18",
    sessions:[
      {type:"Free Practice 1", start:"2026-10-16T12:00:00Z", tba:true},
      {type:"Free Practice 2", start:"2026-10-17T12:00:00Z", tba:true},
      {type:"Hyperpole",       start:"2026-10-17T12:00:00Z", tba:true},
      {type:"Race (6h)",       start:"2026-10-18T12:00:00Z", tba:true, dur:360},
    ],
    watch:[
      {name:"FIAWEC+", url:"https://www.fiawec.com/", note:"Official global stream."},
      {name:"MotorTrend", url:"https://www.motortrend.com/"},
      {name:"HBO Max", url:"https://www.max.com/"},
    ]
  },
  { series:"wec", name:"6 Hours of Monza", location:"Autodromo Nazionale Monza, Italy", dateRange:"Nov 6–8 · Season finale",
    sessions:[
      {type:"Free Practice 1", start:"2026-11-06T12:00:00Z", tba:true},
      {type:"Free Practice 2", start:"2026-11-07T12:00:00Z", tba:true},
      {type:"Hyperpole",       start:"2026-11-07T12:00:00Z", tba:true},
      {type:"Race (6h)",       start:"2026-11-08T12:00:00Z", tba:true, dur:360},
    ],
    watch:[
      {name:"FIAWEC+", url:"https://www.fiawec.com/", note:"Official global stream — title decided here."},
      {name:"MotorTrend", url:"https://www.motortrend.com/"},
      {name:"HBO Max", url:"https://www.max.com/"},
    ]
  },

  // ---------------- IMSA ----------------
  { series:"imsa", name:"Battle on the Bricks", location:"Indianapolis Motor Speedway road course, IN", dateRange:"Sep 18–20",
    sessions:[
      {type:"Practice",   start:"2026-09-18T16:00:00Z", tba:true},
      {type:"Qualifying", start:"2026-09-19T16:00:00Z", tba:true},
      {type:"Race",       start:"2026-09-20T17:00:00Z", tba:true, dur:160},
    ],
    watch:[
      {name:"NBC", url:"https://www.nbc.com/nbc-sports", note:"Start and finish air live on broadcast NBC."},
      {name:"Peacock", url:"https://www.peacocktv.com/", note:"Full race, flag to flag."},
    ]
  },
  { series:"imsa", name:"Motul Petit Le Mans", location:"Michelin Raceway Road Atlanta, Braselton, GA", dateRange:"Oct 1–3 · Season finale",
    sessions:[
      {type:"Practice",   start:"2026-10-01T17:00:00Z", tba:true},
      {type:"Qualifying", start:"2026-10-02T20:00:00Z", tba:true},
      {type:"Race (10h)", start:"2026-10-03T15:05:00Z", dur:600, approx:true},
    ],
    watch:[
      {name:"NBC", url:"https://www.nbc.com/nbc-sports", note:"Opening hours air live on broadcast NBC."},
      {name:"Peacock", url:"https://www.peacocktv.com/", note:"All 10 hours, flag to flag."},
    ]
  },

  // ---------------- MOTOGP ----------------
  { series:"motogp", name:"Austrian Grand Prix", location:"Red Bull Ring, Spielberg", dateRange:"Sep 18–20",
    sessions:[
      {type:"Free Practice 1", start:"2026-09-18T08:45:00Z", dur:45, approx:true},
      {type:"Practice",        start:"2026-09-18T13:00:00Z", dur:45, approx:true},
      {type:"Free Practice 2", start:"2026-09-19T08:10:00Z", dur:30, approx:true},
      {type:"Qualifying",      start:"2026-09-19T08:50:00Z", dur:35, approx:true},
      {type:"Sprint",          start:"2026-09-19T13:00:00Z", dur:30, approx:true},
      {type:"Race",            start:"2026-09-20T12:00:00Z", dur:45, approx:true},
    ],
    watch:[
      {name:"Fox One", url:"https://www.foxsports.com/foxone", note:"$19.99/mo, every session live."},
      {name:"FS1 / FS2", url:"https://www.foxsports.com/live", note:"Cable/satellite."},
      {name:"The MotoGP Channel", url:"https://www.motogp.com/en/videos/motogp-channel", note:"Free, ad-supported."},
    ]
  },
  { series:"motogp", name:"Japanese Grand Prix", location:"Twin Ring Motegi, Japan", dateRange:"Oct 2–4",
    sessions:[
      {type:"Free Practice 1", start:"2026-10-02T01:45:00Z", dur:45, approx:true},
      {type:"Practice",        start:"2026-10-02T06:00:00Z", dur:45, approx:true},
      {type:"Free Practice 2", start:"2026-10-03T01:10:00Z", dur:30, approx:true},
      {type:"Qualifying",      start:"2026-10-03T01:50:00Z", dur:35, approx:true},
      {type:"Sprint",          start:"2026-10-03T06:00:00Z", dur:30, approx:true},
      {type:"Race",            start:"2026-10-04T05:00:00Z", dur:45, approx:true},
    ],
    watch:[
      {name:"Fox One", url:"https://www.foxsports.com/foxone"},
      {name:"FS1 / FS2", url:"https://www.foxsports.com/live"},
      {name:"The MotoGP Channel", url:"https://www.motogp.com/en/videos/motogp-channel", note:"Free, ad-supported."},
    ]
  },
  { series:"motogp", name:"Indonesian Grand Prix", location:"Mandalika Circuit, Lombok", dateRange:"Oct 9–11",
    sessions:[
      {type:"Free Practice 1", start:"2026-10-09T02:45:00Z", dur:45, approx:true},
      {type:"Practice",        start:"2026-10-09T07:00:00Z", dur:45, approx:true},
      {type:"Free Practice 2", start:"2026-10-10T02:10:00Z", dur:30, approx:true},
      {type:"Qualifying",      start:"2026-10-10T02:50:00Z", dur:35, approx:true},
      {type:"Sprint",          start:"2026-10-10T07:00:00Z", dur:30, approx:true},
      {type:"Race",            start:"2026-10-11T06:00:00Z", dur:45, approx:true},
    ],
    watch:[
      {name:"Fox One", url:"https://www.foxsports.com/foxone"},
      {name:"FS1 / FS2", url:"https://www.foxsports.com/live"},
      {name:"The MotoGP Channel", url:"https://www.motogp.com/en/videos/motogp-channel", note:"Free, ad-supported."},
    ]
  },
  { series:"motogp", name:"Australian Grand Prix", location:"Phillip Island Circuit", dateRange:"Oct 23–25",
    sessions:[
      {type:"Free Practice 1", start:"2026-10-22T23:45:00Z", dur:45, approx:true},
      {type:"Practice",        start:"2026-10-23T04:00:00Z", dur:45, approx:true},
      {type:"Free Practice 2", start:"2026-10-23T23:10:00Z", dur:30, approx:true},
      {type:"Qualifying",      start:"2026-10-23T23:50:00Z", dur:35, approx:true},
      {type:"Sprint",          start:"2026-10-24T04:00:00Z", dur:30, approx:true},
      {type:"Race",            start:"2026-10-25T03:00:00Z", dur:45, approx:true},
    ],
    watch:[
      {name:"Fox One", url:"https://www.foxsports.com/foxone"},
      {name:"FS1 / FS2", url:"https://www.foxsports.com/live"},
      {name:"The MotoGP Channel", url:"https://www.motogp.com/en/videos/motogp-channel", note:"Free, ad-supported."},
    ]
  },
  { series:"motogp", name:"Malaysian Grand Prix", location:"Sepang International Circuit", dateRange:"Oct 30–Nov 1",
    sessions:[
      {type:"Free Practice 1", start:"2026-10-30T02:45:00Z", dur:45, approx:true},
      {type:"Practice",        start:"2026-10-30T07:00:00Z", dur:45, approx:true},
      {type:"Free Practice 2", start:"2026-10-31T02:10:00Z", dur:30, approx:true},
      {type:"Qualifying",      start:"2026-10-31T02:50:00Z", dur:35, approx:true},
      {type:"Sprint",          start:"2026-10-31T07:00:00Z", dur:30, approx:true},
      {type:"Race",            start:"2026-11-01T06:00:00Z", dur:45, approx:true},
    ],
    watch:[
      {name:"Fox One", url:"https://www.foxsports.com/foxone"},
      {name:"FS1 / FS2", url:"https://www.foxsports.com/live"},
      {name:"The MotoGP Channel", url:"https://www.motogp.com/en/videos/motogp-channel", note:"Free, ad-supported."},
    ]
  },
  { series:"motogp", name:"Qatar Grand Prix", location:"Lusail International Circuit", dateRange:"Nov 6–8",
    sessions:[
      {type:"Free Practice 1", start:"2026-11-06T07:45:00Z", dur:45, approx:true},
      {type:"Practice",        start:"2026-11-06T12:00:00Z", dur:45, approx:true},
      {type:"Free Practice 2", start:"2026-11-07T07:10:00Z", dur:30, approx:true},
      {type:"Qualifying",      start:"2026-11-07T07:50:00Z", dur:35, approx:true},
      {type:"Sprint",          start:"2026-11-07T12:00:00Z", dur:30, approx:true},
      {type:"Race",            start:"2026-11-08T11:00:00Z", dur:45, approx:true},
    ],
    watch:[
      {name:"Fox One", url:"https://www.foxsports.com/foxone"},
      {name:"FS1 / FS2", url:"https://www.foxsports.com/live"},
      {name:"The MotoGP Channel", url:"https://www.motogp.com/en/videos/motogp-channel", note:"Free, ad-supported."},
    ]
  },
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

  // ---------------- NASCAR CUP SERIES (single 10-race Chase) ----------------
  { series:"nascar", name:"Enjoy Illinois 300", location:"World Wide Technology Raceway, Madison, IL", dateRange:"Sep 13 · Chase Rd 2 of 10",
    sessions:[{type:"Race", start:"2026-09-13T19:00:00Z", dur:210}],
    watch:[
      {name:"USA Network", url:"https://www.usanetwork.com/", note:"Cable/satellite."},
      {name:"HBO Max", url:"https://www.max.com/", note:"Live in-car streams."},
    ]
  },
  { series:"nascar", name:"Bass Pro Shops Night Race", location:"Bristol Motor Speedway, TN", dateRange:"Sep 18–19 · Chase Rd 3 of 10",
    sessions:[
      {type:"Practice & Qualifying", start:"2026-09-18T20:30:00Z", dur:120},
      {type:"Race", start:"2026-09-19T23:30:00Z", dur:210},
    ],
    watch:[
      {name:"truTV", url:"https://www.trutv.com/", note:"Practice & qualifying."},
      {name:"USA Network", url:"https://www.usanetwork.com/", note:"Race broadcast."},
      {name:"HBO Max", url:"https://www.max.com/"},
    ]
  },
  { series:"nascar", name:"Hollywood Casino 400", location:"Kansas Speedway, Kansas City, KS", dateRange:"Sep 27 · Chase Rd 4 of 10",
    sessions:[{type:"Race", start:"2026-09-27T23:30:00Z", dur:180}],
    watch:[
      {name:"USA Network", url:"https://www.usanetwork.com/"},
      {name:"HBO Max", url:"https://www.max.com/"},
    ]
  },
  { series:"nascar", name:"South Point 400", location:"Las Vegas Motor Speedway, NV", dateRange:"Oct 4 · Chase Rd 5 of 10",
    sessions:[{type:"Race", start:"2026-10-04T21:30:00Z", dur:180}],
    watch:[
      {name:"USA Network", url:"https://www.usanetwork.com/"},
      {name:"HBO Max", url:"https://www.max.com/"},
    ]
  },
  { series:"nascar", name:"Bank of America Roval 400", location:"Charlotte Motor Speedway Roval, NC", dateRange:"Oct 11 · Chase Rd 6 of 10",
    sessions:[{type:"Race", start:"2026-10-11T19:00:00Z", dur:180}],
    watch:[
      {name:"USA Network", url:"https://www.usanetwork.com/"},
      {name:"HBO Max", url:"https://www.max.com/"},
    ]
  },
  { series:"nascar", name:"Ambetter Health 400", location:"Phoenix Raceway, AZ", dateRange:"Oct 18 · Chase Rd 7 of 10",
    sessions:[{type:"Race", start:"2026-10-18T19:00:00Z", dur:180}],
    watch:[
      {name:"USA Network", url:"https://www.usanetwork.com/"},
      {name:"HBO Max", url:"https://www.max.com/"},
    ]
  },
  { series:"nascar", name:"YellaWood 500", location:"Talladega Superspeedway, AL", dateRange:"Oct 25 · Chase Rd 8 of 10",
    sessions:[{type:"Race", start:"2026-10-25T18:00:00Z", dur:210}],
    watch:[
      {name:"NBC", url:"https://www.nbc.com/nbc-sports"},
      {name:"Peacock", url:"https://www.peacocktv.com/"},
    ]
  },
  { series:"nascar", name:"Xfinity 500", location:"Martinsville Speedway, VA", dateRange:"Nov 1 · Chase Rd 9 of 10",
    sessions:[{type:"Race", start:"2026-11-01T19:00:00Z", dur:210}],
    watch:[
      {name:"NBC", url:"https://www.nbc.com/nbc-sports"},
      {name:"Peacock", url:"https://www.peacocktv.com/"},
    ]
  },
  { series:"nascar", name:"Championship Race", location:"Homestead-Miami Speedway, FL", dateRange:"Nov 8 · Season finale", champ:true,
    sessions:[{type:"Race", start:"2026-11-08T20:00:00Z", dur:180}],
    watch:[
      {name:"NBC", url:"https://www.nbc.com/nbc-sports", note:"2026 Cup Series champion crowned."},
      {name:"Peacock", url:"https://www.peacocktv.com/"},
    ]
  },

  // ---------------- WRC ----------------
  { series:"wrc", name:"Rally Italia Sardegna", location:"Olbia, Sardinia, Italy", dateRange:"Oct 1–4",
    sessions:[
      {type:"Shakedown",              start:"2026-10-01T12:00:00Z", tba:true},
      {type:"Leg 1 (Stages)",         start:"2026-10-02T12:00:00Z", tba:true},
      {type:"Leg 2 (Stages)",         start:"2026-10-03T12:00:00Z", tba:true},
      {type:"Leg 3 + Power Stage",    start:"2026-10-04T12:00:00Z", tba:true},
    ],
    watch:[
      {name:"Rally.TV", url:"https://www.rally.tv/en", note:"Official global stream — every stage."},
      {name:"YouTube", url:"https://www.youtube.com/@WRC", note:"Free highlights and select live stages."},
    ]
  },
  { series:"wrc", name:"Rally Saudi Arabia", location:"Saudi Arabia", dateRange:"Nov 11–14 · Season finale",
    sessions:[
      {type:"Shakedown",              start:"2026-11-11T12:00:00Z", tba:true},
      {type:"Leg 1 (Stages)",         start:"2026-11-12T12:00:00Z", tba:true},
      {type:"Leg 2 (Stages)",         start:"2026-11-13T12:00:00Z", tba:true},
      {type:"Leg 3 + Power Stage",    start:"2026-11-14T12:00:00Z", tba:true},
    ],
    watch:[
      {name:"Rally.TV", url:"https://www.rally.tv/en", note:"Title decided on the final Power Stage."},
      {name:"YouTube", url:"https://www.youtube.com/@WRC"},
    ]
  },

  // ---------------- SUPER FORMULA ----------------
  { series:"superformula", name:"Fuji Round", location:"Fuji Speedway, Japan", dateRange:"Oct 10–11",
    sessions:[
      {type:"Practice",   start:"2026-10-10T02:00:00Z", tba:true},
      {type:"Qualifying", start:"2026-10-10T06:00:00Z", tba:true},
      {type:"Race",       start:"2026-10-11T05:00:00Z", tba:true},
    ],
    watch:[{name:"Super Formula Official", url:"https://www.youtube.com/superformulavideo/live", note:"Free live stream on the series' own YouTube channel, worldwide."}]
  },
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

  // ---------------- SUPER GT ----------------
  { series:"supergt", name:"Sugo GT 300km", location:"Sportsland Sugo, Japan", dateRange:"Sep 18–20",
    sessions:[
      {type:"Practice",   start:"2026-09-18T12:00:00Z", tba:true},
      {type:"Qualifying", start:"2026-09-19T12:00:00Z", tba:true},
      {type:"Race",       start:"2026-09-20T12:00:00Z", tba:true},
    ],
    watch:[{name:"RACER Network", url:"https://racer.com/watch", note:"New U.S./Canada broadcast home for 2026 — every round live and on demand."}]
  },
  { series:"supergt", name:"Autopolis GT 300km", location:"Autopolis, Japan", dateRange:"Oct 16–18",
    sessions:[
      {type:"Practice",   start:"2026-10-16T12:00:00Z", tba:true},
      {type:"Qualifying", start:"2026-10-17T12:00:00Z", tba:true},
      {type:"Race",       start:"2026-10-18T12:00:00Z", tba:true},
    ],
    watch:[{name:"RACER Network", url:"https://racer.com/watch"}]
  },
  { series:"supergt", name:"Motegi GT 300km", location:"Mobility Resort Motegi, Japan", dateRange:"Nov 6–8 · Season finale",
    sessions:[
      {type:"Practice",   start:"2026-11-06T09:30:00Z", approx:true},
      {type:"Qualifying", start:"2026-11-07T12:00:00Z", tba:true},
      {type:"Race",       start:"2026-11-08T12:00:00Z", tba:true},
    ],
    watch:[{name:"RACER Network", url:"https://racer.com/watch", note:"Title decided here."}]
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
  { series:"supertaikyu", name:"Okayama Round", location:"Okayama International Circuit, Japan", dateRange:"Oct 24–25",
    sessions:[
      {type:"Practice",   start:"2026-10-24T12:00:00Z", tba:true},
      {type:"Qualifying", start:"2026-10-24T12:00:00Z", tba:true},
      {type:"Race",       start:"2026-10-25T12:00:00Z", tba:true},
    ],
    watch:[{name:"Super Taikyu TV (YouTube)", url:"https://www.youtube.com/@supertaikyutvstaitv5599/streams", note:"Free live stream, Japanese commentary."}]
  },
  { series:"supertaikyu", name:"Fuji Round", location:"Fuji International Speedway, Japan", dateRange:"Nov 14–15 · Season finale",
    sessions:[
      {type:"Practice",   start:"2026-11-14T12:00:00Z", tba:true},
      {type:"Qualifying", start:"2026-11-14T12:00:00Z", tba:true},
      {type:"Race",       start:"2026-11-15T12:00:00Z", tba:true},
    ],
    watch:[{name:"Super Taikyu TV (YouTube)", url:"https://www.youtube.com/@supertaikyutvstaitv5599/streams", note:"Free live stream — title decided here."}]
  },

  // ---------------- EUROPEAN LE MANS SERIES ----------------
  { series:"elms", name:"4 Hours of the Algarve", location:"Algarve International Circuit, Portimão, Portugal", dateRange:"Oct 8–10 · Season finale",
    sessions:[
      {type:"Practice",    start:"2026-10-08T12:00:00Z", tba:true},
      {type:"Qualifying",  start:"2026-10-09T12:00:00Z", tba:true},
      {type:"Race (4h)",   start:"2026-10-10T12:00:00Z", tba:true, dur:240},
    ],
    watch:[
      {name:"FIAWEC+", url:"https://plus.fiawec.com/en/european-le-mans-series", note:"Free official stream — title decided across LMP2, LMP3 and LMGT3."},
      {name:"YouTube", url:"https://www.youtube.com/@EuropeanLeMansSeriesOfficial", note:"Free, worldwide."},
    ]
  },
];

// ============ STANDINGS ============
const STANDINGS = [
  { group:"USA", items:[
    { key:"nascar", status:"Chase · Rd 2 of 10 (after Gateway)", entries:[
        {pos:1, name:"Denny Hamlin", team:"Joe Gibbs Racing", pts:"2,168 pts"},
        {pos:2, name:"Kyle Larson", team:"Hendrick Motorsports", pts:"2,159 pts"},
        {pos:3, name:"Christopher Bell", team:"Joe Gibbs Racing", pts:"2,150 pts"},
      ], note:"Blaney (2,135), Reddick (2,126), Logano and Gibbs (2,117), Briscoe (2,109), Hocevar (2,080) and Wallace (2,078) fill out the top 10.", link:"https://www.nascar.com/standings/nascar-cup-series/" },
    { key:"imsa", status:"GTP · in progress", entries:[
        {pos:1, name:"Jack Aitken", team:"—"},
        {pos:2, name:"Laurin Heinrich", team:"—"},
        {pos:3, name:"Nasr / Andlauer", team:"—"},
      ], note:"Exact point gaps were inconsistent across recent coverage — check IMSA's official standings for the current tally.", link:"https://www.imsa.com/weathertech/standings/" },
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
    { key:"f1", status:"In progress · 8 rounds left", entries:[
        {pos:1, name:"Kimi Antonelli", team:"Mercedes", pts:"292 pts"},
        {pos:2, name:"George Russell", team:"Mercedes", pts:"211 pts"},
        {pos:3, name:"Lewis Hamilton", team:"Ferrari", pts:"191 pts"},
        {pos:4, name:"Lando Norris", team:"McLaren", pts:"186 pts"},
        {pos:5, name:"Charles Leclerc", team:"Ferrari", pts:"167 pts"},
      ], note:"Verstappen (145), Piastri (120), Hadjar (71), Lawson (59) and Gasly (41) round out the top 10.", link:"https://www.formula1.com/en/results/2026/drivers" },
    { key:"motogp", status:"In progress · after Misano, 8 rounds left", entries:[
        {pos:1, name:"Marc Márquez", team:"Ducati Lenovo", pts:"274 pts"},
        {pos:1, name:"Jorge Martín", team:"Aprilia Racing", pts:"274 pts"},
        {pos:3, name:"Marco Bezzecchi", team:"Aprilia Racing", pts:"241 pts"},
      ], note:"Márquez and Martín are tied on points — Márquez leads on countback (5 wins to 1). Di Giannantonio, Acosta and Ogura complete the top 6.", link:"https://www.motogp.com/en/world-standing/2026/motogp/championship-standings" },
    { key:"wec", status:"Hypercar · after Round 7 of 8 (COTA)", entries:[
        {pos:1, name:"Frijns / Rast", team:"BMW M Team WRT", pts:"75 pts"},
        {pos:1, name:"Conway / Kobayashi / de Vries", team:"Toyota Gazoo Racing", pts:"75 pts"},
      ], note:"Four-way tie at the top — decided at the Monza finale, Nov 6–8.", link:"https://www.fiawec.com/en/page/drivers-classification" },
    { key:"wrc", status:"After Round 10 (Finland) · 2 rounds left", entries:[
        {pos:1, name:"Elfyn Evans", team:"Toyota Gazoo Racing", pts:"216 pts"},
        {pos:2, name:"Sami Pajari", team:"Toyota Gazoo Racing", pts:"196 pts"},
        {pos:3, name:"Oliver Solberg", team:"—", pts:"175 pts"},
      ], link:"https://www.wrc.com/en/calendar" },
    { key:"fe", status:"Season 12 complete · Season 13 opens Dec 18–19 (Jeddah)", entries:[
        {pos:1, name:"Pascal Wehrlein", team:"—", pts:"169 pts"},
      ], note:"Wehrlein led entering the season's final rounds in August — final-standings confirmation wasn't available at time of writing. Season 13 starts fresh with zero points for everyone at Jeddah.", link:"https://www.fiaformulae.com/en/results-and-standings" },
    { key:"f2", status:"In progress · 3 rounds left", entries:[
        {pos:1, name:"Nikola Tsolov", team:"—", pts:"171 pts"},
        {pos:2, name:"Rafael Câmara", team:"—", pts:"166 pts"},
        {pos:3, name:"Gabriele Minì", team:"—", pts:"147 pts"},
      ], link:"https://www.fiaformula2.com/Standings" },
    { key:"f3", status:"Season complete · Madrid, Sept 13", entries:[
        {pos:1, name:"Ugo Ugochukwu", team:"Campos Racing", pts:"159 pts — Champion"},
        {pos:2, name:"Freddie Slater", team:"TRIDENT", pts:"145 pts"},
        {pos:3, name:"Tuukka Taponen", team:"MP Motorsport", pts:"109 pts"},
      ], link:"https://www.fiaformula3.com/Standings" },
    { key:"f1academy", status:"In progress · 2 rounds left", entries:[
        {pos:1, name:"Alisha Palmowski", team:"—", pts:"led after Rd 2"},
      ], note:"Standings after Rounds 3–4 (Silverstone, Zandvoort) weren't available at time of writing — check f1academy.com.", link:"https://www.f1academy.com/Racing-Series/Standings" },
    { key:"italianf4", status:"In progress", entries:[
        {pos:1, name:"Luka Sammalisto", team:"US Racing", pts:"leads by 47"},
        {pos:2, name:"David Cosma-Cristofor", team:"—"},
        {pos:3, name:"Alp Hasan Aksoy", team:"—", pts:"Rookie leader"},
      ], link:"https://www.f4championship.com" },
    { key:"freca", status:"Season complete", entries:[
        {pos:1, name:"Emanuele Olivieri", team:"R-ace GP", pts:"Champion, +9"},
        {pos:2, name:"Sebastian Wheldon", team:"MP Motorsport"},
      ], link:"https://api.fia.com/events/fia-formula-regional-european-championship/season-2026/fia-formula-regional-european" },
    { key:"elms", status:"After Round 4 (pre-Silverstone) · 1 round left", entries:[
        {pos:1, name:"Forestier Racing by Panis", team:"—", pts:"70 pts"},
        {pos:1, name:"United Autosports", team:"—", pts:"70 pts"},
      ], note:"Tied on points after 4 rounds across LMP2, LMP3 and LMGT3 — Forestier leads on countback (2 wins to 1). Silverstone (Sept 11–13) results weren't available at time of writing; only the Algarve finale remains.", link:"https://www.motorsport.com/elms/standings/2026/" },
    { key:"porschesupercup", status:"Season complete · Monza, Sept 4–6", entries:[
        {pos:1, name:"Flynt Schuring", team:"Porsche Junior", pts:"Champion, 3 wins"},
      ], link:"https://racing.porsche.com/mobil-1-supercup/results-season-2026" },
  ]},
  { group:"Asia", items:[
    { key:"superformula", status:"In progress · 2 rounds left", entries:[
        {pos:1, name:"Kakunoshin Ohta", team:"—", pts:"52 pts"},
        {pos:2, name:"Igor Fraga", team:"—", pts:"39 pts"},
      ], note:"Places beyond 2nd weren't consistent across available coverage — check the official site.", link:"https://www.driverdb.com/championships/super-formula/2026/standings" },
    { key:"supergt", status:"GT500 & GT300 · 3 rounds left", entries:[
        {pos:1, name:"Tsuboi / Yamashita", team:"TGR Team au TOM'S", pts:"GT500 leaders"},
        {pos:1, name:"de Oliveira / Kimura", team:"Kondo Racing", pts:"GT300 leaders"},
      ], note:"Two separate classes (GT500 and GT300) run together — each has its own champion. Season cut to seven rounds after the Sepang round was postponed indefinitely.", link:"https://www.motorsport.com/supergt/standings/2026/" },
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
  { key:"f1", remaining:8, raceLabels:["AZE","SIN","USA","MEX","BRA","LAS","QAT","ABU"],
    entries: STANDINGS.flatMap(g=>g.items).find(i=>i.key==="f1").entries.concat([
      {pos:6,name:"Max Verstappen",team:"Red Bull",pts:"145 pts",raw:145},
      {pos:7,name:"Oscar Piastri",team:"McLaren",pts:"120 pts",raw:120},
      {pos:8,name:"Isack Hadjar",team:"Red Bull",pts:"71 pts",raw:71},
      {pos:9,name:"Liam Lawson",team:"RB F1 Team",pts:"59 pts",raw:59},
      {pos:10,name:"Pierre Gasly",team:"Alpine",pts:"41 pts",raw:41},
    ]).map(e=>({...e, raw: e.raw ?? parseInt(e.pts)})) },
  { key:"motogp", remaining:8, raceLabels:["AUT","JPN","INA","AUS","MAL","QAT","POR","VAL"], entries:[
      {pos:1,name:"Marc Márquez",team:"Ducati Lenovo",raw:274},
      {pos:2,name:"Jorge Martín",team:"Aprilia Racing",raw:274},
      {pos:3,name:"Marco Bezzecchi",team:"Aprilia Racing",raw:241},
      {pos:4,name:"Fabio di Giannantonio",team:"VR46 Ducati",raw:223},
      {pos:5,name:"Pedro Acosta",team:"Red Bull KTM",raw:209},
      {pos:6,name:"Ai Ogura",team:"Trackhouse Aprilia",raw:203},
      {pos:7,name:"Raul Fernandez",team:"Trackhouse Aprilia",raw:199},
      {pos:8,name:"Alex Márquez",team:"Gresini Ducati",raw:153},
      {pos:9,name:"Francesco Bagnaia",team:"Ducati",raw:143},
      {pos:10,name:"Fermin Aldeguer",team:"Gresini Ducati",raw:105},
    ]},
  { key:"nascar", remaining:8, raceLabels:["BRI","KAN","LVS","ROV","PHX","TAL","MAR","HOM"], entries:[
      {pos:1,name:"Denny Hamlin",team:"Joe Gibbs Racing",raw:2168},
      {pos:2,name:"Kyle Larson",team:"Hendrick Motorsports",raw:2159},
      {pos:3,name:"Christopher Bell",team:"Joe Gibbs Racing",raw:2150},
      {pos:4,name:"Ryan Blaney",team:"Team Penske",raw:2135},
      {pos:5,name:"Tyler Reddick",team:"23XI Racing",raw:2126},
      {pos:6,name:"Joey Logano",team:"Team Penske",raw:2117},
      {pos:7,name:"Ty Gibbs",team:"Joe Gibbs Racing",raw:2117},
      {pos:8,name:"Chase Briscoe",team:"Joe Gibbs Racing",raw:2109},
      {pos:9,name:"Carson Hocevar",team:"Spire Motorsports",raw:2080},
      {pos:10,name:"Bubba Wallace",team:"23XI Racing",raw:2078},
    ]},
  { key:"superformula", remaining:2, raceLabels:["FUJ","SUZ"], entries:[
      {pos:1,name:"Kakunoshin Ohta",team:"—",raw:52},
      {pos:2,name:"Igor Fraga",team:"—",raw:39},
    ]},
];

// ============ RISING STARS ============
const TIER_WEIGHT = { f2:9, f3:7, f1academy:6, indynxt:6, freca:5, fregam:5, italianf4:3, f4us:3 };
const POS_MULT = { 1:1, 2:0.75, 3:0.55 };
const PROSPECTS = [
  {name:"Nikola Tsolov", cat:"f2", pos:1, note:"Leads F2 by 5, 3 rounds left"},
  {name:"Rafael Câmara", cat:"f2", pos:2, note:"6 back in F2"},
  {name:"Ugo Ugochukwu", cat:"f3", pos:1, note:"2026 F3 champion"},
  {name:"Freddie Slater", cat:"f3", pos:2, note:"F3 runner-up, 14 back"},
  {name:"Nikita Johnson", cat:"indynxt", pos:1, note:"2026 Indy NXT champion"},
  {name:"Alisha Palmowski", cat:"f1academy", pos:1, note:"Led F1 Academy after Rd 2"},
  {name:"Emanuele Olivieri", cat:"freca", pos:1, note:"2026 FRECA champion"},
  {name:"Sebastian Wheldon", cat:"freca", pos:2, note:"FRECA runner-up, −9"},
  {name:"Luka Sammalisto", cat:"italianf4", pos:1, note:"Leads Italian F4 by 47"},
  {name:"Gastón Irazú", cat:"f4us", pos:1, note:"Leads F4 US"},
];

