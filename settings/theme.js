// settings/theme.js
const themes = {
    navy: { bg: "#eef2f5", panel: "#ffffff", header: "#1b2a47", text: "#1c2533", dim: "#626f80" },
    dark: { bg: "#6a7f93", panel: "#1c1a27", header: "#3c3957", text: "#d1d2d6", dim: "#9ba1a6" },
    purple: { bg: "#120e16", panel: "#1f1926", header: "#5c3d75", text: "#f3eff5", dim: "#a89cb3" },
    dollar: { bg: "#d0d0c5", panel: "#e2e2d9", header: "#667a66", text: "#4c5470", dim: "#828274" },
    dots: { bg: "#282a36", panel: "#1f212b", header: "#bd93f9", text: "#a4b3db", dim: "#6272a4" },
    oblivion: { bg: "#f1f1f1", panel: "#ffffff", header: "#333333", text: "#5d5d5d", dim: "#a1a1a1" },
    paper: { bg: "#444444", panel: "#333333", header: "#f2f2f2", text: "#b2b2b2", dim: "#666666" },
    repose_dark: { bg: "#cfcfc4", panel: "#bcbcb0", header: "#2f3338", text: "#4f5459", dim: "#828277" },
    alpine: { bg: "#fafafa", panel: "#ffffff", header: "#6c6f93", text: "#6c6f93", dim: "#a4a7c5" }
};

function applyGlobalTheme() {
    const savedTheme = localStorage.getItem('site-theme') || 'navy';
    const theme = themes[savedTheme] || themes.navy;
    const root = document.documentElement;
    root.style.setProperty('--bg-color', theme.bg);
    root.style.setProperty('--panel-bg', theme.panel);
    root.style.setProperty('--header-bg', theme.header);
    root.style.setProperty('--text-main', theme.text);
    root.style.setProperty('--text-dim', theme.dim);
    
    // If a theme dropdown exists on this page, visually keep it in sync
    const dropdown = document.getElementById('theme-dropdown');
    if (dropdown) {
        dropdown.value = savedTheme;
    }
}

function changeTheme(themeKey) {
    localStorage.setItem('site-theme', themeKey);
    applyGlobalTheme();
}

// Automatically load the theme settings as soon as the DOM structures load
window.addEventListener('DOMContentLoaded', applyGlobalTheme);
