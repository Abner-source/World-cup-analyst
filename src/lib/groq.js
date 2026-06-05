import axios from "axios";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

/**
 * Fetch ONLY the narrative prediction fields from the Groq API.
 * Static data (formation, style, keyPlayers, strengths, weaknesses, history)
 * is loaded from teamProfiles.js — never from the AI.
 *
 * The AI generates ONLY:
 *   - prediction (4-sentence tournament narrative)
 *   - predictedFinish
 *   - biggestThreat
 *   - groupAnalysis
 *   - pathCondition (non-Spain only)
 *   - roast (hopeful tier only)
 */
export async function getTeamAnalysis(team) {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  if (!apiKey || apiKey === "your_groq_api_key_here") {
    throw new Error(
      "Groq API key not configured. Add VITE_GROQ_API_KEY to your .env file."
    );
  }

  const systemMessage = `You are a professional football analyst for the 2026 FIFA World Cup.
You write like a scout report — precise, data-grounded, no hype.
You have pre-computed statistical probabilities. Your job is to write the
narrative that EXPLAINS these numbers. Write with authority.
Always respond with a single valid JSON object and nothing else.
No markdown. No explanation outside the JSON.`;

  const userMessage = `STATISTICAL INPUTS — TREAT AS GROUND TRUTH, DO NOT MODIFY:
Win probability: ${team.winProb}%
Reach final: ${team.finalProb}%
Reach semi-finals: ${team.sfProb}%
Reach quarter-finals: ${team.qfProb}%
Advance from group: ${team.groupProb}%

Global tournament winner prediction: Spain (FIFA #2, Euro 2024 champions, Opta #1 pick)

Analyze ${team.name} (FIFA rank: #${team.fifaRank}, tier: ${team.tier}, confederation: ${team.confederation}, group: Group ${team.group}, group opponents: ${team.groupOpponents.join(", ")}).

Return ONLY this JSON structure:
{
  "predictedFinish": "<Group Stage | Round of 32 | Round of 16 | Quarter-finals | Semi-finals | Runner-up | Champions>",
  "prediction": "<4 sentences. Specific. Mention likely opponents, key moments, realistic scenarios. No fluff.>",
  "biggestThreat": { "team": "<team name>", "reason": "<2 sentences, specific tactical reason>" },
  "groupAnalysis": "<3 sentences. Difficulty of group, expected finish position, key match.>",
  "pathCondition": "<ONLY if NOT Spain: 1-sentence condition for them to win. If Spain, return null.>",
  "roast": "<ONLY if tier is hopeful OR fifaRank > 50: 3 sentences, pundit-style, affectionate but savage. Otherwise return null.>"
}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await axios.post(
      GROQ_API_URL,
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemMessage },
          { role: "user", content: userMessage },
        ],
        max_tokens: 600,
        temperature: 0.4,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      }
    );

    const raw = response.data.choices[0].message.content;

    try {
      return JSON.parse(raw);
    } catch {
      const match = raw.match(/\{[\s\S]*\}/);
      if (match) {
        return JSON.parse(match[0]);
      }
      throw new Error("Analysis unavailable — please retry");
    }
  } catch (err) {
    if (err.name === "AbortError" || err.code === "ERR_CANCELED") {
      throw new Error("Analysis timed out — please retry");
    }

    if (err.message === "Analysis unavailable — please retry") {
      throw err;
    }

    const isRateLimit = err.response?.status === 429;

    throw new Error(
      isRateLimit
        ? "API rate limit reached — wait a minute and try again. Static data (players, formation, history) is already loaded below."
        : err.response?.data?.error?.message || err.message || "Analysis unavailable — please retry"
    );
  } finally {
    clearTimeout(timeout);
  }
}
