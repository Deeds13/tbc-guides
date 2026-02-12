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
    description: [
      "The Warrior is widely regarded as the most challenging class to level in The Burning Crusade. Unlike Hunters, Warlocks, or Druids, Warriors have zero self-healing, no mana-free pulling tools, and are completely dependent on their gear\u2014especially their weapon\u2014to function. When your weapon falls behind the curve, your kill speed craters, rage generation stalls, and you spend more time eating than fighting. Keeping your weapon current is the single most important thing you can do while leveling.",
      "That said, a well-played Warrior with a good weapon is a force of nature. Arms Warriors wielding a slow two-hander can cleave through pairs of mobs with Sweeping Strikes and Whirlwind, generating steady rage from big white hits and finishing targets with Execute. At level 62 you unlock Victory Rush, which finally gives you a small self-heal after every kill and dramatically smooths out the Outland grind. The class rewards careful pulling, smart cooldown usage, and constant weapon upgrades.",
      "Warriors also bring the single biggest advantage of any class to group content: you are always welcome as a tank. Instant dungeon invites mean faster quest completions, priority on gear, and access to the blue weapons that keep your solo damage competitive. If you are willing to tank the occasional Ramparts or Blood Furnace run between quest hubs, leveling a Warrior becomes far more manageable than its reputation suggests."
    ],
    strengths: [
      "Instant dungeon invites as a tank\u2014fastest way to gear up while leveling",
      "Sweeping Strikes + Whirlwind cleaves two mobs at once, making double-pulls efficient",
      "Execute is one of the strongest finishing moves in the game, killing mobs from 20% almost instantly",
      "Victory Rush (level 62) provides a free heal after every kill, greatly reducing Outland downtime",
      "Excellent scaling with gear\u2014every weapon upgrade is immediately noticeable",
      "Best main tank in TBC endgame, so your leveling investment pays off at 70"
    ],
    weaknesses: [
      "No self-healing until Victory Rush at 62\u2014heavy reliance on food and First Aid",
      "Extremely gear-dependent: an outdated weapon makes everything painfully slow",
      "Levels 1\u201310 are brutal with almost no abilities and low rage generation",
      "Vulnerable to runners pulling extra mobs\u2014no reliable ranged slow until Hamstring kiting",
      "High consumable costs from food, bandages, and weapon sharpening stones"
    ],
    races: {
      alliance: [
        {
          name: "Human",
          reasoning: "Sword Specialization and Mace Specialization grant +5 weapon skill, reducing glancing blow penalties against same-level and +1/+2 mobs. This is a meaningful DPS increase while leveling and stays relevant at 70. The +10% reputation bonus also speeds up faction grinds for key pre-raid attunements."
        },
        {
          name: "Draenei",
          reasoning: "Gift of the Naaru is a free heal-over-time on a 3-minute cooldown\u2014enormously valuable for a class with no self-healing. Heroic Presence gives your entire party +1% hit, making you a desirable dungeon tank. The strongest choice for reducing leveling downtime on Alliance side."
        },
        {
          name: "Night Elf",
          reasoning: "Highest base Agility of any Alliance race gives a small boost to crit and dodge. Shadowmeld lets you drop combat to eat or avoid ganks on PvP servers. Nature Resistance provides minor help against certain dungeon and raid mechanics. A solid but not standout pick."
        },
        {
          name: "Dwarf",
          reasoning: "Stoneform removes Bleeds, Poisons, and Diseases and adds 10% armor for 8 seconds. Useful for tanking and excellent in PvP against Rogues. Gun Specialization is wasted since Warriors rarely use ranged attacks for damage. A defensive choice."
        },
        {
          name: "Gnome",
          reasoning: "Escape Artist breaks any root or snare on a 1-minute cooldown\u2014exceptional for PvP and helpful when kiting goes wrong while leveling. The increased Intellect is completely wasted. Gnome Warrior is a PvP-focused pick with minimal PvE benefit."
        }
      ],
      horde: [
        {
          name: "Orc",
          reasoning: "The best Horde race for Warriors by a wide margin. Axe Specialization gives +5 weapon skill with axes (which are abundant throughout TBC). Blood Fury is a free Attack Power cooldown. Hardiness provides a 15% chance to resist stuns\u2014dominant in both PvE and PvP."
        },
        {
          name: "Undead",
          reasoning: "Will of the Forsaken breaks Fear, Sleep, and Charm on a 2-minute cooldown. This is extremely powerful in PvP against Warlocks and Priests, and useful in several dungeon encounters. Cannibalize provides a small source of free healing between pulls that stacks with bandaging."
        },
        {
          name: "Tauren",
          reasoning: "War Stomp is an AoE stun on a 2-minute cooldown\u2014useful for tanking, interrupting runners, and PvP peeling. The +5% base health scales well with Stamina stacking as a tank. Larger hitbox can be a minor nuisance in tight dungeon corridors."
        },
        {
          name: "Troll",
          reasoning: "Berserking provides 10\u201330% increased attack speed based on missing health\u2014strong for burn phases while leveling. Beast Slaying gives +5% damage against Beasts, which make up a large portion of leveling mobs. Regeneration is minor but slightly reduces downtime."
        }
      ],
    },
    professions: [
      {
        name: "First Aid",
        reasoning: "Absolutely mandatory\u2014not optional. Heavy Netherweave Bandages are your primary source of healing between pulls. Train this immediately at level 1 and keep it maxed at all times. The difference between a Warrior with and without First Aid is night and day."
      },
      {
        name: "Mining + Skinning",
        reasoning: "The recommended pairing for leveling. Both generate steady gold with zero crafting costs, which you need for your level-40 mount, consumables, and Outland flying at 70. Mine every ore node you pass\u2014Fel Iron and Adamantite sell extremely well on the Auction House."
      },
      {
        name: "Engineering (endgame swap)",
        reasoning: "The best endgame profession for Warriors. Goblin Sapper Charges, Dense Dynamite for AoE, Gnomish Battle Chicken as a free DPS pet, and Tankatronic Goggles for tanking. Consider dropping Skinning for Engineering once you have flying mount gold secured."
      },
      {
        name: "Blacksmithing (alternative)",
        reasoning: "Can craft strong weapons like Lionheart Blade and endgame epics. However, it is extremely expensive to level and provides little benefit until the very end. Only recommended if you have a wealthy main funding materials."
      },
      {
        name: "Herbalism + Alchemy (alternative)",
        reasoning: "Alchemy lets you craft your own healing potions, rage potions, and elixirs, which directly addresses Warrior downtime. Less raw gold than Mining + Skinning, but the self-sufficiency in consumables can be worth it if you dislike buying from the Auction House."
      }
    ],
    statPriority: [
      { stat: "Weapon DPS", explanation: "Your most important stat by far. A weapon upgrade of even 5 DPS affects every auto-attack, every Mortal Strike, every Whirlwind. Always prioritize the slowest, highest-damage two-hander you can find." },
      { stat: "Strength", explanation: "Grants 2 Attack Power per point. Your primary stat on gear\u2014more Strength means harder hits, more rage from damage dealt, and faster kills." },
      { stat: "Stamina", explanation: "Keeps you alive. More health means you can pull more aggressively, survive unexpected adds, and spend less time running back from deaths. Never sacrifice large amounts for minor offensive gains." },
      { stat: "Hit Rating", explanation: "Reduces your chance to miss. Against same-level mobs you need very little, but in Outland where mobs are often +1 or +2 levels, hit rating prevents rage-starving misses. 9% hit cap at 70." },
      { stat: "Critical Strike Rating", explanation: "Critical hits generate 100% extra damage and bonus rage. More crits mean more resources to spend on abilities, creating a positive feedback loop. Especially strong with Impale and Deep Wounds talents." },
      { stat: "Agility", explanation: "Grants 1 Attack Power, a small amount of crit, dodge, and armor. Useful but point-for-point weaker than Strength for a leveling Warrior. Take it when it comes on gear but do not prioritize it." },
      { stat: "Armor", explanation: "Reduces incoming physical damage, which is most of what you face while leveling. Plate armor is your built-in advantage\u2014wear the highest armor pieces available for your level to reduce food consumption between pulls." }
    ],
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
