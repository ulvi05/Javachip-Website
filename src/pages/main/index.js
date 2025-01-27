const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("navbar-language");
import { setupDarkModeToggle } from "../../components/darkModeToggle.js";

setupDarkModeToggle();

menuBtn?.addEventListener("click", function () {
  mobileMenu?.classList.toggle("hidden");
});

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});
