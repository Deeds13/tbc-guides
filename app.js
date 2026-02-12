// js/app.js
// Main application logic
// Reads the active class data config and renders content into the page template
// Prompt 1 will build this out

document.addEventListener("DOMContentLoaded", () => {
    console.log("TBC Guides loaded");

    // Active class data (default: warrior)
    const activeClass = typeof WARRIOR !== "undefined" ? WARRIOR : null;

    if (activeClass) {
        // Set class color theme
        document.documentElement.style.setProperty("--class-color", activeClass.meta.color);
        document.documentElement.style.setProperty("--class-color-dark", activeClass.meta.colorDark);
        console.log(`Loaded: ${activeClass.meta.name}`);
    }
});
