import { TEAMS, getFlagUrl } from "../../data/teams";

const DATES = [
  "June 13, 2026 — 15:00 EST",
  "June 18, 2026 — 20:00 EST",
  "June 24, 2026 — 18:00 EST"
];

const VENUES = [
  "MetLife Stadium, New York/New Jersey",
  "SoFi Stadium, Los Angeles",
  "Estadio Azteca, Mexico City",
  "AT&T Stadium, Dallas",
  "Mercedes-Benz Stadium, Atlanta",
  "BC Place, Vancouver"
];

function getRandomVenue(teamId, matchIndex) {
  // Simple deterministic way to assign venues based on team ID length and match index
  const index = (teamId.length + matchIndex) % VENUES.length;
  return VENUES[index];
}

export default function FixturesTab({ team }) {
  const findOpponentTeam = (opponentName) => {
    if (!opponentName) return null;
    return TEAMS.find(
      (t) =>
        t.name.toLowerCase() === opponentName.toLowerCase() ||
        t.name.toLowerCase().includes(opponentName.toLowerCase()) ||
        opponentName.toLowerCase().includes(t.name.toLowerCase())
    );
  };

  return (
    <div>
      <h2 style={{ marginBottom: 4 }}>Group Stage Fixtures</h2>
      <p className="label" style={{ marginBottom: 24 }}>
        GROUP {team.group} SCHEDULE
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {team.groupOpponents.map((opponentName, i) => {
          const opponent = findOpponentTeam(opponentName);
          return (
            <div key={i} className="fixture-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <div className="fixture-card__label" style={{ marginBottom: 0 }}>
                  MATCHDAY {i + 1}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text3)",
                  }}
                >
                  {DATES[i]}
                </div>
              </div>

              <div className="fixture-card__matchup" style={{ marginBottom: 16 }}>
                <div className="fixture-card__team">
                  <img
                    className="fixture-card__flag"
                    src={getFlagUrl(team.flagCode, 32, 24)}
                    alt={team.name}
                  />
                  <span className="fixture-card__team-name">{team.code}</span>
                </div>
                <span className="fixture-card__vs">VS</span>
                <div
                  className="fixture-card__team"
                  style={{ justifyContent: "flex-end" }}
                >
                  <span className="fixture-card__team-name">
                    {opponent?.code || opponentName}
                  </span>
                  {opponent && (
                    <img
                      className="fixture-card__flag"
                      src={getFlagUrl(opponent.flagCode, 32, 24)}
                      alt={opponentName}
                    />
                  )}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  paddingTop: 16,
                  borderTop: "1px solid var(--border)",
                  fontSize: 12,
                  color: "var(--text2)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {getRandomVenue(team.id, i)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
