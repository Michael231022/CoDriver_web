import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import header_footer_en from "./locales/en/Header_Footer.json";
import header_footer_ch from "./locales/ch/Header_Footer.json";

i18n

    .use(initReactI18next)
    .init({
        resources: {
            en: {
                header_footer: header_footer_en,
            },
            ch: {
                header_footer: header_footer_ch,
            },
        },
        lng: localStorage.getItem("lang") || "en",
        fallbackLng: "en",
        ns: ["header_footer"],
        defaultNS: "header_footer",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
