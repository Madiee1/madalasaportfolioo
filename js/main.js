/** Boots up every section renderer once the DOM is ready. */
document.addEventListener("DOMContentLoaded", () => {
  initSkills();
  initProjects();
  initTimeline();
  initCertifications();
  initAchievements();
  initActivities();
  initContactForm();

  const yearEl = document.querySelector("#footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
