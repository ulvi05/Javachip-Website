import { setupDarkModeToggle } from "../../components/darkModeToggle.js";
import { navbarFunctionality } from "../../components/navbarFunctionality.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    setupDarkModeToggle();
    navbarFunctionality();
    setupTabs();
  } catch (error) {
    console.error("Initialization failed:", error);
  }
});

function setupTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");
  const lines = document.querySelectorAll(".tab-line");

  if (buttons.length === 0) {
    console.warn("No tab buttons found");
    return;
  }

  if (contents.length === 0) {
    console.warn("No tab contents found");
    return;
  }

  if (lines.length === 0) {
    console.warn("No tab lines found");
    return;
  }

  buttons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");
      if (!targetId) {
        console.warn("Button has no data-tab attribute");
        return;
      }

      const target = document.getElementById(targetId);
      if (!target) {
        console.warn(`No element found with id: ${targetId}`);
        return;
      }

      contents.forEach((content) => {
        if (content) {
          content.classList.add("hidden");
          content.classList.remove("animate-slideDownFade");
        }
      });

      target.classList.remove("hidden");
      void target.offsetWidth;
      target.classList.add("animate-slideDownFade");

      lines.forEach((line) => {
        if (line) line.classList.add("opacity-0");
      });

      if (lines[idx]) {
        lines[idx].classList.remove("opacity-0");
      }
    });
  });

  if (buttons[0]) {
    setTimeout(() => buttons[0].click(), 100);
  }
}
