import { useState, useRef } from "react";
import TeamSelector from "./components/TeamSelector";
import AnalysisPanel from "./components/AnalysisPanel";
import { useAnalysis } from "./hooks/useAnalysis";
import WorldCupHero from "./components/WorldCupHero";

export default function App() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const analysis = useAnalysis(selectedTeam);
  const contentRef = useRef(null);

  const handleSelectTeam = (team) => {
    setSelectedTeam(team);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedTeam(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExplore = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* World Cup Hero (intro animation) shown only on home view */}
      {!selectedTeam && <WorldCupHero onExplore={handleExplore} />}

      <div ref={contentRef}>
        {/* Header */}
        <header className="site-header">
          <div className="site-header__inner">
            <div className="site-header__logo">
              <img src="/wc_logo.jpg" alt="WC Logo" style={{ width: 40, height: 40, objectFit: "contain", flexShrink: 0 }} />
              <span>
                WORLD CUP{" "}
                <span className="site-header__logo-accent">ANALYST</span>
              </span>
            </div>
            <div className="site-header__meta">
              FIFA WORLD CUP 2026 — USA / CANADA / MEXICO
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="page-container">
          {selectedTeam ? (
            <AnalysisPanel
              team={selectedTeam}
              analysis={analysis}
              onBack={handleBack}
            />
          ) : (
            <TeamSelector
              selectedTeam={selectedTeam}
              onSelectTeam={handleSelectTeam}
            />
          )}
        </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text3)",
          }}
        >
          WORLD CUP ANALYST — AI-POWERED TEAM ANALYSIS — NOT AFFILIATED WITH FIFA
        </p>
      </footer>
      </div>
    </div>
  );
}
