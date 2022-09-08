import translationDE from './locales/de/translation.json';
import translationFR from './locales/fr/translation.json';
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationTZ from './locales/tz/translation.json';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

const resources = {
    de: {
        translation: translationDE
    },
    fr: {
        translation: translationFR
    },
    en: {
        translation: translationEN
    },
    es: {
        translation: translationES
    },
    tz: {
        translation: translationTZ
    }
};

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es',
        fallbackLng: 'es',
        keySeparator: false, 
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
