import PlayerPhoto from "../PlayerPhoto";

const POSITION_COLORS = {
  GK: "var(--accent)",
  DEF: "var(--accent2)",
  MID: "var(--green)",
  FWD: "var(--red)",
  Goalkeeper: "var(--accent)",
  Defender: "var(--accent2)",
  Midfielder: "var(--green)",
  Forward: "var(--red)",
};

function getPosColor(position) {
  if (!position) return "var(--text3)";
  if (POSITION_COLORS[position]) return POSITION_COLORS[position];
  const p = position.toLowerCase();
  if (p.includes("gk") || p.includes("goal")) return "var(--accent)";
  if (p.includes("def") || p.includes("back")) return "var(--accent2)";
  if (p.includes("mid")) return "var(--green)";
  if (p.includes("fw") || p.includes("for") || p.includes("wing") || p.includes("stri"))
    return "var(--red)";
  return "var(--text3)";
}

function getPosShort(position) {
  if (!position) return "—";
  const p = position.toLowerCase();
  if (p.includes("gk") || p.includes("goal")) return "GK";
  if (p.includes("def") || p.includes("back") || p.includes("cb") || p.includes("rb") || p.includes("lb")) return "DEF";
  if (p.includes("mid") || p.includes("cm") || p.includes("dm") || p.includes("am")) return "MID";
  if (p.includes("fw") || p.includes("for") || p.includes("wing") || p.includes("stri") || p.includes("cf") || p.includes("lw") || p.includes("rw")) return "FWD";
  return position.slice(0, 3).toUpperCase();
}

export default function PlayersTab({ team, data, isLoading, error }) {
  const players = data?.starPlayers || [];

  return (
    <div>
      <h2 style={{ marginBottom: 4 }}>Key Players</h2>
      <p className="label" style={{ marginBottom: 24 }}>
        SELECTED BY WEIGHTED PERFORMANCE ANALYSIS
      </p>

      {players.length === 0 && !isLoading && (
        <div className="card" style={{ padding: 24 }}>
          <p style={{ fontSize: 14, color: "var(--text2)" }}>
            No player data available for this team.
          </p>
        </div>
      )}

      {players.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {players.map((player, i) => {
            const posShort = getPosShort(player.position);
            const posColor = getPosColor(player.position);

            return (
              <div key={i} className="card" style={{ padding: 20 }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid var(--border)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <PlayerPhoto name={player.name} size={56} position={player.position} photoUrl={player.photoUrl} />
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                        <h3 style={{ fontSize: 18, color: "var(--white)", margin: 0 }}>{player.name}</h3>
                        <span style={{
                          fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em",
                          padding: "2px 6px", background: `${posColor}20`, color: posColor,
                          border: `1px solid ${posColor}40`, borderRadius: 2,
                        }}>
                          {posShort}
                        </span>
                        {player.number && (
                          <span style={{
                            fontSize: 10, fontWeight: 600, color: "var(--text3)",
                            padding: "2px 6px", background: "var(--surface2)", borderRadius: 2,
                          }}>
                            #{player.number}
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: 13, color: "var(--text2)", display: "flex", gap: 8, alignItems: "center" }}>
                        <span>{player.club}</span>
                        <span style={{ color: "var(--text3)" }}>{player.position}</span>
                      </div>
                    </div>
                  </div>
                  {player.importanceRating && (
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 10, fontWeight: 600, color: "var(--text3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                        Importance
                      </div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 2, color: "var(--accent)" }}>
                        <span style={{ fontSize: 24, fontWeight: 700, lineHeight: 1 }}>{player.importanceRating}</span>
                        <span style={{ fontSize: 14, fontWeight: 600 }}>/10</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Why Now — the most important field */}
                {player.whyNow && (
                  <div style={{ marginBottom: 16 }}>
                    <div className="label" style={{ marginBottom: 8 }}>WHY THIS PLAYER, WHY NOW</div>
                    <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.7, margin: 0 }}>
                      {player.whyNow}
                    </p>
                  </div>
                )}

                {/* Two-column detail */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {player.recentForm && (
                    <div>
                      <div className="label" style={{ marginBottom: 8 }}>RECENT FORM</div>
                      <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, margin: 0 }}>
                        {player.recentForm}
                      </p>
                    </div>
                  )}
                  {player.worldCupRecord && (
                    <div>
                      <div className="label" style={{ marginBottom: 8 }}>WORLD CUP RECORD</div>
                      <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, margin: 0 }}>
                        {player.worldCupRecord}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
