import WikiImage from "../WikiImage";

const RESULT_COLORS = {
  champions: "var(--accent)",
  winners: "var(--accent)",
  "runner-up": "var(--accent)",
  "third place": "var(--accent2)",
  "fourth place": "var(--accent2)",
  "semi-finals": "var(--accent2)",
  "quarter-finals": "var(--green)",
  "round of 16": "var(--text2)",
  "round of 32": "var(--text2)",
  "group stage": "var(--text3)",
  "did not qualify": "var(--text3)",
};

function getResultColor(result) {
  if (!result) return "var(--text2)";
  const r = result.toLowerCase();
  for (const [key, color] of Object.entries(RESULT_COLORS)) {
    if (r.includes(key)) return color;
  }
  return "var(--text2)";
}

function getResultWidth(result) {
  if (!result) return "15%";
  const r = result.toLowerCase();
  if (r.includes("champion") || r.includes("winner")) return "100%";
  if (r.includes("runner")) return "85%";
  if (r.includes("third") || r.includes("semi")) return "70%";
  if (r.includes("fourth")) return "65%";
  if (r.includes("quarter")) return "50%";
  if (r.includes("round of 16")) return "35%";
  if (r.includes("round of 32")) return "25%";
  return "15%";
}

export default function HistoryTab({ team, data, isLoading, error }) {
  const lastFive = data?.lastFiveWCs || [];
  const achievements = data?.achievements || [];

  return (
    <div>
      <h2 style={{ marginBottom: 4 }}>World Cup History</h2>
      <p className="label" style={{ marginBottom: 24 }}>
        TOURNAMENT RECORD AND HERITAGE
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
            Loading tournament history...
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
          {/* Stats Row */}
          <div
            className="overview-stats"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              marginBottom: 24,
            }}
          >
            <div className="overview-stat-card">
              <div className="stat-label">APPEARANCES</div>
              <div className="stat-number">
                {data.worldCupAppearances ?? "—"}
              </div>
            </div>
            <div className="overview-stat-card">
              <div className="stat-label">TITLES</div>
              <div className="stat-number">
                {data.worldCupWins ?? 0}
              </div>
            </div>
            <div className="overview-stat-card">
              <div className="stat-label">BEST RESULT</div>
              <div className="stat-number" style={{ fontSize: 18 }}>
                {data.historicalBest || "—"}
              </div>
            </div>
          </div>

          {/* Drury Opening Hook */}
          {data.history?.openingLine && (
            <div style={{
              fontSize: 18,
              fontStyle: "italic",
              color: "var(--accent)",
              borderLeft: "3px solid var(--accent)",
              paddingLeft: 16,
              marginBottom: 28,
              lineHeight: 1.5,
              fontWeight: 500
            }}>
              "{data.history.openingLine}"
            </div>
          )}

          {/* Narrative fallback if history timeline is missing */}
          {!data.history?.chapters && data.worldCupNarrative && (
            <div className="card" style={{ padding: 20, marginBottom: 24 }}>
              <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.7, margin: 0 }}>
                {data.worldCupNarrative}
              </p>
            </div>
          )}

          {/* Timeline of Chapters */}
          {data.history?.chapters && data.history.chapters.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ marginBottom: 20 }}>Historical Chapters</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, position: "relative" }}>
                {/* Vertical Line */}
                <div style={{
                  position: "absolute",
                  left: 29,
                  top: 10,
                  bottom: 10,
                  width: 2,
                  background: "var(--border)",
                  zIndex: 0
                }} />

                {data.history.chapters.map((chapter, idx) => (
                  <div key={idx} style={{ display: "flex", gap: 20, zIndex: 1 }}>
                    {/* Year pill */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 60, flexShrink: 0 }}>
                      <div style={{
                        width: 60,
                        height: 28,
                        borderRadius: 14,
                        background: "var(--surface2)",
                        border: "2px solid var(--accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        fontWeight: 700,
                        color: "var(--white)"
                      }}>
                        {chapter.year}
                      </div>
                    </div>

                    {/* Chapter Card */}
                    <div className="card" style={{ flex: 1, padding: 20 }}>
                      <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 20,
                        alignItems: "flex-start"
                      }}>
                        {/* Text block */}
                        <div style={{
                          flex: "1 1 320px",
                          display: "flex",
                          flexDirection: "column"
                        }}>
                          <div className="label" style={{ color: "var(--accent)", marginBottom: 8, fontSize: 11, fontWeight: 600 }}>
                            {chapter.title}
                          </div>
                          <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.7, margin: 0 }}>
                            {chapter.body}
                          </p>
                        </div>

                        {/* Optional Chapter Image */}
                        {((chapter.photo && (chapter.photo.wikiPage || chapter.photo.url)) || (chapter.photos && chapter.photos.length > 0)) && (
                          <div style={{
                            flex: "1 1 260px",
                            maxWidth: "100%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 12
                          }}>
                            {chapter.photo && (chapter.photo.wikiPage || chapter.photo.url) && (
                              <WikiImage
                                wikiPage={chapter.photo.wikiPage}
                                url={chapter.photo.url}
                                caption={chapter.photo.caption}
                              />
                            )}
                            {chapter.photos && chapter.photos.map((p, pIdx) => (
                              <WikiImage
                                key={pIdx}
                                wikiPage={p.wikiPage}
                                url={p.url}
                                caption={p.caption}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}



          {/* Approaching 2026 stakes */}
          {data.history?.approaching2026 && (
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ marginBottom: 12 }}>Stakes for 2026</h2>
              <div className="card" style={{ padding: 20, background: "rgba(200, 168, 75, 0.03)", border: "1px solid rgba(200, 168, 75, 0.15)" }}>
                <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.6, margin: 0 }}>
                  {data.history.approaching2026}
                </p>
              </div>
            </div>
          )}

          {/* Stat Line Facts */}
          {data.history?.statLine && data.history.statLine.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ marginBottom: 12 }}>Historical Stats</h2>
              <div className="card" style={{ padding: 20 }}>
                <ul style={{ display: "flex", flexDirection: "column", gap: 10, paddingLeft: 0, margin: 0, listStyle: "none" }}>
                  {data.history.statLine.map((stat, idx) => (
                    <li key={idx} style={{
                      fontSize: 13,
                      color: "var(--text2)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8
                    }}>
                      <span style={{ color: "var(--accent)", fontWeight: 700 }}>•</span>
                      <span style={{ lineHeight: 1.4 }}>{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Achievements */}
          {achievements.length > 0 && (
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ marginBottom: 12 }}>Achievements</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {achievements.map((a, i) => (
                  <span key={i} className="tag">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Last 5 World Cups */}
          {lastFive.length > 0 && (
            <div>
              <h2 style={{ marginBottom: 12 }}>Last Five World Cups</h2>
              {lastFive.map((entry, i) => (
                <div key={i} className="history-entry">
                  <div className="history-entry__year">{entry.year}</div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: getResultColor(entry.result),
                      }}
                    >
                      {entry.result}
                    </div>
                    {entry.host && (
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--text3)",
                          marginTop: 2,
                        }}
                      >
                        {entry.host}
                      </div>
                    )}
                  </div>
                  <div style={{ width: 80 }}>
                    <div className="progress-bar">
                      <div
                        className="progress-bar__fill"
                        style={{
                          width: getResultWidth(entry.result),
                          background: getResultColor(entry.result),
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
