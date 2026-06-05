export default function RoastTab({ team, data, isLoading, error, analyze }) {
  const roast = data?.roast;
  const hasRoast = roast && roast !== "null" && roast !== null;

  return (
    <div>
      <h2 style={{ marginBottom: 4 }}>Hot Take</h2>
      <p className="label" style={{ marginBottom: 24 }}>
        NO-NONSENSE PUNDITRY
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
            Generating hot take...
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

      {data && !isLoading && (
        <>
          {hasRoast ? (
            <div className="roast-content">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 16,
                  paddingBottom: 16,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <span
                  className="label"
                  style={{ color: "var(--accent)" }}
                >
                  PUNDIT'S VERDICT
                </span>
              </div>
              <div className="roast-content__text">{roast}</div>
            </div>
          ) : (
            <div className="card" style={{ padding: 24 }}>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text2)",
                  textAlign: "center",
                }}
              >
                {team.name} is ranked too high to roast. Only hopeful-tier teams
                or those ranked below #50 get the hot take treatment.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
