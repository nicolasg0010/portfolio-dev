/* eslint-disable quotes */
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

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
            subtitle: 'Full Stack Developer 💻',
            intro:
              "Hey, welcome to my portfolio! I'm a developer from Argentina, I have a lot of fun building cool stuff, learning new techs and meeting new people. Enjoy your stay 😎",
            download_btn: 'Resume',
          },
          skills: {
            title: 'Skills ⚒️',
            description:
              "Programming languages, frameworks and tools I've worked with ~",
          },
          projects: {
            title: 'Projects 🚀',
            description:
              'I had a lot of fun and headaches building these 😅, but I definitely learned a lot in the process.',
            optional: 'I have others small projects in ',
            link: 'my GitHub repository',
          },
          about: {
            title: 'About me 🧑‍💻',
            body: "I got into programming last year when I got asked to build a website for a business. At the time I didn't know how to code, but soon after I realized how cool it is to solve problems and create projects for people to use. I graduated from Henry, a fullstack developer bootcamp, in november.",
            tech: 'I like to call myself a fullstack developer since I equally like to do frontend and backend, altough I have more experience with the first. My favorite tools are React and TypeScript. I will definively learn Python since it looks like a very powerful language as well!',
            hobbies:
              "My hobbies are reading books, running, playing video games and learn tech stuff (I'm currently very hooked into Linux 🤓).",
          },
          contact: {
            title: 'Get in touch 🤝',
            description:
              "Do you have something you want to talk about? Don't hesitate to get in touch, whether it's for work or anything else 🙌",
            subtitle: 'Leave a message 📬',
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
            subtitle: 'Desarrollador Full Stack 💻',
            intro:
              'Hola, bienvenido/a a mi portafolio! Soy un desarrollador de Argentina, me encanta crear proyectos interesantes, aprender cosas nuevas y conocer gente de la industria. Disfruta de tu estadia 😎',
            download_btn: 'Curriculum',
          },
          skills: {
            title: 'Habilidades ⚒️',
            description:
              'Lenguajes de programacion, frameworks y herramientas con los que he trabajado ~',
          },
          projects: {
            title: 'Proyectos 🚀',
            description:
              'Me diverti mucho y sufri dolores de cabeza haciendolos 😅, pero definitivamente aprendi mucho en el proceso.',
            optional: 'Tengo otros pequeños proyectos en ',
            link: 'mi repositorio de GitHub',
          },
          about: {
            title: 'Sobre mi 🧑‍💻',
            body: 'Empecé a programar el año pasado cuando me pidieron que creara un sitio web para una empresa. En ese momento no sabía programar, pero poco después me di cuenta de lo genial que es resolver problemas y crear proyectos para que la gente los utilice. Me gradué de Henry, un bootcamp para desarrolladores fullstack, en noviembre.',
            tech: 'Me gusta llamarme desarrollador fullstack ya que me gusta trabajar tanto en frontend como backend, aunque tengo más experiencia en el primero. Mis herramientas favoritas son React y TypeScript. Tengo muchas ganas de aprender Python ya que también parece un lenguaje muy poderoso y versatil!',
            hobbies:
              'Mis pasatiempos son leer libros, correr, jugar videojuegos y aprender tecnologias nuevas (actualmente estoy muy interesado en Linux 🤓).',
          },
          contact: {
            title: 'Conozcamonos 🤝',
            description:
              'Tenés algo de lo que quieras hablar? No dudes en ponerte en contacto, ya sea por trabajo o cualquier otra cosa 🙌',
            subtitle: 'Deja un mensaje 📬',
            form: {
              user_name: 'Nombre',
              email: 'Correo',
              subject: 'Titulo',
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
