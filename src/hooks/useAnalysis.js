import { useState, useEffect, useCallback, useRef } from "react";
import { getTeamAnalysis } from "../lib/groq";
import staticData from "../data/staticData.json";
import TEAM_PROFILES from "../data/teamProfiles";

const CACHE_PREFIX = "wc2026_v4_";
const CACHE_TTL = 48 * 60 * 60 * 1000; // 48 hours

/**
 * Read a cached AI narrative from localStorage.
 * Returns the payload if fresh, null otherwise.
 */
function readCache(teamId) {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + teamId);
    if (!raw) return null;

    const entry = JSON.parse(raw);
    if (!entry || !entry.payload || !entry.savedAt) return null;

    const age = Date.now() - entry.savedAt;
    if (age > CACHE_TTL) {
      localStorage.removeItem(CACHE_PREFIX + teamId);
      return null;
    }

    return entry.payload;
  } catch {
    return null;
  }
}

/**
 * Write an AI narrative to localStorage cache.
 */
function writeCache(teamId, payload) {
  try {
    localStorage.setItem(
      CACHE_PREFIX + teamId,
      JSON.stringify({ payload, savedAt: Date.now() })
    );
  } catch {
    // Silent fail — localStorage might be full
  }
}

/**
 * Custom hook for team analysis.
 *
 * Data flow:
 *   1. Static profile data (teamProfiles.js) loads INSTANTLY — no API call
 *   2. AI narrative (prediction, biggestThreat, groupAnalysis, roast) is fetched
 *      from Groq OR loaded from cache
 *   3. Both are merged into a single data object for the UI
 *
 * @param {Object|null} team - Team object from teams.js, or null
 */
export function useAnalysis(team) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFromCache, setIsFromCache] = useState(false);
  const teamIdRef = useRef(team?.id);

  /**
   * Build the full data object by merging:
   *   - Static info from staticData.json (rankings, etc.)
   *   - Rich profile from teamProfiles.js (players, formation, style, history)
   *   - AI narrative (prediction, biggestThreat, groupAnalysis, roast)
   */
  function buildFullData(teamId, aiData = {}) {
    const profile = TEAM_PROFILES[teamId] || {};
    const teamStatic = staticData[teamId] || {};

    return {
      // Static info (rankings, etc.)
      ...teamStatic,
      // Rich profile (formation, style, players, history, etc.)
      formation: profile.formation,
      style: profile.style,
      managerName: profile.managerName,
      managerNationality: profile.managerNationality,
      managerSince: profile.managerSince,
      managerNote: profile.managerNote,
      managerPhotoUrl: profile.managerPhotoUrl || null,
      strengths: profile.strengths,
      weaknesses: profile.weaknesses,
      historicalBest: profile.historicalBest,
      worldCupAppearances: profile.worldCupAppearances,
      worldCupWins: profile.worldCupWins,
      worldCupNarrative: profile.worldCupNarrative,
      lastFiveWCs: profile.lastFiveWCs,
      achievements: profile.achievements,
      history: profile.history,
      starPlayers: (profile.keyPlayers || []).map(kp => ({
        name: kp.name,
        position: kp.position,
        club: kp.club,
        number: kp.number,
        age: null, // age could be derived if needed
        photoUrl: kp.photoUrl || null,
        whySelected: {
          clubForm: kp.recentForm,
          nationalImpact: kp.whyNow,
          achievements: kp.worldCupRecord,
          tactical: kp.whyNow,
        },
        keyMetrics: [
          kp.recentForm,
          kp.worldCupRecord,
        ].filter(Boolean),
        importanceRating: null,
        // Keep raw fields for PlayersTab
        whyNow: kp.whyNow,
        recentForm: kp.recentForm,
        worldCupRecord: kp.worldCupRecord,
      })),
      // AI-generated narrative (overlaid on top)
      ...aiData,
    };
  }

  // On mount or team change: load static profile instantly + check AI cache
  useEffect(() => {
    if (!team) {
      setData(null);
      setError(null);
      setIsLoading(false);
      setIsFromCache(false);
      return;
    }

    teamIdRef.current = team.id;

    // Always load static data immediately
    const cachedAI = readCache(team.id);
    if (cachedAI) {
      setData(buildFullData(team.id, cachedAI));
      setIsFromCache(true);
      setError(null);
      setIsLoading(false);
    } else {
      // Show static data immediately, even without AI narrative
      setData(buildFullData(team.id));
      setIsFromCache(false);
      setError(null);
    }
  }, [team?.id]);

  // Fetch AI narrative from API
  const analyze = useCallback(async () => {
    if (!team) return;

    setIsLoading(true);
    setError(null);
    setIsFromCache(false);

    try {
      const aiResult = await getTeamAnalysis(team);

      // Guard against stale responses if the user switched teams
      if (teamIdRef.current !== team.id) return;

      const fullData = buildFullData(team.id, aiResult);
      setData(fullData);
      writeCache(team.id, aiResult);
    } catch (err) {
      if (teamIdRef.current !== team.id) return;
      setError(err.message || "Analysis failed");
      // Even on error, keep showing static data
      setData(prev => prev || buildFullData(team.id));
    } finally {
      if (teamIdRef.current === team.id) {
        setIsLoading(false);
      }
    }
  }, [team]);

  return { data, isLoading, error, analyze, isFromCache };
}
