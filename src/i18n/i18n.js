import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import englishTranslations from "./en.json";
import arabicTranslations from "./ar.json";

var savedLanguage = "en";

if (typeof window !== "undefined") {
  var storedLanguage = window.localStorage.getItem("rover-language");

  if (storedLanguage === "ar" || storedLanguage === "en") {
    savedLanguage = storedLanguage;
  }
}

function applyDocumentLanguage(language) {
  if (typeof document === "undefined") {
    return;
  }

  var normalizedLanguage = String(language || "en").split("-")[0];

  if (normalizedLanguage !== "ar") {
    normalizedLanguage = "en";
  }

  document.documentElement.lang = normalizedLanguage;
  document.documentElement.dir = i18n.dir(normalizedLanguage);

  if (typeof window !== "undefined") {
    window.localStorage.setItem(
      "rover-language",
      normalizedLanguage,
    );
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: englishTranslations,
      },
      ar: {
        translation: arabicTranslations,
      },
    },

    lng: savedLanguage,
    fallbackLng: "en",
    supportedLngs: ["en", "ar"],

    interpolation: {
      escapeValue: false,
    },
  })
  .then(function () {
    applyDocumentLanguage(
      i18n.resolvedLanguage || i18n.language,
    );
  });

i18n.on("languageChanged", function (language) {
  applyDocumentLanguage(language);
});

export default i18n;