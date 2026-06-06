# WC 2026 Analyst

Every team. Every story. One place.

A complete analyst's view for all 48 nations at the 2026 FIFA World Cup — tactics, history, key players, win probabilities, tournament path, and biggest threats. Built in 3-4 days before the tournament began.

---

## What it does

**Winner Prediction** — A live simulation that loads 7 real data sources, eliminates contenders one by one, and lands on one definitive tournament pick. Not vibes. Numbers.

**Team Analysis** — Pick any of the 48 qualified nations and get:
- Win probability, final probability, semi-final and quarter-final odds
- Tactical identity — formation, pressing style, build-up patterns, set piece threat
- Key players selected on 2025-26 form, not reputation
- Biggest threat and why, specific and tactical
- Group stage analysis and projected knockout path

**History** — Each team's World Cup story told properly. Specific minutes, specific names, specific wounds. The kind of writing that makes you feel 1950, 1966, 1986, 1998.

**Roast mode** — For the brave nations with limited realistic prospects.

---

## Prediction model

Win probabilities are a 7-source weighted blend:

| Source | Weight |
|---|---|
| Goldman Sachs Economics model | 20% |
| Opta Supercomputer (10,000 simulations) | 20% |
| Kalshi + Polymarket ($523M volume) | 15% |
| Bookmaker consensus (BetMGM, Bet365, FanDuel) | 10% |
| FIFA Official World Rankings (April 2026) | 20% |
| UEFA Euro 2024 performance coefficients | 10% |
| 433 & global football media consensus | 5% |

Every number is auditable. Every team's probability is documented with source breakdowns in `src/data/teams.js`.

---

## Tech stack

- **Frontend** — React + Vite
- **AI** — Groq API (Llama 3.3 70B) — narrative analysis only
- **Flags** — flagcdn.com (free, no key)
- **Historical photos** — Wikimedia Commons (CC licensed)
- **Hosting** — Vercel (free tier)
- **Cost to run** — $0

Static data (formations, history, key players, tactics) is hardcoded and loads instantly. Groq is only called for narrative prediction text, and results are cached for 48 hours. A repeat visit costs zero tokens.

---

## Running locally

```bash
git clone https://github.com/YOUR_USERNAME/worldcup-analyst
cd worldcup-analyst
npm install
```

Create a `.env` file:
```
VITE_GROQ_API_KEY=your_key_here
```

Get a free Groq key at [console.groq.com](https://console.groq.com) 

```bash
npm run dev
```

---


---



---

## License

MIT — use it, fork it, build on it.
