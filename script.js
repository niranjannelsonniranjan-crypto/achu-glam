const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
const form = document.getElementById("booking-form");
const statusEl = document.querySelector(".form-status");

function setMenuOpen(open) {
  nav.classList.toggle("open", open);
  toggle?.setAttribute("aria-expanded", String(open));
  toggle?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

toggle?.addEventListener("click", () => {
  setMenuOpen(!nav.classList.contains("open"));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    statusEl.textContent = "Please complete the required fields.";
    form.reportValidity();
    return;
  }
  statusEl.textContent =
    "Request received. Achu will confirm within one business day.";
  form.reset();
});
