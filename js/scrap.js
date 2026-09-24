/** Renders Achievements and Extracurricular Activities as "scrapbook" cards. */
async function initAchievements() {
  const grid = document.querySelector(".achievements-grid");
  if (!grid) return;
  const { data } = await MADALASA_API.getAchievements();
  if (!data.length) {
    grid.innerHTML = '<p class="state-message">Achievements coming soon.</p>';
    return;
  }
  grid.innerHTML = data
    .map(
      (a) => `
      <div class="scrap-card reveal">
        <span class="scrap-tag">${MADALASA_UTIL.categoryLabel(a.category)}</span>
        <h3>${MADALASA_UTIL.escapeHtml(a.title)}</h3>
        <p>${MADALASA_UTIL.escapeHtml(a.description || "")}</p>
      </div>`
    )
    .join("");
  grid.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
}

async function initActivities() {
  const grid = document.querySelector(".activities-grid");
  if (!grid) return;
  const { data } = await MADALASA_API.getActivities();
  if (!data.length) {
    grid.innerHTML = '<p class="state-message">Extracurricular activities coming soon.</p>';
    return;
  }
  grid.innerHTML = data
    .map(
      (a) => `
      <div class="scrap-card reveal">
        <span class="scrap-tag">${MADALASA_UTIL.categoryLabel(a.category)}${a.role ? " · " + MADALASA_UTIL.escapeHtml(a.role) : ""}</span>
        <h3>${MADALASA_UTIL.escapeHtml(a.title)}</h3>
        <p>${MADALASA_UTIL.escapeHtml(a.description || "")}</p>
      </div>`
    )
    .join("");
  grid.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
}
