/*eslint quotes: ["error", "single", { "avoidEscape": true }]*/

import { SiTwitter, SiLinkedin, SiGithub } from 'react-icons/si';
import {
  SiTypescript,
  SiRedux,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiSequelize,
  SiExpress,
  SiJest,
  SiHtml5,
  SiCss3,
  SiHeroku,
  SiReact,
} from 'react-icons/si';

export const navSections = [
  'home',
  'projects',
  'education',
  'about me',
  'contact',
];

export const projectData = [
  {
    id: 0,
    name: 'E-Knows E-commerce',
    coverURL: 'https://imgur.com/wPqz7kM.png',
    description:
      'E-Knows is an E-Commerce website for books. Users can create their profile, save their favorite items and leave a review. Administrators have a dashboard with userful information and items management.',
    githubURLs: [
      'https://github.com/eknows-ecommerce/pf-front',
      'https://github.com/eknows-ecommerce/pf-back',
    ],
    previewURL: 'https://e-knows.herokuapp.com/',
    tools: [
      'React',
      'Redux',
      'Tailwind CSS',
      'Auth0',
      'Stripe',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Sequelize',
      'Heroku',
    ],
  },
  {
    id: 1,
    name: 'Pokemon Gallery',
    coverURL: 'https://imgur.com/wPqz7kM.png',
    description:
      'Pokemon Gallery is a website where you can explore all the pokemon, see their stats, types and evolutions! It also has the possibility of creating your own pokemon.',
    githubURLs: ['https://github.com/nicolasg0010/pokemon-PI'],
    previewURL: 'https://e-knows.herokuapp.com/',
    tools: [
      'JavaScript',
      'React',
      'CSS Modules',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Sequelize',
      'Heroku',
    ],
  },
];

export const socialMedia = [
  {
    title: 'Twitter',
    Icon: SiTwitter,
    url: 'https://twitter.com/intent/follow?screen_name=nicolasg0010',
  },
  {
    title: 'LinkedIn',
    Icon: SiLinkedin,
    url: 'https://www.linkedin.com/in/fngarcia/',
  },
  {
    title: 'Github',
    Icon: SiGithub,
    url: 'https://github.com/nicolasg0010',
  },
];

export const skills = [
  {
    title: 'React',
    Icon: SiReact,
  },
  {
    title: 'Redux',
    Icon: SiRedux,
  },
  {
    title: 'TypeScript',
    Icon: SiTypescript,
  },
  {
    title: 'JavaScript',
    Icon: SiJavascript,
  },
  {
    title: 'Node.js',
    Icon: SiNodedotjs,
  },
  {
    title: 'Express',
    Icon: SiExpress,
  },
  {
    title: 'PostgreSQL',
    Icon: SiPostgresql,
  },
  {
    title: 'Sequelize',
    Icon: SiSequelize,
  },
  {
    title: 'JEST',
    Icon: SiJest,
  },
  {
    title: 'Heroku',
    Icon: SiHeroku,
  },
  {
    title: 'CSS3',
    Icon: SiCss3,
  },
  {
    title: 'HTML',
    Icon: SiHtml5,
  },
];
