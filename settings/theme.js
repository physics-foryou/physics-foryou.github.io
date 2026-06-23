// settings/theme.js
const themes = {
    navy: { bg: "#eef2f5", panel: "#ffffff", header: "#1b2a47", text: "#1c2533", dim: "#626f80", border: "rgba(0,0,0,0.15)" },
    dark: { bg: "#1c1a27", panel: "#2f2b42", header: "#3c3957", text: "#d1d2d6", dim: "#9ba1a6", border: "#4e4a6e" },
    purple: { bg: "#120e16", panel: "#1f1926", header: "#5c3d75", text: "#f3eff5", dim: "#a89cb3", border: "#3d2e4d" },
    dollar: { bg: "#d0d0c5", panel: "#e2e2d9", header: "#667a66", text: "#4c5470", dim: "#828274", border: "#b5b5a7" },
    dots: { bg: "#282a36", panel: "#1f212b", header: "#bd93f9", text: "#a4b3db", dim: "#6272a4", border: "#44475a" },
    oblivion: { bg: "#f1f1f1", panel: "#ffffff", header: "#333333", text: "#5d5d5d", dim: "#a1a1a1", border: "#dcdcdc" },
    paper: { bg: "#eeeeee", panel: "#ffffff", header: "#444444", text: "#444444", dim: "#b2b2b2", border: "#cccccc" },
    repose_dark: { bg: "#2f3338", panel: "#3f444a", header: "#8f96a0", text: "#d6dbdf", dim: "#8f96a0", border: "#565e66" },
    alpine: { bg: "#fafafa", panel: "#ffffff", header: "#6c6f93", text: "#6c6f93", dim: "#a4a7c5", border: "#e0e0e6" }
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
    root.style.setProperty('--border-color', theme.border);
    
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
