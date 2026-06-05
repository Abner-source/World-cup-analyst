import { useState, useMemo } from "react";
import { TEAMS, GROUPS, getFlagUrl, TIER_CONFIG } from "../data/teams";
import WinnerReveal from "./WinnerReveal";

export default function TeamSelector({ selectedTeam, onSelectTeam }) {
  const [search, setSearch] = useState("");
  const [activeGroup, setActiveGroup] = useState(null);

  const filteredTeams = useMemo(() => {
    let result = TEAMS;

    if (activeGroup) {
      result = result.filter((t) => t.group === activeGroup);
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.code.toLowerCase().includes(q) ||
          t.confederation.toLowerCase().includes(q)
      );
    }

    return result.sort((a, b) => a.fifaRank - b.fifaRank);
  }, [search, activeGroup]);

  return (
    <div className="team-selector">
      <div className="team-selector__header">
        <h2 style={{ marginBottom: 4 }}>Select a Team</h2>
        <p className="label" style={{ marginBottom: 24 }}>
          48 QUALIFIED NATIONS — 2026 FIFA WORLD CUP
        </p>
      </div>

      <div style={{ marginBottom: 32 }}>
        <WinnerReveal />
      </div>

      <div className="team-selector__search">
        <input
          id="team-search"
          type="text"
          className="input"
          placeholder="Search by name, code, or confederation..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="team-selector__groups">
        <button
          className={`group-filter-btn ${!activeGroup ? "group-filter-btn--active" : ""}`}
          onClick={() => setActiveGroup(null)}
        >
          ALL
        </button>
        {GROUPS.map((g) => (
          <button
            key={g}
            className={`group-filter-btn ${activeGroup === g ? "group-filter-btn--active" : ""}`}
            onClick={() => setActiveGroup(activeGroup === g ? null : g)}
          >
            GROUP {g}
          </button>
        ))}
      </div>

      <div
        className="grid grid--cards"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        }}
      >
        {filteredTeams.map((team) => {
          const tierCfg = TIER_CONFIG[team.tier];
          const isSelected = selectedTeam?.id === team.id;

          return (
            <div
              key={team.id}
              id={`team-card-${team.id}`}
              className={`team-card ${isSelected ? "team-card--selected" : ""}`}
              onClick={() => onSelectTeam(team)}
            >
              <img
                className="team-card__flag"
                src={getFlagUrl(team.flagCode)}
                alt={`${team.name} flag`}
                loading="lazy"
              />
              <div className="team-card__info">
                <div className="team-card__name">{team.name}</div>
                <div className="team-card__meta">
                  <span>GROUP {team.group}</span>
                  <span>{team.confederation}</span>
                  <span
                    className={
                      tierCfg.variant === "accent" ? "tag" : "tag tag--neutral"
                    }
                    style={{ marginLeft: 0 }}
                  >
                    {tierCfg.label}
                  </span>
                </div>
              </div>
              <div className="team-card__rank">#{team.fifaRank}</div>
            </div>
          );
        })}
      </div>

      {filteredTeams.length === 0 && (
        <div className="empty-state">
          <div className="empty-state__title">No teams found</div>
          <div className="empty-state__text">
            Try adjusting your search or group filter
          </div>
        </div>
      )}
    </div>
  );
}
