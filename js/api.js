/**
 * Static data layer — no backend involved. All content comes straight
 * from data/fallback-data.js (window.MADALASA_FALLBACK). Kept as an
 * "API"-shaped object so the rest of the JS (projects.js, skills.js,
 * timeline.js, scrap.js, etc.) doesn't need to change at all.
 */
const MADALASA_API = (() => {
  function getLocal(key) {
    const data = window.MADALASA_FALLBACK?.[key] ?? [];
    return Promise.resolve({ data, fromApi: false });
  }

  return {
    getProjects: (category) => {
      const all = window.MADALASA_FALLBACK?.projects ?? [];
      const data = category ? all.filter((p) => p.category === category) : all;
      return Promise.resolve({ data, fromApi: false });
    },
    getSkills: () => getLocal("skills"),
    getExperience: () => getLocal("experience"),
    getEducation: () => getLocal("education"),
    getCertifications: () => getLocal("certifications"),
    getAchievements: () => getLocal("achievements"),
    getActivities: () => getLocal("activities"),

    // No backend to POST to — contact.js builds a mailto: link instead
    // of calling this.
    async postContact() {
      throw new Error("Contact form is handled via email — see contact.js.");
    },
  };
})();
