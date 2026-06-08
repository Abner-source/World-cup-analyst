import { useState, useEffect } from "react";
import { getFlagUrl, TIER_CONFIG } from "../data/teams";
import OverviewTab from "./tabs/OverviewTab";
import PlayersTab from "./tabs/PlayersTab";
import HistoryTab from "./tabs/HistoryTab";
import FixturesTab from "./tabs/FixturesTab";
import TacticalTab from "./tabs/TacticalTab";
import RoastTab from "./tabs/RoastTab";

const TABS = [
  { id: "overview", label: "OVERVIEW" },
  { id: "players", label: "KEY PLAYERS" },
  { id: "history", label: "HISTORY" },
  { id: "fixtures", label: "FIXTURES" },
  { id: "tactical", label: "TACTICS" },
  { id: "roast", label: "HOT TAKE" },
];

function getSquadWikiPage(teamId, teamName) {
  const lowerId = teamId.toLowerCase();
  if (lowerId === "saudi-arabia" || lowerId === "saudi_arabia") return "Saudi_Arabia_national_football_team";
  if (lowerId === "korea-republic") return "South_Korea_national_football_team";
  if (lowerId === "usa") return "United_States_men's_national_soccer_team";
  if (lowerId === "canada") return "Canada_men's_national_soccer_team";
  if (lowerId === "australia") return "Australia_men's_national_soccer_team";
  if (lowerId === "new-zealand") return "New_Zealand_men's_national_soccer_team";
  if (lowerId === "turkiye") return "Turkey_national_football_team";
  if (lowerId === "cote-divoire" || lowerId === "cote_divoire") return "Ivory_Coast_national_football_team";
  if (lowerId === "czechia") return "Czech_Republic_national_football_team";
  return `${teamName.replace(/ /g, "_")}_national_football_team`;
}

export default function AnalysisPanel({ team, analysis, onBack }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [squadPhotoUrl, setSquadPhotoUrl] = useState(null);
  const tierCfg = TIER_CONFIG[team.tier];
  const { data, isLoading, error, analyze, isFromCache } = analysis;

  // Auto-fetch on mount if no cached data
  useEffect(() => {
    if (!data && !isLoading && !error) {
      analyze();
    }
  }, [team.id]);

  // Fetch national team squad photo dynamically from Wikipedia
  useEffect(() => {
    if (!team) return;
    const wikiPage = getSquadWikiPage(team.id, team.name);
    const cacheKey = `wc2026_squad_${team.id}`;
    
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        setSquadPhotoUrl(cached);
        return;
      }
    } catch {}

    setSquadPhotoUrl(null); // Reset
    const ctrl = new AbortController();

    fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        wikiPage.replace(/ /g, "_")
      )}`,
      { signal: ctrl.signal, headers: { Accept: "application/json" } }
    )
      .then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.json();
      })
      .then((data) => {
        const src = data?.originalimage?.source || data?.thumbnail?.source || null;
        if (src) {
          setSquadPhotoUrl(src);
          try {
            localStorage.setItem(cacheKey, src);
          } catch {}
        }
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.warn("Could not load squad photo for", team.name);
      });

    return () => ctrl.abort();
  }, [team.id]);

  const renderTab = () => {
    const tabProps = { team, data, isLoading, error, analyze };
    switch (activeTab) {
      case "overview":
        return <OverviewTab {...tabProps} />;
      case "players":
        return <PlayersTab {...tabProps} />;
      case "history":
        return <HistoryTab {...tabProps} />;
      case "fixtures":
        return <FixturesTab {...tabProps} />;
      case "tactical":
        return <TacticalTab {...tabProps} />;
      case "roast":
        return <RoastTab {...tabProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="analysis-panel">
      <button
        id="back-button"
        className="analysis-header__back"
        onClick={onBack}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        BACK TO TEAMS
      </button>

      <div 
        className="analysis-header" 
        style={{ 
          borderLeft: team.id === 'spain' ? '4px solid var(--accent)' : 'none',
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
          padding: "24px 32px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginBottom: "32px"
        }}
      >
        {squadPhotoUrl && (
          <>
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${squadPhotoUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
              zIndex: -2,
              opacity: 0.3
            }} />
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, var(--surface) 100%)",
              zIndex: -1
            }} />
          </>
        )}
        <img
          className="analysis-header__flag"
          src={getFlagUrl(team.flagCode, 80, 60)}
          alt={`${team.name} flag`}
        />
        <div className="analysis-header__info">
          <h1 className="analysis-header__name">
            {team.name}
            {team.id === 'spain' && (
              <span className="tag tag--accent" style={{ marginLeft: 16, fontSize: 13, verticalAlign: "middle" }}>
                TOURNAMENT FAVOURITE
              </span>
            )}
          </h1>
          <div className="analysis-header__meta">
            <span>FIFA RANK #{team.fifaRank}</span>
            <span>GROUP {team.group}</span>
            <span>{team.confederation}</span>
            <span
              className={
                tierCfg.variant === "accent" ? "tag" : "tag tag--neutral"
              }
            >
              {tierCfg.label}
            </span>
            {isFromCache && (
              <span className="tag tag--neutral">CACHED</span>
            )}
          </div>
        </div>
      </div>

      <div className="tab-bar" id="analysis-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            className={`tab-item ${activeTab === tab.id ? "tab-item--active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">{renderTab()}</div>
    </div>
  );
}
