/**
 * Navigation: scroll shadow, mobile hamburger menu, active-link highlighting,
 * and smooth-scroll-to-section (native `scroll-behavior: smooth` handles the
 * animation; this just manages state).
 */
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelectorAll(".nav-links a");
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    },
    { passive: true }
  );

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-menu-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.forEach((link) =>
      link.addEventListener("click", () => {
        nav.classList.remove("is-menu-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
  }
});
