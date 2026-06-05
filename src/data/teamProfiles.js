/**
 * 2026 FIFA World Cup — Complete Team Profiles
 * ═══════════════════════════════════════════════════════
 * STATIC DATA ONLY. Nothing in this file calls an API.
 * The Groq AI is ONLY used for: prediction, biggestThreat,
 * groupAnalysis, pathCondition, roast.
 */

const TEAM_PROFILES = {
  mexico: {
    id: "mexico",
    formation: "4-3-3",
    managerName: "Javier Aguirre",
    managerNationality: "Mexican",
    managerSince: "2024",
    managerNote: "Third stint in charge. Experienced tournament manager who previously led Mexico at 2002 and 2010 World Cups. Known for pragmatic defensive setups.",
    style: "Compact and disciplined defensively with quick attacking transitions through the flanks. Aguirre favours a mid-block shape that absorbs pressure before releasing pacy wingers. Set pieces are well-drilled. Mexico defend narrow and rely on fullback overlaps for width in possession.",
    strengths: [
      {
        area: "Home Advantage",
        detail: "Playing group stage matches at Estadio Azteca in Mexico City. The altitude (2,240m) and hostile atmosphere have historically been a fortress — Mexico have lost just twice at Azteca in World Cup qualifiers this cycle."
      },
      {
        area: "Transition Speed",
        detail: "Lozano, Vega, and Huerta form one of CONCACAF's quickest frontlines. Mexico are devastating on the counter when opponents commit bodies forward."
      },
      {
        area: "Tournament Experience",
        detail: "17th consecutive World Cup appearance. The squad knows how to navigate group stages — Mexico have advanced from the group in 7 of the last 8 World Cups."
      }
    ],
    weaknesses: [
      {
        area: "Round of 16 Ceiling",
        detail: "Seven consecutive Round of 16 exits (2006-2022). The psychological barrier of the 'quinto partido' (fifth match) haunts this program."
      },
      {
        area: "Centre-Back Depth",
        detail: "Aging central defence lacks pace against elite forwards. Vulnerable to direct, fast attacks through the middle."
      }
    ],
    historicalBest: "Quarter-finals — 1970, 1986",
    worldCupAppearances: 17,
    worldCupWins: 0,
    worldCupNarrative: "Mexico's World Cup history is defined by passionate home tournaments in 1970 and 1986, where they reached the quarter-finals both times. Since then, seven consecutive Round of 16 exits have become a national obsession. The 'quinto partido' curse is real — Mexico simply cannot break through to the last eight. As co-hosts in 2026, this is their best chance in 40 years.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Group Stage",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Round of 16",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Round of 16",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Round of 16",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Round of 16",
        host: "Germany"
      }
    ],
    achievements: [
      "CONCACAF Gold Cup Winners — 12 titles (record holders)",
      "FIFA Confederations Cup Winners — 1999",
      "Olympic Gold Medal — 2012 London",
      "Quarter-finals at 1970 and 1986 World Cups (both as hosts)",
      "17 consecutive World Cup appearances"
    ],
    keyPlayers: [
      {
        name: "Hirving Lozano",
        position: "Right Winger",
        club: "PSV Eindhoven",
        number: 22,
        whyNow: "Captain and talisman entering his third World Cup at 30. Scored the iconic goal against Germany in 2018. Returned to Europe with PSV and rediscovered his best form — 14 goals and 8 assists in the Eredivisie this season. His experience and big-game mentality make him indispensable.",
        recentForm: "14 goals, 8 assists in Eredivisie 2024-25. PSV title winner. Mexico's all-time leading World Cup scorer among active players.",
        worldCupRecord: "Scored against Germany in 2018 group stage — one of Mexico's most iconic World Cup moments. 3 goals across 2018 and 2022."
      },
      {
        name: "Edson Alvarez",
        position: "Defensive Midfielder",
        club: "West Ham United",
        number: 4,
        whyNow: "Mexico's midfield anchor and the player who makes the entire system function. Physically dominant and tactically intelligent. Despite West Ham's inconsistency, Alvarez has been their best midfielder — his ability to shield the back four is critical to Mexico's compact shape.",
        recentForm: "Premier League regular. Led Mexico in tackles and interceptions during qualifying. Named CONCACAF Best XI in 2024.",
        worldCupRecord: "Started every match at the 2022 World Cup. 2 World Cup appearances. The defensive heartbeat of the team."
      },
      {
        name: "Santiago Gimenez",
        position: "Centre Forward",
        club: "Feyenoord",
        number: 9,
        whyNow: "Mexico's most prolific striker in a generation. 22 goals in the Eredivisie this season — the league's top scorer. At 25, he is entering his absolute prime and arrives at a home World Cup with supreme confidence. If Mexico are to break the Round of 16 curse, Gimenez must deliver.",
        recentForm: "22 Eredivisie goals (league top scorer). Champions League group stage goals against Atletico Madrid and Celtic. Mexico's top scorer in qualifying.",
        worldCupRecord: "First World Cup. But his form suggests he is ready for the biggest stage."
      },
      {
        name: "Cesar Huerta",
        position: "Left Winger",
        club: "Pumas UNAM",
        number: 17,
        whyNow: "The breakout star of Mexican football in 2025. Explosive pace, direct running, and an eye for goal from the left wing. Led Liga MX in assists and earned a call-up based purely on form, not reputation. Gives Mexico an unpredictable left-sided threat.",
        recentForm: "Liga MX best young player. 9 goals, 11 assists in Liga MX 2024-25. Called up to every squad since September 2024.",
        worldCupRecord: "First World Cup. Young and fearless — exactly what Mexico need."
      },
      {
        name: "Guillermo Ochoa",
        position: "Goalkeeper",
        club: "Club America",
        number: 13,
        whyNow: "At 41, this is almost certainly Ochoa's final tournament — his sixth World Cup, tying the all-time record. His experience and shot-stopping ability in knockout moments are irreplaceable. The 2014 and 2018 World Cups featured iconic Ochoa performances. His leadership value alone justifies selection.",
        recentForm: "Club America starter. Experience of 5 previous World Cups is unmatched. Still commanding despite his age.",
        worldCupRecord: "5 World Cups (2006, 2010, 2014, 2018, 2022). Legendary performance vs Brazil in 2014 with multiple world-class saves."
      }
    ],
    history: {
      openingLine: "The Azteca. The altitude. The passion. And yet, the fifth match remains an unreachable summit.",
      chapters: [
        {
          year: "1986",
          title: "THE HOME GLORY",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Mexico, 1986. Under the hot sun, a nation united by tragedy and football. In the Round of 16, Manuel Negrete struck a scissor kick of pure beauty. The stadium erupted. Mexico reached the quarter-finals, their best ever. But West Germany stood in the way, winning on penalties. The dream ended, but the standard was set."
        },
        {
          year: "2018",
          title: "MOSCOW EARTHQUAKE",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "June 17, 2018. Moscow. Mexico against the giants of Germany. In the 35th minute, Hirving Lozano cut inside and unleashed a low drive into the bottom corner. Eruptive joy in Mexico City, measured on seismographs. A historic 1-0 win. But the Round of 16 curse would hold them once again."
        }
      ],
      heartbreak: "June 29, 2014. Fortaleza. Mexico lead Netherlands 1-0 in the 88th minute. Sneijder equalizes. Then, minute 94. Robben goes down. Penalty. Huntelaar scores. 'No era penal' becomes a national cry. The curse strikes again.",
      gloryMoment: "June 17, 2018. Moscow. 35th minute. Hirving Lozano lashes the ball into the bottom corner to defeat Germany. The giant slayed.",
      approaching2026: "Co-hosts. The Azteca awaits. Javier Aguirre must break the Round of 16 ceiling once and for all. This is their moment.",
      statLine: [
        "Seventeen World Cup appearances",
        "Seven consecutive Round of 16 exits between 1994 and 2018",
        "Reached the quarter-finals twice, both as hosts (1970, 1986)"
      ]
    }
  },
  "south-africa": {
    id: "south-africa",
    formation: "4-3-3",
    managerName: "Hugo Broos",
    managerNationality: "Belgian",
    managerSince: "2021",
    managerNote: "Transformed Bafana Bafana from AFCON no-shows to World Cup qualifiers. Won 2023 AFCON quarter-final, qualified South Africa for their first WC since 2010.",
    style: "Direct and physical with an emphasis on winning midfield duels. South Africa defend in a compact 4-5-1 out of possession before launching quick transitions through wide players. They are well-organised but lack the technical quality to dominate possession against top teams.",
    strengths: [
      {
        area: "Physical Intensity",
        detail: "One of the most physically demanding teams in CAF. They win more aerial duels per game than any other African qualifier."
      },
      {
        area: "Team Spirit",
        detail: "Broos has built genuine unity and belief. The squad overachieved in qualifying and will play with nothing to lose."
      }
    ],
    weaknesses: [
      {
        area: "Individual Quality",
        detail: "No truly world-class individual in the squad. The lack of a match-winner against elite opposition is the fundamental limitation."
      },
      {
        area: "Goalscoring",
        detail: "Scored the fewest goals of any CAF qualifier. Creating and converting chances against organized defenses is a problem."
      }
    ],
    historicalBest: "Group Stage — 1998, 2002, 2010",
    worldCupAppearances: 4,
    worldCupWins: 0,
    worldCupNarrative: "South Africa hosted the 2010 World Cup — the first on African soil — but were eliminated in the group stage. They have never advanced beyond the group phase. This is their first qualification on merit since 2002 and represents a genuine resurgence under Hugo Broos.",
    lastFiveWCs: [
      {
        year: 2010,
        result: "Group Stage",
        host: "South Africa"
      },
      {
        year: 2002,
        result: "Group Stage",
        host: "Korea/Japan"
      },
      {
        year: 1998,
        result: "Group Stage",
        host: "France"
      }
    ],
    achievements: [
      "AFCON Winners — 1996 (as hosts)",
      "2010 World Cup Hosts",
      "2023 AFCON Quarter-finalists",
      "First World Cup qualification since 2010"
    ],
    keyPlayers: [
      {
        name: "Percy Tau",
        position: "Forward",
        club: "Al Ahly",
        number: 10,
        whyNow: "South Africa's most experienced attacker. CAF Champions League winner with Al Ahly. His technical quality and international experience make him the team's go-to creative outlet.",
        recentForm: "CAF Champions League regular. South Africa's leading assist provider in qualifying.",
        worldCupRecord: "First World Cup. But brings continental experience from Africa's biggest club competition."
      },
      {
        name: "Ronwen Williams",
        position: "Goalkeeper",
        club: "Mamelodi Sundowns",
        number: 1,
        whyNow: "CAF Goalkeeper of the Year. The best goalkeeper in African football. His penalty-saving heroics at the 2023 AFCON made him a national hero. He is the single most important player in the squad.",
        recentForm: "CAF Goalkeeper of the Year 2023, 2024. Multiple clean sheets in qualifying. Mamelodi Sundowns domestic dominance.",
        worldCupRecord: "First World Cup. But arrives as Africa's premier shot-stopper."
      },
      {
        name: "Themba Zwane",
        position: "Attacking Midfielder",
        club: "Mamelodi Sundowns",
        number: 8,
        whyNow: "South Africa's most creative midfielder. At 35, this is his last chance at a World Cup. His vision and passing range unlock defenses that the rest of the squad cannot.",
        recentForm: "Multiple PSL titles with Sundowns. South Africa's creative heartbeat in qualifying.",
        worldCupRecord: "First World Cup. A veteran who has waited his entire career for this moment."
      },
      {
        name: "Lyle Foster",
        position: "Centre Forward",
        club: "Burnley",
        number: 9,
        whyNow: "South Africa's only striker playing in a top European league. Physical presence and aerial ability give Bafana Bafana a focal point. His Premier League experience is vital against Group A opponents.",
        recentForm: "Burnley regular. Premier League experience. South Africa's top scorer in qualifying.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "Bafana Bafana. The vuvuzelas of 2010. A nation that united the world, still seeking its first knockout step.",
      chapters: [
        {
          year: "2010",
          title: "TSHABALALA'S ROCKET",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "June 11, 2010. Soccer City. The first World Cup in Africa. In the 55th minute, Siphiwe Tshabalala receives the ball. A left-footed strike of pure joy. 'Goal for South Africa! Goal for all of Africa!' A moment of absolute ecstasy. But they finished third in the group, becoming the first hosts to exit early."
        }
      ],
      heartbreak: "June 22, 2010. Bloemfontein. Despite beating France 2-1 in a historic victory, South Africa are eliminated on goal difference. So close to history.",
      gloryMoment: "June 11, 2010. Johannesburg. 55th minute. Siphiwe Tshabalala fires a rocket into the top corner. The sound of a million vuvuzelas.",
      approaching2026: "Back on the big stage under Hugo Broos. South Africa must prove they belong among the elite.",
      statLine: [
        "Three World Cup appearances",
        "First host nation to be eliminated in the group stage (2010)",
        "Beat France 2-1 in 2010"
      ]
    }
  },
  "korea-republic": {
    id: "korea-republic",
    formation: "4-2-3-1",
    managerName: "Hong Myung-bo",
    managerNationality: "South Korean",
    managerSince: "2024",
    managerNote: "2002 World Cup legend who captained South Korea to the semi-finals. Won Asian Games gold as manager. Now tasked with recapturing the spirit of 2002 in Son Heung-min's final World Cup.",
    style: "High-tempo pressing with technical midfield play. Korea combine Asian athleticism with European tactical discipline. They press aggressively in the opponent's half and transition quickly through Son. Defensively disciplined with a well-organized back four.",
    strengths: [
      {
        area: "Son Heung-min Factor",
        detail: "One of the greatest Asian footballers ever, entering his likely final World Cup at 33. His pace, finishing, and big-game experience lift the entire squad."
      },
      {
        area: "Pressing Intensity",
        detail: "Korea's high press consistently disrupts opposition build-up. They led AFC qualifiers in high turnovers and pressing sequences."
      }
    ],
    weaknesses: [
      {
        area: "Defensive Vulnerability",
        detail: "Conceded too many goals from set pieces in qualifying. Centre-back pairing lacks pace against top forwards."
      },
      {
        area: "Post-Son Transition",
        detail: "Over-reliance on Son. When he is marked out of games, Korea lack a secondary creative option of comparable quality."
      }
    ],
    historicalBest: "Semi-finals — 2002",
    worldCupAppearances: 11,
    worldCupWins: 0,
    worldCupNarrative: "The 2002 World Cup on home soil remains the defining moment — South Korea reached the semi-finals under Guus Hiddink, beating Spain, Italy, and Portugal along the way. Since then, three group-stage exits and one Round of 16 appearance. Son Heung-min's final tournament adds enormous emotional weight.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Round of 16",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Group Stage",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Group Stage",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Round of 16",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Group Stage",
        host: "Germany"
      }
    ],
    achievements: [
      "2002 World Cup Semi-finalists (best Asian result ever)",
      "Asian Cup Winners — 1956, 1960",
      "Asian Games Gold — 2014, 2022",
      "11 consecutive World Cup appearances",
      "Beat Germany 2-0 at 2018 World Cup"
    ],
    keyPlayers: [
      {
        name: "Son Heung-min",
        position: "Forward",
        club: "Tottenham Hotspur",
        number: 7,
        whyNow: "Captain and national icon entering his likely final World Cup at 33. Still Tottenham's most dangerous attacker with 15 goals this season. His pace has slightly diminished but his movement, finishing, and leadership are at their peak. This is his last dance — and the entire country knows it.",
        recentForm: "15 goals, 7 assists in the Premier League 2024-25. Tottenham captain. Still creating at elite levels despite age.",
        worldCupRecord: "3 goals across 2018 and 2022 World Cups. Scored the winner vs Portugal in 2022 group stage that sent Korea through."
      },
      {
        name: "Lee Kang-in",
        position: "Attacking Midfielder",
        club: "Paris Saint-Germain",
        number: 10,
        whyNow: "Korea's most technically gifted player at 25. PSG regular who thrives in tight spaces. Won the Asian Cup Golden Ball in 2024. He is the creative successor to Son — and at this World Cup, they play together for the last time.",
        recentForm: "PSG Champions League winner. Regular starter in Ligue 1. Asian Cup 2024 Golden Ball winner.",
        worldCupRecord: "2022 World Cup squad member. Now a bona fide starter and Korea's primary playmaker."
      },
      {
        name: "Kim Min-jae",
        position: "Centre-Back",
        club: "Bayern Munich",
        number: 3,
        whyNow: "The 'Monster' — the best Asian defender in the world. Bayern Munich starter who has faced the best forwards in Europe weekly. His aerial dominance and recovery pace are what allow Korea to press high without being exposed.",
        recentForm: "Bayern Munich regular. Bundesliga and Champions League experience. Korea's most reliable defender.",
        worldCupRecord: "Started all 4 matches at the 2022 World Cup. Named in the team's best XI."
      },
      {
        name: "Hwang Hee-chan",
        position: "Forward",
        club: "Wolverhampton Wanderers",
        number: 11,
        whyNow: "Premier League attacker with explosive pace and direct running. Provides the secondary goal threat Korea desperately need alongside Son. 10 Premier League goals this season — his best return in England.",
        recentForm: "10 Premier League goals 2024-25. Wolves' top scorer. Korea's second-highest scorer in qualifying.",
        worldCupRecord: "2022 World Cup — scored the winning goal vs Portugal that sent Korea to the Round of 16."
      }
    ],
    history: {
      openingLine: "The Red Devils. The miracle of 2002. A legacy of relentless energy.",
      chapters: [
        {
          year: "2002",
          title: "THE MIRACLE",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Daejeon, June 18, 2002. South Korea against Italy. Ahn Jung-hwan. A golden goal in the 117th minute. The co-hosts reach the semi-finals under Guus Hiddink. An Asian nation in the final four. Unbelievable. Historical."
        },
        {
          year: "2018",
          title: "THE GERMAN FALL",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Kazan, June 27, 2018. South Korea are already out. But Germany need a win. Deep in stoppage time, Kim Young-gwon scores. Then, Son Heung-min sprints into an empty half. 2-0. The champions are dead."
        }
      ],
      heartbreak: "June 26, 2010. Port Elizabeth. Luis Suarez scores an 80th-minute curler. Korea's best team outside of 2002 falls in the Round of 16.",
      gloryMoment: "June 18, 2002. Daejeon. 117th minute. Ahn Jung-hwan rises to head the golden goal past Buffon. Italy are out.",
      approaching2026: "Son Heung-min's final tournament. The stakes are emotional, the path is hard, the goal is clear.",
      statLine: [
        "Eleven World Cup appearances",
        "Best finish: Fourth place (2002)",
        "First Asian team to reach the semi-finals"
      ]
    }
  },
  czechia: {
    id: "czechia",
    formation: "3-5-2",
    managerName: "Ivan Hasek",
    managerNationality: "Czech",
    managerSince: "2024",
    managerNote: "Appointed after Euro 2024. Former Czech international building a young, energetic squad focused on tactical discipline.",
    style: "Organized and compact with a back three that provides defensive security. Czechia play a patient build-up through midfield and rely on wing-backs for width. They are difficult to break down but lack the individual quality to hurt elite teams.",
    strengths: [
      {
        area: "Defensive Structure",
        detail: "Well-drilled back three that rarely concedes from open play. Led their qualifying group in clean sheets."
      },
      {
        area: "Set Piece Threat",
        detail: "Tall squad with excellent aerial presence. Score a high percentage of goals from corners and free kicks."
      }
    ],
    weaknesses: [
      {
        area: "Creative Limitations",
        detail: "Struggle to create chances against deep-sitting defenses. Lack a genuine number 10 playmaker."
      },
      {
        area: "Pace Deficit",
        detail: "Wing-backs and forwards lack the pace to trouble top defenses on the counter."
      }
    ],
    historicalBest: "Runner-up — 1934, 1962 (as Czechoslovakia)",
    worldCupAppearances: 11,
    worldCupWins: 0,
    worldCupNarrative: "As Czechoslovakia, they were twice World Cup runners-up (1934, 1962). Since the 1993 split, Czechia have appeared at one World Cup (2006, group stage exit). Their Euro 2024 campaign ended in the group stage. This is a rebuilding generation.",
    lastFiveWCs: [
      {
        year: 2006,
        result: "Group Stage",
        host: "Germany"
      }
    ],
    achievements: [
      "World Cup Runners-up — 1934, 1962 (as Czechoslovakia)",
      "UEFA Euro Winners — 1976 (as Czechoslovakia)",
      "Euro 2004 Semi-finalists",
      "Euro 1996 Runners-up"
    ],
    keyPlayers: [
      {
        name: "Patrik Schick",
        position: "Centre Forward",
        club: "Bayer Leverkusen",
        number: 10,
        whyNow: "Czechia's most dangerous finisher. His Euro 2020 wonder goal from halfway remains iconic. When fit, he is a clinical striker capable of scoring against anyone. Leverkusen's Bundesliga title in 2024 showed his quality at the highest level.",
        recentForm: "Bayer Leverkusen attacker. Bundesliga champion 2024. Czechia's top scorer in qualifying.",
        worldCupRecord: "First World Cup. But 2020 Euro hero with 5 goals including that halfway-line strike vs Scotland."
      },
      {
        name: "Adam Hlozek",
        position: "Forward",
        club: "Bayer Leverkusen",
        number: 19,
        whyNow: "Young, versatile forward who can play across the front line. Part of Leverkusen's unbeaten Bundesliga-winning squad. At 23, he represents the future of Czech football.",
        recentForm: "Leverkusen squad player. Bundesliga champion. Regular starter for Czechia.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Tomas Soucek",
        position: "Central Midfielder",
        club: "West Ham United",
        number: 28,
        whyNow: "Box-to-box midfielder with a knack for late arriving runs into the penalty area. Provides aerial threat and engine in midfield. Premier League experience makes him Czechia's most important outfield player.",
        recentForm: "West Ham regular. Premier League experience. Czechia's vice-captain.",
        worldCupRecord: "First World Cup. But 80+ caps and multiple Euros for Czechia."
      },
      {
        name: "Jindrich Stanek",
        position: "Goalkeeper",
        club: "Slavia Prague",
        number: 1,
        whyNow: "Czechia's number one after strong performances in qualifying. Reliable shot-stopper with good command of his area.",
        recentForm: "Slavia Prague starter. Czech First League champion. Strong qualifying campaign.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "The ghosts of Czechoslovakia. Twice runners-up, now a rebuilding generation seeking a spark.",
      chapters: [
        {
          year: "1962",
          title: "THE NEAR MISS",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Chile, 1962. Czechoslovakia reach the final. Masopust scores first against Brazil. But Amarildo, Zito, and Vavá strike back. 3-1. The cup goes to Brazil, but the Czech steel was proven."
        }
      ],
      heartbreak: "June 22, 2006. Hamburg. Czechia need a win against Italy. Materazzi scores. Polak is sent off. Inzaghi finishes it. The golden generation of Nedved exits in the group.",
      gloryMoment: "June 17, 1962. Santiago. Masopust opens the scoring in the World Cup final. A moment of peak hope.",
      approaching2026: "First World Cup qualification in 20 years. Hasek must lead a young side to respect.",
      statLine: [
        "Eleven World Cup appearances (including Czechoslovakia)",
        "Two-time runners-up (1934, 1962)"
      ]
    }
  },
  canada: {
    id: "canada",
    formation: "3-4-3",
    managerName: "Jesse Marsch",
    managerNationality: "American",
    managerSince: "2024",
    managerNote: "Former Leeds United and RB Leipzig manager. High-pressing specialist who has injected tactical structure into a squad rich in individual talent. First non-Canadian to manage the team in a World Cup.",
    style: "High-energy pressing game modelled on the Red Bull school. Canada press aggressively and transition quickly. Davies provides world-class pace on the left. The 3-4-3 shape allows attacking wing-backs to overwhelm opponents wide.",
    strengths: [
      {
        area: "Alphonso Davies",
        detail: "The fastest defender in world football. His marauding runs from left wing-back stretch any defense. A genuine match-winner who can change games single-handedly."
      },
      {
        area: "Co-Host Energy",
        detail: "Playing in front of home crowds for the first time in a World Cup. The emotional boost is significant — Canada will be the crowd's second team."
      }
    ],
    weaknesses: [
      {
        area: "Defensive Fragility",
        detail: "Conceded the most goals of any CONCACAF qualifier. The back three is vulnerable when Davies pushes forward."
      },
      {
        area: "Goalscoring Depth",
        detail: "Beyond Jonathan David, Canada lack proven finishers. If David is marked out, the goals dry up."
      }
    ],
    historicalBest: "Group Stage — 1986, 2022",
    worldCupAppearances: 3,
    worldCupWins: 0,
    worldCupNarrative: "Canada's football story is one of hockey-dominated obscurity punctuated by rare moments of glory. After 36 years, they returned to the World Cup in 2022 in Qatar, losing all three games but earning respect. As co-hosts, expectations are higher than ever before.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Group Stage",
        host: "Qatar"
      },
      {
        year: 1986,
        result: "Group Stage",
        host: "Mexico"
      }
    ],
    achievements: [
      "CONCACAF Gold Cup Winners — 2000",
      "2022 World Cup Qualification (first since 1986)",
      "2026 World Cup Co-hosts",
      "2023 CONCACAF Nations League Finalists"
    ],
    keyPlayers: [
      {
        name: "Alphonso Davies",
        position: "Left Wing-Back",
        club: "Real Madrid",
        number: 19,
        whyNow: "Moved to Real Madrid in 2025 and immediately became one of La Liga's best fullbacks. At 25, he is in his absolute prime — the fastest player at the tournament and Canada's most valuable footballer by an enormous margin. His Champions League pedigree with Bayern and Real makes him one of the few genuinely world-class players outside the traditional powers.",
        recentForm: "Real Madrid regular. La Liga and Champions League experience. Named CONCACAF Player of the Year 2024.",
        worldCupRecord: "Started all 3 games at the 2022 World Cup. Canada's youngest-ever World Cup player."
      },
      {
        name: "Jonathan David",
        position: "Centre Forward",
        club: "Arsenal",
        number: 20,
        whyNow: "Canada's all-time top scorer. Transferred to Arsenal in 2025 and has proven his quality in the Premier League. His movement and finishing make him the focal point of Canada's attack. Without his goals, Canada do not advance.",
        recentForm: "Arsenal forward. 12 Premier League goals. Canada's all-time record scorer with 30+ international goals.",
        worldCupRecord: "2022 World Cup — scored Canada's first-ever World Cup goal (vs Croatia)."
      },
      {
        name: "Tajon Buchanan",
        position: "Right Wing-Back",
        club: "Inter Milan",
        number: 11,
        whyNow: "Explosive pace and directness from the right. Serie A experience at Inter gives him tactical awareness. Complements Davies on the opposite flank to give Canada width that few teams can cope with.",
        recentForm: "Inter Milan squad player. Serie A champion. Canada's most direct wide threat on the right.",
        worldCupRecord: "2022 World Cup starter."
      },
      {
        name: "Ismael Kone",
        position: "Central Midfielder",
        club: "Marseille",
        number: 8,
        whyNow: "Dynamic box-to-box midfielder who provides the engine in Canada's pressing system. His Ligue 1 experience gives him the quality to compete in midfield against top opposition.",
        recentForm: "Olympique Marseille regular. Ligue 1 experience. Canada's most progressive midfielder.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "A hockey nation finding its soul on the grass.",
      chapters: [
        {
          year: "2022",
          title: "THE RETURN",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Qatar, 2022. Canada return after 36 years. Against Belgium, they dominate but lose. Against Croatia, Alphonso Davies heads home in the 2nd minute. Their first World Cup goal. They lose all three, but the seed is planted."
        }
      ],
      heartbreak: "November 23, 2022. Al Rayyan. Alphonso Davies steps up for a penalty against Thibaut Courtois. Saved. The chance to lead Belgium slips away.",
      gloryMoment: "November 27, 2022. Al Rayyan. 2nd minute. Alphonso Davies rises high, heading home Canada's first ever World Cup goal.",
      approaching2026: "Co-hosts. Jesse Marsch's high press. Canada must win their first World Cup match on home soil.",
      statLine: [
        "Two World Cup appearances",
        "Alphonso Davies scored their first goal in 2022"
      ]
    }
  },
  "bosnia-and-herzegovina": {
    id: "bosnia-and-herzegovina",
    formation: "4-3-3",
    managerName: "Sergej Barbarez",
    managerNationality: "Bosnian",
    managerSince: "2024",
    managerNote: "Former Bosnian international striker. Appointed to rebuild after a difficult qualifying cycle. Brings passion and connection to the players.",
    style: "Direct and physical. Bosnia play a simple, effective style built on winning second balls and exploiting set pieces. They are hard to beat and organised defensively, but lack the creative quality to dominate possession.",
    strengths: [
      {
        area: "Physical Presence",
        detail: "One of the most physically imposing squads in the tournament. Win aerial duels consistently and are dangerous from set pieces."
      },
      {
        area: "Dzeko Legacy",
        detail: "Even in the twilight of his career, Edin Dzeko's experience and leadership elevate the entire squad."
      }
    ],
    weaknesses: [
      {
        area: "Technical Limitations",
        detail: "Midfield lacks the passing quality to control games against top opponents."
      },
      {
        area: "Squad Depth",
        detail: "First XI is competitive but the bench lacks quality. Injuries to key players would be devastating."
      }
    ],
    historicalBest: "Group Stage — 2014",
    worldCupAppearances: 2,
    worldCupWins: 0,
    worldCupNarrative: "Bosnia's first and only World Cup was 2014 in Brazil, where they were eliminated in the group stage despite beating Iran. This is only their second ever appearance.",
    lastFiveWCs: [
      {
        year: 2014,
        result: "Group Stage",
        host: "Brazil"
      }
    ],
    achievements: [
      "2014 World Cup Qualification (first ever)",
      "2026 World Cup Qualification"
    ],
    keyPlayers: [
      {
        name: "Edin Dzeko",
        position: "Centre Forward",
        club: "Fenerbahce",
        number: 11,
        whyNow: "Bosnia's all-time top scorer and captain at 40. His last World Cup and the emotional leader of the squad. Still scoring regularly in the Turkish Super Lig.",
        recentForm: "Fenerbahce regular. Turkish Super Lig experience. Bosnia's all-time record scorer.",
        worldCupRecord: "2014 World Cup — scored Bosnia's first-ever World Cup goal."
      },
      {
        name: "Ermedin Demirovic",
        position: "Forward",
        club: "VfB Stuttgart",
        number: 9,
        whyNow: "Bundesliga forward who brings energy, pressing, and goals. Stuttgart's Champions League campaign raised his profile. The natural successor to Dzeko as Bosnia's striker.",
        recentForm: "Stuttgart forward. Bundesliga and Champions League experience. Bosnia's top scorer in qualifying.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Anel Ahmedhodzic",
        position: "Centre-Back",
        club: "Sheffield United",
        number: 6,
        whyNow: "Physical, commanding centre-back with English Championship experience. Bosnia's defensive leader and best aerial presence.",
        recentForm: "Sheffield United regular. Bosnia's defensive anchor in qualifying.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Benjamin Tahirovic",
        position: "Central Midfielder",
        club: "Ajax",
        number: 23,
        whyNow: "Young, energetic midfielder who provides the dynamism in Bosnia's engine room. Ajax regular with European experience.",
        recentForm: "Ajax starter. Eredivisie experience. Bosnia's most progressive midfielder.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "A country born of conflict, finding unity in a single golden ball.",
      chapters: [
        {
          year: "2014",
          title: "THE DEBUT",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Rio, 2014. A historic debut at the Maracana against Argentina. An own goal in the 3rd minute, then Messi scores. But Ibisevic scores in the 84th minute. They beat Iran 3-1, but the group stage exit was painful."
        }
      ],
      heartbreak: "June 21, 2014. Cuiaba. Dzeko's goal is wrongly ruled offside. Emenike assists Odemwingie. Bosnia lose 1-0 to Nigeria and are out.",
      gloryMoment: "June 25, 2014. Salvador. Edin Dzeko scores a brilliant opener against Iran to secure their first World Cup win.",
      approaching2026: "Barbarez's rebuild. Can the dragons fly again in America?",
      statLine: [
        "One World Cup appearance (2014)",
        "Edin Dzeko is their top scorer"
      ]
    }
  },
  qatar: {
    id: "qatar",
    formation: "5-3-2",
    managerName: "Carlos Queiroz",
    managerNationality: "Portuguese",
    managerSince: "2025",
    managerNote: "Experienced World Cup manager who previously led Portugal, Iran (2 WCs), Colombia, and Egypt. Hired to add tournament experience after Qatar's disastrous 2022.",
    style: "Defensive and disciplined. Qatar sit deep in a low block and look to frustrate opponents before hitting on the counter. The 5-3-2 provides numerical superiority in defense. Possession is sacrificed for structural solidity.",
    strengths: [
      {
        area: "Organisation",
        detail: "Well-drilled defensive unit that is very difficult to break down when in their shape."
      },
      {
        area: "Tournament Hosting Experience",
        detail: "Having hosted in 2022, the squad has major tournament experience despite limited quality."
      }
    ],
    weaknesses: [
      {
        area: "Quality Gap",
        detail: "Lost all 3 games at the 2022 World Cup on home soil without scoring. The gap to competitive teams is significant."
      },
      {
        area: "Domestic League Limitations",
        detail: "Most players ply their trade in the Qatar Stars League, which is not competitive with European or top South American leagues."
      }
    ],
    historicalBest: "Group Stage — 2022",
    worldCupAppearances: 2,
    worldCupWins: 0,
    worldCupNarrative: "Qatar's 2022 World Cup as hosts was a historic low — they became the first host nation to lose all three group games. They won the Asian Cup in 2019 and 2023, proving their regional strength, but the gap to World Cup level is vast.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Group Stage",
        host: "Qatar"
      }
    ],
    achievements: [
      "Asian Cup Winners — 2019, 2023",
      "2022 World Cup Hosts",
      "CONCACAF Gold Cup Semi-finalists 2021 (as guests)"
    ],
    keyPlayers: [
      {
        name: "Akram Afif",
        position: "Forward",
        club: "Al Sadd",
        number: 11,
        whyNow: "Asian Player of the Year 2024. Qatar's most talented player and the talisman of the squad. His dribbling and creativity are the team's primary attacking weapon.",
        recentForm: "Asian Player of the Year 2024. Asian Cup 2023 Golden Ball winner. Al Sadd top scorer.",
        worldCupRecord: "2022 World Cup — started all 3 games but failed to score."
      },
      {
        name: "Almoez Ali",
        position: "Centre Forward",
        club: "Al Duhail",
        number: 19,
        whyNow: "Qatar's all-time top scorer. Holds the record for most goals in a single Asian Cup (9, in 2019). At 29, he is still Qatar's primary goal threat.",
        recentForm: "Al Duhail top scorer. Qatar's record international scorer.",
        worldCupRecord: "2022 World Cup — started all 3 games. Failed to score as Qatar lost all matches."
      },
      {
        name: "Hassan Al-Haydos",
        position: "Captain / Midfielder",
        club: "Al Sadd",
        number: 10,
        whyNow: "Qatar's most capped player ever with 190+ appearances. Captain and leader. At 34, his final World Cup gives him immense motivation.",
        recentForm: "Al Sadd captain. Qatar's all-time most capped player.",
        worldCupRecord: "2022 World Cup — captained Qatar in all 3 group matches."
      },
      {
        name: "Meshaal Barsham",
        position: "Goalkeeper",
        club: "Al Sadd",
        number: 1,
        whyNow: "Qatar's number one goalkeeper. His shot-stopping will need to be exceptional for Qatar to compete. Strong in 1v1 situations.",
        recentForm: "Al Sadd regular. Qatar's established first-choice goalkeeper.",
        worldCupRecord: "2022 World Cup starter."
      }
    ],
    history: {
      openingLine: "The host of 2022. A difficult debut, a lesson learned.",
      chapters: [
        {
          year: "2022",
          title: "THE STAGE",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Al Khor, November 20, 2022. The eyes of the world. But the pressure was too much. Valencia scores twice. Qatar lose 2-0. They exit with three defeats, the worst host performance in history."
        }
      ],
      heartbreak: "November 25, 2022. Doha. Mohammed Muntari heads home against Senegal. A brief flash of joy before conceding a third. Out.",
      gloryMoment: "November 25, 2022. Doha. 78th minute. Mohammed Muntari scores Qatar's first and only World Cup goal.",
      approaching2026: "Under Queiroz, Qatar must prove they can qualify on merit and compete on the global stage.",
      statLine: [
        "One World Cup appearance (2022)",
        "Muntari is their sole goalscorer"
      ]
    }
  },
  switzerland: {
    id: "switzerland",
    formation: "3-4-2-1",
    managerName: "Murat Yakin",
    managerNationality: "Swiss",
    managerSince: "2021",
    managerNote: "Led Switzerland to the Euro 2024 quarter-finals and the 2022 World Cup Round of 16. A tactically astute manager who gets the best out of a squad that consistently overperforms its individual talent level.",
    style: "Flexible and intelligent. Yakin switches between 3-4-2-1 and 4-2-3-1 depending on the opponent. Switzerland are press-resistant, comfortable in possession, and extremely difficult to beat. They are the definition of a well-coached team that exceeds the sum of its parts.",
    strengths: [
      {
        area: "Tactical Flexibility",
        detail: "Yakin's ability to adapt formation and approach mid-game is Switzerland's greatest asset. They beat Italy with a different shape than they used against Germany at Euro 2024."
      },
      {
        area: "Knockout Pedigree",
        detail: "Reached the quarter-finals at Euro 2020 (beating France on penalties) and Euro 2024. Switzerland are not afraid of big occasions."
      }
    ],
    weaknesses: [
      {
        area: "Goal Threat",
        detail: "Switzerland do not have a prolific striker. They score through collective attacking play rather than individual brilliance."
      },
      {
        area: "Generational Transition",
        detail: "Shaqiri and Sommer have retired. The squad is in transition between the golden generation and the next wave."
      }
    ],
    historicalBest: "Quarter-finals — 1934, 1938, 1954, Euro 2020",
    worldCupAppearances: 12,
    worldCupWins: 0,
    worldCupNarrative: "Switzerland are the ultimate reliable World Cup participants. They rarely embarrass themselves, they always compete, and they occasionally produce magic — like beating France on penalties at Euro 2020. But they have never reached a World Cup semi-final.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Round of 16",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Round of 16",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Round of 16",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Group Stage",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Round of 16",
        host: "Germany"
      }
    ],
    achievements: [
      "Euro 2020 Quarter-finalists (beat France on penalties)",
      "Euro 2024 Quarter-finalists",
      "4 consecutive World Cup Round of 16 appearances (2006, 2014, 2018, 2022)",
      "12 World Cup appearances"
    ],
    keyPlayers: [
      {
        name: "Granit Xhaka",
        position: "Central Midfielder",
        club: "Bayer Leverkusen",
        number: 10,
        whyNow: "Captain and the irreplaceable heartbeat of Swiss football. Reinvented himself at Leverkusen under Xabi Alonso — won the Bundesliga unbeaten in 2024. At 33, his passing range, leadership, and tactical intelligence are at their peak. Switzerland simply cannot function without him.",
        recentForm: "Bayer Leverkusen. Unbeaten Bundesliga champion 2024. Named in Bundesliga Team of the Season. Switzerland's most important player by a wide margin.",
        worldCupRecord: "3 World Cups (2014, 2018, 2022). The leader of Switzerland's golden generation. Over 130 caps."
      },
      {
        name: "Manuel Akanji",
        position: "Centre-Back",
        club: "Manchester City",
        number: 5,
        whyNow: "Premier League champion with Manchester City. One of the best ball-playing centre-backs in the world. His composure under pressure and ability to start attacks from deep are crucial to Yakin's build-up play.",
        recentForm: "Manchester City regular. Multiple Premier League titles. Switzerland's defensive leader.",
        worldCupRecord: "2018 and 2022 World Cups. Now the senior defender in the squad."
      },
      {
        name: "Dan Ndoye",
        position: "Forward",
        club: "Bologna",
        number: 15,
        whyNow: "Breakout star of Euro 2024 with his pace and directness. Serie A's most exciting young winger. At 24, he brings the speed and unpredictability that Switzerland's attack previously lacked.",
        recentForm: "Bologna regular. Serie A experience. Euro 2024 breakout star for Switzerland.",
        worldCupRecord: "First World Cup. But announced himself at Euro 2024."
      },
      {
        name: "Gregor Kobel",
        position: "Goalkeeper",
        club: "Borussia Dortmund",
        number: 1,
        whyNow: "Sommer's successor as Switzerland's number one. One of the Bundesliga's best goalkeepers — his reflexes and distribution are elite. Champions League finalist with Dortmund in 2024.",
        recentForm: "Borussia Dortmund regular. Champions League finalist 2024. Bundesliga's best goalkeeper by save percentage.",
        worldCupRecord: "First World Cup as starter."
      }
    ],
    history: {
      openingLine: "The Swiss watch. Quiet. Precise. Unyielding. Consistently there, consistently tough.",
      chapters: [
        {
          year: "2006",
          title: "THE CLEAN SHEET EXIT",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Germany, 2006. Switzerland do not concede a single goal in four matches. Not one. In the Round of 16 against Ukraine, a 0-0 draw. Then, the shootout. Three misses. Out without conceding. A bizarre record."
        },
        {
          year: "2022",
          title: "THE DEMOLITION",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Qatar, 2022. A solid group stage, beating Serbia 3-2. Then, Portugal. Gonçalo Ramos hat-trick. 6-1. The Swiss watch shattered."
        }
      ],
      heartbreak: "June 26, 2006. Cologne. Losing to Ukraine on penalties after not conceding a goal in the entire tournament.",
      gloryMoment: "June 16, 2010. Durban. Gelson Fernandes scores the winner against eventual champions Spain. A defensive masterclass.",
      approaching2026: "Xhaka's last stand. Switzerland must find a way past the Round of 16.",
      statLine: [
        "Twelve World Cup appearances",
        "Only team to be eliminated without conceding a goal (2006)"
      ]
    }
  },
  brazil: {
    id: "brazil",
    formation: "4-2-3-1",
    managerName: "Dorival Junior",
    managerNationality: "Brazilian",
    managerSince: "2024",
    managerNote: "Appointed after Copa America 2024. Former Flamengo manager who won the Copa Libertadores and Copa do Brasil. Tasked with restoring Brazilian attacking identity after years of pragmatic football.",
    style: "Brazil are returning to attacking football under Dorival. A 4-2-3-1 with Vinicius Jr cutting inside from the left and Rodrygo providing creativity. The double pivot of Bruno Guimaraes and Paqueta provides balance. Fullbacks are encouraged to attack, and the team presses higher than under previous coaches.",
    strengths: [
      {
        area: "Individual Attacking Quality",
        detail: "Vinicius Jr, Rodrygo, Raphinha, and Endrick give Brazil four genuine match-winners in forward positions. No other squad has this depth of attacking talent."
      },
      {
        area: "Brazilian DNA",
        detail: "Five World Cup titles. The weight of the shirt inspires performances. Brazilian players consistently elevate at World Cups — it is cultural."
      },
      {
        area: "Midfield Engine",
        detail: "Bruno Guimaraes is one of the Premier League's best midfielders. His progressive passing and ball-winning ability anchor the entire system."
      }
    ],
    weaknesses: [
      {
        area: "Defensive Fragility",
        detail: "Brazil conceded too many goals in Copa America 2024, exiting in the quarter-finals. The centre-back pairing has been inconsistent and the full-backs leave space when attacking."
      },
      {
        area: "No Clear Identity",
        detail: "Brazil have changed managers frequently and the tactical system is still settling. Cohesion remains a question mark."
      }
    ],
    historicalBest: "Winners — 1958, 1962, 1970, 1994, 2002",
    worldCupAppearances: 22,
    worldCupWins: 5,
    worldCupNarrative: "The most successful nation in World Cup history with five titles. Pele's Brazil of 1958-1970, Romario's 1994 squad, and Ronaldo's 2002 team are footballing royalty. But Brazil have not won since 2002 — their longest drought. The 7-1 semi-final loss to Germany in 2014 on home soil remains a national trauma. This generation, led by Vinicius Jr, carries the burden of ending a 24-year wait.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Quarter-finals",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Quarter-finals",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Semi-finals",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Quarter-finals",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Quarter-finals",
        host: "Germany"
      }
    ],
    achievements: [
      "FIFA World Cup Winners — 1958, 1962, 1970, 1994, 2002 (record 5 titles)",
      "Copa America Winners — 9 titles (most recent 2019)",
      "FIFA Confederations Cup Winners — 2005, 2009, 2013",
      "Only nation to appear at every World Cup (22 consecutive)",
      "Olympic Gold — 2016 (Rio), 2020 (Tokyo)"
    ],
    keyPlayers: [
      {
        name: "Vinicius Jr",
        position: "Left Winger",
        club: "Real Madrid",
        number: 7,
        whyNow: "The best player in the world entering the 2026 World Cup. Ballon d'Or contender for 3 consecutive years. His pace, dribbling, and big-game scoring are unmatched. Champions League hero with Real Madrid — scored in the 2024 final. At 25, he is at the peak of his powers and desperate to deliver for Brazil what Neymar never could.",
        recentForm: "Real Madrid talisman. 20+ goals in La Liga. Champions League winner 2024. Scored in the final. Named FIFA Best Men's Player 2024.",
        worldCupRecord: "2022 World Cup — started every game. Scored 1 goal. Brazil's quarter-final exit was a disappointment. He carries that chip on his shoulder."
      },
      {
        name: "Rodrygo",
        position: "Attacking Midfielder / Right Winger",
        club: "Real Madrid",
        number: 10,
        whyNow: "The silky technician who provides Brazil's creative axis alongside Vinicius. Champions League specialist — has scored crucial goals in multiple knockout rounds for Real Madrid. His versatility (can play RW, AM, or false 9) gives Dorival tactical flexibility.",
        recentForm: "Real Madrid regular. Champions League and La Liga winner. 15 goals and 10 assists across all competitions.",
        worldCupRecord: "2022 World Cup — squad member but limited minutes. Now a guaranteed starter at 25."
      },
      {
        name: "Bruno Guimaraes",
        position: "Defensive Midfielder",
        club: "Newcastle United",
        number: 5,
        whyNow: "The Premier League's most complete midfielder. His ability to win the ball, resist the press, and play progressive passes makes him the engine of Brazil's team. Newcastle's entire system depends on him — and Brazil's does too. At 27, he enters the World Cup at the perfect age.",
        recentForm: "Newcastle United captain. Named in PFA Premier League Team of the Year 2024-25. Brazil's most important midfielder.",
        worldCupRecord: "2022 World Cup — started in the quarter-final loss to Croatia. Has since become Brazil's midfield anchor."
      },
      {
        name: "Endrick",
        position: "Centre Forward",
        club: "Real Madrid",
        number: 9,
        whyNow: "The 19-year-old prodigy. Became the youngest Brazilian to score at a World Cup qualifier. His raw finishing ability and fearlessness mark him as a generational talent. Playing alongside Vinicius and Rodrygo at Real Madrid has accelerated his development. He is Brazil's future — and possibly their present.",
        recentForm: "Real Madrid rotation option. La Liga and Champions League experience at 19. Youngest Brazilian to score in Champions League history.",
        worldCupRecord: "First World Cup. But already a record-breaker in qualifying."
      },
      {
        name: "Marquinhos",
        position: "Centre-Back",
        club: "Paris Saint-Germain",
        number: 4,
        whyNow: "Brazil's defensive leader and vice-captain. PSG's captain and one of the best centre-backs in world football for a decade. His experience, reading of the game, and leadership are irreplaceable. At 32, this could be his final World Cup — motivation is at its peak.",
        recentForm: "PSG captain. Champions League winner 2025-26. Ligue 1 champion. Over 85 caps for Brazil.",
        worldCupRecord: "2018 and 2022 World Cups. Missed the crucial penalty vs Croatia in the 2022 quarter-final shootout. He wants redemption."
      }
    ],
    history: {
      openingLine: "Five stars on the chest. Five times the world bowed. And yet, the wound of 1950 never truly closed.",
      chapters: [
        {
          year: "1950",
          title: "THE MARACANAZO",
          photo: {
            wikiPage: "Uruguay_v_Brazil_(1950_FIFA_World_Cup)",
            url: null,
            caption: "The shock in Rio — Uruguay stun Brazil to claim the 1950 World Cup."
          },
          body: "July 16, 1950. 200,000 souls packed into the concrete bowl of the Maracana. Brazil needed only a draw against Uruguay to claim their first title. Friaça scored first. The party began. Then — Schiaffino. Then — Ghiggia. In the 79th minute, Uruguayan boots struck a dagger into the heart of a nation. Uruguay 2, Brazil 1. The silence. The Maracanazo. A trauma so deep that Brazil changed their shirt color from white to yellow forever."
        },
        {
          year: "1958",
          title: "THE BOY KING",
          photo: {
            wikiPage: "Pelé",
            url: null,
            caption: "Pele at the World Cup 1958"
          },
          body: "Sweden, June 29, 1958. A 17-year-old boy named Pelé. In the final against Sweden, he controls the ball on his chest, flicks it over a defender, and volleys it home. Magic. Brazil win 5-2. Pelé cries on the shoulder of Gilmar. The world has a new king. Brazil has its first star."
        },
        {
          year: "1970",
          title: "THE BEAUTIFUL PEAK",
          photo: {
            wikiPage: null,
            url: "/pele_celebrating_1970.jpg",
            caption: "Pelé celebrating during the historic 1970 final victory over Italy."
          },
          body: "Mexico, 1970. The greatest team ever assembled. Pelé, Jairzinho, Tostão, Rivellino, Carlos Alberto. In the final against Italy, they score the fourth goal — a passing sequence of nine players, ending with Carlos Alberto blasting it into the far corner. The absolute peak of football as art. 4-1. The Jules Rimet trophy is theirs forever."
        },
        {
          year: "2002",
          title: "THE REDEMPTION",
          photo: {
            wikiPage: null,
            url: "/ronaldo_nazario_2002.jpg",
            caption: "Ronaldo Nazário celebrates one of his two goals in the 2002 final."
          },
          body: "Yokohama, June 30, 2002. Four years after the mystery of Paris, Ronaldo Nazário returns. The half-moon haircut. The knees rebuilt. In the final against Oliver Kahn, the German giant, Ronaldo scores in the 67th and 79th minutes. Eight goals in the tournament. Brazil are champions for the fifth time. The ultimate redemption."
        }
      ],
      heartbreak: "July 8, 2014. Belo Horizonte. Germany 7, Brazil 1. Six minutes of absolute madness where five goals flew into the Brazilian net. A nation wept. The biggest humiliation in football history, on home soil.",
      gloryMoment: "June 21, 1970. Mexico City. 86th minute. Pelé casually rolls the ball to his right into empty space. Carlos Alberto arrives like a locomotive, smashing it home. The perfect goal.",
      approaching2026: "Twenty-four years. That is how long Brazil has waited. The longest drought since Pelé's first title. Under Dorival Junior, they must find their samba again and heal the scars of Qatar.",
      statLine: [
        "Five World Cup titles — 1958, 1962, 1970, 1994, 2002 (Record)",
        "Only nation to play in all 22 World Cup tournaments",
        "Pele is the only player to win three World Cups (1958, 1962, 1970)",
        "Ronaldo Nazario scored 15 World Cup goals across 4 tournaments"
      ]
    }
  },
  morocco: {
    id: "morocco",
    formation: "4-3-3",
    managerName: "Walid Regragui",
    managerNationality: "Moroccan",
    managerSince: "2022",
    managerNote: "The architect of Morocco's extraordinary 2022 World Cup run to the semi-finals. First African and Arab manager to lead a team to a World Cup semi-final. His tactical intelligence and motivational skills are exceptional.",
    style: "Organized defensive block with devastating counter-attacks. Morocco defend deep with intensity and discipline, then release pacy wingers to exploit the space left by opponents committed to attack. Set pieces are a major weapon. Regragui's Morocco are the best defensive unit outside of Europe.",
    strengths: [
      {
        area: "Defensive Solidity",
        detail: "Conceded just 1 goal from open play in the entire 2022 World Cup (Mbappe's goal in the semi-final). The defensive structure under Regragui is among the best in the world."
      },
      {
        area: "2022 Precedent",
        detail: "Beat Belgium, Spain, and Portugal in 2022. This squad knows how to beat elite teams in knockout football."
      },
      {
        area: "European Quality",
        detail: "Nearly every player in the squad plays in Europe's top 5 leagues. Morocco have more La Liga, Ligue 1, and Serie A players than most African nations combined."
      }
    ],
    weaknesses: [
      {
        area: "Attacking Creativity",
        detail: "Struggle to break down teams who sit deep and deny counter-attacking space. Morocco need opponents to attack them to be at their best."
      },
      {
        area: "Expectation Management",
        detail: "The 2022 semi-final raised expectations enormously. Repeating that run — or exceeding it — puts immense pressure on a squad that thrives as underdogs."
      }
    ],
    historicalBest: "Semi-finals — 2022",
    worldCupAppearances: 7,
    worldCupWins: 0,
    worldCupNarrative: "The 2022 World Cup in Qatar was transformative. Morocco became the first African and first Arab nation to reach the semi-finals, beating Belgium, Spain, and Portugal along the way. That run was not a fluke — it was the product of elite coaching, top-level European players, and a defensive structure that even Mbappe struggled to unlock. They arrive in 2026 as the standard-bearers for African football.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Semi-finals",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Group Stage",
        host: "Russia"
      },
      {
        year: 1998,
        result: "Group Stage",
        host: "France"
      },
      {
        year: 1994,
        result: "Group Stage",
        host: "USA"
      },
      {
        year: 1986,
        result: "Round of 16",
        host: "Mexico"
      }
    ],
    achievements: [
      "2022 World Cup Semi-finalists (first African/Arab nation)",
      "AFCON Winners — 1976",
      "AFCON 2024 — Third place",
      "Beat Belgium, Spain, and Portugal at 2022 World Cup",
      "2023 AFCON Semi-finalists"
    ],
    keyPlayers: [
      {
        name: "Achraf Hakimi",
        position: "Right-Back",
        club: "Paris Saint-Germain",
        number: 2,
        whyNow: "The best right-back in world football. PSG's Champions League-winning campaign featured Hakimi as one of their most important players. His attacking runs, crossing, and defensive recovery pace make him a complete fullback. The penalty he scored — a Panenka — to knock Spain out in 2022 remains one of the World Cup's most iconic moments.",
        recentForm: "PSG regular. Champions League winner 2025-26. Ligue 1 champion. One of the best fullbacks in Europe.",
        worldCupRecord: "2022 World Cup — started every game. Scored the winning penalty (Panenka) vs Spain. Iconic performance."
      },
      {
        name: "Youssef En-Nesyri",
        position: "Centre Forward",
        club: "Fenerbahce",
        number: 19,
        whyNow: "Morocco's primary goal threat and the scorer of the quarter-final winner vs Portugal in 2022. His aerial ability and physicality make him a constant threat. Top scorer in qualifying.",
        recentForm: "Fenerbahce top scorer. Turkish Super Lig regular. Morocco's leading scorer in qualifying.",
        worldCupRecord: "2022 World Cup — scored the header that beat Portugal in the quarter-final."
      },
      {
        name: "Brahim Diaz",
        position: "Attacking Midfielder",
        club: "Real Madrid",
        number: 10,
        whyNow: "Chose Morocco over Spain in 2023. Real Madrid's creative option who brings La Liga quality to Morocco's attack. His dribbling and final-third creativity add a dimension that the 2022 squad lacked.",
        recentForm: "Real Madrid squad player. La Liga and Champions League experience. Morocco's most creative player.",
        worldCupRecord: "First World Cup for Morocco (was not eligible in 2022)."
      },
      {
        name: "Nayef Aguerd",
        position: "Centre-Back",
        club: "Real Sociedad",
        number: 5,
        whyNow: "The defensive rock of Morocco's back line. La Liga experience with Sociedad after West Ham. His composure and distribution from the back are crucial to Morocco's transition game.",
        recentForm: "Real Sociedad regular. La Liga experience. Morocco's first-choice centre-back.",
        worldCupRecord: "Missed the 2022 World Cup through injury. Has waited 4 years for this moment."
      },
      {
        name: "Yassine Bounou",
        position: "Goalkeeper",
        club: "Al Hilal",
        number: 1,
        whyNow: "The hero of 2022. His penalty saves against Spain were the foundation of Morocco's entire run. One of the best goalkeepers in any squad at the tournament. At 35, this is his final World Cup.",
        recentForm: "Al Hilal regular. Saudi Pro League. Morocco's undisputed number one.",
        worldCupRecord: "2022 World Cup — legendary penalty saves vs Spain in the Round of 16. Zero goals conceded from open play until the semi-final."
      }
    ],
    history: {
      openingLine: "The pioneers of a continent. The team that broke the glass ceiling.",
      chapters: [
        {
          year: "1986",
          title: "THE BREAKTHROUGH",
          photo: {
            wikiPage: null,
            url: null,
            caption: "Morocco's squad at the 1986 World Cup in Mexico."
          },
          body: "Mexico, 1986. Morocco draw with Poland, draw with England, and beat Portugal 3-1. They become the first African nation to top a World Cup group. West Germany beat them in the Round of 16 with an 88th-minute Lothar Matthäus free-kick, but history was made."
        },
        {
          year: "2022",
          title: "THE SEMI-FINAL STORM",
          photo: {
            wikiPage: null,
            url: null,
            caption: "Morocco celebrate their historic semi-final run in Qatar, December 2022."
          },
          body: "Qatar, 2022. Walid Regragui's men rewrite the record books. They top a group with Croatia and Belgium. They beat Spain on penalties. They beat Portugal 1-0, Youssef En-Nesyri rising into the clouds. The first African and Arab nation in a World Cup semifinal. They fell to France, but left as heroes."
        }
      ],
      heartbreak: "December 14, 2022. Al Khor. Morocco 0, France 2. A semifinal where Morocco dominated possession, hit the post, and fought like lions. The dream of a final was so close.",
      gloryMoment: "December 10, 2022. Doha. 42nd minute. Yahia Attiyat Allah crosses, Youssef En-Nesyri leaps 2.78 meters in the air — higher than Cristiano Ronaldo ever did — to head home. Morocco 1, Portugal 0.",
      approaching2026: "Morocco are no longer a surprise. They enter 2026 as CAF champions and a global power. Can they go one step further and reach the final?",
      statLine: [
        "Best World Cup finish — Fourth place (2022)",
        "First African and Arab team to reach a World Cup semi-final",
        "Yassine Bounou kept 4 clean sheets at the 2022 World Cup",
        "First African team to top a World Cup group (1986)"
      ]
    }
  },
  haiti: {
    id: "haiti",
    formation: "4-4-2",
    managerName: "Marc Collat",
    managerNationality: "French",
    managerSince: "2024",
    managerNote: "Former youth development coach. Tasked with guiding Haiti through their first World Cup since 1974.",
    style: "Defensive and compact. Haiti sit deep and rely on the discipline of their shape to frustrate opponents. Counter-attacks through pacy forwards are their primary offensive weapon.",
    strengths: [
      {
        area: "Underdog Mentality",
        detail: "Nobody expects anything. Haiti play with freedom and passion, unburdened by pressure or expectation."
      },
      {
        area: "CONCACAF Experience",
        detail: "Qualified through a competitive CONCACAF pathway, proving they can compete against regional rivals."
      }
    ],
    weaknesses: [
      {
        area: "Quality Gap",
        detail: "The squad is drawn primarily from MLS, USL, and Caribbean leagues. The gap to European-based opponents is vast."
      },
      {
        area: "Defensive Vulnerability",
        detail: "Conceded heavily against top CONCACAF teams in qualifying. Group C with Brazil and Morocco is brutal."
      }
    ],
    historicalBest: "Group Stage — 1974",
    worldCupAppearances: 2,
    worldCupWins: 0,
    worldCupNarrative: "Haiti's only previous World Cup was 1974 in West Germany. That team, led by the legendary Emmanuel Sanon who scored against Italy, remains a source of national pride. Qualifying for 2026 is one of the greatest achievements in Haitian sporting history.",
    lastFiveWCs: [
      {
        year: 1974,
        result: "Group Stage",
        host: "West Germany"
      }
    ],
    achievements: [
      "1974 World Cup Qualification",
      "2026 World Cup Qualification (first in 52 years)",
      "Caribbean Cup Winners — 2007, 2019"
    ],
    keyPlayers: [
      {
        name: "Frantzdy Pierrot",
        position: "Centre Forward",
        club: "Auxerre",
        number: 9,
        whyNow: "Haiti's main goal threat. Ligue 1 experience gives him exposure to a higher level than most of his teammates.",
        recentForm: "Auxerre forward. Ligue 1 experience. Haiti's top scorer in qualifying.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Derrick Etienne Jr",
        position: "Winger",
        club: "Columbus Crew",
        number: 7,
        whyNow: "MLS-based winger with pace and directness. Haiti's most creative attacking player and a key performer in qualifying.",
        recentForm: "Columbus Crew regular. MLS Cup winner 2023. Haiti's most experienced attacker.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Josue Duverger",
        position: "Centre-Back",
        club: "St. Pauli",
        number: 4,
        whyNow: "Bundesliga experience makes him Haiti's most valuable defender. His physicality and aerial ability anchor the back line.",
        recentForm: "St. Pauli defender. Bundesliga experience. Haiti's defensive leader.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Alexandre Alphonse",
        position: "Goalkeeper",
        club: "Club Franciscain",
        number: 1,
        whyNow: "Haiti's number one. Will need to produce heroic performances for Haiti to take any points from Group C.",
        recentForm: "Haiti's first-choice goalkeeper throughout qualifying.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "1974. A Caribbean flash of lightning in Munich.",
      chapters: [
        {
          year: "1974",
          title: "THE SHOCK",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Munich, June 15, 1974. Haiti against Italy. Dino Zoff had not conceded a goal in 1,142 minutes. In the 46th minute, Emmanuel Sanon sprints past the Italian defence, rounds Zoff, and scores. The world stopped. Italy won 3-1, but Sanon's name was written."
        }
      ],
      heartbreak: "June 19, 1974. Munich. Poland demolition. 7-0. A harsh lesson in world class football.",
      gloryMoment: "June 15, 1974. Munich. 46th minute. Emmanuel Sanon ends Dino Zoff's legendary clean sheet streak.",
      approaching2026: "A historic return after 52 years. Haiti arrives with hope.",
      statLine: [
        "One World Cup appearance (1974)",
        "Sanon scored both of Haiti's World Cup goals"
      ]
    }
  },
  scotland: {
    id: "scotland",
    formation: "3-5-2",
    managerName: "Steve Clarke",
    managerNationality: "Scottish",
    managerSince: "2019",
    managerNote: "Led Scotland to Euro 2020 (their first tournament in 23 years) and Euro 2024. Now delivering their first World Cup since 1998. The most successful Scottish manager in a generation.",
    style: "Compact, disciplined, and fiercely competitive. Clarke's 3-5-2 provides defensive solidity while the wing-backs provide width. Scotland press hard in midfield and rely on set pieces and crosses for goals. They will not be rolled over by anyone.",
    strengths: [
      {
        area: "Team Spirit",
        detail: "This is the tightest squad in the tournament. Scotland play for each other with an intensity that technical superiority cannot always overcome."
      },
      {
        area: "Set Pieces",
        detail: "Andy Robertson's delivery from the left and Scotland's aerial presence make dead balls a genuine goal threat."
      }
    ],
    weaknesses: [
      {
        area: "Goal Threat",
        detail: "Scotland do not have a 20-goal-a-season striker. Creating and converting chances against elite defenses is their biggest challenge."
      },
      {
        area: "Group Difficulty",
        detail: "Brazil and Morocco in the group make advancement extremely difficult."
      }
    ],
    historicalBest: "Group Stage — 8 appearances, never advanced",
    worldCupAppearances: 9,
    worldCupWins: 0,
    worldCupNarrative: "Scotland have appeared at 8 World Cups and never once advanced beyond the group stage. Their first World Cup since 1998 is a monumental achievement under Steve Clarke. The 1978 campaign in Argentina, where Scotland arrived as self-proclaimed contenders and crashed out, remains the cautionary tale. This team is different — humble, organized, and hungry.",
    lastFiveWCs: [
      {
        year: 1998,
        result: "Group Stage",
        host: "France"
      },
      {
        year: 1990,
        result: "Group Stage",
        host: "Italy"
      },
      {
        year: 1986,
        result: "Group Stage",
        host: "Mexico"
      },
      {
        year: 1982,
        result: "Group Stage",
        host: "Spain"
      }
    ],
    achievements: [
      "9 World Cup appearances (never advanced from group stage)",
      "Euro 2024 Qualification",
      "Euro 2020 Qualification (first tournament in 23 years)",
      "British Home Championship Winners — 24 titles (historic)"
    ],
    keyPlayers: [
      {
        name: "Andy Robertson",
        position: "Left Wing-Back",
        club: "Liverpool",
        number: 3,
        whyNow: "Captain and Scotland's most important player. Champions League winner with Liverpool. His crossing, defensive work, and leadership drive the entire team. At 32, this is his peak tournament moment.",
        recentForm: "Liverpool regular. Premier League experience. Scotland captain with 75+ caps.",
        worldCupRecord: "First World Cup. Has waited his entire career for this."
      },
      {
        name: "John McGinn",
        position: "Central Midfielder",
        club: "Aston Villa",
        number: 8,
        whyNow: "Scotland's most important outfield player. His energy, goal threat from midfield, and ability to drive forward with the ball make him the engine of Clarke's team. Champions League experience with Villa.",
        recentForm: "Aston Villa regular. Champions League experience. Scotland's vice-captain. Led qualifying in goals from midfield.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Scott McTominay",
        position: "Box-to-Box Midfielder",
        club: "Napoli",
        number: 6,
        whyNow: "Reinvented himself at Napoli after leaving Manchester United. 10 Serie A goals from midfield — a sensational scoring record. His goalscoring threat from deep gives Scotland what they lack elsewhere.",
        recentForm: "Napoli regular. 10 Serie A goals. Scotland's top scorer in qualifying.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Billy Gilmour",
        position: "Central Midfielder",
        club: "Napoli",
        number: 14,
        whyNow: "The technical fulcrum of Scotland's midfield. His passing and press resistance, developed in Serie A, provide the quality on the ball that Scotland need against top opposition.",
        recentForm: "Napoli regular. Serie A experience. Scotland's most progressive passer.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "The tartan army. So much passion, so much heartbreak. Never past the first round.",
      chapters: [
        {
          year: "1978",
          title: "GEMMILL'S MOMENT",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Argentina, 1978. Scotland need to beat the Dutch by three goals. Archie Gemmill. In the 68th minute, he skips past three defenders and lofts it home. A work of art. They win 3-2, but it is not enough."
        }
      ],
      heartbreak: "June 23, 1998. Saint-Denis. Scotland need a win against Morocco. Instead, a 3-0 defeat. Craig Burley sent off. The dream dies again.",
      gloryMoment: "June 11, 1978. Mendoza. Archie Gemmill's iconic slalom goal against the Netherlands.",
      approaching2026: "A return to the world stage. Scotland must break the group stage curse.",
      statLine: [
        "Eight World Cup appearances",
        "Never advanced past the group stage"
      ]
    }
  },
  usa: {
    id: "usa",
    formation: "4-3-3",
    managerName: "Mauricio Pochettino",
    managerNationality: "Argentine",
    managerSince: "2024",
    managerNote: "Former Tottenham and PSG manager. Hired to take the USA to the next level as co-hosts. His Champions League final experience and tactical acumen are what the USA need for a deep run at home.",
    style: "High-pressing, possession-based football with quick transitions. Pochettino demands intensity and athleticism — traits the US squad has in abundance. The 4-3-3 utilizes Pulisic's creativity, Reyna's flair, and Weah's pace in a dynamic front three.",
    strengths: [
      {
        area: "Home Advantage",
        detail: "Co-hosting with massive stadiums, passionate crowds, and no travel fatigue. The USA will play every group game on home soil."
      },
      {
        area: "European Core",
        detail: "Pulisic (Milan), Reyna (Dortmund), Weah (Juventus), McKennie (Juventus), Adams (Arsenal) — more Champions League-quality players than any previous US squad."
      },
      {
        area: "Athletic Superiority",
        detail: "One of the most physically gifted squads. Sprint speeds, pressing intensity, and overall athleticism rank among the best at the tournament."
      }
    ],
    weaknesses: [
      {
        area: "Centre-Back Depth",
        detail: "The centre-back position remains the squad's weakest area. None of the options are established starters at elite European clubs."
      },
      {
        area: "Big Game Experience",
        detail: "Despite individual quality, this group has not yet delivered at a senior World Cup. The weight of home expectation is enormous."
      }
    ],
    historicalBest: "Semi-finals — 1930 (Third place)",
    worldCupAppearances: 11,
    worldCupWins: 0,
    worldCupNarrative: "The USA reached the semi-finals at the inaugural 1930 World Cup but have never returned to that stage. Their best modern result was the 2002 quarter-final. Missing the 2018 World Cup entirely was a low point, but the current golden generation — Pulisic, Reyna, Weah, Adams — represents the most talented US squad ever assembled. Co-hosting provides an unprecedented opportunity.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Round of 16",
        host: "Qatar"
      },
      {
        year: 2014,
        result: "Round of 16",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Round of 16",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Group Stage",
        host: "Germany"
      },
      {
        year: 2002,
        result: "Quarter-finals",
        host: "Korea/Japan"
      }
    ],
    achievements: [
      "CONCACAF Gold Cup Winners — 7 titles (most recent 2021)",
      "CONCACAF Nations League Winners — 2021, 2023, 2024",
      "2002 World Cup Quarter-finalists",
      "2026 World Cup Co-hosts",
      "1930 World Cup Semi-finalists (Third place)"
    ],
    keyPlayers: [
      {
        name: "Christian Pulisic",
        position: "Right Winger / Attacking Midfielder",
        club: "AC Milan",
        number: 10,
        whyNow: "America's greatest footballer. Revitalised at AC Milan with 15 goals and 12 assists this season — his best ever. At 27, he enters a home World Cup at the perfect age. His dribbling, creativity, and big-game temperament make him the US captain and talisman. Champions League experience since age 17 with Dortmund.",
        recentForm: "AC Milan talisman. 15 goals, 12 assists in Serie A 2024-25. Best individual season of his career. USMNT captain.",
        worldCupRecord: "2022 World Cup — scored the winning goal vs Iran that sent the USA through. The defining moment of his international career so far."
      },
      {
        name: "Gio Reyna",
        position: "Attacking Midfielder",
        club: "Borussia Dortmund",
        number: 7,
        whyNow: "The most technically gifted American player ever. After injury-plagued years, Reyna has finally had a full healthy season at Dortmund — 9 goals and 11 assists. At 23, he is entering his prime with his best football ahead of him. His creativity and vision in the final third are what the USA need to unlock deep-sitting defenses.",
        recentForm: "Borussia Dortmund regular. 9 goals, 11 assists. Champions League experience. Finally injury-free.",
        worldCupRecord: "2022 World Cup — limited minutes due to injury/team dynamics controversy. This is his redemption tournament."
      },
      {
        name: "Tyler Adams",
        position: "Defensive Midfielder",
        club: "Arsenal",
        number: 4,
        whyNow: "The USA's midfield anchor and former World Cup captain at 22. Transferred to Arsenal and become their starting defensive midfielder. His pressing, interceptions, and tactical intelligence make him the most important player in the US system — the team does not function without him.",
        recentForm: "Arsenal regular. Premier League title contender. Named USMNT Player of the Year 2025.",
        worldCupRecord: "2022 World Cup captain at 23 — the youngest US captain in World Cup history."
      },
      {
        name: "Weston McKennie",
        position: "Box-to-Box Midfielder",
        club: "Juventus",
        number: 8,
        whyNow: "The engine of the US midfield. Juventus regular whose box-to-box running, aerial threat, and defensive work rate make him indispensable. His Serie A experience and Champions League appearances give him the quality to compete with any midfield.",
        recentForm: "Juventus regular. Serie A experience. USA's most versatile midfielder.",
        worldCupRecord: "2022 World Cup — started every game. Now more experienced and complete at 27."
      },
      {
        name: "Timothy Weah",
        position: "Left Winger / Forward",
        club: "Juventus",
        number: 21,
        whyNow: "Son of George Weah (Ballon d'Or winner). Rapid, direct, and increasingly clinical. Juventus regular who provides the pace and goal threat on the left that complements Pulisic on the right. His 2022 World Cup goal against Wales announced him on the global stage.",
        recentForm: "Juventus regular. Serie A and Champions League experience. USA's fastest attacker.",
        worldCupRecord: "2022 World Cup — scored vs Wales in the opening game. The son of a Ballon d'Or winner delivering at the biggest stage."
      }
    ],
    history: {
      openingLine: "1930 third place. 1950 shock. The sleeping giant is awake, and hosting.",
      chapters: [
        {
          year: "1950",
          title: "MIRACLE IN BELO HORIZONTE",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "June 29, 1950. England, the kings of football, against a team of American part-timers. Joe Gaetjens, a Haitian-born student, deflects a shot past Bert Williams. USA 1, England 0. The biggest upset in World Cup history."
        },
        {
          year: "2002",
          title: "QUARTER-FINAL RUN",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Korea, 2002. USA shock Portugal 3-2. They beat Mexico 2-0 in the Round of 16. In the quarterfinal against Germany, a Frings handball on the line goes unpunished. Ballack scores. 1-0. So close to a semi-final."
        }
      ],
      heartbreak: "June 26, 2010. Rustenburg. Asamoah Gyan scores in the 93rd minute of extra time. The US team, after Donovan's Algeria heroics, falls to Ghana.",
      gloryMoment: "June 23, 2010. Pretoria. 91st minute. Landon Donovan sweeps the ball home against Algeria. Ecstasy.",
      approaching2026: "Hosts. A golden generation at their peak. America must reach the quarter-finals, or it is a failure.",
      statLine: [
        "Eleven World Cup appearances",
        "Best finish: Third place (1930)",
        "Gaetjens scored the winner against England in 1950"
      ]
    }
  },
  paraguay: {
    id: "paraguay",
    formation: "4-4-2",
    managerName: "Alfaro Moreno",
    managerNationality: "Ecuadorian",
    managerSince: "2024",
    managerNote: "Former Ecuador and Bolivia manager. Defensive specialist tasked with organizing Paraguay's return to the World Cup after missing 2018 and 2022.",
    style: "Compact and combative. Paraguay are the epitome of South American grit — they defend deep, fight for every ball, and use set pieces as their primary attacking weapon. They will make life uncomfortable for any opponent.",
    strengths: [
      {
        area: "Defensive Resilience",
        detail: "Paraguay are incredibly hard to beat. Their compact shape and warrior mentality mean opponents have to earn every goal."
      },
      {
        area: "CONMEBOL Pedigree",
        detail: "Qualified through the toughest qualifying competition in world football. Beating Argentina and Brazil at home in qualifying proves their competitiveness."
      }
    ],
    weaknesses: [
      {
        area: "Creative Poverty",
        detail: "Paraguay struggle to create quality chances. They are functional rather than creative."
      },
      {
        area: "Squad Depth",
        detail: "Limited bench quality. The first XI is competitive but replacements are a significant drop in standard."
      }
    ],
    historicalBest: "Quarter-finals — 2010",
    worldCupAppearances: 9,
    worldCupWins: 0,
    worldCupNarrative: "Paraguay reached the quarter-finals in 2010 — their best ever result — and have been a consistent World Cup participant. But missing 2018 and 2022 represented a decline. Qualifying for 2026 was a significant achievement.",
    lastFiveWCs: [
      {
        year: 2010,
        result: "Quarter-finals",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Round of 16",
        host: "Germany"
      },
      {
        year: 2002,
        result: "Round of 16",
        host: "Korea/Japan"
      },
      {
        year: 1998,
        result: "Round of 16",
        host: "France"
      }
    ],
    achievements: [
      "2010 World Cup Quarter-finalists",
      "Copa America Winners — 1953, 1979",
      "Olympic Silver — 2004 Athens",
      "3 consecutive Round of 16 appearances (1998-2006)"
    ],
    keyPlayers: [
      {
        name: "Miguel Almiron",
        position: "Attacking Midfielder",
        club: "Newcastle United",
        number: 10,
        whyNow: "Paraguay's most creative player and captain. Premier League experience with Newcastle. His pace and direct running give Paraguay their only genuine attacking threat from open play.",
        recentForm: "Newcastle United squad player. Premier League experience. Paraguay's captain and talisman.",
        worldCupRecord: "First World Cup. At 32, this is his only chance."
      },
      {
        name: "Julio Enciso",
        position: "Forward",
        club: "Brighton & Hove Albion",
        number: 9,
        whyNow: "19-year-old prodigy who is Paraguay's future. Premier League talent with Brighton. His flair and goalscoring ability make him the most exciting Paraguayan prospect in a generation.",
        recentForm: "Brighton forward. Premier League experience at 19. Paraguay's youngest ever qualifier scorer.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Gustavo Gomez",
        position: "Centre-Back",
        club: "Palmeiras",
        number: 3,
        whyNow: "Defensive leader and captain material. Palmeiras stalwart who has won multiple Copa Libertadores titles. His experience and aerial dominance anchor Paraguay's defense.",
        recentForm: "Palmeiras captain. Multiple Copa Libertadores winner. Paraguay's defensive leader.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Andres Cubas",
        position: "Defensive Midfielder",
        club: "Vancouver Whitecaps",
        number: 5,
        whyNow: "Paraguay's midfield destroyer. Hard-tackling, disciplined, and effective at breaking up opposition attacks. The shield in front of the back four.",
        recentForm: "MLS regular. Paraguay's most important defensive midfielder in qualifying.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "The defensive wall of South America. Hard, rugged, uncompromising.",
      chapters: [
        {
          year: "2010",
          title: "HISTORIC LAST EIGHT",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "South Africa, 2010. Paraguay reach the quarter-finals for the first time. Against Spain, Cardozo misses a penalty. Villa scores in the 83rd minute. 1-0. A heroic exit."
        }
      ],
      heartbreak: "June 28, 1998. Lens. Laurent Blanc scores a golden goal in the 114th minute. Paraguay's heroic defense under Chilavert is broken.",
      gloryMoment: "June 29, 2010. Pretoria. Oscar Cardozo scores the winning penalty in the shootout against Japan to reach the quarter-finals.",
      approaching2026: "Back in the finals. Paraguay will defend for their lives.",
      statLine: [
        "Eight World Cup appearances",
        "Reached the quarter-finals in 2010"
      ]
    }
  },
  australia: {
    id: "australia",
    formation: "4-2-3-1",
    managerName: "Tony Popovic",
    managerNationality: "Australian",
    managerSince: "2024",
    managerNote: "Former Socceroo who played at the 2006 World Cup. Successful A-League manager who brings tactical discipline and Australian fighting spirit.",
    style: "Direct and physical. Australia play a pragmatic style built on defensive structure and quick transitions. The team presses in packs and relies on set pieces and crosses for goals. Physically one of the strongest teams in the AFC.",
    strengths: [
      {
        area: "Physical Intensity",
        detail: "One of the most physically demanding teams to play against. Australia win aerial duels and second balls consistently."
      },
      {
        area: "Never-Say-Die Attitude",
        detail: "The Socceroo spirit is real. This team fights to the final whistle — they scored multiple late goals in qualifying."
      }
    ],
    weaknesses: [
      {
        area: "Technical Limitations",
        detail: "Against technically superior opponents, Australia cannot match them in possession. They need opponents to give them the ball back."
      },
      {
        area: "Goalscoring",
        detail: "Limited goal threat beyond one or two individuals. Creating chances against organized defenses is a problem."
      }
    ],
    historicalBest: "Round of 16 — 2006, 2022",
    worldCupAppearances: 6,
    worldCupWins: 0,
    worldCupNarrative: "Australia's golden generation reached the 2006 World Cup and have qualified for every tournament since. The 2022 Round of 16 run in Qatar was their best result since 2006. But Australia remain a team that competes rather than threatens at World Cups.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Round of 16",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Group Stage",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Group Stage",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Group Stage",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Round of 16",
        host: "Germany"
      }
    ],
    achievements: [
      "Asian Cup Winners — 2015",
      "2022 World Cup Round of 16",
      "OFC Nations Cup Winners — 4 titles",
      "6 consecutive World Cup appearances (2006-2026)"
    ],
    keyPlayers: [
      {
        name: "Cameron Devlin",
        position: "Central Midfielder",
        club: "Heart of Midlothian",
        number: 8,
        whyNow: "Australia's midfield engine. Combative, disciplined, and the heartbeat of the team's pressing game. SPL experience provides European exposure.",
        recentForm: "Hearts regular. Scottish Premiership experience. Australia's most important midfielder in qualifying.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Jackson Irvine",
        position: "Central Midfielder",
        club: "FC St. Pauli",
        number: 6,
        whyNow: "Experienced midfielder with Bundesliga experience. Australia's vice-captain whose leadership and goal threat from midfield are crucial.",
        recentForm: "St. Pauli. Bundesliga experience. Australia's senior midfielder.",
        worldCupRecord: "2022 World Cup — started in the Round of 16 against Argentina."
      },
      {
        name: "Nestory Irankunda",
        position: "Forward",
        club: "Bayern Munich",
        number: 17,
        whyNow: "18-year-old prodigy signed by Bayern Munich. The most exciting Australian talent in a generation. His pace and technical ability make him the X-factor.",
        recentForm: "Bayern Munich youth graduate moving to first team. Australia's youngest ever qualifier.",
        worldCupRecord: "First World Cup. The future of Australian football."
      },
      {
        name: "Mathew Ryan",
        position: "Goalkeeper",
        club: "AS Roma",
        number: 1,
        whyNow: "Australia's experienced number one. Serie A backup but internationally trusted. His shot-stopping and big-game experience are invaluable.",
        recentForm: "AS Roma squad. Serie A experience. Over 90 caps for Australia.",
        worldCupRecord: "2014, 2018, 2022 World Cups. Australia's most experienced player."
      }
    ],
    history: {
      openingLine: "The Socceroos. Defiance from down under.",
      chapters: [
        {
          year: "2006",
          title: "THE GOLDEN GEN",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Germany, 2006. Guus Hiddink. Tim Cahill scores twice late against Japan. They reach the Round of 16. Against Italy, in the 95th minute, Grosso falls. Totti scores the penalty. The end."
        },
        {
          year: "2022",
          title: "QATARI RESURGENCE",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Qatar, 2022. Duke heads home against Tunisia. Leckie's solo run against Denmark. They reach the Round of 16, push Argentina to the limit. Garang Kuol's late chance saved by Martinez. Respect."
        }
      ],
      heartbreak: "June 26, 2006. Kaiserslautern. Lucas Neill's challenge on Fabio Grosso. Stoppage time. Penalty. Totti scores.",
      gloryMoment: "June 12, 2006. Kaiserslautern. Tim Cahill comes off the bench to score Australia's first ever World Cup goal.",
      approaching2026: "Can the Socceroos build on their Qatar success and reach the quarter-finals?",
      statLine: [
        "Six World Cup appearances",
        "Reached Round of 16 in 2006 and 2022"
      ]
    }
  },
  turkiye: {
    id: "turkiye",
    formation: "4-2-3-1",
    managerName: "Vincenzo Montella",
    managerNationality: "Italian",
    managerSince: "2023",
    managerNote: "Former AC Milan and Sevilla manager. Led Turkiye to the Euro 2024 quarter-finals with attacking, attractive football. Has unlocked the potential of the young Turkish generation.",
    style: "Attacking and expansive. Montella encourages creative freedom in the final third, with Arda Guler and Kenan Yildiz given license to express themselves. Turkiye press high and play with a confidence that previous Turkish managers failed to instill.",
    strengths: [
      {
        area: "Young Talent",
        detail: "Arda Guler (Real Madrid, 21) and Kenan Yildiz (Juventus, 21) are two of the most exciting young players in world football. This is a generational crop."
      },
      {
        area: "Euro 2024 Momentum",
        detail: "Quarter-final run at Euro 2024 built genuine belief. This squad knows it can compete with top European teams."
      }
    ],
    weaknesses: [
      {
        area: "Defensive Lapses",
        detail: "Turkiye concede goals in clusters. They can look world-class for 60 minutes then collapse in 10."
      },
      {
        area: "Consistency",
        detail: "The team's performance level varies wildly between games. They can beat anyone and lose to anyone."
      }
    ],
    historicalBest: "Semi-finals — 2002",
    worldCupAppearances: 3,
    worldCupWins: 0,
    worldCupNarrative: "Turkey's 2002 semi-final run remains one of the great World Cup stories — Hakan Sukur's 11-second goal, the wins over Senegal, Japan, and the eventual third-place finish. But they have only qualified once since (2002). Euro 2024's quarter-final run suggested this new generation can write their own chapter.",
    lastFiveWCs: [
      {
        year: 2002,
        result: "Semi-finals",
        host: "Korea/Japan"
      }
    ],
    achievements: [
      "2002 World Cup Semi-finalists (Third place)",
      "Euro 2008 Semi-finalists",
      "Euro 2024 Quarter-finalists",
      "Fastest World Cup goal ever — Hakan Sukur 11 seconds (2002)"
    ],
    keyPlayers: [
      {
        name: "Arda Guler",
        position: "Attacking Midfielder",
        club: "Real Madrid",
        number: 10,
        whyNow: "The Turkish Messi. Real Madrid's most naturally gifted young player. At 21, his left foot is one of the best in world football — his Euro 2024 goal against Georgia was stunning. If he stays fit, he can be the breakout star of the entire tournament.",
        recentForm: "Real Madrid rotation option. La Liga and Champions League experience at 21. Euro 2024 star with 2 goals and 1 assist.",
        worldCupRecord: "First World Cup. But arrives as one of the most hyped young players on the planet."
      },
      {
        name: "Kenan Yildiz",
        position: "Left Winger",
        club: "Juventus",
        number: 18,
        whyNow: "Juventus starter at 21. Turkish-German dual national who chose Turkiye. His pace, dribbling, and finishing from the left wing make him the perfect complement to Guler's creativity. Scored a brilliant goal against Georgia at Euro 2024.",
        recentForm: "Juventus regular. Serie A and Champions League experience. Turkiye's most dangerous wide threat.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Hakan Calhanoglu",
        position: "Central Midfielder",
        club: "Inter Milan",
        number: 10,
        whyNow: "Turkiye's captain and the experienced leader this young squad needs. Serie A champion with Inter. His set-piece delivery, passing range, and penalty-taking make him the most reliable performer in the squad. At 32, this is his final major tournament.",
        recentForm: "Inter Milan regular. Serie A champion. Turkiye's captain with 90+ caps. Inter's penalty taker.",
        worldCupRecord: "First World Cup. Despite 90+ caps, Turkey's failure to qualify means Calhanoglu has never played at a World Cup. This is his last chance."
      },
      {
        name: "Merih Demiral",
        position: "Centre-Back",
        club: "Al Ahli",
        number: 3,
        whyNow: "Turkiye's defensive leader. His Euro 2024 performances — including a brace against Austria — showed his big-game quality. Physical, aggressive, and dominant in the air.",
        recentForm: "Al Ahli regular. Saudi Pro League experience. Euro 2024 — scored twice vs Austria in the Round of 16.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "2002. A summer of Turkish delight.",
      chapters: [
        {
          year: "2002",
          title: "BRONZE TRIUMPH",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Korea, 2002. Turkiye shock the world. Ilhan Mansiz's golden goal against Senegal. In the semi-final, Ronaldo's toe-poke beats them. But they beat Korea 3-2 for third. Hakan Şükür scores after 11 seconds. The fastest goal in history."
        }
      ],
      heartbreak: "June 26, 2002. Saitama. Ronaldo's single goal in the semi-final ends the Turkish dream.",
      gloryMoment: "June 29, 2002. Daegu. Hakan Sükür scores in the 11th second against South Korea.",
      approaching2026: "A return after 24 years. The young Turks must prove 2002 was not a one-off.",
      statLine: [
        "Three World Cup appearances",
        "Third place in 2002",
        "Fastest goal in World Cup history (11 seconds)"
      ]
    }
  },
  germany: {
    id: "germany",
    formation: "4-2-3-1",
    managerName: "Julian Nagelsmann",
    managerNationality: "German",
    managerSince: "2023",
    managerNote: "The youngest manager to lead Germany at a major tournament. Former Bayern Munich and RB Leipzig manager. Revitalised German football with a tactical revolution centred on high pressing and vertical play. Euro 2024 hosts — quarter-final exit to Spain was narrow.",
    style: "High-intensity pressing with quick vertical passing. Nagelsmann's Germany are the most tactically sophisticated team in the tournament. They press aggressively, win the ball high, and transition instantly through a midfield triangle of Wirtz, Musiala, and Kimmich. The 4-2-3-1 gives structure while allowing creative freedom in the final third.",
    strengths: [
      {
        area: "Wirtz-Musiala Axis",
        detail: "Florian Wirtz and Jamal Musiala are the most exciting attacking midfield partnership in world football. Their interplay, creativity, and goal threat would start for any team in the world."
      },
      {
        area: "Pressing Machine",
        detail: "Germany's PPDA (passes per defensive action) was the lowest at Euro 2024. They suffocate opponents and force turnovers in dangerous areas."
      },
      {
        area: "Tactical Flexibility",
        detail: "Nagelsmann can switch between 4-2-3-1, 3-4-3, and 4-3-3 mid-game. Germany are never tactically outmaneuvered."
      }
    ],
    weaknesses: [
      {
        area: "Centre-Forward Gap",
        detail: "No world-class number 9. Fullkrug is effective but not at the level of Mbappe, Haaland, or Kane. The lack of a clinical striker limits Germany's ceiling."
      },
      {
        area: "Major Tournament Bottling",
        detail: "Group stage exits at 2018 and 2022 World Cups. The psychological scars are real — Germany have not won a knockout game at a World Cup since 2014."
      }
    ],
    historicalBest: "Winners — 1954, 1974, 1990, 2014",
    worldCupAppearances: 20,
    worldCupWins: 4,
    worldCupNarrative: "Germany are the second most successful World Cup nation with four titles. The 2014 triumph in Brazil — the 7-1 demolition of the hosts in the semi-final — was the pinnacle. But since then, group stage exits in 2018 and 2022 have been humiliating. Euro 2024 on home soil suggested a revival under Nagelsmann, but a narrow quarter-final loss to Spain (2-1, extra time) left them heartbroken again.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Group Stage",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Group Stage",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Winners",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Semi-finals",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Semi-finals",
        host: "Germany"
      }
    ],
    achievements: [
      "FIFA World Cup Winners — 1954, 1974, 1990, 2014 (4 titles)",
      "UEFA European Championship Winners — 1972, 1980, 1996",
      "FIFA Confederations Cup Winners — 2017",
      "7-1 vs Brazil in 2014 World Cup Semi-final",
      "Euro 2024 Hosts — Quarter-finalists"
    ],
    keyPlayers: [
      {
        name: "Florian Wirtz",
        position: "Attacking Midfielder",
        club: "Bayer Leverkusen",
        number: 10,
        whyNow: "The best young player in world football alongside Yamal. Led Leverkusen to an unbeaten Bundesliga title in 2024 — the first in their history. 20 goals and 14 assists this season. At 23, he is Germany's most important creative player and the centrepiece of Nagelsmann's system. His dribbling, passing, and finishing from the number 10 role are elite.",
        recentForm: "Bayer Leverkusen talisman. 20 goals, 14 assists. Unbeaten Bundesliga champion 2024. German Footballer of the Year.",
        worldCupRecord: "First World Cup. But announced himself at Euro 2024 with brilliant performances."
      },
      {
        name: "Jamal Musiala",
        position: "Attacking Midfielder / Winger",
        club: "Bayern Munich",
        number: 14,
        whyNow: "Musiala's dribbling and close control are among the best in world football. Bayern Munich's best player in 2024-25. At 23, he and Wirtz form the most exciting attacking midfield duo at the tournament. His ability to receive the ball in tight spaces and create chances from nothing makes him undroppable.",
        recentForm: "Bayern Munich star. 16 goals, 12 assists. Named in UEFA Team of the Year. Germany's joint-top scorer in qualifying.",
        worldCupRecord: "2022 World Cup — started all 3 games. Germany's best player despite the group stage exit."
      },
      {
        name: "Joshua Kimmich",
        position: "Right-Back / Defensive Midfielder",
        club: "Bayern Munich",
        number: 6,
        whyNow: "Germany's captain and most versatile player. Kimmich can play right-back or defensive midfield at world-class level. His leadership, tactical intelligence, and set-piece delivery are essential to everything Germany do. Over 100 caps and counting.",
        recentForm: "Bayern Munich captain. Bundesliga regular. Over 100 Germany caps. The leader of the squad.",
        worldCupRecord: "2018 and 2022 World Cups — 9 appearances. Experienced in tournament football despite Germany's recent failures."
      },
      {
        name: "Antonio Rudiger",
        position: "Centre-Back",
        club: "Real Madrid",
        number: 2,
        whyNow: "Real Madrid's defensive leader and Germany's best centre-back. His aggression, pace for a centre-back, and Champions League pedigree make him the anchor of Germany's defence. 2024 Champions League winner.",
        recentForm: "Real Madrid regular. Champions League and La Liga winner 2024. Germany's first-choice centre-back.",
        worldCupRecord: "2018 and 2022 World Cups. Euro 2024 starter. Over 70 caps."
      },
      {
        name: "Niclas Fullkrug",
        position: "Centre Forward",
        club: "West Ham United",
        number: 9,
        whyNow: "Germany's best traditional number 9 despite limited options. His aerial ability, work rate, and big-game goalscoring (scored against Spain at Euro 2024 to equalise in the quarter-final) make him the first-choice striker. Not world-class, but effective and reliable.",
        recentForm: "West Ham forward. Premier League experience. Scored in key Euro 2024 matches including the equaliser vs Spain.",
        worldCupRecord: "2022 World Cup — scored vs Spain in the group stage. Euro 2024 — crucial equaliser vs Spain in the quarter-final."
      }
    ],
    history: {
      openingLine: "Four times champions. A machine of iron will that knows no defeat until the referee blows the final whistle.",
      chapters: [
        {
          year: "1954",
          title: "THE MIRACLE OF BERN",
          photo: {
            wikiPage: "Fritz_Walter",
            url: null,
            caption: "Fritz Walter, the captain who led West Germany to the miracle in Bern."
          },
          body: "July 4, 1954. Hungary's Mighty Magyars had beaten West Germany 8-3 in the group stage. They had not lost in four years. In the final, Hungary lead 2-0 after eight minutes. Over. Done. But Fritz Walter's men did not believe in endings. Morlock scores. Rahn scores. In the 84th minute, Helmut Rahn fires. 'Rahn must shoot... Rahn shoots... GOAL!' West Germany 3, Hungary 2. A nation reborn from the ashes of war."
        },
        {
          year: "1974",
          title: "THE KAISER'S STEEL",
          photo: {
            wikiPage: "Gerd_Müller",
            url: null,
            caption: "Gerd Müller, the ultimate goalscorer, in action at the 1974 tournament."
          },
          body: "Munich, July 7, 1974. Johan Cruyff's Total Football against Franz Beckenbauer's German steel. The Dutch score a penalty before Germany even touch the ball. But Breitner equalizes. And then Gerd Müller — the ultimate goal thief — turns and drills it home. 2-1. Germany are champions at home."
        },
        {
          year: "2014",
          title: "THE RUTHLESS FOURTH",
          photo: {
            wikiPage: "2014_FIFA_World_Cup_final",
            url: null,
            caption: "Germany celebrate their fourth World Cup title in Rio, July 13 2014."
          },
          body: "Brazil, 2014. The semifinal in Belo Horizonte. Germany 7, Brazil 1. An execution of ruthless efficiency. In the final, Mario Götze comes off the bench in the 88th minute. In the 113th minute, Schürrle crosses, Götze controls on his chest and volleys. Champions again."
        }
      ],
      heartbreak: "July 30, 1966. London. Wembley. 101st minute. Geoff Hurst's shot hits the crossbar, bounces down onto the line — or over it? Swiss referee Gottfried Dienst consults the linesman. Goal. Germany lose. The ghost of Wembley still haunts them.",
      gloryMoment: "July 4, 1954. Bern. 84th minute. Helmut Rahn receives the ball on the edge of the area, cuts inside, and shoots left-footed. The ball ripples the net. The miracle is complete.",
      approaching2026: "After consecutive, shocking group stage exits in 2018 and 2022, the German machine has lost its aura. 2026 is about reclaiming their birthright — respect.",
      statLine: [
        "Four World Cup titles — 1954, 1974, 1990, 2014",
        "Miroslav Klose is the all-time World Cup top scorer with 16 goals",
        "Germany have played in the most World Cup finals in history (8)",
        "Thomas Müller has scored 10 World Cup goals across 3 tournaments"
      ]
    }
  },
  curacao: {
    id: "curacao",
    formation: "5-4-1",
    managerName: "Dick Advocaat",
    managerNationality: "Dutch",
    managerSince: "2024",
    managerNote: "Legendary Dutch manager with vast international experience (Netherlands, Belgium, Russia, Serbia, UAE, Iraq). Brought in to provide tactical organisation for Curacao's first-ever World Cup.",
    style: "Ultra-defensive with a low block. Curacao will sit deep in a 5-4-1 and try to frustrate opponents. They cannot compete in open play against Group E opponents and must rely on set pieces and counter-attacks through isolated forwards.",
    strengths: [
      {
        area: "Historic Achievement",
        detail: "Qualifying for the World Cup is the greatest moment in Curacao sporting history. The squad will play with joy and freedom."
      },
      {
        area: "Dutch-Caribbean Talent",
        detail: "Several players have dual Dutch-Caribbean heritage and have played in the Eredivisie."
      }
    ],
    weaknesses: [
      {
        area: "Quality Gap",
        detail: "Won 0 of 10,000 Opta simulations. The gap between Curacao and Germany, Ecuador, or Ivory Coast is enormous."
      },
      {
        area: "Squad Depth",
        detail: "Limited professional players. Most of the squad plays in lower divisions across Europe and the Americas."
      }
    ],
    historicalBest: "First World Cup — 2026",
    worldCupAppearances: 1,
    worldCupWins: 0,
    worldCupNarrative: "Curacao's qualification for the 2026 World Cup is a fairytale. A Caribbean island of 150,000 people reaching the world's biggest sporting event. They have no World Cup history — everything about this tournament is historic.",
    lastFiveWCs: [],
    achievements: [
      "2026 World Cup Qualification (first ever)",
      "Caribbean Cup Winners — 2017",
      "CONCACAF Nations League qualification"
    ],
    keyPlayers: [
      {
        name: "Juninho Bacuna",
        position: "Central Midfielder",
        club: "Birmingham City",
        number: 7,
        whyNow: "Curacao's most high-profile player. English Championship experience. His energy and goal threat from midfield are Curacao's best chance of competing.",
        recentForm: "Birmingham City regular. English Championship experience. Curacao's captain.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Kenji Gorre",
        position: "Winger",
        club: "NAC Breda",
        number: 17,
        whyNow: "Pacey winger with Eredivisie experience. Curacao's most dangerous counter-attacking threat.",
        recentForm: "NAC Breda regular. Eredivisie experience. Curacao's most direct attacker.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Eloy Room",
        position: "Goalkeeper",
        club: "Columbus Crew",
        number: 1,
        whyNow: "MLS Cup-winning goalkeeper. Curacao's most experienced player and their last line of defense. Will need to be exceptional.",
        recentForm: "Columbus Crew regular. MLS Cup winner. Curacao's established number one.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Rangelo Janga",
        position: "Centre Forward",
        club: "Ludogorets Razgrad",
        number: 9,
        whyNow: "Curacao's primary goal threat. Bulgarian league experience. Clinical finisher who will get limited chances and must take them.",
        recentForm: "Ludogorets forward. Bulgarian league top scorer. Curacao's all-time leading scorer.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "The Caribbean dreamers. A nation of 150,000 making history.",
      chapters: [
        {
          year: "2026",
          title: "THE HISTORIC DEBUT",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Curacao qualifies for its first ever World Cup. A historic moment for the island nation, proving that dreams can be realized on the biggest stage."
        }
      ],
      heartbreak: "Never played. 2026 is their first experience.",
      gloryMoment: "The moment the final whistle blew in qualifying, sealing their ticket to America.",
      approaching2026: "No pressure, just joy. Curacao will play with the spirit of the islands.",
      statLine: [
        "First World Cup appearance (2026)"
      ]
    }
  },
  "cote-divoire": {
    id: "cote-divoire",
    formation: "4-3-3",
    managerName: "Emerse Fae",
    managerNationality: "Ivorian",
    managerSince: "2024",
    managerNote: "Won the 2024 AFCON as interim manager on home soil — one of the great stories in African football. Now permanent manager building on that triumph.",
    style: "Energetic and attacking. Ivory Coast play a high-tempo pressing game with quick transitions through their pacy forwards. The 4-3-3 provides balance while allowing Seb Haller, Pepe, and Simon to express their attacking quality.",
    strengths: [
      {
        area: "AFCON 2024 Momentum",
        detail: "Won the Africa Cup of Nations on home soil in 2024 after nearly being eliminated in the group stage. This squad knows how to fight back from adversity."
      },
      {
        area: "Forward Quality",
        detail: "Nicolas Pepe, Seb Haller, and Franck Kessie bring European-level quality to the attack."
      }
    ],
    weaknesses: [
      {
        area: "Inconsistency",
        detail: "Ivory Coast can look brilliant one game and poor the next. Their group stage at AFCON 2024 was near-disastrous before the revival."
      },
      {
        area: "Defensive Vulnerability",
        detail: "Concede too many goals from transitions. The back four is the weakest unit in the team."
      }
    ],
    historicalBest: "Group Stage — 2006, 2010, 2014",
    worldCupAppearances: 4,
    worldCupWins: 0,
    worldCupNarrative: "The Drogba-era Ivory Coast of 2006-2014 never advanced beyond the group stage despite being among Africa's strongest teams. The new generation won AFCON 2024 at home and are writing a new chapter. But World Cup success has eluded them.",
    lastFiveWCs: [
      {
        year: 2014,
        result: "Group Stage",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Group Stage",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Group Stage",
        host: "Germany"
      }
    ],
    achievements: [
      "AFCON Winners — 1992, 2015, 2024",
      "AFCON 2024 Winners (as hosts)",
      "3 consecutive World Cup appearances (2006-2014)"
    ],
    keyPlayers: [
      {
        name: "Sebastien Haller",
        position: "Centre Forward",
        club: "Borussia Dortmund",
        number: 9,
        whyNow: "Returned from testicular cancer to play professional football. Scored in the Champions League final for Dortmund. His resilience and finishing ability make him one of the most inspirational stories in football. AFCON 2024 winner.",
        recentForm: "Dortmund forward. Champions League finalist 2024. AFCON 2024 winner. Remarkable cancer recovery story.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Franck Kessie",
        position: "Central Midfielder",
        club: "Al Ahli",
        number: 8,
        whyNow: "Former AC Milan midfielder who brings physicality, energy, and experience. AFCON 2024 winner. His box-to-box running and leadership are crucial.",
        recentForm: "Al Ahli regular. Saudi Pro League. AFCON 2024 winner. Former Serie A champion with AC Milan.",
        worldCupRecord: "2014 World Cup squad (aged 17). Now the senior leader."
      },
      {
        name: "Ibrahim Sangare",
        position: "Defensive Midfielder",
        club: "Nottingham Forest",
        number: 6,
        whyNow: "Physical defensive midfielder with Premier League experience. His ability to protect the back four is critical to Ivory Coast's structure.",
        recentForm: "Nottingham Forest regular. Premier League experience. AFCON 2024 winner.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Simon Adingra",
        position: "Right Winger",
        club: "Brighton & Hove Albion",
        number: 11,
        whyNow: "AFCON 2024 Best Young Player. Brighton's pacy winger who terrorises defences with his directness. At 22, he is the most exciting Ivorian talent.",
        recentForm: "Brighton regular. Premier League. AFCON 2024 Best Young Player. AFCON 2024 winner.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "The Elephants. Didier Drogba. A team that stopped a civil war, still searching for knockout glory.",
      chapters: [
        {
          year: "2006",
          title: "GROUP OF DEATH",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Germany, 2006. Ivory Coast debut in a group with Argentina and Netherlands. They play beautiful football but lose both 2-1. They beat Serbia 3-2, but the exit was confirmed."
        }
      ],
      heartbreak: "June 24, 2014. Fortaleza. Ivory Coast need a draw against Greece to advance. Samaras scores a penalty in the 93rd minute. Heartbreak.",
      gloryMoment: "June 10, 2006. Hamburg. Didier Drogba scores their first ever World Cup goal against Argentina.",
      approaching2026: "A talented squad ready to finally reach the knockout rounds.",
      statLine: [
        "Three World Cup appearances",
        "Didier Drogba is their icon"
      ]
    }
  },
  ecuador: {
    id: "ecuador",
    formation: "4-3-3",
    managerName: "Sebastian Beccacece",
    managerNationality: "Argentine",
    managerSince: "2024",
    managerNote: "Former Racing Club and Defensa y Justicia manager. High-pressing specialist who has brought tactical sophistication to an already talented young squad.",
    style: "Aggressive high-pressing with quick vertical transitions. Ecuador play fast, direct football with pacy wingers and an energetic midfield. They are one of the highest-pressing teams in CONMEBOL and use altitude in home qualifiers to devastating effect.",
    strengths: [
      {
        area: "Youth and Energy",
        detail: "One of the youngest squads at the tournament. Average age under 25. They run harder and longer than most opponents."
      },
      {
        area: "CONMEBOL Qualifying Form",
        detail: "Finished 2nd in CONMEBOL qualifying — ahead of Brazil, Uruguay, and Colombia. A remarkable achievement."
      }
    ],
    weaknesses: [
      {
        area: "Experience",
        detail: "Young squads can be inconsistent at World Cups. This group lacks big-tournament experience."
      },
      {
        area: "Away Form",
        detail: "Ecuador's qualifying form away from altitude was significantly worse. North American stadiums are at sea level."
      }
    ],
    historicalBest: "Round of 16 — 2006",
    worldCupAppearances: 4,
    worldCupWins: 0,
    worldCupNarrative: "Ecuador's 2006 Round of 16 appearance was the high point. In 2022, a thrilling group stage performance included a victory over hosts Qatar. This young generation finished 2nd in the toughest qualifying region — they are the real deal.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Group Stage",
        host: "Qatar"
      },
      {
        year: 2014,
        result: "Group Stage",
        host: "Brazil"
      },
      {
        year: 2006,
        result: "Round of 16",
        host: "Germany"
      },
      {
        year: 2002,
        result: "Group Stage",
        host: "Korea/Japan"
      }
    ],
    achievements: [
      "2006 World Cup Round of 16",
      "2nd in CONMEBOL 2026 World Cup Qualifying",
      "Copa America Quarter-finalists — 2024",
      "4 World Cup appearances"
    ],
    keyPlayers: [
      {
        name: "Moises Caicedo",
        position: "Central Midfielder",
        club: "Chelsea",
        number: 23,
        whyNow: "Chelsea's record signing and one of the Premier League's best midfielders at 24. His ability to control games, win the ball back, and drive forward makes him Ecuador's most valuable player. World-class potential — this World Cup could elevate him to superstardom.",
        recentForm: "Chelsea regular. £115M transfer — record for a midfielder. Ecuador's captain at 24.",
        worldCupRecord: "2022 World Cup — started at age 20. Now the senior leader of the squad."
      },
      {
        name: "Kendry Paez",
        position: "Attacking Midfielder",
        club: "Chelsea",
        number: 10,
        whyNow: "18-year-old prodigy who signed for Chelsea aged 16. Ecuador's most naturally gifted player. His creativity and vision in the final third are extraordinary for his age.",
        recentForm: "Chelsea first-team squad. Youngest ever Ecuador international. Already a regular starter for the national team.",
        worldCupRecord: "First World Cup. The youngest starter Ecuador have ever fielded in a major tournament."
      },
      {
        name: "Enner Valencia",
        position: "Centre Forward",
        club: "Internacional",
        number: 13,
        whyNow: "Ecuador's all-time top scorer and captain. At 36, this is his farewell tournament. Scored the opening goal of the 2022 World Cup. His experience, leadership, and clinical finishing remain valuable.",
        recentForm: "Internacional forward. Brazilian Serie A. Ecuador's all-time top scorer with 40+ goals.",
        worldCupRecord: "3 World Cups (2014, 2022, 2026). Scored 5 World Cup goals including the opener vs Qatar in 2022."
      },
      {
        name: "Piero Hincapie",
        position: "Centre-Back",
        club: "Bayer Leverkusen",
        number: 3,
        whyNow: "Part of Leverkusen's unbeaten Bundesliga-winning squad. At 23, he is one of the best young centre-backs in Europe. His composure, passing from the back, and defensive reading are elite for his age.",
        recentForm: "Bayer Leverkusen regular. Bundesliga champion (unbeaten). Ecuador's defensive leader.",
        worldCupRecord: "2022 World Cup starter. Now the established first-choice centre-back."
      }
    ],
    history: {
      openingLine: "La Tri. High altitude, high intensity.",
      chapters: [
        {
          year: "2006",
          title: "THE KNOCKOUT RUN",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Germany, 2006. Ecuador beat Poland, beat Costa Rica. They reach the Round of 16. Beckham's free kick ends the dream. 1-0."
        }
      ],
      heartbreak: "November 29, 2022. Al Rayyan. Ecuador need a draw against Senegal to advance. Koulibaly scores. They lose 2-1 and are out.",
      gloryMoment: "June 15, 2006. Hamburg. Agustín Delgado scores the second goal in a 3-0 win against Costa Rica, sealing qualification.",
      approaching2026: "With Caicedo and Hincapie, Ecuador has the youth to make a deep run.",
      statLine: [
        "Four World Cup appearances",
        "Reached Round of 16 in 2006"
      ]
    }
  },
  netherlands: {
    id: "netherlands",
    formation: "3-4-1-2",
    managerName: "Ronald Koeman",
    managerNationality: "Dutch",
    managerSince: "2023",
    managerNote: "Second stint as Netherlands manager. Euro 1988 winner as a player. Led the Netherlands to the Euro 2024 semi-finals. Former Barcelona and Everton manager.",
    style: "Koeman's Netherlands are more pragmatic than the Total Football purists would like. A 3-4-1-2 provides defensive security while relying on individual quality in the final third. Gakpo and Simons provide the creativity, with wing-backs providing width. The Dutch press intelligently rather than frantically.",
    strengths: [
      {
        area: "Squad Depth",
        detail: "One of the deepest squads at the tournament. Every position has 2-3 genuine options, all playing at Champions League-level clubs."
      },
      {
        area: "Individual Brilliance",
        detail: "Xavi Simons, Cody Gakpo, and Virgil van Dijk are world-class players who can win any individual battle."
      },
      {
        area: "Tournament Pedigree",
        detail: "Semi-finalists at Euro 2024. Three World Cup finals (1974, 1978, 2010). The Dutch know how to navigate tournaments."
      }
    ],
    weaknesses: [
      {
        area: "No World Cup",
        detail: "Three finals and zero wins. The weight of history — 'De Finale Vloek' (the final curse) — is real. The Netherlands choke in the biggest moments."
      },
      {
        area: "Striker Debate",
        detail: "No clear-cut world-class number 9. Memphis Depay is declining. The centre-forward role remains unsettled."
      }
    ],
    historicalBest: "Runner-up — 1974, 1978, 2010",
    worldCupAppearances: 11,
    worldCupWins: 0,
    worldCupNarrative: "The greatest team to never win the World Cup. Cruyff's Total Football lost the 1974 and 1978 finals. Robben's Netherlands lost the 2010 final to Spain. Three finals, three heartbreaks. The Dutch are perpetual bridesmaids — brilliant, innovative, but unable to close at the ultimate moment.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Quarter-finals",
        host: "Qatar"
      },
      {
        year: 2014,
        result: "Semi-finals",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Runner-up",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Round of 16",
        host: "Germany"
      }
    ],
    achievements: [
      "World Cup Runners-up — 1974, 1978, 2010",
      "UEFA European Championship Winners — 1988",
      "Euro 2024 Semi-finalists",
      "2022 World Cup Quarter-finalists",
      "Total Football — the most influential tactical innovation in football history"
    ],
    keyPlayers: [
      {
        name: "Virgil van Dijk",
        position: "Centre-Back",
        club: "Liverpool",
        number: 4,
        whyNow: "Captain and the best centre-back of his generation. At 34, this is almost certainly his final World Cup. His aerial dominance, leadership, and composure under pressure make him the spine of the Dutch defence. Liverpool's Premier League title win in 2025 proved he remains at the top.",
        recentForm: "Liverpool captain. Premier League champion 2025. Named in PFA Team of the Year. Netherlands captain with 80+ caps.",
        worldCupRecord: "2022 World Cup — led the Netherlands to the quarter-finals. His leadership was the foundation of the Dutch defence."
      },
      {
        name: "Xavi Simons",
        position: "Attacking Midfielder",
        club: "RB Leipzig",
        number: 10,
        whyNow: "The most exciting Dutch talent since Arjen Robben. At 23, his dribbling, shooting, and creativity from the number 10 role are world-class. Bundesliga Player of the Season contender with 18 goals and 14 assists. The creative engine of Koeman's system.",
        recentForm: "RB Leipzig talisman. 18 goals, 14 assists. Bundesliga Team of the Season. Euro 2024 star for the Netherlands.",
        worldCupRecord: "First World Cup. But Euro 2024 semi-finalist and now one of Europe's best attacking midfielders."
      },
      {
        name: "Cody Gakpo",
        position: "Left Winger / Forward",
        club: "Liverpool",
        number: 11,
        whyNow: "Liverpool's most improved player under Arne Slot. 18 goals this season — his best ever. His pace, finishing, and big-game mentality (3 goals at the 2022 World Cup, 3 at Euro 2024) make him a tournament specialist.",
        recentForm: "Liverpool regular. 18 goals. Premier League champion 2025. Netherlands' top scorer at the last 2 tournaments.",
        worldCupRecord: "2022 World Cup — 3 goals, Netherlands' top scorer. Euro 2024 — 3 goals. A genuine tournament player."
      },
      {
        name: "Frenkie de Jong",
        position: "Central Midfielder",
        club: "FC Barcelona",
        number: 21,
        whyNow: "When fit, de Jong is one of the most elegant midfielders in world football. His press resistance, progressive carrying, and positional play are what makes the Dutch midfield function. Injuries have plagued him, but a full pre-season has him in good shape.",
        recentForm: "Barcelona regular when fit. La Liga experience. Netherlands' most technically gifted midfielder.",
        worldCupRecord: "2022 World Cup — started every game. The metronome of Dutch build-up play."
      },
      {
        name: "Matthijs de Ligt",
        position: "Centre-Back",
        club: "Manchester United",
        number: 3,
        whyNow: "Van Dijk's defensive partner. Former Ajax captain who led them to a Champions League semi-final at age 19. Manchester United regular whose positional sense and physicality complement van Dijk's leadership.",
        recentForm: "Manchester United regular. Premier League experience. Netherlands' second-choice centre-back behind van Dijk.",
        worldCupRecord: "2022 World Cup — rotation option. Now established as a starter alongside van Dijk."
      }
    ],
    history: {
      openingLine: "Three finals. Three heartbreaks. The most beautiful losers in football history.",
      chapters: [
        {
          year: "1974",
          title: "TOTAL FOOTBALL",
          photo: {
            wikiPage: "Johan_Cruyff",
            url: null,
            caption: "Johan Cruyff, the master of Total Football, at the 1974 tournament."
          },
          body: "Germany, 1974. Johan Cruyff. Rinus Michels. A tactical revolution. In the final against West Germany, the Dutch score a penalty in the second minute before a German player even touches the ball. But they relax. Germany fights back. Gerd Müller scores. 2-1. Total Football is beaten."
        },
        {
          year: "1978",
          title: "THE POST OF MENDOZA",
          photo: {
            wikiPage: null,
            url: "/rob_rensenbrik.jpeg",
            caption: "Rob Rensenbrink in action during the 1978 World Cup."
          },
          body: "Argentina, 1978. In the final against Argentina, in the 90th minute, the score is 1-1. Rob Rensenbrink shoots. The ball beats the keeper, beats the defender, and hits the post. Centimeters. If it goes in, Netherlands are champions. Instead, extra time. Argentina win 3-1. Heartbreak."
        },
        {
          year: "2010",
          title: "STEEL AND SORROW",
          photo: {
            wikiPage: null,
            url: "/holland2010.webp",
            caption: "Arjen Robben is denied by Iker Casillas in the 2010 final."
          },
          body: "Johannesburg, July 11, 2010. Under Bert van Marwijk, they abandoned beauty for steel. Robben clean through, Casillas saves with his toe. Heitinga sent off. Iniesta scores in the 116th minute. A third final, a third loss."
        }
      ],
      heartbreak: "July 11, 2010. Johannesburg. 62nd minute. Arjen Robben is clean through on goal. He shoots. Iker Casillas sticks out a leg. The ball deflecting wide. A millimeter. The world was right there.",
      gloryMoment: "June 13, 2014. Salvador. Spain 1, Netherlands 0. 44th minute. Blind crosses, Robin van Persie takes flight. The flying Dutchman header. A stunning 5-1 revenge against the reigning champions.",
      approaching2026: "Will the Dutch ever cross the finish line? In 2026, they arrive with a solid squad but no superstar. They must build a team of iron to break the curse.",
      statLine: [
        "Three World Cup runner-up finishes — 1974, 1978, 2010",
        "Only team to reach three World Cup finals and never win",
        "Robin van Persie's header in 2014 was scored from 17 yards out",
        "Johnny Rep remains the top Dutch World Cup scorer with 7 goals"
      ]
    }
  },
  japan: {
    id: "japan",
    formation: "4-2-3-1",
    managerName: "Hajime Moriyasu",
    managerNationality: "Japanese",
    managerSince: "2018",
    managerNote: "The longest-serving manager at the 2026 World Cup. Led Japan to wins over Germany and Spain at the 2022 World Cup. His consistency and tactical evolution have made Japan the best Asian team in the world.",
    style: "Technically sophisticated with a European tactical framework. Japan play possession-based football with quick combination play in tight spaces. They press high, transition rapidly, and their players' technical quality — developed in the Bundesliga, Premier League, and La Liga — is elite. Japan are the most underrated team in the tournament.",
    strengths: [
      {
        area: "Giant-Killing Pedigree",
        detail: "Beat Germany AND Spain in the 2022 World Cup group stage. No 'small' team in history has beaten two eventual tournament contenders in the same group. Japan are capable of beating anyone."
      },
      {
        area: "European Quality",
        detail: "Mitoma (Brighton), Kubo (Sociedad), Kamada (Crystal Palace), Endo (Liverpool) — Japan have more players in Europe's top 5 leagues than most traditional powers."
      },
      {
        area: "Tactical Discipline",
        detail: "Moriyasu's Japan are among the best-coached teams in the world. Their pressing triggers, positional rotations, and defensive shape are elite."
      }
    ],
    weaknesses: [
      {
        area: "Knockout Stage Mentality",
        detail: "Japan have lost in the Round of 16 at the last three World Cups (2018 vs Belgium, 2022 vs Croatia on penalties). They cannot break through to the quarter-finals."
      },
      {
        area: "Physical Limitations",
        detail: "Against physically dominant teams, Japan can be overpowered in set pieces and aerial duels."
      }
    ],
    historicalBest: "Round of 16 — 2002, 2010, 2018, 2022",
    worldCupAppearances: 7,
    worldCupWins: 0,
    worldCupNarrative: "Japan's World Cup journey has been one of steady, relentless improvement. Co-hosts in 2002, they reached the Round of 16 and have done so three more times since. The 2022 group stage — beating Germany AND Spain — was a watershed moment. But the Round of 16 ceiling remains unbroken. Four consecutive knockout-stage exits haunt them.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Round of 16",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Round of 16",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Group Stage",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Round of 16",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Group Stage",
        host: "Germany"
      }
    ],
    achievements: [
      "Asian Cup Winners — 1992, 2000, 2004, 2011 (record 4 titles)",
      "Beat Germany AND Spain at 2022 World Cup",
      "2002 World Cup Co-hosts — Round of 16",
      "4 World Cup Round of 16 appearances",
      "7 consecutive World Cup qualifications"
    ],
    keyPlayers: [
      {
        name: "Takefusa Kubo",
        position: "Right Winger",
        club: "Real Sociedad",
        number: 11,
        whyNow: "Japan's most technically gifted player. La Liga regular with Real Sociedad — 12 goals and 8 assists this season. His dribbling, shooting from distance, and creativity make him the X-factor in Japan's attack. At 25, he is in his prime.",
        recentForm: "Real Sociedad talisman. 12 goals, 8 assists in La Liga. Japan's most dangerous attacker.",
        worldCupRecord: "2022 World Cup — substitute appearances. Now a guaranteed starter and Japan's creative centrepiece."
      },
      {
        name: "Kaoru Mitoma",
        position: "Left Winger",
        club: "Brighton & Hove Albion",
        number: 9,
        whyNow: "Premier League's most exciting dribbler. His mazy runs, close control at pace, and ability to beat defenders in 1v1 situations make him Japan's most dangerous wide player. Brighton's star performer for two consecutive seasons.",
        recentForm: "Brighton's best player. Premier League regular. Japan's most direct attacker.",
        worldCupRecord: "2022 World Cup — scored the controversial 'goal-line technology' goal vs Spain that won the group."
      },
      {
        name: "Wataru Endo",
        position: "Defensive Midfielder",
        club: "Liverpool",
        number: 6,
        whyNow: "Liverpool's midfield destroyer who brings Premier League intensity and tactical intelligence. His reading of the game, interceptions, and positional discipline anchor Japan's midfield.",
        recentForm: "Liverpool regular. Premier League champion 2025. Japan's captain and midfield anchor.",
        worldCupRecord: "2022 World Cup — key performer. Now even better after two years at Liverpool."
      },
      {
        name: "Daichi Kamada",
        position: "Attacking Midfielder",
        club: "Crystal Palace",
        number: 15,
        whyNow: "Creative midfielder with Bundesliga and Premier League experience. His versatility (can play AM, CM, or false 9) gives Moriyasu tactical flexibility. Europa League winner with Frankfurt in 2022.",
        recentForm: "Crystal Palace regular. Premier League experience. Europa League winner 2022.",
        worldCupRecord: "2022 World Cup — started the Germany and Spain games. Key to Japan's group stage success."
      },
      {
        name: "Ko Itakura",
        position: "Centre-Back",
        club: "Borussia Monchengladbach",
        number: 4,
        whyNow: "Bundesliga centre-back who provides defensive solidity and aerial presence. Japan's most reliable defender against physical opposition.",
        recentForm: "Monchengladbach regular. Bundesliga experience. Japan's first-choice centre-back.",
        worldCupRecord: "2022 World Cup — rotation option. Now the established defensive leader."
      }
    ],
    history: {
      openingLine: "The Samurai Blue. Organization, technique, and the tactical giant-killers of Qatar.",
      chapters: [
        {
          year: "2018",
          title: "ROSTOV TRAGEDY",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Russia, 2018. Japan lead Belgium 2-0 in the Round of 16. In the 94th minute, a Belgian counter-attack. Chadli scores. 3-2. The dream dies in seconds."
        },
        {
          year: "2022",
          title: "COPS OF DOHA",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Qatar, 2022. Japan beat Germany 2-1. They beat Spain 2-1. Tanaka's controversial goal. They top the group. But penalties against Croatia stop them again."
        }
      ],
      heartbreak: "July 2, 2018. Rostov-on-Don. Leading Belgium 2-0, conceding three goals in the final 20 minutes.",
      gloryMoment: "November 23, 2022. Doha. Takuma Asano controls a long ball, outmuscles Schlotterbeck, and fires past Neuer. A historic win.",
      approaching2026: "The quarter-final. That is Japan's obsession. They have the quality — can they break the barrier?",
      statLine: [
        "Seven World Cup appearances",
        "Four Round of 16 appearances",
        "Beat Germany and Spain in 2022"
      ]
    }
  },
  sweden: {
    id: "sweden",
    formation: "4-4-2",
    managerName: "Jon Dahl Tomasson",
    managerNationality: "Danish",
    managerSince: "2024",
    managerNote: "Former Danish international striker. Bringing Scandinavian tactical discipline to a Swedish side in transition after the Ibrahimovic era.",
    style: "Organised and direct. Sweden play a traditional Scandinavian style — defensively solid, good in the air, and dangerous from set pieces and crosses. They lack the technical quality of previous generations but compensate with discipline and team spirit.",
    strengths: [
      {
        area: "Set Pieces",
        detail: "Tall, physical squad that scores consistently from corners and free kicks."
      },
      {
        area: "Defensive Organisation",
        detail: "Hard to break down. Sweden's compact shape frustrates technically superior opponents."
      }
    ],
    weaknesses: [
      {
        area: "Post-Zlatan Creative Void",
        detail: "No world-class creative player. Sweden lack the individual brilliance to unlock top defenses."
      },
      {
        area: "Group Difficulty",
        detail: "Netherlands and Japan are both superior teams. Advancement will be extremely difficult."
      }
    ],
    historicalBest: "Runner-up — 1958",
    worldCupAppearances: 12,
    worldCupWins: 0,
    worldCupNarrative: "Sweden were World Cup runners-up on home soil in 1958, losing to Pele's Brazil. Third place in 1994 was their modern peak. The Ibrahimovic era delivered consistency but no tournament success. This post-Ibrahimovic generation qualified through competitive European playoffs.",
    lastFiveWCs: [
      {
        year: 2018,
        result: "Quarter-finals",
        host: "Russia"
      },
      {
        year: 2006,
        result: "Round of 16",
        host: "Germany"
      },
      {
        year: 2002,
        result: "Round of 16",
        host: "Korea/Japan"
      }
    ],
    achievements: [
      "World Cup Runners-up — 1958 (as hosts)",
      "World Cup Third Place — 1950, 1994",
      "2018 World Cup Quarter-finalists",
      "Olympic Gold — 1948"
    ],
    keyPlayers: [
      {
        name: "Alexander Isak",
        position: "Centre Forward",
        club: "Newcastle United",
        number: 11,
        whyNow: "Sweden's best striker since Ibrahimovic. 21 Premier League goals this season — Newcastle's top scorer and one of the best forwards in England. His pace, movement, and clinical finishing make him a genuine world-class talent at 26.",
        recentForm: "Newcastle United. 21 Premier League goals. One of the best strikers in the Premier League.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Dejan Kulusevski",
        position: "Right Winger / Midfielder",
        club: "Tottenham Hotspur",
        number: 21,
        whyNow: "Tottenham's most consistent performer. His versatility, work rate, and creative output make him Sweden's most important all-round player. 10 goals and 12 assists across all competitions.",
        recentForm: "Tottenham regular. Premier League. 10 goals, 12 assists. Sweden's vice-captain.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Viktor Gyokeres",
        position: "Centre Forward",
        club: "Sporting CP",
        number: 9,
        whyNow: "The most prolific striker in European football. 40+ goals this season for Sporting CP. If he plays alongside Isak, Sweden have one of the most lethal strike partnerships at the tournament.",
        recentForm: "Sporting CP. 40+ goals in all competitions. Portuguese league top scorer. Champions League group stage goals.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Emil Krafth",
        position: "Right-Back",
        club: "Newcastle United",
        number: 2,
        whyNow: "Defensive right-back with Premier League experience. Provides defensive stability and tactical discipline.",
        recentForm: "Newcastle United squad. Premier League experience. Sweden's reliable defensive option.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "The blue and yellow wall. Runners-up in 1958, always competitive.",
      chapters: [
        {
          year: "1958",
          title: "HOME FINAL",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Solna, 1958. Sweden reach the final at home. Liedholm scores first. But Pele and Vava are too strong. Sweden finish runners-up."
        },
        {
          year: "1994",
          title: "BRONZE SUMMER",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "USA, 1994. Brolin, Dahlin, Andersson. Sweden play beautiful attacking football, finish third, beating Bulgaria 4-0."
        }
      ],
      heartbreak: "July 3, 2018. Samara. Sweden's defensive wall is breached by Harry Maguire's header. England wins 2-0 in the quarter-final.",
      gloryMoment: "June 29, 1958. Gothenburg. Sweden qualifies for the final at home, a historic peak.",
      approaching2026: "Back in the finals with Isak and Gyökeres. Attacking firepower is guaranteed.",
      statLine: [
        "Twelve World Cup appearances",
        "Runners-up in 1958",
        "Third place in 1950 and 1994"
      ]
    }
  },
  tunisia: {
    id: "tunisia",
    formation: "3-5-2",
    managerName: "Jalel Kadri",
    managerNationality: "Tunisian",
    managerSince: "2022",
    managerNote: "Led Tunisia at the 2022 World Cup where they beat France in the group stage. Experienced CAF manager who knows how to organise a team defensively.",
    style: "Defensively disciplined with a compact 3-5-2. Tunisia sit deep, defend in numbers, and look to counter-attack through their wing-backs and quick forwards. They are well-organised and difficult to break down.",
    strengths: [
      {
        area: "Defensive Record",
        detail: "Beat France 1-0 at the 2022 World Cup. Tunisia know how to frustrate and beat superior opponents."
      },
      {
        area: "CAF Experience",
        detail: "Regular AFCON participants. The squad has deep tournament experience at continental level."
      }
    ],
    weaknesses: [
      {
        area: "Attacking Limitations",
        detail: "Struggled to score against top opposition. Tunisia's creative output is limited."
      },
      {
        area: "Individual Quality Gap",
        detail: "No player in the squad plays at a Champions League-level club. The talent ceiling is lower than Group F rivals."
      }
    ],
    historicalBest: "Group Stage — 1978, 1998, 2002, 2006, 2018, 2022",
    worldCupAppearances: 7,
    worldCupWins: 0,
    worldCupNarrative: "Tunisia have never advanced beyond the World Cup group stage in six attempts. But they beat France at the 2022 World Cup and consistently compete at AFCON. They are Africa's most reliable — if limited — World Cup participants.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Group Stage",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Group Stage",
        host: "Russia"
      },
      {
        year: 2006,
        result: "Group Stage",
        host: "Germany"
      },
      {
        year: 2002,
        result: "Group Stage",
        host: "Korea/Japan"
      },
      {
        year: 1998,
        result: "Group Stage",
        host: "France"
      }
    ],
    achievements: [
      "AFCON Winners — 2004",
      "Beat France 1-0 at 2022 World Cup",
      "6 World Cup appearances (most by a North African nation)",
      "2024 AFCON Quarter-finalists"
    ],
    keyPlayers: [
      {
        name: "Youssef Msakni",
        position: "Attacking Midfielder",
        club: "Al Arabi",
        number: 7,
        whyNow: "Tunisia's creative talisman. At 33, his final World Cup. His technical quality and vision remain Tunisia's best attacking weapon.",
        recentForm: "Al Arabi regular. Qatar Stars League. Tunisia's most creative player.",
        worldCupRecord: "Missed 2018 through injury. 2022 World Cup — started all 3 games."
      },
      {
        name: "Aissa Laidouni",
        position: "Central Midfielder",
        club: "Union Berlin",
        number: 14,
        whyNow: "Bundesliga midfielder who provides energy and ball-winning ability in the midfield. Tunisia's engine room player.",
        recentForm: "Union Berlin regular. Bundesliga experience. Tunisia's most important midfielder.",
        worldCupRecord: "2022 World Cup — started against France in the famous 1-0 win."
      },
      {
        name: "Hannibal Mejbri",
        position: "Central Midfielder",
        club: "Burnley",
        number: 8,
        whyNow: "Young talent with English football experience. At 23, he represents the next generation of Tunisian football. His passing and energy bring dynamism.",
        recentForm: "Burnley midfielder. English Championship. Tunisia's most technically gifted young player.",
        worldCupRecord: "2022 World Cup squad member."
      },
      {
        name: "Wahbi Khazri",
        position: "Forward",
        club: "Montpellier",
        number: 10,
        whyNow: "Tunisia's record goalscorer. Ligue 1 experience. At 35, his final tournament but his set-piece delivery and finishing remain valuable.",
        recentForm: "Montpellier forward. Ligue 1 experience. Tunisia's all-time top scorer.",
        worldCupRecord: "2018 and 2022 World Cups. Scored Tunisia's goal vs Panama in 2018."
      }
    ],
    history: {
      openingLine: "The Eagles of Carthage. Resilient, tough, still waiting for the knockouts.",
      chapters: [
        {
          year: "1978",
          title: "FIRST WIN",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Argentina, 1978. Tunisia beat Mexico 3-1. The first African team to win a match at the World Cup. History."
        }
      ],
      heartbreak: "November 30, 2022. Al Rayyan. Tunisia beat champions France 1-0. But Australia's win over Denmark means they are out anyway. Bittersweet.",
      gloryMoment: "June 2, 1978. Rosario. Tunisia beat Mexico 3-1 to secure Africa's first World Cup win.",
      approaching2026: "Can they finally break the group stage barrier?",
      statLine: [
        "Six World Cup appearances",
        "First African team to win a World Cup match (1978)"
      ]
    }
  },
  belgium: {
    id: "belgium",
    formation: "4-2-3-1",
    managerName: "Domenico Tedesco",
    managerNationality: "Italian-German",
    managerSince: "2023",
    managerNote: "Former RB Leipzig manager. Inherited a squad in transition after the golden generation's decline. Building a new identity around younger players while managing the exit of De Bruyne, Courtois, and Lukaku.",
    style: "Possession-based football with controlled pressing. Tedesco's Belgium play through midfield with patient build-up. The 4-2-3-1 gives structure while allowing creative players freedom in the final third. Less reliant on individual brilliance than the Martinez era.",
    strengths: [
      {
        area: "Goalkeeping",
        detail: "Thibaut Courtois remains one of the best goalkeepers in the world. His presence alone is worth several points across a tournament."
      },
      {
        area: "Transition Quality",
        detail: "Doku, Trossard, and Openda provide devastating pace on the counter-attack."
      },
      {
        area: "Squad Depth",
        detail: "Premier League, Bundesliga, and La Liga players throughout. Belgium's talent pool remains among the deepest in Europe."
      }
    ],
    weaknesses: [
      {
        area: "Golden Generation Hangover",
        detail: "Hazard, Witsel, and Mertens are gone. De Bruyne's fitness is uncertain. The new generation has not yet proven it can match the heights of 2018."
      },
      {
        area: "Tournament Bottling",
        detail: "FIFA #1 for years but never won a tournament. Semi-final in 2018, quarter-final in 2022. Belgium consistently underperform expectations."
      }
    ],
    historicalBest: "Semi-finals — 2018",
    worldCupAppearances: 14,
    worldCupWins: 0,
    worldCupNarrative: "Belgium's golden generation — Hazard, De Bruyne, Lukaku, Courtois — peaked at the 2018 World Cup semi-final, losing to France. The 2022 group-stage exit was a humiliation. The transition to the next generation is underway, but Belgium have never won a major tournament despite years as the world's top-ranked team.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Group Stage",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Semi-finals",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Quarter-finals",
        host: "Brazil"
      },
      {
        year: 2002,
        result: "Round of 16",
        host: "Korea/Japan"
      }
    ],
    achievements: [
      "2018 World Cup Semi-finalists (Third place)",
      "2014 World Cup Quarter-finalists",
      "FIFA World #1 ranking — held for extended periods (2018-2022)",
      "Euro 2024 Round of 16"
    ],
    keyPlayers: [
      {
        name: "Kevin De Bruyne",
        position: "Attacking Midfielder",
        club: "Manchester City",
        number: 7,
        whyNow: "If fit, the best creative midfielder in world football. At 34, this is his final World Cup. His passing range, vision, and ability to control games are generational. The question is fitness — injuries have limited his 2024-25 season. If De Bruyne is healthy, Belgium's ceiling rises dramatically.",
        recentForm: "Manchester City. Limited by injuries in 2024-25 but still capable of match-winning brilliance. Belgium's captain and all-time great.",
        worldCupRecord: "2014, 2018, 2022 World Cups. 3 goals and 4 assists. The creative engine behind Belgium's 2018 semi-final run."
      },
      {
        name: "Thibaut Courtois",
        position: "Goalkeeper",
        club: "Real Madrid",
        number: 1,
        whyNow: "Real Madrid's number one and a top-3 goalkeeper in the world. His 2022 Champions League final performance (MOTM) was one of the greatest goalkeeping displays in history. At 34, his experience, reflexes, and command of the box are Belgium's most important asset.",
        recentForm: "Real Madrid regular. Champions League winner. La Liga winner. Belgium's most important player.",
        worldCupRecord: "2014, 2018, 2022 World Cups. Consistently Belgium's best performer at tournaments."
      },
      {
        name: "Jeremy Doku",
        position: "Left Winger",
        club: "Manchester City",
        number: 11,
        whyNow: "The fastest and most explosive dribbler at the tournament. Manchester City's £55M signing who terrifies defences with his directness. At 23, he is Belgium's most exciting young talent and the heir to Hazard's wing role.",
        recentForm: "Manchester City regular. Premier League experience. Belgium's most direct attacker.",
        worldCupRecord: "2022 World Cup — appeared as a substitute. Now the undisputed starter."
      },
      {
        name: "Lois Openda",
        position: "Centre Forward",
        club: "RB Leipzig",
        number: 14,
        whyNow: "Bundesliga's most prolific young striker. 24 goals this season for Leipzig. His pace, pressing, and clinical finishing make him Belgium's primary goal threat — replacing Lukaku as the number 9.",
        recentForm: "RB Leipzig. 24 Bundesliga goals. Belgium's top scorer in qualifying.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Amadou Onana",
        position: "Central Midfielder",
        club: "Aston Villa",
        number: 6,
        whyNow: "Physical, dominant midfielder with Premier League experience. His ball-winning and driving runs from deep provide the engine Belgium need. At 24, he is the future of Belgian midfield.",
        recentForm: "Aston Villa regular. Premier League and Champions League experience. Belgium's midfield anchor.",
        worldCupRecord: "2022 World Cup — squad member. Now established as a key starter."
      }
    ],
    history: {
      openingLine: "The Golden Generation. Third in 2018. A peak that came and went.",
      chapters: [
        {
          year: "2018",
          title: "THE BRONZE",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Russia, 2018. Hazard, De Bruyne, Lukaku. They beat Brazil 2-1 in a tactical masterclass. They fall to France in the semi-final, but beat England for third. Their best ever."
        }
      ],
      heartbreak: "December 1, 2022. Al Rayyan. Belgium need a win against Croatia. Lukaku hits the post, misses open goals. A 0-0 draw sends them home in the group.",
      gloryMoment: "July 6, 2018. Kazan. De Bruyne's rocket against Brazil to secure a semi-final spot.",
      approaching2026: "The golden generation is mostly gone. Tedesco's young side must build a new identity.",
      statLine: [
        "Fourteen World Cup appearances",
        "Best finish: Third place (2018)"
      ]
    }
  },
  egypt: {
    id: "egypt",
    formation: "4-2-3-1",
    managerName: "Hossam Hassan",
    managerNationality: "Egyptian",
    managerSince: "2024",
    managerNote: "Egyptian football legend with 176 caps as a player. Tasked with maximizing Salah's final years in the national team.",
    style: "Everything flows through Mohamed Salah. Egypt play a counter-attacking style built on defensive discipline and releasing Salah into space. The 4-2-3-1 provides a platform for Salah to operate with freedom on the right.",
    strengths: [
      {
        area: "Mohamed Salah",
        detail: "One of the greatest footballers Africa has produced. His individual quality can singlehandedly win games."
      },
      {
        area: "AFCON Pedigree",
        detail: "Record 7 AFCON titles. Egypt are the most successful nation in African football history."
      }
    ],
    weaknesses: [
      {
        area: "Salah Dependency",
        detail: "When Salah is marked out of the game, Egypt have no Plan B. The quality drop-off is enormous."
      },
      {
        area: "Squad Depth",
        detail: "Beyond Salah, the squad lacks players at elite European clubs. The gap between Egypt's best player and their second-best is massive."
      }
    ],
    historicalBest: "Group Stage — 1934, 1990, 2018",
    worldCupAppearances: 4,
    worldCupWins: 0,
    worldCupNarrative: "Egypt have the most AFCON titles (7) but have rarely translated that dominance to the World Cup. The 2018 appearance — their first since 1990 — was built around Salah, who was injured for the opening game. This is Salah's final World Cup and Egypt's chance to finally make an impact.",
    lastFiveWCs: [
      {
        year: 2018,
        result: "Group Stage",
        host: "Russia"
      },
      {
        year: 1990,
        result: "Group Stage",
        host: "Italy"
      }
    ],
    achievements: [
      "AFCON Winners — 7 titles (record, most recent 2010)",
      "AFCON 2022 Runners-up",
      "2018 World Cup Qualification (first since 1990)",
      "2021 AFCON finalists (lost to Senegal on penalties)"
    ],
    keyPlayers: [
      {
        name: "Mohamed Salah",
        position: "Right Winger / Forward",
        club: "Liverpool",
        number: 10,
        whyNow: "Africa's greatest active footballer. At 33, this is his final World Cup. 20+ Premier League goals this season — still one of the best forwards in the world. Premier League champion with Liverpool in 2025. His pace, finishing, and work rate remain elite. This tournament is his last chance to deliver Egypt a World Cup moment.",
        recentForm: "Liverpool talisman. 20+ Premier League goals. Premier League champion 2025. African Footballer of the Year multiple times.",
        worldCupRecord: "2018 World Cup — scored 2 goals despite playing with an injured shoulder after the Champions League final tackle by Ramos. Egypt's only goals at the tournament."
      },
      {
        name: "Omar Marmoush",
        position: "Forward",
        club: "Manchester City",
        number: 7,
        whyNow: "Sensational Bundesliga season with Eintracht Frankfurt (20 goals) earned him a move to Manchester City. At 26, he is the second-most dangerous Egyptian attacker and provides the goal threat Egypt need alongside Salah.",
        recentForm: "Manchester City. Transferred from Frankfurt after 20 Bundesliga goals. Egypt's second-most important attacker.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Mohamed Elneny",
        position: "Central Midfielder",
        club: "Free Agent / Turkish League",
        number: 17,
        whyNow: "Experienced midfielder with years of Arsenal and Premier League football. His defensive discipline and composure help shield Egypt's back four.",
        recentForm: "Veteran midfielder with extensive Premier League experience. Egypt's most experienced outfield player.",
        worldCupRecord: "2018 World Cup — started all 3 games."
      },
      {
        name: "Mohamed El Shenawy",
        position: "Goalkeeper",
        club: "Al Ahly",
        number: 1,
        whyNow: "CAF Champions League-winning goalkeeper. Egypt's reliable number one whose shot-stopping and big-game experience are crucial.",
        recentForm: "Al Ahly regular. CAF Champions League winner. Egypt's first-choice goalkeeper.",
        worldCupRecord: "2018 World Cup — Man of the Match in the opening game vs Uruguay."
      }
    ],
    history: {
      openingLine: "The Pharaohs. Mo Salah's tears, a long wait.",
      chapters: [
        {
          year: "1934",
          title: "THE FIRST AFRICAN",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Italy, 1934. Egypt are the first African team to play in the World Cup. Fawzi scores twice against Hungary. They lose 4-2, but the path was cleared."
        }
      ],
      heartbreak: "June 25, 2018. Volgograd. Egypt lose to Saudi Arabia on a 95th-minute goal. Salah's tournament ends in defeat.",
      gloryMoment: "May 27, 1934. Naples. Abdulrahman Fawzi scores Africa's first World Cup goal.",
      approaching2026: "Salah's final chance. Egypt must win their first match in World Cup history.",
      statLine: [
        "Three World Cup appearances",
        "First African team to play at the World Cup (1934)"
      ]
    }
  },
  iran: {
    id: "iran",
    formation: "4-1-4-1",
    managerName: "Amir Ghalenoei",
    managerNationality: "Iranian",
    managerSince: "2023",
    managerNote: "One of Iran's most experienced managers. Won the Iranian league multiple times as a coach. Known for defensive discipline and organisation.",
    style: "Deeply defensive and organised. Iran sit in a compact low block and absorb pressure before countering through Taremi and Jahanbakhsh. They are extremely hard to break down and thrive as underdogs against attacking teams.",
    strengths: [
      {
        area: "Defensive Organisation",
        detail: "Iran conceded the fewest goals in AFC qualifying. Their defensive shape is among the best-drilled at the tournament."
      },
      {
        area: "AFC Dominance",
        detail: "Iran have qualified for 3 of the last 4 World Cups and are consistently Asia's strongest team alongside Japan."
      }
    ],
    weaknesses: [
      {
        area: "Attacking Limitations",
        detail: "Beyond Taremi, Iran struggle to create quality chances. They need opponents to overcommit to find openings."
      },
      {
        area: "Possession Football",
        detail: "Iran cannot control games through possession. Against teams who sit back, they lack creativity."
      }
    ],
    historicalBest: "Group Stage — 1978, 1998, 2006, 2014, 2018, 2022",
    worldCupAppearances: 7,
    worldCupWins: 0,
    worldCupNarrative: "Iran have never advanced beyond the World Cup group stage in six appearances. But they consistently compete — taking Spain and Portugal to the wire in 2018, and being minutes away from advancing in 2022 before a late USA goal eliminated them.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Group Stage",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Group Stage",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Group Stage",
        host: "Brazil"
      },
      {
        year: 2006,
        result: "Group Stage",
        host: "Germany"
      },
      {
        year: 1998,
        result: "Group Stage",
        host: "France"
      }
    ],
    achievements: [
      "Asian Cup Winners — 1968, 1972, 1976",
      "6 World Cup appearances",
      "Beat USA 2-1 at 1998 World Cup",
      "Drew with Portugal at 2018 World Cup"
    ],
    keyPlayers: [
      {
        name: "Mehdi Taremi",
        position: "Centre Forward",
        club: "Inter Milan",
        number: 9,
        whyNow: "Serie A striker at Inter Milan. Iran's best player by far — his hold-up play, aerial ability, and finishing are what keeps Iran competitive at the highest level. At 33, this is his last World Cup.",
        recentForm: "Inter Milan. Serie A champion. Champions League experience. Iran's all-time leading World Cup qualifier scorer.",
        worldCupRecord: "2018 and 2022 World Cups. Scored against England in 2022."
      },
      {
        name: "Alireza Jahanbakhsh",
        position: "Right Winger",
        club: "Feyenoord",
        number: 7,
        whyNow: "Eredivisie winger with Premier League experience (Brighton). Iran's most creative wide player and a consistent international performer.",
        recentForm: "Feyenoord regular. Eredivisie experience. Iran's most experienced attacker.",
        worldCupRecord: "2018 and 2022 World Cups."
      },
      {
        name: "Alireza Beiranvand",
        position: "Goalkeeper",
        club: "Persepolis",
        number: 1,
        whyNow: "Iran's number one goalkeeper known for his long throws and penalty-saving ability. His heroics against Portugal in 2018 made him a national hero.",
        recentForm: "Persepolis regular. Iranian league champion. Iran's established number one.",
        worldCupRecord: "2018 and 2022 World Cups."
      },
      {
        name: "Saeid Ezatolahi",
        position: "Defensive Midfielder",
        club: "Vejle BK",
        number: 15,
        whyNow: "Combative defensive midfielder who shields Iran's back four. His energy and aggression are crucial to Iran's pressing game.",
        recentForm: "Danish Superliga regular. Iran's defensive midfield anchor.",
        worldCupRecord: "2018 and 2022 World Cups."
      }
    ],
    history: {
      openingLine: "Team Melli. Defiance against the odds.",
      chapters: [
        {
          year: "1998",
          title: "MOTHER OF GAMES",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Lyon, June 21, 1998. Iran vs USA. Estili and Mahdavikia score. Iran win 2-1. A match of geopolitical tension resolved with flowers and football."
        }
      ],
      heartbreak: "November 29, 2022. Doha. Iran need a draw against USA to advance. Pulisic scores. They lose 1-0 and exit.",
      gloryMoment: "June 21, 1998. Lyon. Hamid Estili's looping header against the US, followed by pure emotion.",
      approaching2026: "Can they finally advance past the group stage?",
      statLine: [
        "Six World Cup appearances",
        "Never advanced past the group stage"
      ]
    }
  },
  "new-zealand": {
    id: "new-zealand",
    formation: "4-4-2",
    managerName: "Darren Bazeley",
    managerNationality: "New Zealander",
    managerSince: "2024",
    managerNote: "Promoted from within the NZ Football setup. Tasked with leading the All Whites to their first World Cup since 2010.",
    style: "Defensive and direct. New Zealand play a pragmatic style focused on defensive organisation and set pieces. They will sit deep and look to frustrate opponents before launching quick counters.",
    strengths: [
      {
        area: "Nothing to Lose",
        detail: "Nobody expects New Zealand to take any points. They play with complete freedom and zero pressure."
      },
      {
        area: "Set Piece Height",
        detail: "Tall, physical squad that can threaten from corners and free kicks."
      }
    ],
    weaknesses: [
      {
        area: "Quality Gap",
        detail: "The vast majority of the squad plays in the A-League or New Zealand domestic league. The gap to Group G opponents is enormous."
      },
      {
        area: "Goalscoring",
        detail: "Very limited goal threat against organised defenses."
      }
    ],
    historicalBest: "Group Stage — 2010",
    worldCupAppearances: 3,
    worldCupWins: 0,
    worldCupNarrative: "New Zealand's greatest World Cup moment was drawing all three group games at the 2010 World Cup — including against defending champions Italy. They went home unbeaten but unqualified. This is their third World Cup and first since 2010.",
    lastFiveWCs: [
      {
        year: 2010,
        result: "Group Stage",
        host: "South Africa"
      },
      {
        year: 1982,
        result: "Group Stage",
        host: "Spain"
      }
    ],
    achievements: [
      "OFC Nations Cup Winners — 5 titles (record)",
      "2010 World Cup — drew all 3 games including vs Italy",
      "2026 World Cup Qualification (first since 2010)"
    ],
    keyPlayers: [
      {
        name: "Chris Wood",
        position: "Centre Forward",
        club: "Nottingham Forest",
        number: 9,
        whyNow: "New Zealand's most important player by far. 14 Premier League goals this season for Forest. His aerial ability and clinical finishing give NZ a genuine goal threat. At 34, this is his last chance.",
        recentForm: "Nottingham Forest. 14 Premier League goals. New Zealand's all-time top scorer.",
        worldCupRecord: "2010 World Cup — appeared as a teenager. Now the veteran leader."
      },
      {
        name: "Liberato Cacace",
        position: "Left-Back",
        club: "Empoli",
        number: 3,
        whyNow: "Serie A experience makes him NZ's best defender. His attacking runs provide width.",
        recentForm: "Empoli regular. Serie A experience. NZ's most technically gifted defender.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Matt Garbett",
        position: "Central Midfielder",
        club: "NAC Breda",
        number: 8,
        whyNow: "Energetic midfielder with European experience. NZ's midfield engine.",
        recentForm: "NAC Breda. Eredivisie experience. NZ's most progressive midfielder.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Oliver Sail",
        position: "Goalkeeper",
        club: "OFI Crete",
        number: 1,
        whyNow: "NZ's first-choice goalkeeper. Greek Super League experience. Will need to be heroic.",
        recentForm: "OFI Crete regular. Greek Super League. NZ's number one.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "The All Whites. Unbeaten in 2010.",
      chapters: [
        {
          year: "2010",
          title: "UNBEATEN HEROES",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "South Africa, 2010. New Zealand draw with Slovakia, draw with Italy (the world champions!), draw with Paraguay. They are eliminated in the group, but leave as the only unbeaten team in the tournament."
        }
      ],
      heartbreak: "June 20, 2010. Nelspruit. Leading Italy, conceding a penalty. A heroic 1-1 draw that felt like a win, but left them just short.",
      gloryMoment: "June 15, 2010. Rustenburg. Winston Reid heads a 93rd-minute equalizer against Slovakia.",
      approaching2026: "With Oceania's direct spot, New Zealand must establish themselves as regulars.",
      statLine: [
        "Two World Cup appearances",
        "Only unbeaten team at the 2010 World Cup"
      ]
    }
  },
  spain: {
    id: "spain",
    formation: "4-3-3",
    managerName: "Luis de la Fuente",
    managerNationality: "Spanish",
    managerSince: "2022",
    managerNote: "Won Euro 2024 — Spain's first major tournament since 2012. Previously managed Spain's youth teams at every level, winning the U-19 and U-21 European Championships. Understands the player pool better than any manager in world football.",
    style: "Evolution of tiki-taka into something more vertical and devastating. Spain retain their possession DNA but have added directness through Yamal and Nico Williams on the flanks. The high press is relentless — Spain suffocate opponents and win the ball in dangerous areas. Rodri controls the tempo from deep. This is the most balanced Spanish side since 2010.",
    strengths: [
      {
        area: "Yamal-Williams Axis",
        detail: "Lamine Yamal (18, right wing) and Nico Williams (23, left wing) are the most terrifying wing partnership in world football. Their combined pace, dribbling, and creativity tore apart every defense at Euro 2024."
      },
      {
        area: "Midfield Dominance",
        detail: "Rodri, Pedri, and Gavi/Dani Olmo give Spain the best midfield in the tournament. They control possession, win the ball back immediately when they lose it, and dictate the tempo of every match."
      },
      {
        area: "Euro 2024 Champions",
        detail: "Won Euro 2024 convincingly — beat every opponent in 90 minutes. No penalties, no extra time. The most dominant European Championship performance since Spain 2008-2012."
      },
      {
        area: "Defensive Organisation",
        detail: "Conceded just 1 goal in the knockout stages of Euro 2024. The defensive shape under de la Fuente is elite."
      }
    ],
    weaknesses: [
      {
        area: "Centre-Forward Questions",
        detail: "Alvaro Morata is experienced but not world-class. The false 9 role works but a clinical number 9 would elevate Spain further."
      },
      {
        area: "Winners' Target",
        detail: "As the favourite, every team will raise their game against Spain. They must handle being the hunted, not the hunter."
      }
    ],
    historicalBest: "Winners — 2010",
    worldCupAppearances: 16,
    worldCupWins: 1,
    worldCupNarrative: "Spain's 2010 World Cup victory in South Africa — Iniesta's extra-time goal against the Netherlands in the final — completed the greatest era in international football history (Euro 2008, World Cup 2010, Euro 2012). After a decade of decline, Euro 2024 signalled a return to the summit. This young, fearless squad has the chance to win Spain's second World Cup and establish a new dynasty.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Round of 16",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Round of 16",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Group Stage",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Winners",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Round of 16",
        host: "Germany"
      }
    ],
    achievements: [
      "FIFA World Cup Winners — 2010",
      "UEFA European Championship Winners — 1964, 2008, 2012, 2024 (record 4 titles)",
      "UEFA Nations League Winners — 2023",
      "Euro 2024 Champions — beat England 2-1 in the final",
      "Won every game at Euro 2024 in 90 minutes"
    ],
    keyPlayers: [
      {
        name: "Rodri",
        position: "Defensive Midfielder",
        club: "Manchester City",
        number: 16,
        whyNow: "2024 Ballon d'Or winner. The best defensive midfielder in the world and arguably the most important player at the tournament. Manchester City's system depends on him — and so does Spain's. His passing accuracy, press resistance, and tactical intelligence are generational. At 29, he is at the absolute peak of his career. When Rodri plays, Spain do not lose.",
        recentForm: "Manchester City. Ballon d'Or 2024. Euro 2024 Player of the Tournament. Premier League champion. 93% pass completion under pressure — highest in Europe.",
        worldCupRecord: "2022 World Cup — started every game. Spain's Round of 16 exit to Morocco was not his fault. He was the best midfielder at the tournament."
      },
      {
        name: "Lamine Yamal",
        position: "Right Winger",
        club: "FC Barcelona",
        number: 19,
        whyNow: "The most exciting teenager in world football. At 18 years and 11 months, he arrives at the World Cup as a Euro 2024 champion and Barcelona's best player. His dribbling, vision, and fearlessness are beyond his years. Scored a stunning goal against France in the Euro 2024 semi-final at age 16. His ceiling is Messi-level — and he is already a tournament-proven match-winner.",
        recentForm: "FC Barcelona talisman. 17 goals, 15 assists in La Liga. Kopa Trophy winner. Euro 2024 Young Player of the Tournament. Best teenager in world football.",
        worldCupRecord: "First World Cup. But already a Euro champion. Nothing fazes him."
      },
      {
        name: "Nico Williams",
        position: "Left Winger",
        club: "Athletic Club",
        number: 11,
        whyNow: "Scored in the Euro 2024 final against England. The perfect complement to Yamal — where Yamal creates, Williams destroys with his explosive pace and directness. Athletic Club's talisman who chose loyalty over Barcelona. At 23, he is one of La Liga's most dangerous players.",
        recentForm: "Athletic Club. La Liga regular. 12 goals, 10 assists. Euro 2024 final goalscorer. Spain's most direct attacker.",
        worldCupRecord: "First World Cup. But scored the opening goal in the Euro 2024 final."
      },
      {
        name: "Pedri",
        position: "Central Midfielder",
        club: "FC Barcelona",
        number: 8,
        whyNow: "The heir to Iniesta. His close control, passing, and ability to receive the ball under pressure make him the heartbeat of Spain's possession game. Euro 2020 Best Young Player at age 18. Now 23 and mature enough to dominate at the highest level. When Pedri plays, Spain's midfield is unplayable.",
        recentForm: "Barcelona regular. La Liga experience. Euro 2024 champion. Over 30 caps at 23.",
        worldCupRecord: "2022 World Cup — started every game. Spain's best outfield player alongside Rodri."
      },
      {
        name: "Dani Carvajal",
        position: "Right-Back",
        club: "Real Madrid",
        number: 2,
        whyNow: "Scored in the Euro 2024 final. Champions League winner multiple times with Real Madrid. At 34, his experience, defensive reading, and attacking overlaps remain world-class. The most decorated player in the Spanish squad.",
        recentForm: "Real Madrid captain. Champions League winner 2024. La Liga winner. Euro 2024 final scorer. Over 50 caps.",
        worldCupRecord: "2018 and 2022 World Cups. Now the elder statesman of the squad."
      }
    ],
    history: {
      openingLine: "For decades, they were the ultimate underachievers. Then, one night in Johannesburg, they passed their way into immortality.",
      chapters: [
        {
          year: "2010",
          title: "THE INIESTA MOMENT",
          photo: {
            wikiPage: null,
            url: "/iniesta_wc_10.jpg",
            caption: "Andrés Iniesta celebrates scoring the winning goal in the 2010 final."
          },
          body: "South Africa, July 11, 2010. Spain against the Netherlands. A brutal, bad-tempered final. 116 minutes of scoreless tension. Then, Cesc Fàbregas finds Andrés Iniesta in the box. One touch. A volley. The net bulges. Iniesta runs, ripping off his shirt to show a tribute to his late friend Dani Jarque. Spain are champions."
        },
        {
          year: "2014",
          title: "THE COLLAPSE",
          body: "Brazil, 2014. The reigning champions arrive. And then — the collapse. Robin van Persie's flying header. Chile's intensity. Spain are out after two games. The tiki-taka era ends in humiliation. A golden generation ground to a halt.",
          photos: [
            {
              wikiPage: null,
              url: "/vpersie_header.jpg",
              caption: "Robin van Persie's iconic flying header."
            },
            {
              wikiPage: null,
              url: "/p12_spain.avif",
              caption: "Spain's squad looks on as their reign as world champions ends in the group stage."
            }
          ]
        }
      ],
      heartbreak: "June 22, 2002. Daejeon. Spain vs South Korea. Two perfectly valid Spanish goals disallowed by Egyptian referee Gamal Al-Ghandour. Spain lose on penalties. A robbery that still burns in Madrid.",
      gloryMoment: "July 11, 2010. Johannesburg. 116th minute. Andres Iniesta controls, lets the ball drop, and half-volleys it past Maarten Stekelenburg. The goal that gave Spain the world.",
      approaching2026: "Euro 2024 champions Spain arrive as the tournament favorite. Can this new, young, direct generation replicate the success of 2010 and conquer the world?",
      statLine: [
        "One World Cup title — 2010",
        "Spain won the 2010 World Cup scoring only 8 goals in 7 matches (record low)",
        "Spain completed 3,528 passes at the 2018 World Cup — averaging 882 per game",
        "David Villa is Spain's top World Cup scorer with 9 goals"
      ]
    }
  },
  "cabo-verde": {
    id: "cabo-verde",
    formation: "4-4-2",
    managerName: "Bubista",
    managerNationality: "Cape Verdean",
    managerSince: "2024",
    managerNote: "Returned for a third stint. Cape Verde's most successful manager who led them to the AFCON quarter-finals in 2023.",
    style: "Compact and well-organized. Cabo Verde defend deep and play a direct style, looking to exploit set pieces and counter-attacks through quick forwards.",
    strengths: [
      {
        area: "Historic Qualification",
        detail: "A nation of 500,000 people at the World Cup. The emotional energy is immense."
      },
      {
        area: "AFCON Quarter-finalists",
        detail: "Proved in 2023 AFCON that they can compete against top African nations."
      }
    ],
    weaknesses: [
      {
        area: "Quality Gap",
        detail: "Group H with Spain and Uruguay is extremely difficult. The gap in individual quality is vast."
      },
      {
        area: "Squad Depth",
        detail: "Very limited pool of professional players."
      }
    ],
    historicalBest: "First World Cup — 2026",
    worldCupAppearances: 1,
    worldCupWins: 0,
    worldCupNarrative: "Cabo Verde's qualification is one of the greatest stories of the 2026 World Cup. An island nation of just 500,000 people reaching football's biggest stage. Every match is historic.",
    lastFiveWCs: [],
    achievements: [
      "2026 World Cup Qualification (first ever)",
      "2023 AFCON Quarter-finalists",
      "First island nation under 1 million to qualify for a World Cup"
    ],
    keyPlayers: [
      {
        name: "Ryan Mendes",
        position: "Forward",
        club: "Gil Vicente",
        number: 10,
        whyNow: "Cabo Verde's most experienced attacker. Portuguese league quality. The team's captain and creative leader.",
        recentForm: "Gil Vicente. Portuguese league. Cabo Verde's captain and talisman.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Garry Rodrigues",
        position: "Winger",
        club: "Olympiacos",
        number: 7,
        whyNow: "Greek Super League winger with explosive pace. Cabo Verde's most dangerous wide threat.",
        recentForm: "Olympiacos. Greek Super League. Cabo Verde's most direct attacker.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Vozinha",
        position: "Goalkeeper",
        club: "Gil Vicente",
        number: 1,
        whyNow: "Cabo Verde's established number one. Portuguese league experience. Will need to be outstanding.",
        recentForm: "Gil Vicente. Portuguese league. Cabo Verde's first-choice goalkeeper.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Roberto Lopes",
        position: "Centre-Back",
        club: "Shamrock Rovers",
        number: 4,
        whyNow: "Irish league centre-back who provides leadership and aerial presence. Born in Ireland to Cape Verdean parents.",
        recentForm: "Shamrock Rovers captain. League of Ireland champion.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "The Blue Sharks. The smallest nation in the draw, making waves.",
      chapters: [
        {
          year: "2026",
          title: "THE ARRIVAL",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Cabo Verde qualifies for its first ever World Cup, a miraculous story of a tiny archipelago entering the biggest arena of all."
        }
      ],
      heartbreak: "Never played. 2026 is their first experience.",
      gloryMoment: "The moment qualification was sealed in Praia, sparking national celebrations.",
      approaching2026: "To play with freedom and show the world their talent.",
      statLine: [
        "First World Cup appearance (2026)"
      ]
    }
  },
  "saudi-arabia": {
    id: "saudi-arabia",
    formation: "4-5-1",
    managerName: "Roberto Mancini",
    managerNationality: "Italian",
    managerSince: "2023",
    managerNote: "Euro 2020 winner with Italy. Controversial appointment given the wage involved, but his tactical nous and big-tournament experience are undeniable.",
    style: "Defensively organised with a compact midfield block. Mancini's Saudi Arabia are much more disciplined than previous iterations. They press intelligently and use the pace of their wingers on counter-attacks. Set pieces are well-drilled.",
    strengths: [
      {
        area: "2022 Shock Factor",
        detail: "Beat Argentina in the 2022 World Cup group stage — one of the greatest upsets in World Cup history. This squad knows it can beat the best."
      },
      {
        area: "Mancini's Experience",
        detail: "Euro 2020 winner. His tactical intelligence and big-game management give Saudi Arabia a structure they previously lacked."
      }
    ],
    weaknesses: [
      {
        area: "Domestic League Limitations",
        detail: "Most players play in the Saudi Pro League. The gap to European club football level is significant."
      },
      {
        area: "Sustainability",
        detail: "The Argentina win was a one-off performance. Consistently competing at this level over a tournament is different."
      }
    ],
    historicalBest: "Round of 16 — 1994",
    worldCupAppearances: 7,
    worldCupWins: 0,
    worldCupNarrative: "Saudi Arabia reached the Round of 16 in 1994 — their best ever result — and have appeared at 6 World Cups. The 2022 win over Argentina was one of the greatest World Cup shocks. Mancini's appointment signals ambition for 2026.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Group Stage",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Group Stage",
        host: "Russia"
      },
      {
        year: 2006,
        result: "Group Stage",
        host: "Germany"
      },
      {
        year: 2002,
        result: "Group Stage",
        host: "Korea/Japan"
      },
      {
        year: 1998,
        result: "Group Stage",
        host: "France"
      }
    ],
    achievements: [
      "Asian Cup Winners — 1984, 1988, 1996",
      "1994 World Cup Round of 16",
      "Beat Argentina at 2022 World Cup",
      "6 World Cup appearances"
    ],
    keyPlayers: [
      {
        name: "Salem Al-Dawsari",
        position: "Left Winger",
        club: "Al Hilal",
        number: 10,
        whyNow: "Saudi Arabia's best player and the scorer of the iconic winner against Argentina in 2022. His left foot, creativity, and big-game mentality make him irreplaceable. At 33, this is his farewell tournament.",
        recentForm: "Al Hilal talisman. Saudi Pro League's best player. Asian Champions League winner.",
        worldCupRecord: "2018 and 2022 World Cups. Scored the winning goal vs Argentina in 2022 — one of the greatest World Cup goals ever."
      },
      {
        name: "Mohammed Al-Owais",
        position: "Goalkeeper",
        club: "Al Hilal",
        number: 1,
        whyNow: "Saudi Arabia's number one whose performance against Argentina in 2022 was heroic. Multiple crucial saves kept Saudi Arabia in the game.",
        recentForm: "Al Hilal. Saudi Pro League. Saudi Arabia's established first-choice goalkeeper.",
        worldCupRecord: "2022 World Cup — heroic performance vs Argentina."
      },
      {
        name: "Firas Al-Buraikan",
        position: "Centre Forward",
        club: "Al Fateh",
        number: 14,
        whyNow: "Young Saudi striker who has emerged as the next generation's goal threat. Prolific in the Saudi Pro League.",
        recentForm: "Saudi Pro League. Saudi Arabia's emerging young striker.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Ali Al-Bulayhi",
        position: "Centre-Back",
        club: "Al Hilal",
        number: 12,
        whyNow: "Experienced centre-back who was part of the 2022 defensive heroics against Argentina. Physical and commanding.",
        recentForm: "Al Hilal regular. Saudi Pro League. Saudi Arabia's defensive leader.",
        worldCupRecord: "2022 World Cup — started vs Argentina."
      }
    ],
    history: {
      openingLine: "The Green Falcons. The shock of Lusail.",
      chapters: [
        {
          year: "1994",
          title: "THE SOLO RUN",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "USA, 1994. Saeed Al-Owairan runs 70 yards, dribbling past five Belgian players to score. One of the greatest goals ever. Saudi Arabia reach the Round of 16."
        },
        {
          year: "2022",
          title: "SHOCK OF LUSAIL",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "November 22, 2022. Saudi Arabia vs Argentina. Messi scores early. But Al-Shehri and Al-Dawsari strike back. A stunning 2-1 win. The greatest upset in modern World Cup history."
        }
      ],
      heartbreak: "June 1, 2002. Sapporo. Germany 8, Saudi Arabia 0. Miroslav Klose hat-trick. A brutal destruction.",
      gloryMoment: "November 22, 2022. Lusail. 53rd minute. Salem Al-Dawsari curls a rocket into the top corner to defeat Argentina.",
      approaching2026: "Can they replicate their giant-killing ability and reach the knockouts?",
      statLine: [
        "Six World Cup appearances",
        "Reached Round of 16 in 1994"
      ]
    }
  },
  uruguay: {
    id: "uruguay",
    formation: "4-3-3",
    managerName: "Marcelo Bielsa",
    managerNationality: "Argentine",
    managerSince: "2023",
    managerNote: "El Loco. The most influential tactical mind in South American football. Former Argentina, Chile, Athletic Bilbao, Leeds, and Marseille manager. His high-pressing, high-intensity style has transformed Uruguay from defensive pragmatists into one of the most exciting teams in CONMEBOL.",
    style: "Bielsa-ball. Relentless pressing, aggressive man-marking, and vertical attacking play. Uruguay press higher and run harder than any other South American team. The 4-3-3 is built on midfield domination and wide overloads. It is exhausting for opponents and thrilling for neutrals.",
    strengths: [
      {
        area: "Pressing Intensity",
        detail: "Under Bielsa, Uruguay's pressing metrics are among the highest in world football. They suffocate opponents with man-to-man marking across the pitch."
      },
      {
        area: "Young Talent",
        detail: "Darwin Nunez, Fede Valverde, and Ronald Araujo are all under 28 and playing at the highest level in Europe."
      },
      {
        area: "CONMEBOL DNA",
        detail: "Two World Cup titles. Uruguay's footballing culture is built on fighting spirit, tactical intelligence, and winning mentality. No small nation has achieved more."
      }
    ],
    weaknesses: [
      {
        area: "Squad Depth",
        detail: "The first XI is excellent but the bench quality drops significantly. Injuries or suspensions would hurt Uruguay more than most."
      },
      {
        area: "Bielsa Burnout",
        detail: "Bielsa's style is physically demanding. Players tire in the knockout stages of tournaments when the pressing intensity cannot be maintained."
      }
    ],
    historicalBest: "Winners — 1930, 1950",
    worldCupAppearances: 14,
    worldCupWins: 2,
    worldCupNarrative: "The first ever World Cup winners (1930, as hosts) and the perpetrators of the greatest shock in football history — the 'Maracanazo' of 1950, beating Brazil in front of 200,000 fans in Rio. A nation of 3.5 million with 2 World Cups. Fourth place in 2010 and 2018 showed they can still compete. Under Bielsa, this is Uruguay's most exciting squad in a decade.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Group Stage",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Quarter-finals",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Round of 16",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Semi-finals",
        host: "South Africa"
      },
      {
        year: 2002,
        result: "Group Stage",
        host: "Korea/Japan"
      }
    ],
    achievements: [
      "FIFA World Cup Winners — 1930, 1950 (2 titles)",
      "Copa America Winners — 15 titles (record, most recent 2011)",
      "2010 World Cup Semi-finalists (Fourth place)",
      "2018 World Cup Quarter-finalists",
      "Olympic Gold — 1924, 1928"
    ],
    keyPlayers: [
      {
        name: "Federico Valverde",
        position: "Central Midfielder",
        club: "Real Madrid",
        number: 15,
        whyNow: "The most complete midfielder in world football after Rodri. Real Madrid's engine who covers more ground, wins more duels, and provides more attacking output than any midfielder on the planet. Champions League winner, La Liga winner. At 27, he is in his absolute prime. Uruguay's most important player.",
        recentForm: "Real Madrid starter. Champions League and La Liga winner. Named in UEFA Team of the Year. Uruguay's best player.",
        worldCupRecord: "2022 World Cup — started every game. Uruguay's group stage exit was despite, not because of, Valverde."
      },
      {
        name: "Darwin Nunez",
        position: "Centre Forward",
        club: "Liverpool",
        number: 9,
        whyNow: "Liverpool's electric striker whose pace, power, and chaotic energy make him one of the most dangerous forwards in the world. 19 goals this season. His pressing from the front fits Bielsa's system perfectly. At 26, he is Uruguay's primary goal threat.",
        recentForm: "Liverpool. 19 goals. Premier League champion 2025. Uruguay's top scorer in qualifying.",
        worldCupRecord: "2022 World Cup — scored 1 goal. Group stage exit."
      },
      {
        name: "Ronald Araujo",
        position: "Centre-Back",
        club: "FC Barcelona",
        number: 4,
        whyNow: "One of the best centre-backs in La Liga. His pace, physicality, and reading of the game make him Uruguay's defensive rock. Barcelona's defensive leader.",
        recentForm: "Barcelona regular. La Liga experience. Uruguay's first-choice centre-back.",
        worldCupRecord: "2022 World Cup — started every game."
      },
      {
        name: "Rodrigo Bentancur",
        position: "Central Midfielder",
        club: "Tottenham Hotspur",
        number: 6,
        whyNow: "Tottenham's midfield technician who brings composure and progressive passing. His ability to operate between the lines and play under pressure complements Valverde's dynamism perfectly.",
        recentForm: "Tottenham regular. Premier League experience. Uruguay's second-most important midfielder.",
        worldCupRecord: "2018 and 2022 World Cups. Experienced at tournament level."
      },
      {
        name: "Facundo Pellistri",
        position: "Right Winger",
        club: "Manchester United",
        number: 11,
        whyNow: "Young winger who provides width and directness. His pace and dribbling give Uruguay a genuine wide threat. Improving at Manchester United after loan spells.",
        recentForm: "Manchester United squad. Premier League experience. Uruguay's fastest wide player.",
        worldCupRecord: "2022 World Cup — squad member."
      }
    ],
    history: {
      openingLine: "A nation of three million. Two World Cup trophies. The inventors of modern football glory.",
      chapters: [
        {
          year: "1930",
          title: "THE FIRST CROWN",
          photo: {
            wikiPage: null,
            url: null,
            caption: "Uruguay celebrate winning the inaugural World Cup in Montevideo, 1930."
          },
          body: "Montevideo, 1930. The inaugural World Cup. Uruguay at home, in the Estadio Centenario. In the final against Argentina, they trail 2-1 at halftime. But Dorado, Cea, Iriarte, and Castro score. Uruguay win 4-2. The first champions of the world."
        },
        {
          year: "1950",
          title: "THE GHOSTS OF RIO",
          photo: {
            wikiPage: "Obdulio_Varela",
            url: null,
            caption: "Obdulio Varela holding the ball after Uruguay's historic 1950 triumph."
          },
          body: "July 16, 1950. 200,000 Brazilians ready to celebrate. Obdulio Varela, the Uruguayan captain, tells his team: 'Outsiders don't play.' Uruguay shock the world. Ghiggia's shot beats Barbosa. Uruguay are champions for the second time. The Maracanazo."
        }
      ],
      heartbreak: "July 6, 2018. Nizhny Novgorod. Uruguay 0, France 2. Fernando Muslera drops a routine Antoine Griezmann shot into his own net. Luis Suarez looks on, helpless. The tournament ends in a mistake.",
      gloryMoment: "July 16, 1950. Rio de Janeiro. 79th minute. Alcides Ghiggia receives the ball on the right wing, sprints past Bigode, and shoots low. The ball squeezes inside the post. The Maracanazo is born.",
      approaching2026: "Under Marcelo Bielsa, Uruguay are playing high-intensity, vertical football. They have beaten Brazil and Argentina in qualifying. 2026 is their chance to reclaim their historic mantle.",
      statLine: [
        "Two World Cup titles — 1930, 1950",
        "Uruguay won the first ever World Cup in 1930",
        "Alcides Ghiggia scored in every match he played at the 1950 World Cup",
        "Luis Suarez has scored 7 World Cup goals across 3 tournaments"
      ]
    }
  },
  france: {
    id: "france",
    formation: "4-2-3-1",
    managerName: "Didier Deschamps",
    managerNationality: "French",
    managerSince: "2012",
    managerNote: "Final tournament before retirement. Won 2018 WC as manager, 2022 finalist. Won as player in 1998. The most successful French football figure in history.",
    style: "Pragmatic and disciplined. Deschamps prioritises defensive solidity and midfield control, deploying two holding midfielders before unleashing world-class attackers on the break. Set pieces are a major weapon.",
    strengths: [
      {
        area: "Attacking Depth",
        detail: "No squad in the tournament has comparable forward options — Mbappe, Dembele, Olise, Doue, Barcola, Thuram, Cherki all competing for 3 spots."
      },
      {
        area: "World Cup Pedigree",
        detail: "Three of the last five finals contested (2006, 2018, 2022). Deschamps knows how to win knockout football."
      },
      {
        area: "Set Pieces",
        detail: "Olise is Europe's leading assist provider this season. France's dead ball delivery is a consistent scoring threat."
      }
    ],
    weaknesses: [
      {
        area: "Midfield Balance",
        detail: "Rabiot and Tchouameni both had inconsistent club seasons. Neither is at peak form entering the tournament."
      },
      {
        area: "Group Stage Form",
        detail: "Group I contains Norway (Haaland) and Senegal — France's 60.3% group-topping probability is the lowest of the top 4 favourites per Opta."
      }
    ],
    historicalBest: "Winners — 1998, 2018",
    worldCupAppearances: 17,
    worldCupWins: 2,
    worldCupNarrative: "France's World Cup story spans nearly a century. Third place in 1958 with the legendary Just Fontaine — still the record holder for most goals in a single tournament. Champions on home soil in 1998 under Aime Jacquet. Winners again in 2018 in Russia under Deschamps. Runners-up in 2022 against Argentina in arguably the greatest final ever played — Mbappe's hat-trick not enough as Argentina won on penalties.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Runner-up",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Winners",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Quarter-finals",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Group Stage",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Runner-up",
        host: "Germany"
      }
    ],
    achievements: [
      "FIFA World Cup Winners — 1998, 2018",
      "UEFA European Championship Winners — 1984, 2000",
      "FIFA Confederations Cup Winners — 2001, 2003",
      "2022 World Cup Runners-up — Mbappe hat-trick in the final",
      "Three World Cup finals in 20 years (2006, 2018, 2022)"
    ],
    keyPlayers: [
      {
        name: "Kylian Mbappe",
        position: "Centre Forward",
        club: "Real Madrid",
        number: 10,
        whyNow: "Captain entering his third World Cup at 27. 12 goals in two finals including a hat-trick in 2022. One goal from breaking Giroud's all-time France scoring record. Led qualification with 5 goals. Despite a difficult Real Madrid season individually, he remains the most feared finisher in the tournament.",
        recentForm: "Real Madrid. Champions League winner 2024. LaLiga winner 2024. 56 international goals. Inconsistent by his standards at Madrid but historically elevates at World Cups.",
        worldCupRecord: "12 goals across 2018 and 2022. Hat-trick in 2022 final — the only player to score a hat-trick in a World Cup final since Geoff Hurst in 1966."
      },
      {
        name: "Ousmane Dembele",
        position: "Right Winger",
        club: "Paris Saint-Germain",
        number: 11,
        whyNow: "2025 Ballon d'Or winner. 35 goals and 14 assists in 53 games last season driving PSG to Champions League, Ligue 1 and Coupe de France treble. Has just added a second UCL title — beat Arsenal in the final on May 30 2026. Enters the tournament at the absolute peak of his career at 29.",
        recentForm: "Back-to-back Champions League titles with PSG. Ballon d'Or 2025. Statistically the most productive wide player in Europe last season.",
        worldCupRecord: "2018 World Cup winner as a 21-year-old. Limited starts but part of the winning squad. Has evolved dramatically since — now the senior leader of France's attack."
      },
      {
        name: "Desire Doue",
        position: "Left Winger / Attacking Midfielder",
        club: "Paris Saint-Germain",
        number: 18,
        whyNow: "Won Champions League Young Player of the Season 2024-25 at just 20. PSG's creative heartbeat alongside Dembele. The most exciting young player in Europe after Lamine Yamal. At 21 during the tournament, this is his breakout moment.",
        recentForm: "Breakthrough season at PSG — Champions League winner, Ligue 1 winner. Young Player of the Tournament at Euro 2025 qualifying stage. First World Cup.",
        worldCupRecord: "First World Cup. But he arrives as one of the most in-form young players on the planet."
      },
      {
        name: "Michael Olise",
        position: "Attacking Midfielder / Right Wing",
        club: "Bayern Munich",
        number: 7,
        whyNow: "Europe's leading assist provider this season with 31 assists. Sensational Bundesliga campaign — helped knock Real Madrid out of the UCL quarterfinals. Set-piece specialist. Considered a Ballon d'Or contender for 2025-26.",
        recentForm: "31 assists — most in Europe. Bundesliga champion. UCL semi-finalist. Called France's most improved player by Deschamps.",
        worldCupRecord: "First major tournament as a bona fide starter."
      },
      {
        name: "William Saliba",
        position: "Centre-Back",
        club: "Arsenal",
        number: 4,
        whyNow: "Premier League winner with Arsenal. Widely regarded as the best centre-back in England after three elite seasons. France's defensive anchor — without him their backline is significantly weakened.",
        recentForm: "Arsenal. Premier League winner. Named in PFA Premier League Team of the Year. Arguably the best defensive performer in Europe's top 5 leagues.",
        worldCupRecord: "Backup role in 2022. Now undisputed #1 starter."
      }
    ],
    history: {
      openingLine: "They scored the first goal in World Cup history. And then, for 68 years, they waited for the last one that truly mattered.",
      chapters: [
        {
          year: "1930",
          title: "THE FIRST KICK",
          photo: {
            wikiPage: "Lucien_Laurent",
            url: null,
            caption: "Lucien Laurent, the man who started it all — minute 19, Uruguay, July 13 1930."
          },
          body: "Uruguay, 1930. The World Cup did not yet know what it was. And in the 19th minute of the very first match — France versus Mexico — a man named Lucien Laurent struck a volley into history. The first goal ever scored at a World Cup. France 1, Mexico 0. And then? Eliminated in the group stage. Argentina beat them. Chile beat them. The tournament moved on without them. But Lucien Laurent had written his name before anyone else. 68 years before Zidane. 88 years before Mbappe. The first man to score at a World Cup was French. That fact is permanent."
        },
        {
          year: "1958",
          title: "FONTAINE'S THIRTEEN",
          photo: {
            wikiPage: "Just_Fontaine",
            url: null,
            caption: "Just Fontaine — 13 goals in a single tournament. A record that has stood for 68 years and counting."
          },
          body: "Sweden, 1958. A 25-year-old from Marrakesh put on his boots — borrowed boots, because his own were damaged — and proceeded to score 13 goals in 6 matches. Thirteen. In one tournament. Just Fontaine. The record has never been touched. Not by Pele. Not by Ronaldo. Not by Messi. Not by Mbappe — yet. France finished third, beaten by Brazil in the semi-final in a match the teenage Pele cried after, not from sadness, but from joy. Fontaine still lives. The record still stands. Some things are eternal."
        },
        {
          year: "1998",
          title: "ZIDANE'S NIGHT",
          photo: {
            wikiPage: "Zinedine_Zidane",
            url: "/zizouuu.webp",
            caption: "Saint-Denis, July 12 1998. Zidane heads France 1-0 up against Brazil in the World Cup final."
          },
          body: "July 12, 1998. Saint-Denis. France versus Brazil. The world's greatest team against the world's greatest player — Ronaldo, who had convulsed in his hotel room hours earlier, who should not have played, who started anyway. And then — Zidane. Header. 27th minute. Zidane. Header. 45th minute. Two goals from a man born in Marseille to Algerian immigrants, the son of the banlieue, playing the finest final of his life. Emmanuel Petit added a third. The final whistle sounded and an entire nation — fractured, anxious France — became, for one night, simply France. Champions of the world. At home. For the first time."
        },
        {
          year: "2018",
          title: "YOUNG BLOOD, GOLDEN CUP",
          photo: {
            wikiPage: null,
            url: "/mbappe_wc.jpg",
            caption: "Moscow, July 15 2018. France lift the World Cup for the second time. Mbappe, 19, becomes only the second teenager to score in a final after Pele."
          },
          body: "Moscow, July 15, 2018. France 4, Croatia 2. Mbappe — 19 years old, 19 years old — scored from the penalty spot and became only the second teenager in history to score in a World Cup final. The first was Pele, in 1958. The next was Kylian Mbappe, sixty years later. Pogba drove one in from distance. Griezmann was everywhere. Lloris made the saves when they mattered. And Deschamps, who had lifted this same trophy as a player in 1998, held it aloft as a manager. The second Frenchman to win the World Cup in both capacities. No one else has done it."
        },
        {
          year: "2022",
          title: "THE FINAL THAT WILL NOT END",
          photo: {
            wikiPage: null,
            url: "/messi_mbappe_wc.jpg",
            caption: "Lusail, December 18 2022. Mbappe's hat-trick — including two in 97 seconds — is still not enough."
          },
          body: "Qatar, December 18, 2022. Argentina 3, France 3. After extra time. France had been 3-1 down with ten minutes to play. Gone. Finished. Buried. And then Mbappe — hat-trick. Three goals in a World Cup final. The only man since Geoff Hurst in 1966 to do so. Three goals. And still, France lost. On penalties. Lloris guessing wrong. The trophy going the other way. Mbappe finished as the tournament's top scorer. He still lost. And that loss — that particular, exquisite, impossible loss — is why 2026 carries a different kind of weight."
        }
      ],
      heartbreak: "December 18, 2022. The penalty. Hugo Lloris dives left. Gonzalo Montiel rolls it right. Argentina are champions. France had scored three times in the final ten minutes of normal time. A comeback for the ages — and it still was not enough. Mbappe had done everything a footballer can do. It simply was not enough. That is the wound that walks into 2026.",
      gloryMoment: "27th minute. Saint-Denis. July 12, 1998. Zidane rises. Zidane heads. The net ripples. And 60,000 French voices, and then 60 million beyond the stadium walls, understand something is happening that will not be forgotten. Forty-five minutes later — he does it again. France had never won the World Cup. And then, in one summer evening, they had.",
      approaching2026: "Deschamps has said this is his last tournament. Mbappe needs one more title to silence the conversation about 2022. Dembele arrives as the reigning Ballon d'Or winner. France do not come to 2026 searching for their identity. They come knowing exactly who they are — and desperate to prove it one final time under this manager.",
      statLine: [
        "First goal in World Cup history — Lucien Laurent, France v Mexico, July 13 1930",
        "Just Fontaine's 13 goals in 1958 remain the all-time single-tournament record",
        "Only team to win a World Cup and concede 3 goals in a final (2022)",
        "Mbappe is the only player to score a hat-trick in a final and still lose",
        "France have contested 3 of the last 5 World Cup finals (2006, 2018, 2022)",
        "Deschamps won the World Cup in 1998 as a player — then again in 2018 as manager"
      ]
    }
  },
  senegal: {
    id: "senegal",
    formation: "4-3-3",
    managerName: "Pape Thiaw",
    managerNationality: "Senegalese",
    managerSince: "2024",
    managerNote: "Promoted from assistant role after Aliou Cisse's departure. Former Senegalese international who understands the team's culture and DNA.",
    style: "Physical and direct with rapid counter-attacks. Senegal combine West African flair with European tactical discipline. They press aggressively and use their physicality and pace to overwhelm opponents in transitions.",
    strengths: [
      {
        area: "AFCON 2022 Champions",
        detail: "Won the Africa Cup of Nations for the first time in 2022. This generation has proven it can win major tournaments."
      },
      {
        area: "European Quality",
        detail: "Multiple players in the Premier League, Bundesliga, and Ligue 1 give Senegal genuine quality across the squad."
      }
    ],
    weaknesses: [
      {
        area: "Post-Mane Transition",
        detail: "Sadio Mane's decline means Senegal have lost their primary match-winner. Finding a new talisman is an ongoing process."
      },
      {
        area: "Group Difficulty",
        detail: "France, Norway (Haaland), and Iraq. Finishing second requires beating at least one of France or Norway."
      }
    ],
    historicalBest: "Quarter-finals — 2002",
    worldCupAppearances: 4,
    worldCupWins: 0,
    worldCupNarrative: "Senegal's 2002 World Cup was magical — beating defending champions France in the opening game and reaching the quarter-finals. The 2022 AFCON title, ending decades of heartbreak, was the greatest moment in Senegalese football. This squad carries that champion mentality.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Round of 16",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Group Stage",
        host: "Russia"
      },
      {
        year: 2002,
        result: "Quarter-finals",
        host: "Korea/Japan"
      }
    ],
    achievements: [
      "AFCON Winners — 2022 (first title)",
      "2002 World Cup Quarter-finalists (beat France in opener)",
      "2024 AFCON — Round of 16",
      "FIFA ranked #14 — highest-ranked African team"
    ],
    keyPlayers: [
      {
        name: "Ismaila Sarr",
        position: "Right Winger",
        club: "Crystal Palace",
        number: 18,
        whyNow: "Senegal's most dangerous wide player post-Mane. Premier League regular with explosive pace and directness. His ability to stretch defenses is Senegal's primary attacking weapon.",
        recentForm: "Crystal Palace. Premier League regular. Senegal's top scorer in qualifying.",
        worldCupRecord: "2022 World Cup — started in the Round of 16 against England."
      },
      {
        name: "Kalidou Koulibaly",
        position: "Centre-Back",
        club: "Al Hilal",
        number: 3,
        whyNow: "Senegal's captain and defensive leader. Former Napoli and Chelsea centre-back. At 34, his experience and leadership are irreplaceable despite moving to Saudi Arabia.",
        recentForm: "Al Hilal. Saudi Pro League. Senegal's captain. AFCON 2022 winner.",
        worldCupRecord: "2018 and 2022 World Cups. Senegal's defensive cornerstone."
      },
      {
        name: "Nicolas Jackson",
        position: "Centre Forward",
        club: "Chelsea",
        number: 9,
        whyNow: "Chelsea's starting striker. 14 Premier League goals this season. Senegal's new focal point in attack — his pace, movement, and improving finishing make him the successor to Mane as the primary goal threat.",
        recentForm: "Chelsea regular. 14 Premier League goals. Senegal's emerging star striker.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Idrissa Gueye",
        position: "Central Midfielder",
        club: "Everton",
        number: 5,
        whyNow: "Experienced Premier League midfielder. His defensive discipline, work rate, and experience of big games make him Senegal's midfield anchor. AFCON 2022 winner.",
        recentForm: "Everton regular. Premier League experience. AFCON 2022 winner. Over 100 caps.",
        worldCupRecord: "2018 and 2022 World Cups."
      }
    ],
    history: {
      openingLine: "The Lions of Teranga. 2002 debutants who danced with history.",
      chapters: [
        {
          year: "2002",
          title: "THE DANCE OF DAKAR",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Seoul, May 31, 2002. Senegal against reigning champions France. Papa Bouba Diop scores, dances around his shirt. Senegal win 1-0. They reach the quarter-finals, falling to a Turkish golden goal."
        },
        {
          year: "2022",
          title: "KNOCKOUT RETURN",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Qatar, 2022. Without Sadio Mane, they fight. Beat Ecuador 2-1 to reach the Round of 16. Fall to England."
        }
      ],
      heartbreak: "June 28, 2018. Samara. Senegal are eliminated by Colombia. They finished level with Japan on points, goal difference, goals scored. Out on fair play points (yellow cards). Cruel.",
      gloryMoment: "May 31, 2002. Seoul. Papa Bouba Diop scores the winner against France.",
      approaching2026: "Can the African powerhouses reach the quarter-finals once more?",
      statLine: [
        "Three World Cup appearances",
        "Reached quarter-finals in 2002",
        "First team eliminated on fair play points (2018)"
      ]
    }
  },
  norway: {
    id: "norway",
    formation: "4-3-3",
    managerName: "Stale Solbakken",
    managerNationality: "Norwegian",
    managerSince: "2020",
    managerNote: "Led Norway to their first World Cup since 1998. Former FC Copenhagen manager. Built the team around Haaland's extraordinary finishing ability.",
    style: "Direct, physical, and built entirely around getting Erling Haaland into scoring positions. Norway play a 4-3-3 that channels attacks through the centre, using Odegaard's creativity and Haaland's movement to devastate defences. The press is aggressive and the transitions are rapid.",
    strengths: [
      {
        area: "Erling Haaland",
        detail: "The most prolific striker in world football history at this age. 50+ goals per season for Manchester City. His physical attributes, finishing, and movement are unprecedented. He alone makes Norway a serious dark horse."
      },
      {
        area: "Odegaard-Haaland Axis",
        detail: "Martin Odegaard creates, Haaland finishes. Two genuinely world-class players who have a telepathic understanding from years together."
      },
      {
        area: "Scandinavian Discipline",
        detail: "Well-organised defensively. Norway do not concede easily and defend set pieces well."
      }
    ],
    weaknesses: [
      {
        area: "Haaland Dependency",
        detail: "If Haaland is injured or marked out of games, Norway have no Plan B. The drop in quality from Haaland to their second striker is the largest gap of any team at the tournament."
      },
      {
        area: "Group Difficulty",
        detail: "Group I with France and Senegal. Norway need to beat at least one of them to advance."
      },
      {
        area: "Defence",
        detail: "The back four is Norway's weakest area. No defenders playing at Champions League level."
      }
    ],
    historicalBest: "Round of 16 — 1998",
    worldCupAppearances: 4,
    worldCupWins: 0,
    worldCupNarrative: "Norway's last World Cup was 1998 in France. That team, featuring Tore Andre Flo and Ole Gunnar Solskjaer, beat Brazil in the group stage before losing to Italy in the Round of 16. Twenty-eight years later, Haaland's Norway return with the most lethal striker on the planet and genuine belief they can make an impact.",
    lastFiveWCs: [
      {
        year: 1998,
        result: "Round of 16",
        host: "France"
      },
      {
        year: 1994,
        result: "Did not qualify"
      },
      {
        year: 1938,
        result: "Round of 16",
        host: "France"
      }
    ],
    achievements: [
      "1998 World Cup Round of 16 (beat Brazil in group stage)",
      "2026 World Cup Qualification (first since 1998)",
      "Beat Brazil 2-1 at 1998 World Cup"
    ],
    keyPlayers: [
      {
        name: "Erling Haaland",
        position: "Centre Forward",
        club: "Manchester City",
        number: 9,
        whyNow: "The most prolific striker in world football. 50+ goals per season for Manchester City. Champions League and Premier League winner. At 25, he is at the peak of his extraordinary powers. His first World Cup — and the entire tournament will be watching to see if he can do what he does for City on the international stage. 36 goals in 30 caps for Norway.",
        recentForm: "Manchester City. 50+ goals this season. Premier League Golden Boot winner. Champions League scorer. Norwegian Footballer of the Century at 25.",
        worldCupRecord: "First World Cup. Norway have not qualified since 1998. Haaland has waited his entire career for this moment."
      },
      {
        name: "Martin Odegaard",
        position: "Attacking Midfielder",
        club: "Arsenal",
        number: 10,
        whyNow: "Arsenal's captain and Norway's creative genius. His vision, passing, and ability to create chances from nothing make him the perfect foil for Haaland. Premier League title winner at 27. The Odegaard-Haaland partnership is Norway's greatest asset.",
        recentForm: "Arsenal captain. Premier League champion 2025. 12 goals, 14 assists. Named in PFA Premier League Team of the Year.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Alexander Sorloth",
        position: "Forward",
        club: "Atletico Madrid",
        number: 19,
        whyNow: "La Liga striker who provides Norway with a secondary goal threat. His aerial ability and work rate complement Haaland's movement. 15 La Liga goals this season.",
        recentForm: "Atletico Madrid. 15 La Liga goals. Norway's second-highest scorer in qualifying.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Sander Berge",
        position: "Central Midfielder",
        club: "Fulham",
        number: 8,
        whyNow: "Physical midfielder who provides the engine room power Norway need. Premier League regular who wins aerial duels, covers ground, and protects the defence.",
        recentForm: "Fulham regular. Premier League experience. Norway's midfield anchor.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Kristoffer Ajer",
        position: "Centre-Back",
        club: "Brentford",
        number: 3,
        whyNow: "Norway's best defender. Premier League experience with Brentford. Ball-playing centre-back who starts attacks from deep.",
        recentForm: "Brentford regular. Premier League experience. Norway's first-choice centre-back.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "The land of Haaland. Defeaters of Brazil in 1998.",
      chapters: [
        {
          year: "1998",
          title: "MARSEILLE MIRACLE",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "June 23, 1998. Norway vs Brazil. Bebeto scores. But Tore Andre Flo equalizes. In the 89th minute, a penalty. Kjetil Rekdal steps up. Scores. Norway win 2-1 and advance. Historic."
        }
      ],
      heartbreak: "June 27, 1998. Marseille. Italy's Christian Vieri scores early. Norway dominate but lose 1-0 in the Round of 16.",
      gloryMoment: "June 23, 1998. Marseille. Kjetil Rekdal scores the winning penalty against Brazil.",
      approaching2026: "Haaland and Ødegaard's first World Cup. Norway must strike.",
      statLine: [
        "Three World Cup appearances",
        "Beat Brazil 2-1 in 1998"
      ]
    }
  },
  iraq: {
    id: "iraq",
    formation: "4-1-4-1",
    managerName: "Jesus Casas",
    managerNationality: "Spanish",
    managerSince: "2023",
    managerNote: "Spanish tactician who has brought European tactical structure to a talented Iraqi squad. Led Iraq through a competitive AFC qualifying campaign.",
    style: "Defensive and organised with quick counter-attacks. Iraq sit compact and absorb pressure before releasing quick forwards. Set pieces are important.",
    strengths: [
      {
        area: "AFC Qualifying Form",
        detail: "Qualified through a difficult AFC pathway. Iraq are competitive against all Asian opponents."
      },
      {
        area: "Gulf Cup Pedigree",
        detail: "Four-time Gulf Cup winners with strong regional tournament experience."
      }
    ],
    weaknesses: [
      {
        area: "Quality Gap",
        detail: "Group I with France, Norway, and Senegal is brutal. Iraq are significant underdogs in every match."
      },
      {
        area: "European Exposure",
        detail: "Limited players in top European leagues. Most of the squad plays in the Iraqi Premier League or Gulf leagues."
      }
    ],
    historicalBest: "Group Stage — 1986",
    worldCupAppearances: 2,
    worldCupWins: 0,
    worldCupNarrative: "Iraq's only previous World Cup was 1986 in Mexico. Their Asian Cup victory in 2007 — during wartime — remains one of the most remarkable achievements in football history. Qualifying for 2026 is a moment of national pride.",
    lastFiveWCs: [
      {
        year: 1986,
        result: "Group Stage",
        host: "Mexico"
      }
    ],
    achievements: [
      "Asian Cup Winners — 2007 (during Iraq War)",
      "Gulf Cup Winners — 4 titles",
      "1986 World Cup Qualification",
      "2026 World Cup Qualification (first in 40 years)"
    ],
    keyPlayers: [
      {
        name: "Aymen Hussein",
        position: "Centre Forward",
        club: "Al Quwa Al Jawiya",
        number: 9,
        whyNow: "Iraq's most prolific striker. Top scorer in AFC qualifying. His finishing is clinical and he carries the nation's hopes.",
        recentForm: "Iraqi Premier League top scorer. Iraq's leading scorer in World Cup qualifying.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Justin Meram",
        position: "Winger",
        club: "Free Agent",
        number: 17,
        whyNow: "Iraqi-American dual national with MLS experience. Brings North American footballing knowledge and versatility.",
        recentForm: "Former MLS veteran. Iraq's most experienced diaspora player.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Ibrahim Bayesh",
        position: "Central Midfielder",
        club: "Al Shorta",
        number: 14,
        whyNow: "Iraq's midfield engine. Combative and disciplined. The shield in front of the back four.",
        recentForm: "Iraqi Premier League. Iraq's defensive midfield anchor.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Jalal Hassan",
        position: "Goalkeeper",
        club: "Al Shorta",
        number: 1,
        whyNow: "Iraq's first-choice goalkeeper. Will need heroic performances in Group I.",
        recentForm: "Al Shorta regular. Iraq's established number one.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "The Lions of Mesopotamia. Hope in the midst of hardship.",
      chapters: [
        {
          year: "1986",
          title: "THE RADHI GOAL",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Mexico, 1986. Iraq's only World Cup. They lose to Paraguay, Belgium, and Mexico. But Ahmed Radhi scores their only goal against Belgium. A proud moment."
        }
      ],
      heartbreak: "June 8, 1986. Toluca. A close 2-1 loss to Belgium, missing out on a historic point.",
      gloryMoment: "June 8, 1986. Toluca. Ahmed Radhi scores Iraq's only World Cup goal.",
      approaching2026: "A historic return after 40 years. Iraq plays for a nation's joy.",
      statLine: [
        "One World Cup appearance (1986)"
      ]
    }
  },
  argentina: {
    id: "argentina",
    formation: "4-3-3",
    managerName: "Lionel Scaloni",
    managerNationality: "Argentine",
    managerSince: "2018",
    managerNote: "The most successful Argentine manager in history. Won the 2022 World Cup, 2021 Copa America, and 2024 Copa America. Transformed Argentina from a Messi-dependent team into a well-structured, relentless unit.",
    style: "High-pressing and aggressive. Scaloni's Argentina press as a unit and transition devastatingly quickly. The 4-3-3 provides structure with Enzo Fernandez controlling the tempo from deep, De Paul providing engine-room dynamism, and Messi's successor (likely Alvarez or Garnacho) providing creativity in the final third. Argentina defend from the front and never allow opponents to settle on the ball.",
    strengths: [
      {
        area: "Reigning Champions",
        detail: "Won the 2022 World Cup in Qatar. The experience of winning the biggest prize in football gives this squad a mental edge that cannot be coached."
      },
      {
        area: "Squad Depth",
        detail: "Even without Messi, Argentina have Alvarez, Garnacho, Enzo Fernandez, Mac Allister, De Paul, Romero, Martinez. The depth is extraordinary."
      },
      {
        area: "Winning Mentality",
        detail: "Copa America 2021, World Cup 2022, Copa America 2024, Finalissima 2022. This squad does not know how to lose. The winning culture under Scaloni is embedded."
      }
    ],
    weaknesses: [
      {
        area: "Post-Messi Transition",
        detail: "Messi has retired from international football. His absence removes the greatest individual weapon in football history. The creative void is significant."
      },
      {
        area: "Goldman Winner's Slump",
        detail: "Goldman Sachs noted that defending champions historically face a 'winner's slump' — a pattern where the reigning World Cup holder underperforms at the next tournament."
      },
      {
        area: "European Venue",
        detail: "Playing in North America rather than South America removes the home-continent advantage that helped in 2022 (neutral venue)."
      }
    ],
    historicalBest: "Winners — 1978, 1986, 2022",
    worldCupAppearances: 18,
    worldCupWins: 3,
    worldCupNarrative: "Kempes in 1978, Maradona's Hand of God and Goal of the Century in 1986, and Messi's coronation in 2022 — Argentina's World Cup story is woven into football's DNA. Three titles, six finals, and the greatest player who ever lived wearing the number 10. The 2022 final against France — the greatest football match ever played — ended with Messi lifting the trophy after penalties. Now they defend it without him.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Winners",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Round of 16",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Runner-up",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Quarter-finals",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Quarter-finals",
        host: "Germany"
      }
    ],
    achievements: [
      "FIFA World Cup Winners — 1978, 1986, 2022 (3 titles)",
      "Copa America Winners — 16 titles (most recent 2024, record shared)",
      "FIFA Finalissima Winners — 2022",
      "2022 World Cup Final — beat France on penalties in greatest final ever played",
      "Olympic Gold — 2004, 2008"
    ],
    keyPlayers: [
      {
        name: "Julian Alvarez",
        position: "Centre Forward",
        club: "Atletico Madrid",
        number: 9,
        whyNow: "Messi's heir as Argentina's primary attacking weapon. La Liga's top scorer with Atletico Madrid this season — 25 goals. His intelligence, work rate, and clinical finishing make him one of the best forwards in the world at 26. World Cup winner at 22, Copa America winner at 24. He has already won everything but now leads the line alone.",
        recentForm: "Atletico Madrid. 25 La Liga goals. Top scorer in Spain. Argentina's new number 9.",
        worldCupRecord: "2022 World Cup winner — scored 4 goals including the semi-final brace against Croatia. One of the best young players at the tournament."
      },
      {
        name: "Enzo Fernandez",
        position: "Central Midfielder",
        club: "Chelsea",
        number: 24,
        whyNow: "2022 World Cup Young Player of the Tournament. Chelsea's most important midfielder and Argentina's metronome. His passing range, composure, and ability to control the tempo of matches from deep make him the heartbeat of Scaloni's system. At 25, he is entering his prime.",
        recentForm: "Chelsea regular. Premier League experience. Argentina's starting midfielder. World Cup 2022 Young Player of the Tournament.",
        worldCupRecord: "2022 World Cup winner. Named Young Player of the Tournament. Scored against Mexico in the group stage."
      },
      {
        name: "Alexis Mac Allister",
        position: "Central Midfielder",
        club: "Liverpool",
        number: 20,
        whyNow: "Liverpool's midfield maestro. Premier League champion 2025. His tactical intelligence, pressing, and ability to arrive late in the box make him the perfect box-to-box midfielder. World Cup winner at 23.",
        recentForm: "Liverpool. Premier League champion 2025. Argentina's most improved player since the 2022 World Cup.",
        worldCupRecord: "2022 World Cup winner — started in the final. Scored 1 goal in the tournament."
      },
      {
        name: "Alejandro Garnacho",
        position: "Left Winger",
        club: "Manchester United",
        number: 11,
        whyNow: "Argentina's most exciting young attacker. Manchester United's best player at 21. His pace, dribbling, and eye for spectacular goals (overhead kicks, long-range efforts) make him the X-factor. He is the closest thing to a young Messi in terms of dribbling ability, though a very different player tactically.",
        recentForm: "Manchester United star. 14 goals and 9 assists. Premier League. Argentina's most exciting young talent.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Cristian Romero",
        position: "Centre-Back",
        club: "Tottenham Hotspur",
        number: 13,
        whyNow: "The most aggressive centre-back in world football. His tackling, intensity, and ability to step out of defence to win the ball high make him essential to Argentina's pressing game. 2022 World Cup winner. Premier League's best defender by tackle success rate.",
        recentForm: "Tottenham. Premier League. Argentina's defensive leader and first-choice centre-back.",
        worldCupRecord: "2022 World Cup winner — started in the final. Argentina's defensive rock."
      }
    ],
    history: {
      openingLine: "The country of the tango, of Maradona, of Messi... where football is not a game, but a religion of survival.",
      chapters: [
        {
          year: "1978",
          title: "THE FIRST GLORY",
          photo: {
            wikiPage: null,
            url: "/mario_kempes.jpeg",
            caption: "Mario Kempes scoring the decisive goal against Netherlands at the Monumental, June 25 1978."
          },
          body: "June 25, 1978. Buenos Aires. Mario Kempes. Hair wild, lunging through mud and Dutch defenders at the Monumental. A nation under the dark shadow of a military dictatorship, finding the one thing that could not be taken from them. Joy. Kempes scored in the 38th and 105th minutes. Argentina 3, Netherlands 1. The sky blue and white confetti rained down like snow. For the first time, Argentina ruled the earth. The wait was over."
        },
        {
          year: "1986",
          title: "GENIUS AND DEVIL",
          photo: {
            wikiPage: "Diego_Maradona",
            url: null,
            caption: "Diego Maradona holding the World Cup trophy in Mexico City, June 29 1986."
          },
          body: "Mexico City, June 22, 1986. Minute 51: Diego Armando Maradona rises above Peter Shilton, a fist disguised as a head, the ball in the net. Cheeky, illegal, immortal. Minute 55: Maradona takes the ball in his own half, turns, slides past Reid, past Beardsley, past Butcher, past Fenwick, past Shilton. The goal of the century. The ultimate redemptive triumph. 3-2 against West Germany in the final. Diego, holding the world in his palms."
        },
        {
          year: "2022",
          title: "THE KING'S CROWN",
          photo: {
            wikiPage: null,
            url: "/messi_wc.avif",
            caption: "Lionel Messi celebrating the World Cup triumph in Lusail, December 18 2022."
          },
          body: "Lusail, December 18, 2022. Lionel Messi. Thirty-five years old. The last chance. The ultimate final. 3-3 after extra time. A penalty shootout of pure terror. Montiel rolls it home. Messi falls to his knees. The wait — 36 long years, 13,329 days — is finally over. The king has his crown. The ghost of Maradona smiles. Argentina is champions of the world again."
        }
      ],
      heartbreak: "July 13, 2014. Rio de Janeiro. The Maracana. 113th minute. Mario Götze cushions the ball and volleys it past Romero. Messi looks on, his eyes hollow. So close, yet a million miles away. The dream dies in the Brazilian night.",
      gloryMoment: "Minute 55. Azteca Stadium. June 22, 1986. Diego Maradona dances. Eleven touches. Six English defenders left in his wake. The ball rolled into an empty net. Pure genius.",
      approaching2026: "They return as holders. But Messi is in the twilight of his career. Can the Scaloni machine repeat the miracle without the peak version of their savior? Argentina plays not just for titles, but for eternity.",
      statLine: [
        "Three World Cup titles — 1978, 1986, 2022",
        "Lionel Messi has played the most World Cup matches in history (26)",
        "Diego Maradona was fouled 53 times at the 1986 World Cup — a tournament record",
        "Only team in history to win the World Cup after losing their opening match (2022)"
      ]
    }
  },
  algeria: {
    id: "algeria",
    formation: "4-3-3",
    managerName: "Vladimir Petkovic",
    managerNationality: "Bosnian-Swiss",
    managerSince: "2023",
    managerNote: "Former Switzerland manager who led them to the Euro 2020 quarter-finals (beating France). Now bringing European tactical discipline to Algeria's talented squad.",
    style: "Technical and possession-oriented. Petkovic has instilled a more structured approach compared to previous Algerian sides. Quick passing combinations in midfield with pacy wingers providing width.",
    strengths: [
      {
        area: "Technical Quality",
        detail: "Several players in Ligue 1 and other top European leagues bring genuine technical quality."
      },
      {
        area: "AFCON 2019 Winners",
        detail: "Won the Africa Cup of Nations in 2019 and maintain a strong CAF presence."
      }
    ],
    weaknesses: [
      {
        area: "Group Difficulty",
        detail: "Argentina, Austria, and Jordan. Must beat Jordan and take points from Austria to have any hope."
      },
      {
        area: "Inconsistency",
        detail: "Algeria's form has been up and down since the 2019 AFCON title."
      }
    ],
    historicalBest: "Round of 16 — 2014",
    worldCupAppearances: 5,
    worldCupWins: 0,
    worldCupNarrative: "Algeria reached the Round of 16 at the 2014 World Cup, pushing Germany to extra time. Their 2019 AFCON title was the crowning achievement. Qualifying for 2026 after missing 2018 and 2022 is a significant return.",
    lastFiveWCs: [
      {
        year: 2014,
        result: "Round of 16",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Group Stage",
        host: "South Africa"
      }
    ],
    achievements: [
      "AFCON Winners — 1990, 2019",
      "2014 World Cup Round of 16 (took Germany to extra time)",
      "First African team to beat a European team at a World Cup (West Germany, 1982)"
    ],
    keyPlayers: [
      {
        name: "Riyad Mahrez",
        position: "Right Winger",
        club: "Al Ahli",
        number: 7,
        whyNow: "Algeria's captain and most decorated player. Multiple Premier League titles with Manchester City. At 35, his last tournament. His experience, set-piece delivery, and creativity remain Algeria's best weapons.",
        recentForm: "Al Ahli. Saudi Pro League. Multiple Premier League winner with Man City. Algeria's captain.",
        worldCupRecord: "2014 World Cup — part of the historic Round of 16 squad."
      },
      {
        name: "Ismael Bennacer",
        position: "Central Midfielder",
        club: "AC Milan",
        number: 6,
        whyNow: "Serie A midfielder with AC Milan. 2019 AFCON Best Player. His composure and passing from deep are Algeria's creative foundation.",
        recentForm: "AC Milan regular. Serie A experience. 2019 AFCON Best Player.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Said Benrahma",
        position: "Left Winger",
        club: "Lyon",
        number: 10,
        whyNow: "Creative winger with Ligue 1 and Premier League experience. Algeria's most dangerous dribbler.",
        recentForm: "Lyon. Ligue 1 regular. Algeria's most creative attacker.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Amine Gouiri",
        position: "Forward",
        club: "Rennes",
        number: 9,
        whyNow: "Young Ligue 1 forward with genuine goal threat. Algeria's emerging striker.",
        recentForm: "Rennes. Ligue 1 regular. Algeria's top scorer in qualifying.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "The desert foxes. The disgrace of Gijon.",
      chapters: [
        {
          year: "1982",
          title: "GERMAN SCALP",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Spain, 1982. Algeria shock West Germany 2-1. But Germany and Austria play out a mutually beneficial 1-0 win, the 'Disgrace of Gijon', to eliminate Algeria. A scandal that forced simultaneous final group games."
        },
        {
          year: "2014",
          title: "PORTO ALEGRE FIGHT",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Brazil, 2014. Algeria reach the Round of 16. They push Germany, the eventual champions, to extra time. Schürrle and Özil score, Djabou scores late. A heroic 2-1 defeat."
        }
      ],
      heartbreak: "June 25, 1982. Gijon. Watching Germany and Austria pass the ball aimlessly for 80 minutes to send them home.",
      gloryMoment: "June 16, 1982. Gijon. Lakhdar Belloumi scores the winner against West Germany.",
      approaching2026: "Back on the stage. Algeria has the talent to surprise.",
      statLine: [
        "Four World Cup appearances",
        "Reached Round of 16 in 2014"
      ]
    }
  },
  austria: {
    id: "austria",
    formation: "4-2-3-1",
    managerName: "Ralf Rangnick",
    managerNationality: "German",
    managerSince: "2022",
    managerNote: "The 'Godfather of Gegenpressing.' Inventor of the high-pressing philosophy that influenced Klopp, Tuchel, and Nagelsmann. Turned Austria into one of Europe's most exciting teams.",
    style: "Pure Gegenpressing. Austria press with ferocious intensity — they led Euro 2024 in PPDA and high turnovers. Every player knows their pressing trigger. Out of possession, Austria are relentless. In possession, they play quick, vertical football through Sabitzer and Laimer. Rangnick has made Austria play above their individual talent level.",
    strengths: [
      {
        area: "Pressing Machine",
        detail: "Led Euro 2024 in pressing intensity. Austria suffocate opponents and force turnovers in dangerous areas. Their PPDA is among the best in the world."
      },
      {
        area: "Tactical Cohesion",
        detail: "Rangnick has been in charge since 2022 and every player understands the system perfectly. Austria are the best-drilled team outside the favourites."
      }
    ],
    weaknesses: [
      {
        area: "Individual Quality Ceiling",
        detail: "No genuine world-class star. Sabitzer and Laimer are very good but not at the level of Mbappe, Haaland, or Rodri."
      },
      {
        area: "Knockout Experience",
        detail: "Austria have never advanced beyond the Round of 16 at a World Cup or European Championship."
      }
    ],
    historicalBest: "Semi-finals — 1934, 1954",
    worldCupAppearances: 8,
    worldCupWins: 0,
    worldCupNarrative: "Austria's best World Cup performances were in the 1930s-1950s. In the modern era, they have been consistent qualifiers but never genuine contenders. Rangnick's pressing revolution has changed the perception — Austria were one of the most exciting teams at Euro 2024.",
    lastFiveWCs: [
      {
        year: 1998,
        result: "Group Stage",
        host: "France"
      },
      {
        year: 1990,
        result: "Group Stage",
        host: "Italy"
      },
      {
        year: 1982,
        result: "Group Stage",
        host: "Spain"
      }
    ],
    achievements: [
      "World Cup Semi-finalists — 1934, 1954",
      "Euro 2024 Round of 16",
      "Euro 2020 Round of 16",
      "Rangnick's pressing revolution (highest PPDA at Euro 2024)"
    ],
    keyPlayers: [
      {
        name: "Marcel Sabitzer",
        position: "Attacking Midfielder",
        club: "Borussia Dortmund",
        number: 9,
        whyNow: "Austria's captain and most important player. Dortmund's creative force. His energy, goal threat, and leadership drive the pressing game. At 32, this is his peak tournament moment.",
        recentForm: "Borussia Dortmund regular. Bundesliga and Champions League experience. Austria's captain and top scorer.",
        worldCupRecord: "First World Cup. Despite 80+ caps, Austria failed to qualify for 2018 and 2022."
      },
      {
        name: "Konrad Laimer",
        position: "Central Midfielder",
        club: "Real Madrid",
        number: 6,
        whyNow: "Real Madrid's pressing specialist. His relentless running, ball-winning, and tactical intelligence make him the engine of Rangnick's system. La Liga and Champions League winner.",
        recentForm: "Real Madrid rotation option. La Liga and Champions League winner. Austria's midfield engine.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Christoph Baumgartner",
        position: "Attacking Midfielder",
        club: "RB Leipzig",
        number: 14,
        whyNow: "Bundesliga attacker who provides creativity and goals from the number 10 role. Euro 2024 goalscorer. His link-up play and pressing from the front are crucial.",
        recentForm: "RB Leipzig. Bundesliga regular. Scored against Poland at Euro 2024.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Patrick Pentz",
        position: "Goalkeeper",
        club: "Real Valladolid",
        number: 1,
        whyNow: "Austria's established goalkeeper. La Liga experience. Reliable shot-stopper with good distribution.",
        recentForm: "Real Valladolid. La Liga experience. Austria's first-choice goalkeeper.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "The Wunderteam era is gone, but the spirit remains.",
      chapters: [
        {
          year: "1954",
          title: "LAUSANNE BATTLE",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Switzerland, 1954. Austria vs Switzerland. 12 goals in 40-degree heat. Austria trail 3-0, win 7-5. The highest scoring match in World Cup history. Austria finish third."
        }
      ],
      heartbreak: "June 21, 1978. Cordoba. Hans Krankl scores twice to beat West Germany 3-2. A famous win, but both were already out.",
      gloryMoment: "June 26, 1954. Lausanne. Winning the 12-goal thriller against Switzerland.",
      approaching2026: "Rangnick's high intensity system. Austria must make an impact.",
      statLine: [
        "Seven World Cup appearances",
        "Third place in 1954"
      ]
    }
  },
  jordan: {
    id: "jordan",
    formation: "4-5-1",
    managerName: "Hussein Ammouta",
    managerNationality: "Moroccan",
    managerSince: "2023",
    managerNote: "Experienced Moroccan coach who led Jordan to the 2024 Asian Cup final — their best-ever result.",
    style: "Disciplined and defensive. Jordan sit deep in a low block and defend with intensity. Counter-attacks are their primary offensive weapon. Set pieces are well-drilled.",
    strengths: [
      {
        area: "2024 Asian Cup Finalists",
        detail: "Reached the Asian Cup final for the first time ever, beating South Korea and Iraq along the way. This squad has proven it can punch above its weight."
      },
      {
        area: "Defensive Organisation",
        detail: "Jordan's defensive shape is among the best-drilled in the AFC."
      }
    ],
    weaknesses: [
      {
        area: "Quality Gap",
        detail: "First ever World Cup. Group J with Argentina, Algeria, and Austria provides no easy fixtures."
      },
      {
        area: "Attacking Limitations",
        detail: "Very limited goal-scoring threat. Jordan struggle to create quality chances against organised defenses."
      }
    ],
    historicalBest: "First World Cup — 2026",
    worldCupAppearances: 1,
    worldCupWins: 0,
    worldCupNarrative: "Jordan's qualification for the 2026 World Cup is the greatest achievement in their footballing history. A nation that had never come close before reached the 2024 Asian Cup final and then qualified for the World Cup. Every match is a celebration.",
    lastFiveWCs: [],
    achievements: [
      "2024 Asian Cup Finalists (best ever result)",
      "2026 World Cup Qualification (first ever)",
      "WAFF Championship Winners — 2007, 2014"
    ],
    keyPlayers: [
      {
        name: "Mousa Al-Tamari",
        position: "Winger",
        club: "Montpellier",
        number: 7,
        whyNow: "Jordan's best player and Ligue 1 winger. His pace and creativity are Jordan's primary attacking weapon. Asian Cup 2024 star.",
        recentForm: "Montpellier. Ligue 1 regular. Jordan's most talented player. Asian Cup 2024 standout.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Yazan Al-Naimat",
        position: "Centre Forward",
        club: "BSC Young Boys",
        number: 9,
        whyNow: "Swiss Super League striker who scored crucial qualifying goals. Jordan's primary goal threat.",
        recentForm: "BSC Young Boys. Swiss Super League. Jordan's top scorer in qualifying.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Amer Shafi",
        position: "Goalkeeper",
        club: "Al Faisaly",
        number: 1,
        whyNow: "Jordan's veteran goalkeeper whose heroics in the Asian Cup were crucial. His experience and shot-stopping anchor the defence.",
        recentForm: "Al Faisaly regular. Jordanian Premier League. Asian Cup 2024 hero.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Nizar Al-Rashdan",
        position: "Centre-Back",
        club: "Al Ain",
        number: 5,
        whyNow: "Defensive leader who marshals Jordan's back line. AFC Champions League experience with Al Ain.",
        recentForm: "Al Ain. AFC Champions League. Jordan's defensive leader.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "The Chivalrous. First time under the lights.",
      chapters: [
        {
          year: "2026",
          title: "HISTORIC DEBUT",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Jordan qualifies for its first ever World Cup after a historic run in AFC qualifying, bringing massive joy to their fans."
        }
      ],
      heartbreak: "Never played. 2026 is their first experience.",
      gloryMoment: "The final whistle in Amman that sealed their historic World Cup ticket.",
      approaching2026: "To play with pride and show Arab football's rise.",
      statLine: [
        "First World Cup appearance (2026)"
      ]
    }
  },
  portugal: {
    id: "portugal",
    formation: "4-3-3",
    managerName: "Roberto Martinez",
    managerNationality: "Spanish",
    managerSince: "2023",
    managerNote: "Former Belgium manager. Won 100% of Euro 2024 qualifying games. Led Portugal to the Euro 2024 quarter-finals. Has built a cohesive attacking system while managing Ronaldo's role.",
    style: "Possession-based attacking football with clinical finishing. Martinez's Portugal play a fluid 4-3-3 that encourages creative freedom. Bruno Fernandes orchestrates from the number 8/10 role while the wide forwards provide pace and directness. Portugal are comfortable in possession and lethal on set pieces.",
    strengths: [
      {
        area: "Attacking Talent Depth",
        detail: "Ronaldo, Bernardo Silva, Bruno Fernandes, Rafael Leao, Joao Felix, Pedro Neto — Portugal can field two entirely different attacking XIs and both would be world-class."
      },
      {
        area: "Bruno Fernandes",
        detail: "Manchester United's captain is one of the most creative players in world football. His passing, set pieces, and goal threat from midfield are elite."
      },
      {
        area: "Defensive Solidity",
        detail: "Ruben Dias, Antonio Silva, and Diogo Costa form an excellent defensive core. Portugal conceded the fewest goals in Euro 2024 qualifying."
      }
    ],
    weaknesses: [
      {
        area: "Ronaldo Question",
        detail: "At 41, Ronaldo's role is the elephant in the room. His presence is inspirational but his declining mobility limits Portugal's pressing game."
      },
      {
        area: "Knockout Fragility",
        detail: "Portugal have been eliminated on penalties at the last two major tournaments (Euro 2024 vs France, 2022 WC vs Morocco). They struggle to close out tight games."
      }
    ],
    historicalBest: "Winners — Euro 2016",
    worldCupAppearances: 8,
    worldCupWins: 0,
    worldCupNarrative: "Portugal's World Cup history is one of brilliance without the ultimate prize. Eusebio's third place in 1966, Figo's generation, Ronaldo's relentless pursuit of the one trophy that has eluded him. They won Euro 2016 and Euro Nations League 2019 but the World Cup remains elusive. This is likely Ronaldo's farewell — and the squad is the deepest Portugal have ever assembled.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Quarter-finals",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Round of 16",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Group Stage",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Round of 16",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Semi-finals",
        host: "Germany"
      }
    ],
    achievements: [
      "UEFA European Championship Winners — 2016",
      "UEFA Nations League Winners — 2019",
      "2006 World Cup Semi-finalists",
      "2022 World Cup Quarter-finalists",
      "Cristiano Ronaldo — all-time international top scorer (130+ goals)"
    ],
    keyPlayers: [
      {
        name: "Bruno Fernandes",
        position: "Central Midfielder / Attacking Midfielder",
        club: "Manchester United",
        number: 8,
        whyNow: "Portugal's most important creative player. Manchester United captain whose passing, vision, and goal threat from midfield are among the best in the world. 14 goals and 13 assists in the Premier League this season. At 31, he is in his prime and has shouldered the creative burden for both club and country.",
        recentForm: "Manchester United captain. 14 goals, 13 assists. Premier League Team of the Season contender. Portugal's creative engine.",
        worldCupRecord: "2022 World Cup — 2 goals and 1 assist. Named in the World Cup Best XI shortlist."
      },
      {
        name: "Rafael Leao",
        position: "Left Winger",
        club: "AC Milan",
        number: 17,
        whyNow: "Serie A's most explosive winger. His pace, dribbling, and directness make him Portugal's most dangerous attacking threat in open play. At 26, he is entering his prime and has matured into a consistent performer after early inconsistency.",
        recentForm: "AC Milan talisman. Serie A regular. 16 goals. Portugal's most direct attacker.",
        worldCupRecord: "2022 World Cup — substitute appearances. Now a guaranteed starter."
      },
      {
        name: "Ruben Dias",
        position: "Centre-Back",
        club: "Manchester City",
        number: 4,
        whyNow: "The best Portuguese centre-back since Pepe at his peak. Manchester City's defensive leader. His reading of the game, positioning, and leadership make him the foundation of Portugal's defence.",
        recentForm: "Manchester City regular. Premier League champion. Portugal's first-choice centre-back.",
        worldCupRecord: "2022 World Cup — started in the quarter-final. Now the defensive leader."
      },
      {
        name: "Bernardo Silva",
        position: "Right Winger / Midfielder",
        club: "Manchester City",
        number: 10,
        whyNow: "One of the most intelligent players in world football. His positional play, pressing, and technical ability make him invaluable in multiple positions. Manchester City's most consistent outfield player over the last 5 years.",
        recentForm: "Manchester City. Premier League champion. One of the best players in Europe. Portugal's most versatile attacker.",
        worldCupRecord: "2018 and 2022 World Cups. Consistent performer for Portugal at major tournaments."
      },
      {
        name: "Cristiano Ronaldo",
        position: "Centre Forward",
        club: "Al Nassr",
        number: 7,
        whyNow: "The all-time international goalscorer with 130+ goals. At 41, this is his farewell tournament — his 6th World Cup. His goalscoring record, aerial ability, and sheer force of will remain unmatched. Whether he starts or comes off the bench, his presence elevates everyone around him.",
        recentForm: "Al Nassr. Saudi Pro League top scorer. 130+ international goals — all-time record. Portugal's captain.",
        worldCupRecord: "5 World Cups (2006-2022). 8 World Cup goals. Euro 2016 winner. The greatest Portuguese footballer of all time."
      }
    ],
    history: {
      openingLine: "Eusébio's tears. Cristiano's obsession. A nation of navigators still searching for the ultimate destination.",
      chapters: [
        {
          year: "1966",
          title: "EUSEBIO'S TEARS",
          photo: {
            wikiPage: "Eusébio",
            url: null,
            caption: "Eusébio, the Black Panther, playing at the 1966 tournament in England."
          },
          body: "England, 1966. The Black Panther. Eusébio. Nine goals in the tournament, including four against North Korea in a 5-3 comeback. But in the semifinal against England, Bobby Charlton scored twice. Eusébio scored a penalty, but it was not enough. He left the Wembley pitch in tears. Portugal finished third."
        },
        {
          year: "2022",
          title: "THE TEARFUL END",
          body: "Qatar, 2022. Cristiano Ronaldo sits on the bench. Portugal beat Switzerland 6-1. But in the quarterfinal against Morocco, En-Nesyri rises. Portugal cannot break them down. Ronaldo walks down the tunnel, crying. The end of the road.",
          photos: [
            {
              wikiPage: null,
              url: "/ronaldo_tears_2022.webp",
              caption: "Cristiano Ronaldo walks off the pitch in Doha, Qatar, December 10 2022."
            },
            {
              wikiPage: null,
              url: "/portugal_exit.jpeg",
              caption: "Portugal's exit from the World Cup."
            }
          ]
        }
      ],
      heartbreak: "December 10, 2022. Doha. Portugal 0, Morocco 1. Cristiano Ronaldo's 196th international appearance ends in the quarterfinal. He walks down the tunnel alone, tears streaming down his face.",
      gloryMoment: "July 23, 1966. Liverpool. Portugal 0-3 down to North Korea. Eusébio takes control. Four goals in 32 minutes. Portugal win 5-3. Pure individual genius.",
      approaching2026: "Sixty years since Eusébio's debut. Cristiano Ronaldo's final World Cup. Portugal has the talent — can they finally reach a final?",
      statLine: [
        "Best World Cup finish — Third place (1966)",
        "Eusebio scored 9 goals in 6 matches at the 1966 World Cup",
        "Cristiano Ronaldo is the only player to score in five World Cups (2006-2022)",
        "Portugal have won only 3 of their last 9 World Cup knockout matches"
      ]
    }
  },
  "dr-congo": {
    id: "dr-congo",
    formation: "4-3-3",
    managerName: "Sebastien Desabre",
    managerNationality: "French",
    managerSince: "2024",
    managerNote: "Experienced CAF manager. Led DR Congo to the 2024 AFCON semi-finals — their best result in 9 years.",
    style: "Athletic and direct. DR Congo use their physical superiority and pace to overwhelm opponents. Quick transitions through wide channels are their primary attacking weapon.",
    strengths: [
      {
        area: "Athletic Quality",
        detail: "One of the most physically powerful squads in Africa. Their athleticism creates mismatches."
      },
      {
        area: "2024 AFCON Run",
        detail: "Semi-finalists at AFCON 2024, proving they can compete at the highest African level."
      }
    ],
    weaknesses: [
      {
        area: "Group K Difficulty",
        detail: "Portugal and Colombia are significantly stronger. Advancing is a tall order."
      },
      {
        area: "Tactical Discipline",
        detail: "Can be disorganised defensively when opponents maintain possession."
      }
    ],
    historicalBest: "Quarter-finals — 1974 (as Zaire)",
    worldCupAppearances: 2,
    worldCupWins: 0,
    worldCupNarrative: "As Zaire, they appeared at the 1974 World Cup — the first Sub-Saharan African team to qualify. The 9-0 loss to Yugoslavia remains infamous. Under their current name, this is their first qualification — a source of immense national pride.",
    lastFiveWCs: [
      {
        year: 1974,
        result: "Group Stage",
        host: "West Germany"
      }
    ],
    achievements: [
      "AFCON Winners — 1968, 1974 (as Zaire)",
      "2024 AFCON Semi-finalists",
      "First Sub-Saharan African team to qualify for a World Cup (1974)"
    ],
    keyPlayers: [
      {
        name: "Chancel Mbemba",
        position: "Centre-Back",
        club: "Marseille",
        number: 22,
        whyNow: "Ligue 1 centre-back with European experience. DR Congo's most experienced defender and captain.",
        recentForm: "Marseille regular. Ligue 1 experience. DR Congo's captain.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Cedric Bakambu",
        position: "Centre Forward",
        club: "Real Betis",
        number: 9,
        whyNow: "La Liga striker with proven goal-scoring ability. DR Congo's primary goal threat.",
        recentForm: "Real Betis. La Liga experience. DR Congo's top scorer.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Yoane Wissa",
        position: "Forward",
        club: "Brentford",
        number: 11,
        whyNow: "Premier League forward with Brentford. 12 goals this season. His pace and finishing make him DR Congo's most dangerous attacker.",
        recentForm: "Brentford. 12 Premier League goals. DR Congo's most in-form player.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Samuel Moutoussamy",
        position: "Central Midfielder",
        club: "Caen",
        number: 6,
        whyNow: "Midfield anchor with French football experience. DR Congo's defensive midfield shield.",
        recentForm: "Caen regular. French football experience.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "The Leopards. Zaire in 1974, a proud return.",
      chapters: [
        {
          year: "1974",
          title: "ZAIRE DEBUT",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Germany, 1974. As Zaire, the first sub-Saharan African team. Mwepu Ilunga runs out of the wall to kick the ball away before a Brazilian free-kick. A misunderstanding that became iconic."
        }
      ],
      heartbreak: "June 18, 1974. Gelsenkirchen. 9-0 destruction by Yugoslavia. A painful memory.",
      gloryMoment: "The moment they stepped onto the pitch in 1974, carrying the hopes of sub-Saharan Africa.",
      approaching2026: "A historic return after 52 years. DR Congo will fight.",
      statLine: [
        "One World Cup appearance (1974 as Zaire)"
      ]
    }
  },
  uzbekistan: {
    id: "uzbekistan",
    formation: "4-2-3-1",
    managerName: "Srecko Katanec",
    managerNationality: "Slovenian",
    managerSince: "2024",
    managerNote: "Experienced coach who previously led Slovenia and Iraq. Brought European tactical structure to Uzbekistan.",
    style: "Compact and counter-attacking. Uzbekistan defend in a disciplined mid-block and look to exploit space on transitions. Their technical quality in the AFC is underrated.",
    strengths: [
      {
        area: "AFC Qualifying Form",
        detail: "Qualified convincingly from a difficult AFC pathway. Beat several established Asian nations."
      },
      {
        area: "Historic Moment",
        detail: "First ever World Cup. The entire nation is unified behind the team."
      }
    ],
    weaknesses: [
      {
        area: "Quality Gap",
        detail: "Group K with Portugal and Colombia is extremely difficult."
      },
      {
        area: "European Exposure",
        detail: "Most players ply their trade in the Uzbek Super League or Russian leagues."
      }
    ],
    historicalBest: "First World Cup — 2026",
    worldCupAppearances: 1,
    worldCupWins: 0,
    worldCupNarrative: "Uzbekistan's qualification for the 2026 World Cup is their greatest sporting achievement. A perennial AFC playoff heartbreak team finally broke through. Every match at this tournament is historic.",
    lastFiveWCs: [],
    achievements: [
      "2026 World Cup Qualification (first ever)",
      "Asian Cup Quarter-finalists — 2004, 2007, 2011, 2015, 2019",
      "Multiple AFC qualifying heartbreaks finally overcome"
    ],
    keyPlayers: [
      {
        name: "Eldor Shomurodov",
        position: "Centre Forward",
        club: "Cagliari",
        number: 9,
        whyNow: "Serie A striker. Uzbekistan's most high-profile player. His European experience and finishing make him the team's primary goal threat.",
        recentForm: "Cagliari. Serie A experience. Uzbekistan's most important player.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Jaloliddin Masharipov",
        position: "Winger",
        club: "Al-Shabab",
        number: 10,
        whyNow: "Saudi Pro League winger with flair and creativity. Uzbekistan's most talented attacker.",
        recentForm: "Al-Shabab. Saudi Pro League. Uzbekistan's creative talisman.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Otabek Shukurov",
        position: "Central Midfielder",
        club: "AGMK",
        number: 7,
        whyNow: "Uzbek league's best midfielder. Captain and leader of the squad.",
        recentForm: "AGMK. Uzbek Super League. Captain.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Utkir Yusupov",
        position: "Goalkeeper",
        club: "Pakhtakor",
        number: 1,
        whyNow: "Uzbekistan's established number one. Will need outstanding performances.",
        recentForm: "Pakhtakor regular. Uzbek Super League.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "The White Wolves. Central Asian history.",
      chapters: [
        {
          year: "2026",
          title: "THE wolves RISE",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Uzbekistan qualifies for its first World Cup, the culmination of years of near misses. The wolves have finally entered the grand arena."
        }
      ],
      heartbreak: "Never played. 2026 is their first experience.",
      gloryMoment: "The moment qualification was sealed, a historic achievement for Central Asia.",
      approaching2026: "To prove they belong among the elite of Asian football.",
      statLine: [
        "First World Cup appearance (2026)"
      ]
    }
  },
  colombia: {
    id: "colombia",
    formation: "4-2-3-1",
    managerName: "Nestor Lorenzo",
    managerNationality: "Argentine",
    managerSince: "2022",
    managerNote: "Former assistant to Jose Pekerman during Colombia's golden age (2014 and 2018 World Cups). Has continued Colombia's tactical evolution — leading them to the 2024 Copa America Final.",
    style: "Technical and creative with emphasis on midfield control. Lorenzo's Colombia play attractive, passing football built around James Rodriguez's vision and Luis Diaz's pace. The 4-2-3-1 provides balance while allowing the front four creative freedom. Colombia are one of the most entertaining teams at the tournament.",
    strengths: [
      {
        area: "Copa America 2024 Finalists",
        detail: "Reached the 2024 Copa America Final, losing to Argentina in extra time. This squad has proven it can compete with the best in South America."
      },
      {
        area: "Creative Midfield",
        detail: "James Rodriguez's vision, Jhon Arias's directness, and Richard Rios's dynamism give Colombia an excellent midfield."
      },
      {
        area: "Luis Diaz",
        detail: "Liverpool's winger is world-class. His pace, dribbling, and goal threat make him one of the best wide players at the tournament."
      }
    ],
    weaknesses: [
      {
        area: "Defensive Vulnerability",
        detail: "Conceded too many goals in CONMEBOL qualifying. The centre-back pairing is the weakest area of the squad."
      },
      {
        area: "Finishing",
        detail: "Despite dominating possession and creating chances, Colombia do not convert enough opportunities."
      }
    ],
    historicalBest: "Quarter-finals — 2014",
    worldCupAppearances: 7,
    worldCupWins: 0,
    worldCupNarrative: "Colombia's 2014 World Cup was magical — James Rodriguez won the Golden Boot with 6 goals, and they reached the quarter-finals for the first time. The 2018 campaign ended in the Round of 16 (losing to England on penalties). After missing 2022, Colombia's return — fuelled by the Copa America 2024 run — is highly anticipated.",
    lastFiveWCs: [
      {
        year: 2018,
        result: "Round of 16",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Quarter-finals",
        host: "Brazil"
      },
      {
        year: 1998,
        result: "Group Stage",
        host: "France"
      },
      {
        year: 1994,
        result: "Group Stage",
        host: "USA"
      }
    ],
    achievements: [
      "Copa America Winners — 2001",
      "2014 World Cup Quarter-finalists (James Rodriguez Golden Boot)",
      "2024 Copa America Finalists",
      "2018 World Cup Round of 16",
      "James Rodriguez — 2014 World Cup Golden Boot winner (6 goals)"
    ],
    keyPlayers: [
      {
        name: "Luis Diaz",
        position: "Left Winger",
        club: "Liverpool",
        number: 7,
        whyNow: "Liverpool's explosive winger and Colombia's most dangerous attacker. His pace, directness, and ability to score from both wings make him the primary threat. Premier League champion 2025. At 29, he is at his peak.",
        recentForm: "Liverpool. Premier League champion 2025. 15 goals and 10 assists. Colombia's most important player.",
        worldCupRecord: "First World Cup (Colombia didn't qualify in 2022). Copa America 2024 finalist."
      },
      {
        name: "James Rodriguez",
        position: "Attacking Midfielder",
        club: "Leon",
        number: 10,
        whyNow: "The 2014 World Cup Golden Boot winner at 35 is still Colombia's most creative player. His vision and passing range are unmatched in the squad. Copa America 2024 Best Player. Despite playing in Liga MX, he elevates at international tournaments like few others.",
        recentForm: "Leon (Liga MX). Copa America 2024 Best Player. 6 assists in 6 games at Copa America 2024. Still Colombia's creative heartbeat.",
        worldCupRecord: "2014 World Cup — Golden Boot winner with 6 goals. One of the greatest individual World Cup campaigns ever. 2018 World Cup — played through injury."
      },
      {
        name: "Jhon Arias",
        position: "Right Winger",
        club: "Fluminense",
        number: 11,
        whyNow: "Copa Libertadores winner with Fluminense. Direct, pacy winger who provides width and goals from the right side.",
        recentForm: "Fluminense. Copa Libertadores winner. Colombia's most consistent wide player.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Richard Rios",
        position: "Central Midfielder",
        club: "Palmeiras",
        number: 8,
        whyNow: "Breakout star of Copa America 2024. Dynamic midfielder who provides energy, progressive carrying, and goal threat from deep. At 24, his best years are ahead.",
        recentForm: "Palmeiras. Brazilian Serie A. Copa America 2024 breakout star. Colombia's midfield engine.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Davinson Sanchez",
        position: "Centre-Back",
        club: "Galatasaray",
        number: 23,
        whyNow: "Former Tottenham centre-back with Premier League and Champions League experience. Colombia's most reliable defender.",
        recentForm: "Galatasaray. Turkish Super Lig champion. Colombia's defensive leader.",
        worldCupRecord: "2018 World Cup — started in the Round of 16 against England."
      }
    ],
    history: {
      openingLine: "Los Cafeteros. Valderrama's hair, James's volley.",
      chapters: [
        {
          year: "2014",
          title: "JAMES'S SUMMER",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Brazil, 2014. James Rodríguez. The chest and volley against Uruguay in the Maracaná. The dancing celebrations. Colombia reach the quarter-finals, falling to Brazil. James wins the Golden Boot."
        }
      ],
      heartbreak: "July 3, 2018. Moscow. Colombia draw late against England through Yerry Mina. But penalties deny them in the Round of 16.",
      gloryMoment: "June 28, 2014. Rio de Janeiro. James Rodriguez chests down and volleys from 25 yards. Pure art.",
      approaching2026: "Under Lorenzo, Colombia are unbeaten in 20+ matches. They arrive with huge expectations.",
      statLine: [
        "Six World Cup appearances",
        "Reached quarter-finals in 2014",
        "James Rodriguez won the Golden Boot in 2014 (6 goals)"
      ]
    }
  },
  england: {
    id: "england",
    formation: "4-2-3-1",
    managerName: "Thomas Tuchel",
    managerNationality: "German",
    managerSince: "2025",
    managerNote: "Champions League winner with Chelsea (2021). Replaced Gareth Southgate after Euro 2024 final loss. His tactical expertise and big-game management are designed to take England to the next level — from finalists to winners.",
    style: "Tuchel's England are more tactically sophisticated than under Southgate. The 4-2-3-1 provides defensive structure while allowing Bellingham, Saka, and Foden to express themselves. England press more aggressively, transition faster, and are tactically flexible. Tuchel's Chelsea won the Champions League by being tactically perfect in knockout games — he aims to replicate that with England.",
    strengths: [
      {
        area: "Individual Quality",
        detail: "Bellingham, Saka, Foden, Rice, Kane, Palmer — England have more genuinely world-class players than any squad except France and Spain."
      },
      {
        area: "Tournament Finalists",
        detail: "Euro 2020 finalist, Euro 2024 finalist. This generation knows how to reach finals. Tuchel's job is to win one."
      },
      {
        area: "Premier League Foundation",
        detail: "The strongest domestic league in the world provides England's core. These players compete at the highest level every single week."
      },
      {
        area: "Tactical Upgrade",
        detail: "Tuchel's tactical acumen is a significant upgrade. His ability to prepare specific game plans for knockout opponents is elite."
      }
    ],
    weaknesses: [
      {
        area: "Finishing the Job",
        detail: "Two consecutive European Championship finals lost. England know how to get to the final but not how to win it. The psychological barrier is real."
      },
      {
        area: "Left-Back Uncertainty",
        detail: "England's most unsettled position. No clear first-choice left-back."
      }
    ],
    historicalBest: "Winners — 1966",
    worldCupAppearances: 16,
    worldCupWins: 1,
    worldCupNarrative: "1966 remains England's only World Cup victory — Geoff Hurst's hat-trick at Wembley. Since then, 58 years of hurt. Gazza's tears in 1990, Beckham's red card in 1998, penalty shootout heartbreaks. The Southgate era brought semi-finals (2018) and two European Championship finals (2020, 2024) but no trophy. Tuchel represents the final tactical piece — a world-class manager to match world-class players.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Quarter-finals",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Semi-finals",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Group Stage",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Round of 16",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Quarter-finals",
        host: "Germany"
      }
    ],
    achievements: [
      "FIFA World Cup Winners — 1966",
      "UEFA Euro 2024 Runners-up",
      "UEFA Euro 2020 Runners-up",
      "2018 World Cup Semi-finalists",
      "2022 World Cup Quarter-finalists"
    ],
    keyPlayers: [
      {
        name: "Jude Bellingham",
        position: "Attacking Midfielder",
        club: "Real Madrid",
        number: 10,
        whyNow: "England's best player and the most complete midfielder in world football at 22. Real Madrid talisman who won La Liga and the Champions League in his debut season. His ability to score, create, and dominate games from the number 10 role is generational. Euro 2024's best player (3 goals including a last-minute overhead kick vs Slovakia). If England win the World Cup, Bellingham will be why.",
        recentForm: "Real Madrid star. Champions League and La Liga winner. 18 goals and 12 assists. Named in UEFA Team of the Year. Euro 2024 — England's best player.",
        worldCupRecord: "2022 World Cup — became England's youngest-ever World Cup scorer at 19. Now the undisputed leader at 22."
      },
      {
        name: "Bukayo Saka",
        position: "Right Winger",
        club: "Arsenal",
        number: 7,
        whyNow: "Arsenal's most important player and England's most consistent performer at Euro 2024. His dribbling, crossing, and goal threat from the right wing are elite. Premier League champion with Arsenal. At 24, he is just entering his prime.",
        recentForm: "Arsenal talisman. Premier League champion 2025. 17 goals and 14 assists. England's most consistent performer.",
        worldCupRecord: "2022 World Cup — 3 goals. Euro 2024 — scored the equaliser vs Switzerland and was England's best attacker."
      },
      {
        name: "Phil Foden",
        position: "Left Winger / Attacking Midfielder",
        club: "Manchester City",
        number: 11,
        whyNow: "PFA Player of the Year 2024. Manchester City's most gifted technician. His close control, shooting, and ability to find pockets of space make him a constant threat. Often underperforms at tournaments compared to his club form — Tuchel's challenge is to unlock Foden for England.",
        recentForm: "Manchester City. PFA Player of the Year 2024. Premier League champion. 14 goals and 10 assists.",
        worldCupRecord: "2022 World Cup — limited impact. Euro 2024 — struggled to replicate club form. This is his breakout tournament or his reputation diminishes."
      },
      {
        name: "Declan Rice",
        position: "Central Midfielder",
        club: "Arsenal",
        number: 4,
        whyNow: "Arsenal's midfield anchor and England's most important defensive player. His ball-winning, passing, and positional intelligence make him the shield that allows Bellingham to attack freely. Premier League champion 2025.",
        recentForm: "Arsenal. Premier League champion 2025. England's most important defensive midfielder. £105M transfer justified.",
        worldCupRecord: "2022 World Cup — started every game. Euro 2024 — started every game. The heartbeat of England's midfield."
      },
      {
        name: "Harry Kane",
        position: "Centre Forward",
        club: "Bayern Munich",
        number: 9,
        whyNow: "England's all-time top scorer with 65+ goals. Bundesliga top scorer with Bayern Munich — 36 goals this season. At 32, his finishing remains the most clinical in the world. The question is whether he can finally win a major trophy — it would complete one of the greatest individual careers in football history.",
        recentForm: "Bayern Munich. 36 Bundesliga goals — top scorer. Champions League regular. England's captain and all-time record scorer.",
        worldCupRecord: "2018 World Cup Golden Boot winner (6 goals). 2022 World Cup — missed a crucial penalty vs France in the quarter-final. 12 World Cup goals across two tournaments."
      }
    ],
    history: {
      openingLine: "1966. A single moment of golden glory that has become a heavy cross to carry.",
      chapters: [
        {
          year: "1966",
          title: "THE ONLY TIME",
          photo: {
            wikiPage: "Bobby_Moore",
            url: null,
            caption: "Bobby Moore holds the Jules Rimet trophy aloft at Wembley, July 30 1966."
          },
          body: "Wembley, July 30, 1966. England versus West Germany. Geoff Hurst. A hat-trick. The controversial third goal that bounced off the bar. Then, in the 120th minute, as fans ran onto the pitch: 'They think it's all over... it is now!' Bobby Moore lifts the Jules Rimet trophy. The queen smiles. England are champions. For the only time."
        },
        {
          year: "1990",
          title: "TEARS IN TURIN",
          photo: {
            wikiPage: null,
            url: "/eng_1990_exit.webp",
            caption: "Paul Gascoigne, whose tears in Turin captured the hearts of a nation."
          },
          body: "Italy, 1990. Bobby Robson's men came so close. Gazza's tears after a yellow card that would rule him out of the final. The penalty shootout against West Germany. Stuart Pearce misses. Chris Waddle fires over the bar. The curse of the shootout is born."
        }
      ],
      heartbreak: "December 10, 2022. Al Khor. 84th minute. England trailing France 2-1. Penalty. Harry Kane, England's captain and record scorer, steps up. The ball rises. Up, up, over the bar, into the Qatari night. The dream dies on a missed spot-kick.",
      gloryMoment: "July 30, 1966. Wembley. 120th minute. Geoff Hurst runs down the left wing, hears the fans, and launches a rocket into the top corner. A hat-trick in the final.",
      approaching2026: "60 years. That is how long England has waited. Under Southgate and now a new era, the young lions must finally bring football home, or remain prisoners of 1966.",
      statLine: [
        "One World Cup title — 1966",
        "Geoff Hurst is the only player to score a hat-trick in a World Cup final (1966)",
        "England have lost 3 World Cup penalty shootouts (1990, 1998, 2006)",
        "Gary Lineker is England's top World Cup scorer with 10 goals"
      ]
    }
  },
  croatia: {
    id: "croatia",
    formation: "4-3-3",
    managerName: "Zlatko Dalic",
    managerNationality: "Croatian",
    managerSince: "2017",
    managerNote: "Led Croatia to the 2018 World Cup Final and 2022 Third Place. The most successful Croatian manager in history. Managing the transition from Modric's generation to the next.",
    style: "Midfield-dominant football built on technical excellence. Croatia control games through possession and patient build-up. The midfield — historically led by Modric — dictates tempo. Dalic values tactical intelligence and positional play above all. Croatia play above their population size through sheer footballing culture.",
    strengths: [
      {
        area: "Midfield Heritage",
        detail: "Even as Modric ages, Croatia's midfield production line continues. Kovacic, Brozovic, and now Sucic ensure the tradition continues."
      },
      {
        area: "Tournament DNA",
        detail: "2018 finalist, 2022 third place. A nation of 4 million that consistently outperforms at World Cups. Their tournament mentality is exceptional."
      },
      {
        area: "Big Game Experience",
        detail: "This squad has played in World Cup finals and third-place matches. The pressure of knockout football is familiar."
      }
    ],
    weaknesses: [
      {
        area: "Modric's Age",
        detail: "At 40, this is almost certainly Modric's final tournament. His legs have slowed, even if his brain remains elite. The post-Modric transition is the existential question."
      },
      {
        area: "Striker Uncertainty",
        detail: "No reliable goalscorer. Croatia create chances but do not convert enough."
      }
    ],
    historicalBest: "Runner-up — 2018",
    worldCupAppearances: 7,
    worldCupWins: 0,
    worldCupNarrative: "Croatia's 2018 World Cup Final run — beating Argentina, England, and Russia before losing to France — was one of the great overachievements in football history. In 2022, they finished third, beating Morocco in the third-place play-off. For a nation of 4 million, Croatia's World Cup record is staggering. Modric's farewell adds enormous emotional weight.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Semi-finals",
        host: "Qatar"
      },
      {
        year: 2018,
        result: "Runner-up",
        host: "Russia"
      },
      {
        year: 2014,
        result: "Group Stage",
        host: "Brazil"
      },
      {
        year: 2006,
        result: "Group Stage",
        host: "Germany"
      },
      {
        year: 2002,
        result: "Group Stage",
        host: "Korea/Japan"
      }
    ],
    achievements: [
      "2018 World Cup Runners-up",
      "2022 World Cup Semi-finalists (Third place)",
      "1998 World Cup Semi-finalists (Third place)",
      "3 World Cup semi-finals for a nation of 4 million",
      "Euro 2008 Quarter-finalists"
    ],
    keyPlayers: [
      {
        name: "Luka Modric",
        position: "Central Midfielder",
        club: "Real Madrid",
        number: 10,
        whyNow: "The greatest Croatian footballer of all time and the 2018 Ballon d'Or winner. At 40, this is his last dance. His vision, passing, and ability to control the tempo of a game remain elite — even as his physical attributes diminish. Real Madrid extended his contract because his quality is undeniable. This farewell tournament will be emotionally charged.",
        recentForm: "Real Madrid. Still contributing in La Liga and Champions League at 40. Croatia's all-time most capped player (175+ caps). 2018 Ballon d'Or winner.",
        worldCupRecord: "2006, 2014, 2018, 2022 World Cups. 2018 — led Croatia to the final, winning the Golden Ball as the tournament's best player. 2022 — led Croatia to third place at age 37."
      },
      {
        name: "Mateo Kovacic",
        position: "Central Midfielder",
        club: "Manchester City",
        number: 8,
        whyNow: "Manchester City's midfield metronome. His press resistance, carrying, and ability to link defense to attack are world-class. The natural successor to Modric's tempo-setting role — though a different style of player.",
        recentForm: "Manchester City. Premier League champion. Croatia's most important active midfielder.",
        worldCupRecord: "2014, 2018, 2022 World Cups. Started in the 2018 final."
      },
      {
        name: "Josko Gvardiol",
        position: "Centre-Back / Left-Back",
        club: "Manchester City",
        number: 24,
        whyNow: "One of the best young defenders in world football at 23. Manchester City's most versatile defender. His ability to play centre-back or left-back gives Dalic tactical flexibility. Powerful, fast, and comfortable on the ball.",
        recentForm: "Manchester City regular. Premier League champion. Named in Bundesliga Team of the Season before his City move. Croatia's defensive future.",
        worldCupRecord: "2022 World Cup — sensational performances at age 20. One of the breakout stars of the tournament."
      },
      {
        name: "Luka Sucic",
        position: "Central Midfielder",
        club: "Real Sociedad",
        number: 18,
        whyNow: "The heir to Modric. La Liga midfielder with Real Sociedad. His passing range, shooting from distance, and tactical intelligence mark him as Croatia's future central midfielder.",
        recentForm: "Real Sociedad regular. La Liga experience. Croatia's most exciting young midfielder.",
        worldCupRecord: "2022 World Cup — squad member at age 20. Now a starter."
      },
      {
        name: "Dominik Livakovic",
        position: "Goalkeeper",
        club: "Fenerbahce",
        number: 1,
        whyNow: "Croatia's penalty shootout specialist. Saved 3 penalties across the 2022 World Cup (vs Japan and Brazil). His heroics were the foundation of Croatia's run to the semi-finals.",
        recentForm: "Fenerbahce. Turkish Super Lig. Croatia's established number one.",
        worldCupRecord: "2022 World Cup — saved 3 penalties in shootouts. Arguably the tournament's best goalkeeper."
      }
    ],
    history: {
      openingLine: "A country of four million people. A story of endless defiance.",
      chapters: [
        {
          year: "1998",
          title: "THE DEBUT",
          photo: {
            wikiPage: null,
            url: null,
            caption: "Davor Šuker, the top scorer who fired Croatia to third in 1998."
          },
          body: "France, 1998. Just seven years after independence. Davor Šuker. Croatia shock the world, beating Germany 3-0 in the quarterfinal. In the semifinal against France, Šuker scores first. But Thuram scores his only two international goals to deny them. They finish third."
        },
        {
          year: "2018",
          title: "THE MARATHON",
          photo: {
            wikiPage: null,
            url: null,
            caption: "Luka Modrić holding the Golden Ball trophy in Moscow, July 15 2018."
          },
          body: "Russia, 2018. Extra time in the Round of 16. Extra time in the Quarterfinal. Extra time in the Semifinal. Luka Modrić running on fumes. Croatia reach the final. They lose 4-2 to France, but the nation of four million is proud. Modrić wins the Golden Ball."
        }
      ],
      heartbreak: "July 8, 1998. Saint-Denis. Croatia lead France 1-0. Then, Lilian Thuram — a defender who had never scored for France — scores twice. The dream of a final in their debut tournament dies.",
      gloryMoment: "July 11, 2018. Moscow. 109th minute. Ivan Perisic heads the ball back into the box, Mario Mandzukic reacts first and beats Pickford. Croatia are in the World Cup final.",
      approaching2026: "Modrić is gone or in his final days. The golden generation is passing. Can Croatia's spirit of defiance carry the next generation to similar heights?",
      statLine: [
        "World Cup final appearances — 2018 (Runners-up)",
        "Croatia have won four World Cup penalty shootouts (2018, 2022)",
        "Luka Modric has played 19 World Cup matches across 4 tournaments",
        "Davor Suker won the Golden Boot in 1998 with 6 goals"
      ]
    }
  },
  ghana: {
    id: "ghana",
    formation: "4-2-3-1",
    managerName: "Otto Addo",
    managerNationality: "German-Ghanaian",
    managerSince: "2024",
    managerNote: "Returned for a second stint after leading Ghana at the 2022 World Cup. Dual German-Ghanaian heritage bridges European tactical discipline with Ghanaian footballing culture.",
    style: "Energetic and direct. Ghana play a high-tempo game built on physical intensity and quick transitions. Their forwards are pacy and direct. Defensive organisation has improved under Addo's European influence.",
    strengths: [
      {
        area: "Athletic Quality",
        detail: "One of the most physically gifted squads in Africa. Their pace and power create mismatches against most opponents."
      },
      {
        area: "World Cup Heritage",
        detail: "Quarter-finalists in 2010. Ghana have the experience and mentality of competing at World Cups."
      }
    ],
    weaknesses: [
      {
        area: "Group Difficulty",
        detail: "England and Croatia in Group L make advancement extremely difficult."
      },
      {
        area: "Defensive Fragility",
        detail: "Conceded too many goals in qualifying. The back four lacks consistency."
      }
    ],
    historicalBest: "Quarter-finals — 2010",
    worldCupAppearances: 5,
    worldCupWins: 0,
    worldCupNarrative: "Ghana's 2010 World Cup quarter-final remains one of football's most dramatic moments. Suarez's deliberate handball on the line, Asamoah Gyan's missed penalty — Ghana were minutes away from becoming the first African semi-finalists. That heartbreak defined a generation. This young squad carries that legacy.",
    lastFiveWCs: [
      {
        year: 2022,
        result: "Group Stage",
        host: "Qatar"
      },
      {
        year: 2014,
        result: "Group Stage",
        host: "Brazil"
      },
      {
        year: 2010,
        result: "Quarter-finals",
        host: "South Africa"
      },
      {
        year: 2006,
        result: "Round of 16",
        host: "Germany"
      }
    ],
    achievements: [
      "2010 World Cup Quarter-finalists",
      "AFCON Winners — 4 titles (most recent 1982)",
      "2006 World Cup Round of 16",
      "Olympic Bronze — 1992"
    ],
    keyPlayers: [
      {
        name: "Mohammed Kudus",
        position: "Attacking Midfielder",
        club: "West Ham United",
        number: 10,
        whyNow: "Ghana's most talented player. West Ham's marquee signing. His dribbling, power, and ability to score spectacular goals make him one of the most exciting players at the tournament. At 25, he is Ghana's entire creative engine.",
        recentForm: "West Ham United. 14 Premier League goals. Ghana's best player by a significant margin.",
        worldCupRecord: "2022 World Cup — scored 2 goals. Named in the World Cup Young Player shortlist."
      },
      {
        name: "Thomas Partey",
        position: "Central Midfielder",
        club: "Arsenal",
        number: 5,
        whyNow: "Arsenal's experienced midfielder. His defensive ability, passing range, and leadership make him Ghana's midfield anchor. When fit, he is world-class.",
        recentForm: "Arsenal. Premier League champion 2025. Ghana's most experienced European-based player.",
        worldCupRecord: "2022 World Cup — Ghana's captain."
      },
      {
        name: "Antoine Semenyo",
        position: "Forward",
        club: "Bournemouth",
        number: 9,
        whyNow: "Premier League forward with pace and directness. 10 goals for Bournemouth. Ghana's emerging young striker.",
        recentForm: "Bournemouth. 10 Premier League goals. Ghana's top scorer in qualifying.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Inaki Williams",
        position: "Forward",
        club: "Athletic Club",
        number: 19,
        whyNow: "Switched from Spain to Ghana. Athletic Club's iron man with 250+ consecutive La Liga appearances. His pace and physical presence give Ghana an additional attacking dimension.",
        recentForm: "Athletic Club. La Liga regular. Unprecedented consecutive appearance record.",
        worldCupRecord: "First World Cup (for Ghana — never capped by Spain at a World Cup)."
      }
    ],
    history: {
      openingLine: "The Black Stars. A hand. A penalty. The ultimate African drama.",
      chapters: [
        {
          year: "2010",
          title: "JOHANNESBURG TRAGEDY",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "South Africa, 2010. Ghana are on the verge of becoming the first African team in a semi-final. 120th minute. Suarez clears with his hands. Penalty. Asamoah Gyan steps up. Hits the bar. Ghana lose on penalties. The ultimate heartbreak."
        }
      ],
      heartbreak: "July 2, 2010. Johannesburg. Gyan's penalty hitting the crossbar in the final second of extra time.",
      gloryMoment: "June 26, 2010. Rustenburg. Asamoah Gyan scores the extra-time winner against USA to reach the last eight.",
      approaching2026: "A young, hungry squad. Redemption against Uruguay in the group stage is in their minds.",
      statLine: [
        "Four World Cup appearances",
        "Reached quarter-finals in 2010"
      ]
    }
  },
  panama: {
    id: "panama",
    formation: "5-3-2",
    managerName: "Thomas Christiansen",
    managerNationality: "Danish-Spanish",
    managerSince: "2023",
    managerNote: "Former Leeds United manager. Led Panama to qualification for the 2026 World Cup. Brought European tactical structure to a squad rich in CONCACAF experience.",
    style: "Defensive and disciplined with a low block. Panama's 5-3-2 provides defensive security and makes them extremely difficult to break down. Counter-attacks through the pacy front two are their primary offensive weapon.",
    strengths: [
      {
        area: "Defensive Organisation",
        detail: "Panama's compact shape frustrates opponents. They are well-drilled in defensive transitions and set piece defending."
      },
      {
        area: "CONCACAF Toughness",
        detail: "Battle-hardened through competitive CONCACAF qualifying. Panama are physically tough and mentally resilient."
      }
    ],
    weaknesses: [
      {
        area: "Quality Gap",
        detail: "Group L with England and Croatia provides no easy games. The individual quality gap is significant."
      },
      {
        area: "Creative Limitations",
        detail: "Panama struggle to create chances. Their offensive output is limited."
      }
    ],
    historicalBest: "Group Stage — 2018",
    worldCupAppearances: 2,
    worldCupWins: 0,
    worldCupNarrative: "Panama's 2018 World Cup debut was a moment of national euphoria. The team lost all three games but the experience — including a goal by Felipe Baloy against England — was historic. This is their second appearance and the hope is to be more competitive.",
    lastFiveWCs: [
      {
        year: 2018,
        result: "Group Stage",
        host: "Russia"
      }
    ],
    achievements: [
      "2018 World Cup Qualification (first ever)",
      "CONCACAF Gold Cup Runners-up — 2005, 2013",
      "2026 World Cup Qualification"
    ],
    keyPlayers: [
      {
        name: "Eric Davis",
        position: "Left-Back",
        club: "Free Agent",
        number: 15,
        whyNow: "Panama's most experienced defender and captain. His leadership and defensive experience are crucial to the team's organisation.",
        recentForm: "Panama's captain. 100+ caps. The defensive leader.",
        worldCupRecord: "2018 World Cup — started all 3 games."
      },
      {
        name: "Jose Fajardo",
        position: "Centre Forward",
        club: "Saprissa",
        number: 9,
        whyNow: "Central American league striker. Panama's primary goal threat. His physicality and aerial ability give Panama a focal point.",
        recentForm: "Saprissa. Costa Rican league. Panama's top scorer in qualifying.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Adalberto Carrasquilla",
        position: "Central Midfielder",
        club: "Houston Dynamo",
        number: 8,
        whyNow: "MLS midfielder who provides energy and passing quality. Panama's most creative player.",
        recentForm: "Houston Dynamo. MLS regular. Panama's midfield engine.",
        worldCupRecord: "First World Cup."
      },
      {
        name: "Orlando Mosquera",
        position: "Goalkeeper",
        club: "Millonarios",
        number: 1,
        whyNow: "Colombian league goalkeeper. Panama's number one whose shot-stopping will be crucial in Group L.",
        recentForm: "Millonarios. Colombian league. Panama's first-choice goalkeeper.",
        worldCupRecord: "First World Cup."
      }
    ],
    history: {
      openingLine: "Los Canaleros. Felipe Baloy's tearful goal.",
      chapters: [
        {
          year: "2018",
          title: "THE FIRST GOAL",
          photo: {
            wikiPage: null,
            url: null,
            caption: ""
          },
          body: "Russia, 2018. Panama debut. They lose 6-1 to England. But in the 78th minute, Felipe Baloy slides to score. The fans celebrate as if they won the cup. Tears of joy."
        }
      ],
      heartbreak: "June 24, 2018. Nizhny Novgorod. Conceding six goals to England, a harsh reality check.",
      gloryMoment: "June 24, 2018. Nizhny Novgorod. Felipe Baloy scores their first ever World Cup goal.",
      approaching2026: "A second qualification. Panama wants to win a match.",
      statLine: [
        "Two World Cup appearances",
        "Felipe Baloy is their historic scorer"
      ]
    }
  }
};

export default TEAM_PROFILES;
