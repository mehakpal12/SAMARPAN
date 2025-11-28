// ====== TAB SWITCH + ANIMATION ======
const views = document.querySelectorAll(".view");
const viewTriggers = document.querySelectorAll("[data-view]");
const sideLinks = document.querySelectorAll(".side-link");
const flashBar = document.getElementById("switchFlash");

viewTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();

    const target = trigger.getAttribute("data-view");
    if (!target) return;

    const targetId = `view-${target}`;
    const nextView = document.getElementById(targetId);
    if (!nextView) return;

    // sab views se active + animation class hatao
    views.forEach((v) => v.classList.remove("view-active", "view-anim-in"));

    // naya view dikhao
    nextView.classList.add("view-active");
    // reflow for restart animation
    void nextView.offsetWidth;
    nextView.classList.add("view-anim-in");

    // sidebar active state
    if (trigger.classList.contains("side-link")) {
      sideLinks.forEach((b) => b.classList.remove("active"));
      trigger.classList.add("active");
    }

    // neon flash bar
    if (flashBar) {
      flashBar.classList.remove("flash-go");
      void flashBar.offsetWidth;
      flashBar.classList.add("flash-go");
    }
  });
});

// ====== SIDEBAR TOGGLE (mobile) ======
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

// (optional) year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
