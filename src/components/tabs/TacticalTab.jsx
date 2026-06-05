import { TEAMS, getFlagUrl } from "../../data/teams";
import PlayerPhoto from "../PlayerPhoto";

export default function TacticalTab({ team, data, isLoading, error }) {
  const strengths = data?.strengths || [];
  const weaknesses = data?.weaknesses || [];
  const biggestThreat = data?.biggestThreat;

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
      <h2 style={{ marginBottom: 4 }}>Tactical Profile</h2>
      <p className="label" style={{ marginBottom: 24 }}>
        GROUP {team.group} ANALYSIS AND TACTICAL BREAKDOWN
      </p>

      {isLoading && !data && (
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
            Analyzing tactical profile...
          </p>
        </div>
      )}

      {error && !data && (
        <div
          className="card"
          style={{ padding: 24, borderColor: "var(--red)" }}
        >
          <p style={{ fontSize: 14, color: "var(--red)" }}>{error}</p>
        </div>
      )}

      {data && (
        <>
          {/* Manager */}
          {data.managerName && (
            <div className="card" style={{ padding: 20, marginBottom: 24, display: "flex", gap: 20, alignItems: "flex-start" }}>
              <PlayerPhoto name={data.managerName} size={64} role="manager" photoUrl={data.managerPhotoUrl} />
              <div style={{ flex: 1 }}>
                <div className="label" style={{ marginBottom: 6 }}>
                  HEAD COACH
                </div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "var(--white)",
                    letterSpacing: "-0.02em",
                    marginBottom: 4,
                  }}
                >
                  {data.managerName}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--text2)",
                    marginBottom: 12,
                  }}
                >
                  {data.managerNationality}
                  {data.managerSince ? ` — Since ${data.managerSince}` : (data.managerTenure ? ` — ${data.managerTenure}` : "")}
                </div>
                {(data.managerNote || data.managerPhilosophy) && (
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--text)",
                      lineHeight: 1.6,
                      paddingTop: 12,
                      borderTop: "1px solid var(--border)",
                      margin: 0
                    }}
                  >
                    {data.managerNote || data.managerPhilosophy}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Playing Style */}
          {data.style && (
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ marginBottom: 12 }}>Playing Style</h2>
              <div className="card" style={{ padding: 20 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 12,
                    paddingBottom: 12,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span className="label">FORMATION</span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--accent)",
                    }}
                  >
                    {data.formation}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text)",
                    lineHeight: 1.7,
                  }}
                >
                  {data.style}
                </p>
              </div>
            </div>
          )}

          {/* Strengths */}
          {strengths.length > 0 && (
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ marginBottom: 12 }}>Strengths</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {strengths.map((s, i) => (
                  <div key={i} className="card" style={{ padding: 16 }}>
                    <div
                      className="label"
                      style={{
                        color: "var(--green)",
                        marginBottom: 8,
                      }}
                    >
                      {s.area}
                    </div>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--text)",
                        lineHeight: 1.6,
                      }}
                    >
                      {s.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Weaknesses */}
          {weaknesses.length > 0 && (
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ marginBottom: 12 }}>Weaknesses</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {weaknesses.map((w, i) => (
                  <div key={i} className="card" style={{ padding: 16 }}>
                    <div
                      className="label"
                      style={{
                        color: "#f87171",
                        marginBottom: 8,
                      }}
                    >
                      {w.area}
                    </div>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--text)",
                        lineHeight: 1.6,
                      }}
                    >
                      {w.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Biggest Threat */}
          {biggestThreat && (
            <div>
              <h2 style={{ marginBottom: 12 }}>Biggest Threat</h2>
              <div className="card" style={{ padding: 20 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  {(() => {
                    const threatTeam = findOpponentTeam(biggestThreat.team);
                    return (
                      <>
                        {threatTeam && (
                          <img
                            src={getFlagUrl(threatTeam.flagCode)}
                            alt={biggestThreat.team}
                            style={{
                              width: 28,
                              height: 21,
                              objectFit: "cover",
                              borderRadius: 2,
                            }}
                          />
                        )}
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: "var(--white)",
                          }}
                        >
                          {biggestThreat.team}
                        </span>
                      </>
                    );
                  })()}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text2)",
                    lineHeight: 1.6,
                  }}
                >
                  {biggestThreat.reason}
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
