import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Spanish' },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: {
            subtitle: 'Full Stack Developer',
          },
        },
      },
      es: {
        translation: {
          header: {
            subtitle: 'Desarrollador Full Stack',
          },
        },
      },
    },
  });

export default i18n;
