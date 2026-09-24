/** Handles the contact form: client-side validation + opens a mailto: link
 *  (there's no backend to POST to in this static build). */
function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const statusEl = form.querySelector(".form-status");
  const submitBtn = form.querySelector('button[type="submit"]');
  const CONTACT_EMAIL = "myworkk2105@gmail.com";

  function setFieldError(name, message) {
    const errEl = form.querySelector(`[data-error-for="${name}"]`);
    if (errEl) errEl.textContent = message || "";
  }

  function clearErrors() {
    form.querySelectorAll(".form-error").forEach((el) => (el.textContent = ""));
    statusEl.className = "form-status";
    statusEl.textContent = "";
  }

  function validate(values) {
    const errors = {};
    if (!values.name.trim()) errors.name = "Please enter your name.";
    if (!values.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters.";
    }
    return errors;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const values = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
      website: form.website.value, // honeypot
    };

    // Honeypot: silently pretend success for bots.
    if (values.website) {
      statusEl.className = "form-status success";
      statusEl.textContent = "Thanks for reaching out — I'll get back to you soon.";
      form.reset();
      return;
    }

    const errors = validate(values);
    if (Object.keys(errors).length) {
      Object.entries(errors).forEach(([field, msg]) => setFieldError(field, msg));
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Opening email…";

    const subject = values.subject.trim() || `Portfolio contact from ${values.name}`;
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    statusEl.className = "form-status success";
    statusEl.textContent = "Opening your email app to send the message — if nothing opens, email me directly instead.";
    form.reset();

    submitBtn.disabled = false;
    submitBtn.textContent = "Send message";
  });
}
