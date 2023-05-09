import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import { DateTime } from "luxon";
i18next.use(initReactI18next).use(I18nextBrowserLanguageDetector).use(HttpApi).init({
   fallbackLng:'en',
   interpolation:{
   escapeValue:false
   },
})
i18next.services.formatter.add('DATE_LONG',(value,lng,_options) => {
   return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
})

export default i18next;