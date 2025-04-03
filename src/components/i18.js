i18next
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    resources: {
      en: { translation: {} },
      az: { translation: {} },
      ru: { translation: {} },
    },
  })
  .then(() => {
    loadTranslations();
  });

export function loadTranslations() {
  const lang = i18next.language || "en";

  fetch(`/assets/resources/${lang}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Language not found: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      i18next.addResourceBundle(lang, "translation", data, true, true);
      updateText();
    })
    .catch((error) => console.error("Something went wrong:", error));
}

function updateText() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = i18next.t(key);
  });
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", function () {
    const selectedLang = this.getAttribute("data-lang");

    i18next.changeLanguage(selectedLang, () => {
      localStorage.setItem("language", selectedLang);
      loadTranslations();
    });
  });
});
