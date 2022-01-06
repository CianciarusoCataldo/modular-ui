import i18n from "i18next";

/** Change actual i18next instance language */
export const setI18nLanguage = (language: string) =>
  i18n.changeLanguage(language);

export default i18n;
