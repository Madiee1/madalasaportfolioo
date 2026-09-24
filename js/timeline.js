/** Renders the merged Experience / Education timeline with a tab switch, plus certifications. */
function experienceItemHtml(e) {
  const highlights = (e.highlights || []).map((h) => `<li>${MADALASA_UTIL.escapeHtml(h)}</li>`).join("");
  const tech = (e.technologies || []).map((t) => `<span class="tech-tag">${MADALASA_UTIL.escapeHtml(t)}</span>`).join("");
  return `
    <div class="timeline-item reveal">
      <div class="t-period">${MADALASA_UTIL.formatRange(e.startDate, e.endDate)}</div>
      <h3>${MADALASA_UTIL.escapeHtml(e.role)}</h3>
      <div class="t-org">${MADALASA_UTIL.escapeHtml(e.organization)}${e.location ? " · " + MADALASA_UTIL.escapeHtml(e.location) : ""}</div>
      ${e.description ? `<p class="t-desc">${MADALASA_UTIL.escapeHtml(e.description)}</p>` : ""}
      ${highlights ? `<ul>${highlights}</ul>` : ""}
      ${tech ? `<div class="tech-tags">${tech}</div>` : ""}
    </div>`;
}

function educationItemHtml(e) {
  return `
    <div class="timeline-item reveal">
      <div class="t-period">${MADALASA_UTIL.formatRange(e.startDate, e.endDate)}</div>
      <h3>${MADALASA_UTIL.escapeHtml(e.degree)}</h3>
      <div class="t-org">${MADALASA_UTIL.escapeHtml(e.institution)}${e.location ? " · " + MADALASA_UTIL.escapeHtml(e.location) : ""}</div>
      ${e.detail ? `<p class="t-desc">${MADALASA_UTIL.escapeHtml(e.detail)}</p>` : ""}
    </div>`;
}

async function initTimeline() {
  const tabsEl = document.querySelector(".timeline-tabs");
  const wrap = document.querySelector(".timeline-wrap");
  if (!tabsEl || !wrap) return;

  const [{ data: experience }, { data: education }] = await Promise.all([MADALASA_API.getExperience(), MADALASA_API.getEducation()]);

  wrap.innerHTML = `
    <div class="timeline" data-panel="experience">
      ${experience.length ? experience.map(experienceItemHtml).join("") : '<p class="state-message">Experience details coming soon.</p>'}
    </div>
    <div class="timeline" data-panel="education" style="display:none;">
      ${education.length ? education.map(educationItemHtml).join("") : '<p class="state-message">Education details coming soon.</p>'}
    </div>
  `;

  tabsEl.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      tabsEl.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      wrap.querySelectorAll(".timeline").forEach((t) => {
        t.style.display = t.dataset.panel === btn.dataset.timeline ? "block" : "none";
      });
    });
  });

  wrap.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
}

async function initCertifications() {
  const list = document.querySelector(".cert-list");
  if (!list) return;
  const { data } = await MADALASA_API.getCertifications();
  if (!data.length) {
    list.innerHTML = '<p class="state-message">Certifications coming soon.</p>';
    return;
  }
  list.innerHTML = data
    .map(
      (c) => `
      <div class="cert-item">
        <span class="cert-name">${MADALASA_UTIL.escapeHtml(c.name)}</span>
        <span class="cert-issuer">${MADALASA_UTIL.escapeHtml(c.issuer)}</span>
      </div>`
    )
    .join("");
}
