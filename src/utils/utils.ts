/*eslint quotes: ["error", "single", { "avoidEscape": true }]*/

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
  'skills',
  'projects',
  'about me',
  'contact',
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
