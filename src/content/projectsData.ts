import eknows_img from '../assets/projects/eknows/landing.png';
import pokemon_img from '../assets/projects/pokemon/home.jpg';

export const projectsData = [
  {
    id: 0,
    name: 'E-Knows',
    coverURL: eknows_img,
    description: {
      en: 'E-Knows is an E-Commerce website for books. Users can create their profile, save their favorite items and leave a review. Administrators have a dashboard with userful information and items management.',
      es: 'E-Knows es un sitio web de comercio electrónico para libros. Los usuarios pueden crear su perfil, guardar sus artículos favoritos y dejar una reseña. Los administradores tienen un tablero con información útil y gestión de productos.',
    },
    githubURLs: [
      'https://github.com/eknows-ecommerce/pf-front',
      'https://github.com/eknows-ecommerce/pf-back',
    ],
    previewURL: 'https://eknows-ecomm.vercel.app',
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
    coverURL: pokemon_img,
    description: {
      en: 'Pokemon Gallery is a website where you can explore all the pokemon, see their stats, types and evolutions! It also has the possibility of creating your own pokemon.',
      es: 'Pokemon Gallery es un sitio web donde puedes explorar todos los pokemon, ver sus estadísticas, tipos y evoluciones. También tiene la posibilidad de crear tu propio pokemon.',
    },
    githubURLs: ['https://github.com/nicolasg0010/pokemon-PI'],
    previewURL: 'https://pokemon-pi-puce.vercel.app/',
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
