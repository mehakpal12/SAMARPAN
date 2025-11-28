// All view triggers (sidebar, top links, buttons, profile icon)
const views = document.querySelectorAll(".view");
const viewTriggers = document.querySelectorAll("[data-view]");
const sideLinks = document.querySelectorAll(".side-link");

viewTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    // avoid jumping to top when it's a button/link
    event.preventDefault();

    const target = trigger.getAttribute("data-view");
    if (!target) return;

    // switch visible view
    views.forEach((view) => {
      if (view.id === `view-${target}`) {
        view.classList.add("view-active");
      } else {
        view.classList.remove("view-active");
      }
    });

    // update sidebar active state if this is a sidebar item
    if (trigger.classList.contains("side-link")) {
      sideLinks.forEach((b) => b.classList.remove("active"));
      trigger.classList.add("active");
    }
  });
});

// Sidebar toggle for mobile
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const main = document.querySelector(".main");

if (sidebar && sidebarToggle) {
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

if (main && sidebar) {
  main.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
}

// FAQ placeholder (if you later add FAQ blocks)
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-question");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    faqItems.forEach((i) => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

// Dynamic year placeholder (if you add footer with #year)
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
