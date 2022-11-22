// Skills Data
export const skillsData = [
  {
    id: 1,
    name: 'Good Knowledge with:',
    skills: [
      'HTML5',
      'Semantic HTML',
      'CSS3',
      'JavaScript',
      'ReactJS',
      'BootStrap',
      'EJS',
      'React BootStrap',
      'DOM',
      'Tailwind CSS',
    ],
    icon: '/assets/skills/good-knowledge.png',
  },
  {
    id: 2,
    name: 'Familiar with:',
    skills: [
      'NodeJS',
      'Express JS',
      'ReduxJS (Basic)',
      'REST API',
      'Mongoose',
      'SASS (Basic)',
      'Material ui (Basic)',
      'TypeScript (Basic)',
    ],
    icon: '/assets/skills/familiar.png',
  },
  {
    id: 3,
    name: 'Others (Tools):',
    skills: [
      'VS Code',
      'Git',
      'GitHub',
      'NPM',
      'Yarn',
      'Netlify',
      'Heroku',
      'Render',
      'Firebase',
      'Postman',
    ],
    icon: '/assets/skills/others.png',
  },
];

// Projects Data
export const projectsData = [
  {
    id: 1,
    name: 'Smart Shopping - (E-commerce Project)',
    image: '/assets/projects/smart_shopping.png',
    technologies: [
      'ReactJS',
      'React-Bootstrap',
      'SCSS',
      'Redux-Toolkit',
      'Redux-Persist',
      'SwiperJS',
      'Cloudinary',
      'Mongoose',
      'ExpressJS',
    ],
    description:
      'This is a MERN Stack E-commerce Web Application. There are 2 roles: admin & user. If you are an admin? You can create, update and delete Products. You can see all users and you can make any user an admin and remove them from the admin and delete any user. If you are user? You can see products, and product details, filter, sort, search for products, and order products. and much more. This project is not finished yet, still under development. (adminEmail: admin@admin.com & password: admin@123)',
    liveLink: 'https://smart-shopping-ecommerce.netlify.app',
    gitHubLink: 'https://github.com/hossainrabbi/smart-shopping',
  },
  {
    id: 2,
    name: 'MyTube - (Youtube API Project)',
    image: '/assets/projects/MyTube.png',
    technologies: [
      'ReactJS',
      'TailwindCSS',
      'MomentJS',
      'Interweave',
      'React-Player',
      'React-Icons',
      'Youtube-api-v3',
    ],
    description:
      'It looks like a YouTube clone project using Youtube v3 API from RapidAPI. On the home page, the user can see the video card. Click a video card to watch a video. When the user opens a video, the user will be shown the corresponding video. And users can view video descriptions and comments. User can adjust dark and light mood and search any video, playlist, channel and see channel details.',
    liveLink: 'https://my-tube-react.netlify.app',
    gitHubLink: 'https://github.com/hossainrabbi/my-tube',
  },
  {
    id: 3,
    name: 'FixTech - (Services Web Project)',
    image: '/assets/projects/FixTech.png',
    technologies: [
      'ReactJS',
      'React-Bootstrap',
      'Axios',
      'Firebase',
      'React-Hook-Form',
      'FortAwesome',
      'Stripe',
    ],
    description:
      'This is a simple Computer services application. There are 2 roles: admin and user(customer). If you are a Admin? You can add services and delete services. You can see and change the booking status. You can make a admin using by email. If you are a User? you can book a service, see booking list and review this website. Here the login system is implemented using Firebase and payment system implemented using stripe.',
    liveLink: 'https://fixtech-hr.web.app',
    gitHubLink: 'https://github.com/hossainrabbi/fixtech-client',
  },
];
