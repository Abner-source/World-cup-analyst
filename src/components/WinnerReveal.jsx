import { useState, useEffect, useRef } from "react";
import { WC2026_PREDICTIONS, getFlagUrl } from "../data/teams";

const FINALISTS = [
  { id: "spain", name: "Spain", flagCode: "es" },
  { id: "france", name: "France", flagCode: "fr" },
  { id: "argentina", name: "Argentina", flagCode: "ar" },
  { id: "england", name: "England", flagCode: "gb-eng" },
  { id: "brazil", name: "Brazil", flagCode: "br" },
  { id: "portugal", name: "Portugal", flagCode: "pt" },
  { id: "germany", name: "Germany", flagCode: "de" },
  { id: "netherlands", name: "Netherlands", flagCode: "nl" }
];

const ELIMINATION_ORDER = [
  "netherlands",
  "germany",
  "portugal",
  "brazil",
  "england",
  "argentina",
  "france"
];

export default function WinnerReveal() {
  const [panel, setPanel] = useState("simulation"); // "simulation" | "reveal"
  const [currentPhaseLabel, setCurrentPhaseLabel] = useState("Initialising model...");
  const [progress, setProgress] = useState(0);
  const [simulationsCount, setSimulationsCount] = useState(0);
  const [sourcesCount, setSourcesCount] = useState(0);
  const [nationsCount, setNationsCount] = useState(0);
  const [visibleChips, setVisibleChips] = useState([]);
  const [eliminatedChips, setEliminatedChips] = useState(new Set());
  const [isWinnerRevealed, setIsWinnerRevealed] = useState(false);

  const timeoutsRef = useRef([]);
  const animationFrameRef = useRef(null);

  const queueTimeout = (fn, delay) => {
    const id = setTimeout(fn, delay);
    timeoutsRef.current.push(id);
    return id;
  };

  const startSequence = () => {
    // Reset State
    setPanel("simulation");
    setCurrentPhaseLabel("Initialising model...");
    setProgress(0);
    setSimulationsCount(0);
    setSourcesCount(0);
    setNationsCount(0);
    setVisibleChips([]);
    setEliminatedChips(new Set());
    setIsWinnerRevealed(false);
    
    // Clear old timers
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // --- ACT 1: INITIALISING (0 - 1200ms) ---
    // State is at default zeroed fields.
    
    // --- ACT 2: DATA INGESTION (1200ms - 7500ms) ---
    // Start simulations counter ease-out animation
    const startTime = Date.now() + 1200;
    const simDuration = 6300; // from 1200ms to 7500ms
    const simStart = 0;
    const simEnd = 10000;

    const tickSimulations = () => {
      const now = Date.now();
      if (now >= startTime) {
        const elapsed = now - startTime;
        if (elapsed >= simDuration) {
          setSimulationsCount(simEnd);
          return;
        }
        const t = elapsed / simDuration;
        const easeOutCubic = 1 - Math.pow(1 - t, 3);
        setSimulationsCount(Math.floor(simStart + (simEnd - simStart) * easeOutCubic));
      }
      animationFrameRef.current = requestAnimationFrame(tickSimulations);
    };
    animationFrameRef.current = requestAnimationFrame(tickSimulations);

    // Ingestion Phases
    // Phase 0 (1200ms): rankings
    queueTimeout(() => {
      setCurrentPhaseLabel("Parsing FIFA world rankings");
      setProgress(8);
      setSourcesCount(1);
    }, 1200);

    // Phase 1 (1830ms): Goldman Sachs
    queueTimeout(() => {
      setCurrentPhaseLabel("Loading Goldman Sachs model");
      setProgress(18);
    }, 1830);

    // Phase 2 (2460ms): Opta
    queueTimeout(() => {
      setCurrentPhaseLabel("Running Opta 10,000 simulations");
      setProgress(30);
      setSourcesCount(2);
    }, 2460);

    // Phase 3 (3090ms): Kalshi
    queueTimeout(() => {
      setCurrentPhaseLabel("Reading Kalshi prediction markets");
      setProgress(42);
      setSourcesCount(3);
    }, 3090);

    // Phase 4 (3720ms): Bookmaker
    queueTimeout(() => {
      setCurrentPhaseLabel("Aggregating bookmaker consensus");
      setProgress(54);
      setSourcesCount(4);
    }, 3720);

    // Phase 5 (4350ms): UEFA
    queueTimeout(() => {
      setCurrentPhaseLabel("Applying UEFA Euro 2024 coefficients");
      setProgress(64);
      setSourcesCount(5);
    }, 4350);

    // Phase 6 (4980ms): 433 media
    queueTimeout(() => {
      setCurrentPhaseLabel("Weighting 433 media intelligence");
      setProgress(72);
      setSourcesCount(6);
    }, 4980);

    // --- ACT 3: FINALIST CHIPS APPEAR (after Phase 6: 5610ms - 6450ms) ---
    FINALISTS.forEach((f, idx) => {
      queueTimeout(() => {
        setVisibleChips(prev => [...prev, f.id]);
        setNationsCount(idx + 1);
      }, 5610 + idx * 120);
    });

    // Phase 7 (5610ms): Squad depth
    queueTimeout(() => {
      setCurrentPhaseLabel("Cross-referencing squad depth data");
      setProgress(82);
      setSourcesCount(7);
    }, 5610);

    // Phase 8 (6240ms): Normalising
    queueTimeout(() => {
      setCurrentPhaseLabel("Normalising across 48 nations");
      setProgress(90);
    }, 6240);

    // Phase 9 (6870ms): Tournament Favourite
    queueTimeout(() => {
      setCurrentPhaseLabel("Identifying tournament favourite");
      setProgress(99);
    }, 6870);

    // --- ACT 4: ELIMINATION (6870ms - 9150ms) ---
    ELIMINATION_ORDER.forEach((id, idx) => {
      queueTimeout(() => {
        setEliminatedChips(prev => {
          const next = new Set(prev);
          next.add(id);
          return next;
        });
        setNationsCount(8 - (idx + 1));
      }, 6870 + idx * 380);
    });

    // --- ACT 5: REVEAL (after eliminations: 9530ms+) ---
    queueTimeout(() => {
      setProgress(100);
      setCurrentPhaseLabel("MODEL CONVERGED. ONE WINNER.");
      setIsWinnerRevealed(true);
    }, 9530);

    // Fade to reveal panel (10530ms)
    queueTimeout(() => {
      setPanel("reveal");
    }, 10530);
  };

  useEffect(() => {
    startSequence();
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div style={{
      height: 480,
      background: "#0a0e14",
      border: "1px solid var(--border)",
      borderRadius: 4,
      padding: 32,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Inter', sans-serif"
    }}>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulseGoldBorder {
          0% { border-color: var(--accent); }
          50% { border-color: #ffd700; }
          100% { border-color: var(--accent); }
        }
        @keyframes particleFloat {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-30px) scale(0.8); opacity: 0; }
        }
      `}</style>

      {/* Floating particles during simulation act */}
      {panel === "simulation" && (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 0 }}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "var(--accent)",
                left: `${15 + i * 15}%`,
                bottom: "35%",
                animation: `particleFloat ${2 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
      )}

      {panel === "simulation" ? (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", zIndex: 1 }}>
          
          {/* ACT 1: TROPHY RING */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 8 }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              border: "1.5px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                <path d="M12 2a8 8 0 0 1 8 8v3a8 8 0 0 1-8 8 8 8 0 0 1-8-8v-3a8 8 0 0 1 8-8z" />
              </svg>
            </div>
            
            {/* Act 2 Phase Label */}
            <div style={{
              fontSize: 14,
              fontWeight: 600,
              color: isWinnerRevealed ? "var(--accent)" : "var(--white)",
              letterSpacing: "0.02em",
              height: 20,
              textAlign: "center"
            }}>
              {currentPhaseLabel}
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{ margin: "24px 0" }}>
            <div style={{
              width: "100%",
              height: 2,
              background: "var(--border)",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{
                height: "100%",
                background: "var(--accent)",
                width: `${progress}%`,
                transition: "width 0.25s linear"
              }} />
              
              {/* Act 5 sweep line */}
              {isWinnerRevealed && (
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(90deg, transparent, rgba(200, 168, 75, 0.6), transparent)",
                  animation: "sweep 1s ease-out infinite"
                }} />
              )}
            </div>
          </div>

          {/* Act 1 Counters */}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "0 24px" }}>
            <div style={{ textAlign: "center", flex: 1 }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "var(--white)", marginBottom: 4 }}>
                {simulationsCount.toLocaleString()}
              </div>
              <div style={{ fontSize: 11, color: "var(--text2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Simulations
              </div>
            </div>
            <div style={{ textAlign: "center", flex: 1, borderLeft: "1px solid var(--border)", borderRight: "1px solid var(--border)" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "var(--white)", marginBottom: 4 }}>
                {nationsCount}
              </div>
              <div style={{ fontSize: 11, color: "var(--text2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Nations
              </div>
            </div>
            <div style={{ textAlign: "center", flex: 1 }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "var(--white)", marginBottom: 4 }}>
                {sourcesCount}
              </div>
              <div style={{ fontSize: 11, color: "var(--text2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Sources
              </div>
            </div>
          </div>

          {/* ACT 3/4 Finalist Chips */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
            marginTop: 28,
            minHeight: 96
          }}>
            {FINALISTS.map((f) => {
              const isVisible = visibleChips.includes(f.id);
              const isEliminated = eliminatedChips.has(f.id);
              const isWinner = isWinnerRevealed && f.id === "spain";

              if (!isVisible) return <div key={f.id} style={{ height: 40 }} />;

              return (
                <div
                  key={f.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    background: "var(--surface)",
                    border: isWinner ? "2.5px solid var(--accent)" : "1px solid var(--border)",
                    borderRadius: 4,
                    height: 40,
                    animation: "slideUp 0.3s ease-out forwards",
                    opacity: isEliminated ? 0.35 : 1,
                    textDecoration: isEliminated ? "line-through" : "none",
                    transition: "opacity 0.25s, border-color 0.25s",
                    color: isWinner ? "var(--accent)" : (isEliminated ? "var(--text3)" : "var(--text)"),
                    fontWeight: isWinner ? 700 : 400
                  }}
                >
                  <img
                    src={getFlagUrl(f.flagCode, 20, 15)}
                    alt={`${f.name} flag`}
                    style={{
                      width: 20,
                      height: 15,
                      objectFit: "cover",
                      filter: isEliminated ? "grayscale(100%)" : "none",
                      borderRadius: 1
                    }}
                  />
                  <span style={{ fontSize: 13, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {f.name}
                  </span>
                  {isWinner && (
                    <span style={{
                      fontSize: 8,
                      fontWeight: 700,
                      background: "var(--accent)",
                      color: "black",
                      padding: "1px 4px",
                      borderRadius: 2,
                      letterSpacing: "0.05em"
                    }}>
                      WIN
                    </span>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      ) : (
        /* ACT 5: REVEAL PANEL */
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          animation: "slideUp 0.5s ease-out forwards",
          zIndex: 1
        }}>
          <div style={{ display: "flex", gap: 24, alignItems: "center", marginTop: 8 }}>
            <img
              src={`https://flagcdn.com/120x90/${WC2026_PREDICTIONS.flagCode}.png`}
              alt={WC2026_PREDICTIONS.name}
              style={{
                width: 120,
                height: 90,
                objectFit: "cover",
                border: "1px solid var(--border)",
                borderRadius: 2
              }}
            />
            <div>
              <div style={{
                fontSize: 11,
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                marginBottom: 4
              }}>
                {WC2026_PREDICTIONS.overline}
              </div>
              <h1 style={{
                fontSize: 36,
                fontWeight: 700,
                color: "var(--white)",
                margin: 0,
                lineHeight: 1.1
              }}>
                {WC2026_PREDICTIONS.name}
              </h1>
              <div style={{
                fontSize: 14,
                color: "var(--text2)",
                marginTop: 6,
                fontWeight: 500
              }}>
                {WC2026_PREDICTIONS.probabilityLine}
              </div>
            </div>
          </div>

          {/* Staggered badges */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            margin: "20px 0"
          }}>
            {WC2026_PREDICTIONS.badges.map((badge, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: 11,
                  color: "var(--text2)",
                  background: "var(--surface2)",
                  border: "1px solid var(--border)",
                  borderRadius: 2,
                  padding: "4px 8px",
                  fontWeight: 500,
                  animation: `slideUp 0.3s ease-out forwards`,
                  animationDelay: `${idx * 60}ms`,
                  opacity: 0 // Will fade in via animation
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Reasoning */}
          <p style={{
            fontSize: 14,
            color: "var(--text)",
            lineHeight: 1.6,
            margin: 0,
            flex: 1,
            overflowY: "auto",
            paddingRight: 8
          }}>
            {WC2026_PREDICTIONS.reasoning}
          </p>

          {/* Run Again button */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
            <button
              onClick={startSequence}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text2)",
                border: "1px solid var(--border2)",
                borderRadius: 4,
                background: "transparent",
                cursor: "pointer",
                transition: "all 150ms ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--white)";
                e.currentTarget.style.borderColor = "var(--text3)";
                e.currentTarget.style.background = "var(--surface2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text2)";
                e.currentTarget.style.borderColor = "var(--border2)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
              Run simulation again
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
