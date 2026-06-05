import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TEAMS } from "../src/data/teams.js";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "../.env") });

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const apiKey = process.env.VITE_GROQ_API_KEY;

async function fetchAllStaticData() {
  const systemMessage = `You are a professional football historian. Provide static historical and managerial data for World Cup national teams. Return ONLY a valid JSON object where keys are the team IDs, and values are the static info. No markdown, no markdown blocks, no other text.`;

  const teamList = TEAMS.map((t) => t.id).join(", ");

  const userMessage = `Provide the following static info for these 48 teams: ${teamList}.

For each team, provide exactly this structure:
{
  "managerName": "<current head coach>",
  "historicalBest": "<e.g. Winners — 1966 | Quarter-finals — 2002>",
  "worldCupAppearances": <number>,
  "worldCupWins": <number>,
  "lastFiveWCs": [
    { "year": 2022, "result": "<result>", "host": "Qatar" },
    { "year": 2018, "result": "<result>", "host": "Russia" },
    { "year": 2014, "result": "<result>", "host": "Brazil" },
    { "year": 2010, "result": "<result>", "host": "South Africa" },
    { "year": 2006, "result": "<result>", "host": "Germany" }
  ],
  "achievements": ["<achievement with year>", "<achievement>"],
  "worldCupNarrative": "<3 sentences summarizing their complete World Cup story — founding moments, golden eras, heartbreaks, recent trajectory.>"
}

Return a single JSON object mapping team ID to this object.`;

  console.log("Fetching static data for 48 teams from Groq...");

  try {
    const response = await axios.post(
      GROQ_API_URL,
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemMessage },
          { role: "user", content: userMessage },
        ],
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const raw = response.data.choices[0].message.content;
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      const match = raw.match(/\{[\s\S]*\}/);
      if (match) {
        parsed = JSON.parse(match[0]);
      } else {
        throw new Error("Failed to parse JSON");
      }
    }

    const outPath = path.join(__dirname, "../src/data/staticData.json");
    fs.writeFileSync(outPath, JSON.stringify(parsed, null, 2));
    console.log("Successfully wrote static data to src/data/staticData.json");
  } catch (err) {
    console.error("Error fetching data:", err.response?.data || err.message);
  }
}

fetchAllStaticData();
