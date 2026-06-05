const fs = require('fs');
const path = require('path');

async function run() {
  const filePath = path.join(__dirname, 'src', 'data', 'teamProfiles.js');
  
  // Dynamic import
  const { default: TEAM_PROFILES } = await import('./src/data/teamProfiles.js');

  // --- 1. Argentina ---
  if (TEAM_PROFILES.argentina && TEAM_PROFILES.argentina.history) {
    const chapters = TEAM_PROFILES.argentina.history.chapters || [];
    
    // Kempes 1978
    const ch1978 = chapters.find(c => c.year === "1978");
    if (ch1978) {
      ch1978.photo = {
        wikiPage: null,
        url: "/mario_kempes.jpeg",
        caption: "Mario Kempes scoring the decisive goal against Netherlands at the Monumental, June 25 1978."
      };
      console.log("Updated Argentina 1978 photo.");
    }

    // Messi 2022
    const ch2022 = chapters.find(c => c.year === "2022");
    if (ch2022) {
      ch2022.photo = {
        wikiPage: null,
        url: "/messi_wc.avif",
        caption: "Lionel Messi celebrating the World Cup triumph in Lusail, December 18 2022."
      };
      console.log("Updated Argentina 2022 photo.");
    }
  }

  // --- 2. England ---
  if (TEAM_PROFILES.england && TEAM_PROFILES.england.history) {
    const chapters = TEAM_PROFILES.england.history.chapters || [];
    const ch1990 = chapters.find(c => c.year === "1990");
    if (ch1990) {
      ch1990.photo = {
        wikiPage: null,
        url: "/eng_1990_exit.webp",
        caption: "Paul Gascoigne, whose tears in Turin captured the hearts of a nation."
      };
      console.log("Updated England 1990 photo.");
    }
  }

  // --- 3. Portugal ---
  if (TEAM_PROFILES.portugal && TEAM_PROFILES.portugal.history) {
    const chapters = TEAM_PROFILES.portugal.history.chapters || [];
    const ch2022 = chapters.find(c => c.year === "2022");
    if (ch2022) {
      delete ch2022.photo;
      ch2022.photos = [
        {
          wikiPage: null,
          url: "/ronaldo_tears_2022.webp",
          caption: "Cristiano Ronaldo walks off the pitch in Doha, Qatar, December 10 2022."
        },
        {
          wikiPage: null,
          url: "/portugal_exit.jpeg",
          caption: "Portugal's exit from the World Cup."
        }
      ];
      console.log("Updated Portugal 2022 with photos array.");
    }
  }

  // --- 4. Brazil ---
  if (TEAM_PROFILES.brazil && TEAM_PROFILES.brazil.history) {
    const chapters = TEAM_PROFILES.brazil.history.chapters || [];
    
    // Boy King 1958 - description caption change
    const ch1958 = chapters.find(c => c.year === "1958");
    if (ch1958 && ch1958.photo) {
      ch1958.photo.caption = "Pele at the World Cup 1958";
      console.log("Updated Brazil 1958 photo caption.");
    }

    // 1970 photo change
    const ch1970 = chapters.find(c => c.year === "1970");
    if (ch1970) {
      ch1970.photo = {
        wikiPage: null,
        url: "/pele_celebrating_1970.jpg",
        caption: "Pelé celebrating during the historic 1970 final victory over Italy."
      };
      console.log("Updated Brazil 1970 photo.");
    }

    // 2002 wc section add photo
    const ch2002 = chapters.find(c => c.year === "2002");
    if (ch2002) {
      ch2002.photo = {
        wikiPage: null,
        url: "/ronaldo_nazario_2002.jpg",
        caption: "Ronaldo Nazário celebrates one of his two goals in the 2002 final."
      };
      console.log("Updated Brazil 2002 photo.");
    }
  }

  // --- 5. Netherlands ---
  if (TEAM_PROFILES.netherlands && TEAM_PROFILES.netherlands.history) {
    const chapters = TEAM_PROFILES.netherlands.history.chapters || [];

    // Rob Rensenbrink 1978
    const ch1978 = chapters.find(c => c.year === "1978");
    if (ch1978) {
      ch1978.photo = {
        wikiPage: null,
        url: "/rob_rensenbrik.jpeg",
        caption: "Rob Rensenbrink in action during the 1978 World Cup."
      };
      console.log("Updated Netherlands 1978 photo.");
    }

    // 2010
    const ch2010 = chapters.find(c => c.year === "2010");
    if (ch2010) {
      ch2010.photo = {
        wikiPage: null,
        url: "/holland2010.webp",
        caption: "Arjen Robben is denied by Iker Casillas in the 2010 final."
      };
      console.log("Updated Netherlands 2010 photo.");
    }
  }

  // --- 6. Serialize and write back ---
  function serialize(obj, indent = 2) {
    const spaces = ' '.repeat(indent);
    if (obj === null) return 'null';
    if (typeof obj === 'string') return JSON.stringify(obj);
    if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj);
    if (Array.isArray(obj)) {
      if (obj.length === 0) return '[]';
      const items = obj.map(item => serialize(item, indent + 2)).join(',\n' + spaces);
      return '[\n' + spaces + items + '\n' + ' '.repeat(indent - 2) + ']';
    }
    if (typeof obj === 'object') {
      const keys = Object.keys(obj);
      if (keys.length === 0) return '{}';
      const pairs = keys.map(key => {
        const formattedKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : JSON.stringify(key);
        return `${formattedKey}: ${serialize(obj[key], indent + 2)}`;
      }).join(',\n' + spaces);
      return '{\n' + spaces + pairs + '\n' + ' '.repeat(indent - 2) + '}';
    }
    return 'undefined';
  }

  const updatedContent = `/**
 * 2026 FIFA World Cup — Complete Team Profiles
 * ═══════════════════════════════════════════════════════
 * STATIC DATA ONLY. Nothing in this file calls an API.
 * The Groq AI is ONLY used for: prediction, biggestThreat,
 * groupAnalysis, pathCondition, roast.
 */

const TEAM_PROFILES = ${serialize(TEAM_PROFILES, 2)};

export default TEAM_PROFILES;
`;

  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log("Successfully updated teamProfiles.js with more photos!");
}

run().catch(console.error);
