import { loadTranslations } from "./i18.js";

export function navbarFunctionality() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-navbar");
  const languageBtn = document.getElementById("language-dropdown-btn");
  const languageMenu = document.getElementById("language-dropdown-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      languageMenu.classList.add("hidden");
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      mobileMenu?.classList.add("hidden");
    }
  });

  if (languageBtn && languageMenu) {
    languageBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      languageMenu.classList.toggle("hidden");
    });
  }

  document.addEventListener("click", () => {
    languageMenu?.classList.add("hidden");
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const selectedLang = this.getAttribute("data-lang");

      i18next.changeLanguage(selectedLang, () => {
        localStorage.setItem("language", selectedLang);
        loadTranslations();
        updateUI(selectedLang);
        highlightActivePage();
      });
    });
  });

  function updateUI(lang) {
    const langMap = {
      en: { flag: "/assets/images/en-flag.png", name: "English" },
      az: { flag: "/assets/images/az-flag.png", name: "Azerbaijani" },
      ru: { flag: "/assets/images/ru-flag.png", name: "Russian" },
    };

    if (langMap[lang]) {
      const flagImg = languageBtn?.querySelector("img");
      const langText = languageBtn?.querySelector("span");

      if (flagImg) flagImg.src = langMap[lang].flag;
      if (langText) langText.textContent = langMap[lang].name;
    }
  }

  function highlightActivePage() {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(
      "#mobile-navbar a, #desktop-navbar a"
    );

    navLinks.forEach((link) => {
      const linkHref = link.getAttribute("href").split("/").pop();
      link.classList.remove("text-[#3bbeef]", "font-bold");
      if (linkHref === currentPage) {
        link.classList.add("text-[#3bbeef]", "font-bold");
      }
    });
  }

  const savedLang = localStorage.getItem("language") || "en";
  updateUI(savedLang);
  highlightActivePage();
}
