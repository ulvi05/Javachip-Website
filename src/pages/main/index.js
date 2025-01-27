const menuBtn = document.getElementById("menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("navbar-language");
const menuShadow = document.getElementById("menu-shadow");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  toggle.classList.add("dark");
}

toggle.addEventListener("click", () => {
  const isDarkMode = body.classList.contains("dark");

  if (isDarkMode) {
    body.classList.remove("dark");
    toggle.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark");
    toggle.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

// const closeMenu = () => {
//   mobileMenu.classList.remove("animate-slideIn");
//   mobileMenu.classList.add("animate-slideOut");
//   setTimeout(() => {
//     mobileMenu.classList.add("hidden");
//     menuShadow.classList.add("hidden");
//   }, 150);
// };

// closeMenuBtn.addEventListener("click", closeMenu);

// menuShadow.addEventListener("click", closeMenu);

// const themeToggle = document.getElementById("theme-toggle");
// const htmlElement = document.documentElement;

// themeToggle.addEventListener("click", () => {
//   if (htmlElement.classList.contains("dark")) {
//     htmlElement.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   } else {
//     htmlElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   }
// });

// if (localStorage.getItem("theme") === "dark") {
//   htmlElement.classList.add("dark");
// }
