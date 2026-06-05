import { getTeamsByGroup, getFlagUrl } from "../../data/teams";

export default function OverviewTab({ team, data, isLoading, error }) {
  const groupTeams = getTeamsByGroup(team.group);

  return (
    <div>
      {/* Quick Stats */}
      <div className="overview-stats">
        <div className="overview-stat-card">
          <div className="stat-label">FIFA RANKING</div>
          <div className="stat-number">#{team.fifaRank}</div>
        </div>
        <div className="overview-stat-card">
          <div className="stat-label">GROUP</div>
          <div className="stat-number">{team.group}</div>
        </div>
        <div className="overview-stat-card">
          <div className="stat-label">CONFEDERATION</div>
          <div className="stat-number" style={{ fontSize: 24 }}>
            {team.confederation}
          </div>
        </div>
        <div className="overview-stat-card">
          <div className="stat-label">FORMATION</div>
          <div className="stat-number" style={{ fontSize: 24 }}>
            {data?.formation || "—"}
          </div>
        </div>
      </div>

      {/* Win Probability */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ marginBottom: 16 }}>Tournament Probabilities</h2>
        <div className="card" style={{ padding: 20 }}>
          {[
            { label: "WIN TOURNAMENT", value: team.winProb || 0, isDecimal: true },
            { label: "REACH FINAL", value: team.finalProb || 0 },
            { label: "REACH SEMI-FINAL", value: team.sfProb || 0 },
            { label: "REACH QUARTER-FINAL", value: team.qfProb || 0 },
            { label: "ADVANCE FROM GROUP", value: team.groupProb || 0 },
          ].map(({ label, value, isDecimal }) => (
            <div key={label} className="data-row" style={{ gap: 16 }}>
              <span className="label" style={{ flex: 1 }}>
                {label}
              </span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--white)",
                  width: 48,
                  textAlign: "right",
                }}
              >
                {isDecimal && value < 0.1 ? "<0.1" : (isDecimal ? value.toFixed(1) : Math.round(value))}%
              </span>
              <div style={{ width: 120 }}>
                <div className="progress-bar">
                  <div
                    className="progress-bar__fill"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
          <div style={{
            fontSize: 11,
            color: "var(--text3)",
            borderTop: "1px solid var(--border)",
            paddingTop: 12,
            marginTop: 8
          }}>
            Probabilities: 7-source weighted model — FIFA World Rankings (Apr 2026) · Goldman Sachs Economics Research (May 2026) · Opta Supercomputer 10,000 simulations · Kalshi/Polymarket $523M prediction market · Bookmaker consensus BetMGM/FanDuel/Bet365 · UEFA Euro 2024 coefficients · 433 &amp; football media editorial consensus. Updated pre-tournament.
          </div>
        </div>
      </div>

      {/* Group Overview */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ marginBottom: 16 }}>Group {team.group} Standings</h2>
        <div>
          {groupTeams
            .sort((a, b) => a.fifaRank - b.fifaRank)
            .map((t, i) => (
              <div
                key={t.id}
                className="data-row"
                style={{
                  borderLeft:
                    t.id === team.id
                      ? "2px solid var(--accent)"
                      : "2px solid transparent",
                }}
              >
                <span
                  style={{
                    width: 24,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text3)",
                  }}
                >
                  {i + 1}
                </span>
                <img
                  src={getFlagUrl(t.flagCode)}
                  alt={t.name}
                  style={{
                    width: 28,
                    height: 21,
                    objectFit: "cover",
                    borderRadius: 2,
                    marginRight: 12,
                  }}
                />
                <span
                  style={{
                    flex: 1,
                    fontSize: 14,
                    fontWeight: t.id === team.id ? 600 : 400,
                    color: t.id === team.id ? "var(--white)" : "var(--text)",
                  }}
                >
                  {t.name}
                </span>
                <span
                  className="label"
                  style={{ marginRight: 16 }}
                >
                  {t.confederation}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text2)",
                    width: 40,
                    textAlign: "right",
                  }}
                >
                  #{t.fifaRank}
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Group Difficulty */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ marginBottom: 16 }}>Group Difficulty</h2>
        <div className="card" style={{ padding: 20 }}>
          {(() => {
            const avgRank =
              groupTeams.reduce((sum, t) => sum + t.fifaRank, 0) /
              groupTeams.length;
            const maxDifficulty = 100;
            const difficulty = Math.max(
              0,
              Math.min(100, ((maxDifficulty - avgRank) / maxDifficulty) * 100)
            );
            return (
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span className="stat-label">AVERAGE FIFA RANK</span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--white)",
                    }}
                  >
                    #{Math.round(avgRank)}
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-bar__fill"
                    style={{ width: `${difficulty}%` }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 6,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      color: "var(--text3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    EASIER
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "var(--text3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    HARDER
                  </span>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Group Analysis */}
      {data?.groupAnalysis && (
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ marginBottom: 16 }}>Group Analysis</h2>
          <div className="card" style={{ padding: 24 }}>
            <p
              style={{
                fontSize: 15,
                color: "var(--text)",
                lineHeight: 1.7,
              }}
            >
              {data.groupAnalysis}
            </p>
          </div>
        </div>
      )}

      {/* AI Prediction */}
      {isLoading && (
        <div className="card" style={{ padding: 24 }}>
          <div className="loading-bar">
            <div className="loading-bar__fill" />
          </div>
          <p
            style={{
              fontSize: 13,
              color: "var(--text2)",
              marginTop: 12,
              textAlign: "center",
            }}
          >
            Generating analysis...
          </p>
        </div>
      )}
      {error && (
        <div
          className="card"
          style={{
            padding: 24,
            borderColor: "var(--red)",
          }}
        >
          <p style={{ fontSize: 14, color: "var(--red)" }}>{error}</p>
        </div>
      )}
      {data?.prediction && !isLoading && (
        <div>
          <h2 style={{ marginBottom: 16 }}>AI Prediction</h2>
          <div className="card" style={{ padding: 24 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
                paddingBottom: 16,
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span className="label">PREDICTED FINISH</span>
              {team.id === "spain" || data.predictedFinish?.toLowerCase().includes("champions") ? (
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em"
                  }}
                >
                  CHAMPIONS
                </span>
              ) : (
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--accent)",
                  }}
                >
                  {data.predictedFinish}
                </span>
              )}
            </div>
            <p
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: "var(--text)",
                lineHeight: 1.7,
              }}
            >
              {data.prediction}
            </p>
            {team.id !== "spain" && data.pathCondition && (
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
                <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.5 }}>
                  <strong>Our model predicts Spain as 2026 champions (21.4%).</strong> {team.name}'s path to the title requires {data.pathCondition}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
