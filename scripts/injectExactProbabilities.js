import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEAMS_FILE = path.join(__dirname, '../src/data/teams.js');

let raw = fs.readFileSync(TEAMS_FILE, 'utf8');

// Match the array
let teamsMatch = raw.match(/export const TEAMS = \[([\s\S]*?)\];/);
if (!teamsMatch) {
  console.error("Could not find TEAMS array in teams.js");
  process.exit(1);
}

// Map the win probabilities and comments based on user input
// Note: team IDs might differ slightly from the prompt text, so we'll match by name or ID.
// TIER 1
const exactData = {
  "france": { winProb: 17.2, comment: "// France: GS:19 Opta:13 Kalshi:17 Books:17 FIFA:#1 Euro2024:QF" },
  "spain": { winProb: 19.8, comment: "// Spain: GS:26 Opta:16.1 Kalshi:16 Books:17 FIFA:#2 Euro2024:Winners" },
  // TIER 2
  "england": { winProb: 10.2, comment: "// England: GS:~5 Opta:11.2 Kalshi:11.4 Books:13 FIFA:#4 Euro2024:Final" },
  "argentina": { winProb: 11.1, comment: "// Argentina: GS:14 Opta:10.4 Kalshi:9 Books:10 FIFA:#3 reigning champs" },
  "brazil": { winProb: 7.8, comment: "// Brazil: GS:8 Opta:6.6 Kalshi:7 Books:10 FIFA:#6" },
  // TIER 3
  "portugal": { winProb: 6.4, comment: "// Portugal: GS:~5 Opta:7 Kalshi:6 Books:9 FIFA:#5" },
  "germany": { winProb: 4.2, comment: "// Germany: GS:— Opta:5.1 Kalshi:4 Books:6 FIFA:#10 Euro2024:QF host" },
  "netherlands": { winProb: 2.9, comment: "// Netherlands: Opta:~3 Kalshi:3 Books:4 FIFA:#7" },
  // TIER 4
  "norway": { winProb: 2.2, comment: "// Norway: Opta/Kalshi ~3% — Haaland factor" },
  "belgium": { winProb: 1.8, comment: "// Belgium: Kalshi:2 Books:3 FIFA:#9" },
  "colombia": { winProb: 1.5, comment: "// Colombia: FIFA:#13 Kalshi:1.6 — strong CONMEBOL qualifying" },
  "morocco": { winProb: 1.4, comment: "// Morocco: Opta:~1.5 Kalshi:1.5 FIFA:#8 — SF 2022 precedent" },
  "croatia": { winProb: 1.2, comment: "// Croatia: FIFA:#11 — 2022 3rd place, Modrić era ending" },
  "uruguay": { winProb: 1.1, comment: "// Uruguay: FIFA:#17 Kalshi:1.3 — CONMEBOL pedigree" },
  "japan": { winProb: 1.3, comment: "// Japan: Kalshi:1.6 FIFA:#18 — consistently beats top teams" },
  "usa": { winProb: 1.0, comment: "// USA: Kalshi:1.2 Books:1.2 FIFA:#16 — co-host advantage" },
  "switzerland": { winProb: 0.9, comment: "// Switzerland: FIFA:#19 Kalshi:1.2 — reliable knockout performers" },
  "ecuador": { winProb: 0.8, comment: "// Ecuador: Books:100/1 (~1%) — 2nd in CONMEBOL qualifying" },
  "senegal": { winProb: 0.7, comment: "// Senegal: FIFA:#14 — best African team in rankings" },
  "mexico": { winProb: 0.6, comment: "// Mexico: FIFA:#15 Kalshi:1.0 — host nation, Azteca boost" },
  "austria": { winProb: 0.45, comment: "// Austria: — strong Euro 2024 showing, Alaba era over but Sabitzer era strong" },
  "korea-republic": { winProb: 0.4, comment: "// South Korea: FIFA:#23 — Asian powerhouse, Son in final tournament" }, // mapped from south-korea
  "turkiye": { winProb: 0.35, comment: "// Turkey: — rising European team, Güler generation" }, // mapped from turkey
  "algeria": { winProb: 0.3, comment: "// Algeria: — strong CAF record, Mahrez-era talent" },
  "ghana": { winProb: 0.25, comment: "// Ghana: — West African tradition" },
  "nigeria": { winProb: 0.25, comment: "// Nigeria: — Super Eagles traditional strength" },
  "egypt": { winProb: 0.2, comment: "// Egypt: — Salah carries enormous individual weight" },
  "scotland": { winProb: 0.15, comment: "// Scotland: — first WC in decades, emotional qualifier" },
  "cote-divoire": { winProb: 0.15, comment: "// Ivory Coast: — AFCON pedigree" }, // mapped from ivory-coast
  "australia": { winProb: 0.12, comment: "// Australia: — Socceroos punching above weight" },
  "paraguay": { winProb: 0.1, comment: "// Paraguay: — consistent CONMEBOL participant" },
  "iran": { winProb: 0.08, comment: "// Iran: — AFC competitive" },
  "south-africa": { winProb: 0.07, comment: "// South Africa: — host continent pride, CAF qualifier" },
  "tunisia": { winProb: 0.07, comment: "// Tunisia: — experienced African side" },
  "bosnia-and-herzegovina": { winProb: 0.06, comment: "// Bosnia: — upset qualifiers" }, // mapped from bosnia
  "czechia": { winProb: 0.06, comment: "// Czechia: — solid European side" },
  "canada": { winProb: 0.05, comment: "// Canada: — co-host, Alphonso Davies factor, 50% R32 per Goldman" },
  "saudi-arabia": { winProb: 0.04, comment: "// Saudi Arabia: — upset Argentina in 2022 but limited ceiling" },
  "new-zealand": { winProb: 0.03, comment: "// New Zealand: — FIFA #85, tournament debutant at this level" },
  "panama": { winProb: 0.03, comment: "// Panama: — CONCACAF survivors" },
  "qatar": { winProb: 0.02, comment: "// Qatar: — 2022 hosts, technically qualified" },
  "cabo-verde": { winProb: 0.02, comment: "// Cape Verde: — first major tournament" }, // mapped from cape-verde
  "haiti": { winProb: 0.02, comment: "// Haiti: — Opta: won in some simulations" },
  "uzbekistan": { winProb: 0.01, comment: "// Uzbekistan: — first ever WC" },
  "jordan": { winProb: 0.01, comment: "// Jordan: — first ever WC" },
  "curacao": { winProb: 0.01, comment: "// Curacao: — won in 0 of 10,000 Opta simulations" },
};

// Map missing ones like DR Congo, Iraq, etc. that weren't in the exact list but might exist in teams.js
// Let's get the list of teams from eval
let TEAMS_DATA;
try {
  let tempCode = teamsMatch[0].replace('export const TEAMS =', 'global.TEAMS_DATA =');
  eval(tempCode);
  TEAMS_DATA = global.TEAMS_DATA;
} catch (e) {
  console.error("Eval failed", e);
  process.exit(1);
}

const teams = TEAMS_DATA;

let newRaw = raw;

teams.forEach(team => {
  let d = exactData[team.id];
  if (!d) {
    // Some teams were missed in the prompt's list but exist in our teams.js (e.g. Iraq, DR Congo).
    // The prompt only listed ~45 teams. Let's give defaults for the missing ones to sum to 100.
    if (team.id === "iraq") d = { winProb: 0.02, comment: "// Iraq: — competitive AFC qualifier" };
    else if (team.id === "dr-congo") d = { winProb: 0.02, comment: "// DR Congo: — CAF dark horse" };
    else d = { winProb: 0.01, comment: `// ${team.name}: — generalized tier 4` };
  }

  const winProb = d.winProb;
  const finalProb = Math.min(100, winProb * 1.85);
  const sfProb = Math.min(100, winProb * 3.1);
  const qfProb = Math.min(100, winProb * 4.8);
  
  let groupProb = 65;
  const rank = team.fifaRank;
  if (rank >= 1 && rank <= 5) groupProb += 30;
  else if (rank >= 6 && rank <= 15) groupProb += 25;
  else if (rank >= 16 && rank <= 25) groupProb += 15;
  else if (rank >= 26 && rank <= 40) groupProb += 5;
  else if (rank >= 41 && rank <= 60) groupProb -= 5;
  else if (rank >= 61) groupProb -= 15;
  
  groupProb = Math.max(30, Math.min(98, groupProb));

  const winStr = winProb.toFixed(2).replace(/\.00$/, '');
  const finStr = finalProb.toFixed(1).replace(/\.0$/, '');
  const sfStr = sfProb.toFixed(1).replace(/\.0$/, '');
  const qfStr = qfProb.toFixed(1).replace(/\.0$/, '');
  const grpStr = groupProb.toFixed(1).replace(/\.0$/, '');

  // Strip out old comments if they exist
  // We'll replace the block from `id:` down to `flagCode:` and its old comments
  const regex = new RegExp(`(\\s*//.*\\n)*(\\s*//.*\\n)*(\\s*winProb.*\\n)?(\\s*id:\\s*"${team.id}"[\\s\\S]*?flagCode:\\s*"${team.flagCode}",?\\s*)`);
  
  const commentStr = `    ${d.comment}\n    winProb: ${winStr}, finalProb: ${finStr}, sfProb: ${sfStr}, qfProb: ${qfStr}, groupProb: ${grpStr},`;

  newRaw = newRaw.replace(regex, `\n${commentStr}\n$4`);
});

// Strip out old winProb line if it was placed AFTER flagCode (which it was in the previous step)
// Previous step did: flagCode: "...", \n // Spain... \n winProb: ...
// Let's clean the entire file by running a regex over all teams
let cleanRaw = fs.readFileSync(TEAMS_FILE, 'utf8');

// I will just rebuild the TEAMS array programmatically and replace it in the file to be clean.
let finalCode = "export const TEAMS = [\n";
teams.forEach(team => {
  let d = exactData[team.id];
  if (!d) {
    if (team.id === "iraq") d = { winProb: 0.02, comment: "// Iraq: — competitive AFC qualifier" };
    else if (team.id === "dr-congo") d = { winProb: 0.02, comment: "// DR Congo: — CAF dark horse" };
    else d = { winProb: 0.01, comment: `// ${team.name}: — generalized tier 4` };
  }

  const winProb = d.winProb;
  const finalProb = Math.min(100, winProb * 1.85);
  const sfProb = Math.min(100, winProb * 3.1);
  const qfProb = Math.min(100, winProb * 4.8);
  
  let groupProb = 65;
  const rank = team.fifaRank;
  if (rank >= 1 && rank <= 5) groupProb += 30;
  else if (rank >= 6 && rank <= 15) groupProb += 25;
  else if (rank >= 16 && rank <= 25) groupProb += 15;
  else if (rank >= 26 && rank <= 40) groupProb += 5;
  else if (rank >= 41 && rank <= 60) groupProb -= 5;
  else if (rank >= 61) groupProb -= 15;
  
  groupProb = Math.max(30, Math.min(98, groupProb));

  const winStr = winProb.toFixed(2).replace(/\.00$/, '');
  const finStr = finalProb.toFixed(1).replace(/\.0$/, '');
  const sfStr = sfProb.toFixed(1).replace(/\.0$/, '');
  const qfStr = qfProb.toFixed(1).replace(/\.0$/, '');
  const grpStr = groupProb.toFixed(1).replace(/\.0$/, '');

  finalCode += `  // ── GROUP ${team.group} ──────────────────────────────────────────\n`; // just append it before team, we can fix groups later if needed, but it's fine. Actually, teams.js is grouped by group. We'll retain the order.
  
  finalCode += `  {\n`;
  finalCode += `    ${d.comment}\n`;
  finalCode += `    winProb: ${winStr},\n`;
  finalCode += `    finalProb: ${finStr},\n`;
  finalCode += `    sfProb: ${sfStr},\n`;
  finalCode += `    qfProb: ${qfStr},\n`;
  finalCode += `    groupProb: ${grpStr},\n`;
  finalCode += `    id: "${team.id}",\n`;
  finalCode += `    name: "${team.name}",\n`;
  finalCode += `    code: "${team.code}",\n`;
  finalCode += `    group: "${team.group}",\n`;
  finalCode += `    fifaRank: ${team.fifaRank},\n`;
  finalCode += `    tier: "${team.tier}",\n`;
  finalCode += `    confederation: "${team.confederation}",\n`;
  finalCode += `    groupOpponents: ${JSON.stringify(team.groupOpponents)},\n`;
  finalCode += `    flagCode: "${team.flagCode}",\n`;
  finalCode += `  },\n`;
});
finalCode += `];\n`;

// Clean up the groups comment headers
let lastGroup = "";
let cleanFinalCode = "export const TEAMS = [\n";
teams.forEach((team, i) => {
  if (team.group !== lastGroup) {
    cleanFinalCode += `  // ── GROUP ${team.group} ──────────────────────────────────────────\n`;
    lastGroup = team.group;
  }
  let d = exactData[team.id];
  if (!d) {
    if (team.id === "iraq") d = { winProb: 0.02, comment: "// Iraq: — competitive AFC qualifier" };
    else if (team.id === "dr-congo") d = { winProb: 0.02, comment: "// DR Congo: — CAF dark horse" };
    else d = { winProb: 0.01, comment: `// ${team.name}: — generalized tier 4` };
  }

  const winProb = d.winProb;
  const finalProb = Math.min(100, winProb * 1.85);
  const sfProb = Math.min(100, winProb * 3.1);
  const qfProb = Math.min(100, winProb * 4.8);
  
  let groupProb = 65;
  const rank = team.fifaRank;
  if (rank >= 1 && rank <= 5) groupProb += 30;
  else if (rank >= 6 && rank <= 15) groupProb += 25;
  else if (rank >= 16 && rank <= 25) groupProb += 15;
  else if (rank >= 26 && rank <= 40) groupProb += 5;
  else if (rank >= 41 && rank <= 60) groupProb -= 5;
  else if (rank >= 61) groupProb -= 15;
  
  groupProb = Math.max(30, Math.min(98, groupProb));

  const winStr = winProb.toFixed(2).replace(/\.00$/, '');
  const finStr = finalProb.toFixed(1).replace(/\.0$/, '');
  const sfStr = sfProb.toFixed(1).replace(/\.0$/, '');
  const qfStr = qfProb.toFixed(1).replace(/\.0$/, '');
  const grpStr = groupProb.toFixed(1).replace(/\.0$/, '');

  cleanFinalCode += `  {\n`;
  cleanFinalCode += `    ${d.comment}\n`;
  cleanFinalCode += `    winProb: ${winStr},\n`;
  cleanFinalCode += `    finalProb: ${finStr},\n`;
  cleanFinalCode += `    sfProb: ${sfStr},\n`;
  cleanFinalCode += `    qfProb: ${qfStr},\n`;
  cleanFinalCode += `    groupProb: ${grpStr},\n`;
  cleanFinalCode += `    id: "${team.id}",\n`;
  cleanFinalCode += `    name: "${team.name}",\n`;
  cleanFinalCode += `    code: "${team.code}",\n`;
  cleanFinalCode += `    group: "${team.group}",\n`;
  cleanFinalCode += `    fifaRank: ${team.fifaRank},\n`;
  cleanFinalCode += `    tier: "${team.tier}",\n`;
  cleanFinalCode += `    confederation: "${team.confederation}",\n`;
  cleanFinalCode += `    groupOpponents: ${JSON.stringify(team.groupOpponents)},\n`;
  cleanFinalCode += `    flagCode: "${team.flagCode}",\n`;
  cleanFinalCode += `  },\n`;
});
cleanFinalCode += `];\n`;


// Now replace in file
const replaced = raw.replace(/export const TEAMS = \[[^]*?\];/, cleanFinalCode);
fs.writeFileSync(TEAMS_FILE, replaced, 'utf8');

console.log("Successfully injected explicit probabilities into teams.js");
