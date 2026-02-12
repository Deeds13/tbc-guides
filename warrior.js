// data/warrior.js
// Warrior class guide content - all guide data lives here
// The app reads this config and renders it into the page template

const WARRIOR = {
  // Class identity
  meta: {
    name: "Warrior",
    slug: "warrior",
    color: "#c79c6e",
    colorDark: "#8b6d4a",
    icon: "assets/icons/warrior.svg",
    tagline: "Master the art of warfare from Azeroth to Outland.",
    difficulty: "Hard",
    roles: ["Melee DPS", "Tank"],
  },

  // Overview tab
  overview: {
    description: "",       // TODO: Prompt 2
    strengths: [],
    weaknesses: [],
    races: {
      alliance: [],        // { name, reasoning }
      horde: [],
    },
    professions: [],       // { name, reasoning }
    statPriority: [],      // ordered list
  },

  // Talent Builds tab
  talents: {
    builds: [
      // TODO: Prompt 3
      // {
      //   name: "Arms Leveling",
      //   spec: "41/20/0",
      //   description: "",
      //   talentOrder: [],   // level-by-level picks
      //   trees: { arms: [], fury: [], protection: [] },
      //   tips: "",
      // },
    ],
  },

  // BiS Gear tab
  gear: {
    brackets: [
      // TODO: Prompt 4
      // {
      //   range: "1-20",
      //   slots: {
      //     head:     { name, source, quality },
      //     neck:     { name, source, quality },
      //     ...
      //   }
      // },
    ],
  },

  // Leveling Route tab
  levelingRoute: {
    alliance: [],          // TODO: Prompt 5
    horde: [],             // { zone, levelRange, keyQuests[], dungeons[], tips }
    outland: [],           // shared zone progression
  },

  // Rotation & Tips tab
  rotation: {
    brackets: [],          // TODO: Prompt 6
    // { range, singleTarget, aoe, stance, tips }
    stanceDancing: "",
    rageManagement: "",
    consumables: [],
    commonMistakes: [],
  },
};

// Export for use by app.js
if (typeof module !== "undefined") {
  module.exports = WARRIOR;
}
