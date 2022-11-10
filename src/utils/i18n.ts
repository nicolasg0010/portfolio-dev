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
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          navigation: {
            home: 'Home',
            skills: 'Skills',
            projects: 'Projects',
            about: 'About me',
            contact: 'Contact',
          },
          header: {
            subtitle: 'Full Stack Developer',
            intro:
              'I just graduated from Henry bootcamp as a Full-stack developer. My favorite tools are React and TypeScript.',
            download_btn: 'Resume',
          },
          skills: {
            title: 'Skills',
          },
          projects: {
            title: 'Projects',
          },
          about: {
            title: 'About me',
          },
          contact: {
            title: 'Get in touch',
            description:
              'Have a little something, something you wanna talk about? Please feel free to get in touch anytime, whether for work or to just Hi 🙋‍♂️.',
            subtitle: 'Leave a message',
            form: {
              user_name: 'Name',
              email: 'Email address',
              subject: 'Subject',
              message: 'Message',
              send_button: 'Send',
              loading_button: 'Sending...',
            },
          },
        },
      },
      es: {
        translation: {
          navigation: {
            home: 'Inicio',
            skills: 'Habilidades',
            projects: 'Proyectos',
            about: 'Sobre mi',
            contact: 'Contacto',
          },
          header: {
            subtitle: 'Desarrollador Full Stack',
            intro:
              'Acabo de graduarme de Henry bootcamp como desarrollador de pila completa. Mis herramientas favoritas son React y TypeScript.',
            download_btn: 'Curriculum',
          },
          skills: {
            title: 'Habilidades',
          },
          projects: {
            title: 'Proyectos',
          },
          about: {
            title: 'Sobre mi',
          },
          contact: {
            title: 'Conozcamonos',
            description:
              '¿Tienes algo, algo de lo que quieras hablar? No dude en ponerse en contacto en cualquier momento, ya sea por trabajo o simplemente para saludar 🙋‍♂️.',
            subtitle: 'Deja un mensaje',
            form: {
              user_name: 'Nombre',
              email: 'Correo',
              subject: 'Titulo (subject)',
              message: 'Mensaje',
              send_button: 'Enviar',
              loading_button: 'Enviando...',
            },
          },
        },
      },
    },
  });

export default i18n;
