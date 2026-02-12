// js/app.js
// Main application logic
// Reads the active class data config and renders content into the page template

document.addEventListener("DOMContentLoaded", () => {
    // Active class data (default: warrior)
    const activeClass = typeof WARRIOR !== "undefined" ? WARRIOR : null;

    if (activeClass) {
        applyClassTheme(activeClass);
        populateHero(activeClass);
        renderOverview(activeClass);
    }

    initTabs();
    initFactionTabs();
    initMobileMenu();
});

// ===== CLASS THEME =====
// Reads the class color from data and applies it as CSS custom properties
function applyClassTheme(classData) {
    const root = document.documentElement;
    root.style.setProperty("--class-color", classData.meta.color);
    root.style.setProperty("--class-color-dark", classData.meta.colorDark);
}

// ===== HERO POPULATION =====
// Fills the hero section with data from the active class config
function populateHero(classData) {
    const meta = classData.meta;

    const titleEl = document.getElementById("hero-class-name");
    const taglineEl = document.getElementById("hero-tagline");
    const difficultyEl = document.getElementById("hero-difficulty");
    const rolesEl = document.getElementById("hero-roles");

    if (titleEl) titleEl.textContent = meta.name;
    if (taglineEl) taglineEl.textContent = meta.tagline;

    if (difficultyEl) {
        const valueEl = difficultyEl.querySelector(".meta-value");
        if (valueEl) valueEl.textContent = meta.difficulty;
    }

    if (rolesEl) {
        const valueEl = rolesEl.querySelector(".meta-value");
        if (valueEl) valueEl.textContent = meta.roles.join(" / ");
    }
}

// ===== TAB SWITCHING =====
// Handles clicks on section tabs to show/hide content panels
function initTabs() {
    const tabContainer = document.getElementById("section-tabs");
    if (!tabContainer) return;

    const tabs = tabContainer.querySelectorAll(".tab");

    tabContainer.addEventListener("click", (e) => {
        const clickedTab = e.target.closest(".tab");
        if (!clickedTab) return;

        const targetId = clickedTab.getAttribute("data-tab");

        // Deactivate all tabs
        tabs.forEach((tab) => tab.classList.remove("active"));

        // Activate clicked tab
        clickedTab.classList.add("active");

        // Hide all content sections
        const allContent = document.querySelectorAll(".tab-content");
        allContent.forEach((section) => section.classList.remove("active"));

        // Show target content section
        const targetContent = document.getElementById("tab-" + targetId);
        if (targetContent) {
            targetContent.classList.add("active");
        }
    });
}

// ===== OVERVIEW RENDERING =====
// Builds all overview sub-sections from the active class data
function renderOverview(classData) {
    const ov = classData.overview;

    renderDescription(ov.description);
    renderList("overview-strengths", ov.strengths, "strength-item");
    renderList("overview-weaknesses", ov.weaknesses, "weakness-item");
    renderRaces(ov.races);
    renderProfessions(ov.professions);
    renderStatPriority(ov.statPriority);
}

// Render description paragraphs
function renderDescription(paragraphs) {
    const container = document.getElementById("overview-description");
    if (!container || !paragraphs.length) return;

    paragraphs.forEach((text) => {
        const p = document.createElement("p");
        p.className = "overview-text";
        p.textContent = text;
        container.appendChild(p);
    });
}

// Render a bulleted list into a panel
function renderList(containerId, items, itemClass) {
    const container = document.getElementById(containerId);
    if (!container || !items.length) return;

    const ul = document.createElement("ul");
    ul.className = "overview-list";

    items.forEach((text) => {
        const li = document.createElement("li");
        li.className = itemClass;
        li.textContent = text;
        ul.appendChild(li);
    });

    container.appendChild(ul);
}

// Render race recommendation cards into faction grids
function renderRaces(races) {
    renderRaceGrid("race-grid-alliance", races.alliance);
    renderRaceGrid("race-grid-horde", races.horde);
}

function renderRaceGrid(containerId, raceList) {
    const container = document.getElementById(containerId);
    if (!container || !raceList.length) return;

    raceList.forEach((race, index) => {
        const card = document.createElement("div");
        card.className = "race-card" + (index === 0 ? " recommended" : "");

        const name = document.createElement("h4");
        name.className = "race-name";
        name.textContent = race.name;
        if (index === 0) {
            const badge = document.createElement("span");
            badge.className = "recommended-badge";
            badge.textContent = "Recommended";
            name.appendChild(badge);
        }

        const desc = document.createElement("p");
        desc.className = "race-reasoning";
        desc.textContent = race.reasoning;

        card.appendChild(name);
        card.appendChild(desc);
        container.appendChild(card);
    });
}

// Render profession recommendations
function renderProfessions(professions) {
    const container = document.getElementById("overview-professions");
    if (!container || !professions.length) return;

    const list = document.createElement("div");
    list.className = "profession-list";

    professions.forEach((prof, index) => {
        const item = document.createElement("div");
        item.className = "profession-item" + (index === 0 ? " mandatory" : "");

        const name = document.createElement("h4");
        name.className = "profession-name";
        name.textContent = prof.name;
        if (index === 0) {
            const badge = document.createElement("span");
            badge.className = "mandatory-badge";
            badge.textContent = "Required";
            name.appendChild(badge);
        }

        const desc = document.createElement("p");
        desc.className = "profession-reasoning";
        desc.textContent = prof.reasoning;

        item.appendChild(name);
        item.appendChild(desc);
        list.appendChild(item);
    });

    container.appendChild(list);
}

// Render stat priority as an ordered ranking
function renderStatPriority(stats) {
    const container = document.getElementById("overview-stats");
    if (!container || !stats.length) return;

    const list = document.createElement("ol");
    list.className = "stat-priority-list";

    stats.forEach((entry) => {
        const li = document.createElement("li");
        li.className = "stat-item";

        const name = document.createElement("span");
        name.className = "stat-name";
        name.textContent = entry.stat;

        const explanation = document.createElement("span");
        explanation.className = "stat-explanation";
        explanation.textContent = entry.explanation;

        li.appendChild(name);
        li.appendChild(explanation);
        list.appendChild(li);
    });

    container.appendChild(list);
}

// ===== FACTION TABS =====
// Toggles Alliance/Horde race grids in the overview
function initFactionTabs() {
    const racePanel = document.getElementById("overview-races");
    if (!racePanel) return;

    const factionTabs = racePanel.querySelectorAll(".faction-tab");

    factionTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            factionTabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");

            const faction = tab.getAttribute("data-faction");
            const allianceGrid = document.getElementById("race-grid-alliance");
            const hordeGrid = document.getElementById("race-grid-horde");

            if (faction === "alliance") {
                allianceGrid.style.display = "";
                hordeGrid.style.display = "none";
            } else {
                allianceGrid.style.display = "none";
                hordeGrid.style.display = "";
            }
        });
    });
}

// ===== MOBILE MENU =====
// Toggles the mobile hamburger menu for the header nav
function initMobileMenu() {
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const mainNav = document.querySelector(".main-nav");
    if (!menuBtn || !mainNav) return;

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("open");
        mainNav.classList.toggle("open");
    });
}
