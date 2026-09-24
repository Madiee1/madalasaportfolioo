/** Renders the project grid with filtering, and the project detail modal. */
let MADALASA_PROJECTS = [];

function projectCardHtml(p) {
  const isFeatured = p.featured;
  const techTags = (p.technologies || []).map((t) => `<span class="tech-tag">${MADALASA_UTIL.escapeHtml(t)}</span>`).join("");
  const demoBtn = p.liveDemoUrl
    ? `<a class="btn btn-outline btn-sm" href="${MADALASA_UTIL.escapeHtml(p.liveDemoUrl)}" target="_blank" rel="noopener">Live demo</a>`
    : "";
  const githubBtn = p.githubUrl
    ? `<a class="btn btn-outline btn-sm" href="${MADALASA_UTIL.escapeHtml(p.githubUrl)}" target="_blank" rel="noopener">GitHub</a>`
    : "";

  return `
    <article class="project-card reveal${isFeatured ? " is-featured" : ""}" data-category="${p.category}" data-slug="${p.slug}">
      <div class="project-card-top">
        <h3>${MADALASA_UTIL.escapeHtml(p.title)}</h3>
        <span class="project-category-tag">${MADALASA_UTIL.categoryLabel(p.category)}</span>
      </div>
      <p class="project-desc">${MADALASA_UTIL.escapeHtml(p.shortDescription || "")}</p>
      <div class="tech-tags">${techTags}</div>
      <div class="project-card-actions">
        ${githubBtn}
        ${demoBtn}
        <button class="btn btn-primary btn-sm" data-view-project="${p.slug}">View details</button>
      </div>
    </article>`;
}

function renderProjectGrid(list) {
  const grid = document.querySelector(".project-grid");
  if (!grid) return;
  if (!list.length) {
    grid.innerHTML = '<p class="state-message">No projects in this category yet.</p>';
    return;
  }
  grid.innerHTML = list.map(projectCardHtml).join("");
  grid.querySelectorAll("[data-view-project]").forEach((btn) => {
    btn.addEventListener("click", () => openProjectModal(btn.dataset.viewProject));
  });
  // Newly injected cards need the reveal observer re-applied.
  grid.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
}

function openProjectModal(slug) {
  const project = MADALASA_PROJECTS.find((p) => p.slug === slug);
  const overlay = document.querySelector(".modal-overlay");
  if (!project || !overlay) return;

  const featureList = (project.features || []).map((f) => `<li>${MADALASA_UTIL.escapeHtml(f)}</li>`).join("");
  const techTags = (project.technologies || []).map((t) => `<span class="tech-tag">${MADALASA_UTIL.escapeHtml(t)}</span>`).join("");

  overlay.querySelector(".modal-body").innerHTML = `
    <span class="project-category-tag">${MADALASA_UTIL.categoryLabel(project.category)}</span>
    <h2>${MADALASA_UTIL.escapeHtml(project.title)}</h2>

    <div class="modal-section">
      <h4>Overview</h4>
      <p>${MADALASA_UTIL.escapeHtml(project.shortDescription || "")}</p>
    </div>

    ${project.problemStatement ? `<div class="modal-section"><h4>Problem</h4><p>${MADALASA_UTIL.escapeHtml(project.problemStatement)}</p></div>` : ""}
    ${project.solution ? `<div class="modal-section"><h4>Solution</h4><p>${MADALASA_UTIL.escapeHtml(project.solution)}</p></div>` : ""}
    ${featureList ? `<div class="modal-section"><h4>Key features</h4><ul>${featureList}</ul></div>` : ""}
    ${techTags ? `<div class="modal-section"><h4>Technologies</h4><div class="tech-tags">${techTags}</div></div>` : ""}
    ${project.architectureNotes ? `<div class="modal-section"><h4>Architecture / workflow</h4><p>${MADALASA_UTIL.escapeHtml(project.architectureNotes)}</p></div>` : ""}
    ${project.challenges ? `<div class="modal-section"><h4>Challenges</h4><p>${MADALASA_UTIL.escapeHtml(project.challenges)}</p></div>` : ""}
    ${project.futureImprovements ? `<div class="modal-section"><h4>Future improvements</h4><p>${MADALASA_UTIL.escapeHtml(project.futureImprovements)}</p></div>` : ""}

    <div class="modal-actions">
      ${project.githubUrl ? `<a class="btn btn-outline" href="${MADALASA_UTIL.escapeHtml(project.githubUrl)}" target="_blank" rel="noopener">View on GitHub</a>` : ""}
      ${project.liveDemoUrl ? `<a class="btn btn-primary" href="${MADALASA_UTIL.escapeHtml(project.liveDemoUrl)}" target="_blank" rel="noopener">Live demo</a>` : ""}
    </div>
  `;

  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const overlay = document.querySelector(".modal-overlay");
  if (!overlay) return;
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

async function initProjects() {
  const grid = document.querySelector(".project-grid");
  if (!grid) return;

  const { data } = await MADALASA_API.getProjects();
  MADALASA_PROJECTS = data;
  renderProjectGrid(data);

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.filter;
      const filtered = cat === "ALL" ? MADALASA_PROJECTS : MADALASA_PROJECTS.filter((p) => p.category === cat);
      renderProjectGrid(filtered);
    });
  });

  const overlay = document.querySelector(".modal-overlay");
  overlay?.querySelector(".modal-close")?.addEventListener("click", closeProjectModal);
  overlay?.addEventListener("click", (e) => {
    if (e.target === overlay) closeProjectModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
}
