# TBC Anniversary Guides

A comprehensive World of Warcraft: The Burning Crusade Anniversary class leveling guide site.

## Project Structure

```
tbc-guides/
├── index.html              # Main entry point & site shell
├── css/
│   └── styles.css          # Global styles & theme variables
├── js/
│   ├── app.js              # Main app logic (tabs, navigation, rendering)
│   └── router.js           # Client-side class routing (future)
├── data/
│   └── warrior.js          # Warrior guide content (talents, gear, routes)
├── assets/
│   ├── icons/              # Class icons, UI icons (SVG)
│   └── images/             # Hero images, backgrounds
└── README.md
```

## Architecture

The site uses a **data-driven template** approach:

- `index.html` — Provides the page shell, header, class nav, and tab structure
- `css/styles.css` — All styling with CSS custom properties for per-class theming
- `data/<class>.js` — Each class exports a config object containing all guide content
- `js/app.js` — Reads the active class data and renders content into the template

### Adding a New Class

1. Copy `data/warrior.js` → `data/<classname>.js`
2. Update the content (talents, gear, leveling route, rotation)
3. Set the class color variable in the config
4. Enable the class button in the nav

## Class Color Reference (WoW)

| Class   | Hex       |
|---------|-----------|
| Warrior | `#c79c6e` |
| Paladin | `#f58cba` |
| Hunter  | `#abd473` |
| Rogue   | `#fff569` |
| Priest  | `#ffffff` |
| Shaman  | `#0070de` |
| Mage    | `#69ccf0` |
| Warlock | `#9482c9` |
| Druid   | `#ff7d0a` |

## Development

Just open `index.html` in a browser. No build tools required.

## Game Version

All content is based on **TBC patch 2.4.3** values for the Anniversary edition.
