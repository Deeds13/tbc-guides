// js/app.js
// Main application logic
// Reads the active class data config and renders content into the page template

document.addEventListener("DOMContentLoaded", () => {
    // Active class data (default: warrior)
    const activeClass = typeof WARRIOR !== "undefined" ? WARRIOR : null;

    if (activeClass) {
        applyClassTheme(activeClass);
        populateHero(activeClass);
    }

    initTabs();
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
