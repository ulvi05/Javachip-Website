const menuBtn = document.getElementById("menu-btn");
const languageBtn = document.getElementById("language-dropdown-btn");
const languageMenu = document.getElementById("language-dropdown-menu");
const mobileMenu = document.getElementById("navbar-language");
import { setupDarkModeToggle } from "../../components/darkModeToggle.js";
import "../../components/Swiper.js";

setupDarkModeToggle();

menuBtn?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
});

languageBtn?.addEventListener("click", () => {
  languageMenu?.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  if (
    !languageBtn.contains(event.target) &&
    !languageMenu.contains(event.target)
  ) {
    languageMenu?.classList.add("hidden");
  }
});
