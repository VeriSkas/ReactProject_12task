import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from '../../../../public/locales/ru/translation.json';
import en from '../../../../public/locales/en/translation.json';

export const SupportedLanguages = {
  en: 'en',
  ru: 'ru',
};

void i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  },
  supportedLngs: [SupportedLanguages.en, SupportedLanguages.ru],
  fallbackLng: SupportedLanguages.en,
  interpolation: {
    escapeValue: false,
  },
});
