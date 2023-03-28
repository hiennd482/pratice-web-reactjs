import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HOME_VN from "../locales/vn/home.json";
import HOME_EN from "../locales/en/home.json";
import POSTS_EN from "../locales/en/posts.json";
import POSTS_VN from "../locales/vn/posts.json";

const resources = {
  en: {
    home: HOME_EN,
    posts: POSTS_EN,
  },
  vn: {
    home: HOME_VN,
    posts: POSTS_VN,
  },
};
const defualtNS = "home";
export const locales = {
  en: "English",
  vn: "Tiếng Việt",
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  ns: ["home", "posts"],
  defualtNS,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
