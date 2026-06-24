// settings/theme.js
const themes = {
    // Added text contrast fixes ('var(--panel-bg)' for light backgrounds, custom dark highlights for dark backgrounds)
    navy: { bg: "#eef2f5", panel: "#ffffff", header: "#1b2a47", text: "#1c2533", dim: "#626f80", border: "rgba(0,0,0,0.15)", selBg: "#1c2533", selText: "#ffffff" },
    dark: { bg: "#1c1a27", panel: "#2f2b42", header: "#3c3957", text: "#d1d2d6", dim: "#9ba1a6", border: "#4e4a6e", selBg: "#d1d2d6", selText: "#1c1a27" },
    purple: { bg: "#120e16", panel: "#1f1926", header: "#5c3d75", text: "#f3eff5", dim: "#a89cb3", border: "#3d2e4d", selBg: "#f3eff5", selText: "#120e16" },
    dollar: { bg: "#d0d0c5", panel: "#e2e2d9", header: "#667a66", text: "#4c5470", dim: "#828274", border: "#b5b5a7", selBg: "#4c5470", selText: "#e2e2d9" },
    dots: { bg: "#282a36", panel: "#1f212b", header: "#bd93f9", text: "#a4b3db", dim: "#6272a4", border: "#44475a", selBg: "#bd93f9", selText: "#1f212b" },
    paper: { bg: "#eeeeee", panel: "#ffffff", header: "#444444", text: "#444444", dim: "#b2b2b2", border: "#cccccc", selBg: "#444444", selText: "#ffffff" },
    repose_dark: { bg: "#2f3338", panel: "#3f444a", header: "#8f96a0", text: "#d6dbdf", dim: "#8f96a0", border: "#565e66", selBg: "#d6dbdf", selText: "#2f3338" },
    alpine: { bg: "#fafafa", panel: "#ffffff", header: "#6c6f93", text: "#6c6f93", dim: "#a4a7c5", border: "#e0e0e6", selBg: "#6c6f93", selText: "#ffffff" }
};

function applyGlobalTheme() {
    const savedTheme = localStorage.getItem('site-theme') || 'paper';
    const theme = themes[savedTheme] || themes.paper;
    const root = document.documentElement;
    
    root.style.setProperty('--bg-color', theme.bg);
    root.style.setProperty('--panel-bg', theme.panel);
    root.style.setProperty('--header-bg', theme.header);
    root.style.setProperty('--text-main', theme.text);
    root.style.setProperty('--text-dim', theme.dim);
    root.style.setProperty('--border-color', theme.border);
    
    // Injecting the new smart contrast properties
    root.style.setProperty('--selected-bg', theme.selBg);
    root.style.setProperty('--selected-text', theme.selText);
    
    const dropdown = document.getElementById('theme-dropdown');
    if (dropdown) {
        dropdown.value = savedTheme;
    }
}

function changeTheme(themeKey) {
    localStorage.setItem('site-theme', themeKey);
    applyGlobalTheme();
}

window.addEventListener('DOMContentLoaded', applyGlobalTheme);
