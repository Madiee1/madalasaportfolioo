/** Small shared helpers used across the render scripts. */
const MADALASA_UTIL = (() => {
  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function formatMonthYear(isoDate) {
    if (!isoDate) return null;
    const d = new Date(isoDate);
    if (Number.isNaN(d.getTime())) return null;
    return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  }

  function formatRange(start, end) {
    const s = formatMonthYear(start);
    const e = formatMonthYear(end);
    if (s && e && s === e) return s;
    if (s && !e) return `${s} — Present`;
    if (s && e) return `${s} — ${e}`;
    if (!s && e) return e;
    return "";
  }

  const CATEGORY_LABELS = {
    JAVA: "Java",
    PYTHON: "Python",
    AI_ML: "AI / ML",
    WEB: "Web",
    UI_UX: "UI/UX",
    SECURITY: "Security",
    PROGRAMMING: "Programming",
    WEB_DEVELOPMENT: "Web Development",
    DATABASE: "Database",
    TOOLS: "Tools",
    AWARD: "Award",
    HACKATHON: "Hackathon",
    COMPETITION: "Competition",
    ACADEMIC: "Academic",
    LEADERSHIP: "Leadership",
    CLUB: "Club",
    EVENT: "Event",
    VOLUNTEERING: "Volunteering",
    WORKSHOP: "Workshop",
    CREATIVE: "Creative",
    OTHER: "Other",
  };

  function categoryLabel(key) {
    return CATEGORY_LABELS[key] || key;
  }

  return { escapeHtml, formatMonthYear, formatRange, categoryLabel };
})();
