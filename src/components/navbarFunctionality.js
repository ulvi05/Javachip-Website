import { loadTranslations } from "./i18.js";

export function navbarFunctionality() {
  const menuBtn = document.getElementById("menu-btn");
  const languageBtn = document.getElementById("language-dropdown-btn");
  const languageMenu = document.getElementById("language-dropdown-menu");
  const mobileMenu = document.getElementById("navbar-language");

  menuBtn?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      mobileMenu?.classList.add("hidden");
    }
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

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", function () {
      const selectedLang = this.getAttribute("data-lang");

      i18next.changeLanguage(selectedLang, () => {
        localStorage.setItem("language", selectedLang);
        loadTranslations();
        updateUI(selectedLang);
      });
    });
  });

  function updateUI(lang) {
    const langMap = {
      en: { flag: "/assets/images/en-flag.png" },
      az: { flag: "/assets/images/az-flag.png" },
      ru: { flag: "/assets/images/ru-flag.png" },
    };

    if (langMap[lang]) {
      const flagImg = languageBtn.querySelector("img");
      const langText = languageBtn.querySelector("span");

      if (flagImg) flagImg.src = langMap[lang].flag;
      if (langText) langText.textContent = langMap[lang].name;
    }
  }

  const savedLang = localStorage.getItem("language") || "en";
  updateUI(savedLang);
}
