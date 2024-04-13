import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true, // disable in production
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
    backend: {
      // translations are stored in a JSON file
      loadPath: "/locales/{{ns}}/{{lng}}.json",
    },
    // can have multiple name spaces, in case to divide a huge
    // translation into smaller pieces load on demand
    ns: ["common", "about", "teams", "login"],
  });

export default i18n;
