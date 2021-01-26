import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LOCALES } from "./constants";
import languageResources from "./messages";
const defaultLang = languageResources;
const defaultLocales = LOCALES;
const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: (cb: any) => cb(LOCALES.ENGLISH),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector as any)
  .use(initReactI18next)
  .init({
    lng: defaultLocales.ENGLISH,
    fallbackLng: defaultLocales.ENGLISH,
    resources: { ...defaultLang },
    debug: false,
  });

export const translate = (_key: string, _values: any = {}) => {
  return i18n.t(_key, _values);
};

export const changeLanguage = (lang: string) => {
  i18n.changeLanguage(lang);
};

export default i18n;
