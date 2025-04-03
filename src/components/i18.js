document.addEventListener("DOMContentLoaded", function () {
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

  function loadTranslations() {
    const lang = i18next.language;
    console.log("Şu anki dil:", lang);

    fetch(`/assets/resources/${lang}.json`)
      .then((response) => {
        console.log("Dil dosyası isteği yapıldı:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Dil dosyası yüklendi:", data);
        i18next.addResourceBundle(lang, "translation", data, true, true);
        updateText();
      })
      .catch((error) =>
        console.error("Dil dosyası yüklenirken hata oluştu:", error)
      );
  }

  function updateText() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.innerHTML = i18next.t(el.getAttribute("data-i18n"));
    });
  }

  document.querySelectorAll(".language-option").forEach((button) => {
    button.addEventListener("click", function () {
      const selectedLang = this.getAttribute("data-lang");
      console.log("Seçilen dil:", selectedLang); // Test
      i18next.changeLanguage(selectedLang, () => {
        localStorage.setItem("language", selectedLang);
        console.log("Dil değişti, localStorage'a kaydedildi."); // Test
        updateContent();
      });
    });
  });
});

console.log("i18next var mı?", window.i18next);
