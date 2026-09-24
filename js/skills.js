/** Renders the categorized, tabbed skills section. */
async function initSkills() {
  const tabsEl = document.querySelector(".skills-tabs");
  const panelsEl = document.querySelector(".skills-panels");
  if (!tabsEl || !panelsEl) return;

  const { data: skills } = await MADALASA_API.getSkills();
  const order = ["PROGRAMMING", "WEB_DEVELOPMENT", "AI_ML", "DATABASE", "TOOLS"];
  const grouped = {};
  order.forEach((c) => (grouped[c] = []));
  skills.forEach((s) => {
    if (!grouped[s.category]) grouped[s.category] = [];
    grouped[s.category].push(s);
  });

  const categories = order.filter((c) => grouped[c] && grouped[c].length);
  if (!categories.length) {
    panelsEl.innerHTML = '<p class="state-message">Skills are being updated — check back soon.</p>';
    return;
  }

  tabsEl.innerHTML = categories
    .map(
      (cat, i) =>
        `<button class="skills-tab${i === 0 ? " active" : ""}" data-cat="${cat}" role="tab" aria-selected="${i === 0}">${MADALASA_UTIL.categoryLabel(cat)}</button>`
    )
    .join("");

  panelsEl.innerHTML = categories
    .map(
      (cat, i) => `
      <div class="skills-panel${i === 0 ? " active" : ""}" data-panel="${cat}" role="tabpanel">
        <div class="skill-chip-grid">
          ${grouped[cat].map((s) => `<span class="skill-chip">${MADALASA_UTIL.escapeHtml(s.name)}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");

  tabsEl.querySelectorAll(".skills-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      tabsEl.querySelectorAll(".skills-tab").forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      panelsEl.querySelectorAll(".skills-panel").forEach((p) => p.classList.remove("active"));
      panelsEl.querySelector(`[data-panel="${tab.dataset.cat}"]`)?.classList.add("active");
    });
  });
}
