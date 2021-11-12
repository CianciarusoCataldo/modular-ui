import i18n from "i18next";

export const setI18nLanguage = (language: SupportedLanguage) =>
  i18n.changeLanguage(language);

export default i18n;
