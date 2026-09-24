/**
 * Dark/light theme toggle. Preference is saved to localStorage and
 * respected on next visit; falls back to the OS preference on first visit.
 */
(function () {
  const STORAGE_KEY = "madalasa_theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const btn = document.querySelector(".theme-toggle");
    if (btn) btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  function initialTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  applyTheme(initialTheme());

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    applyTheme(root.getAttribute("data-theme") || initialTheme());

    btn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  });
})();
