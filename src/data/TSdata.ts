export const skillData = {
  language: [
    { title: "JavaScript", level: "Advanced" },
    { title: "TypeScript", level: "Intermediate" },
    { title: "Python", level: "Intermediate" },
  ],
  framework: [
    { title: "React", level: "Advanced" },
    { title: "Vue.js", level: "Intermediate" },
    { title: "Express.js", level: "Advanced" },
  ],
  tool: [
    { title: "Git", level: "Advanced" },
    { title: "Docker", level: "Intermediate" },
    { title: "VS Code", level: "Advanced" },
  ],
};

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tool: PortfolioTool[];
  link: string;
}

export interface PortfolioTool {
  title: string;
  logo: string;
}

export const portfolioItems:PortfolioItem[] = [
    {
      id: 1,
      title: 'Portfolio Website Workshop',
      category: 'LandingPage',
      image:
        '/port/workshop.png',
      description: 'This is my first portfolio web app, built with React JS. It grabs attention with cool Tilt effects on images and awesome Type-Animation for text.',
      tool: [
        {title:'React', logo: '/skills/react.png'},
        {title:'JavaScript', logo: '/skills/js.png'},
      ],
      link: 'https://github.com/thanat-palm/Portfolio-workshop.git',
    },
    {
      id: 2,
      title: 'Shopping Website',
      category: 'LandingPage',
      image:
        '/port/shopping-web.png',
      description: 'This is a web application designed to mimic an e-commerce platform. It features the ability to display product listings by fetching data via API integration, alongside comprehensive search capabilities for easy product discovery.',
      tool: [
        {title:'Nextjs', logo: '/skills/nextjs.png'},
        {title:'TypeScript', logo: '/skills/typescript.png'},
        {title:'TailwindCSS', logo: '/skills/tailwindcss.png'},
      ],
      link: 'https://github.com/thanat-palm/shopping-website.git',
    },
    {
      id: 3,
      title: 'Login App',
      category: 'Web',
      image:
        '/port/login-app.png',
      description: 'This web application is designed with a comprehensive user management system, including registration and login functionalities. It utilizes Next.js as the core framework, integrating Next-Auth for authentication, bcryptjs for secure password hashing, and Mongoose for database connectivity.',
      tool: [
        {title:'Nextjs', logo: '/skills/nextjs.png'},
        {title:'TypeScript', logo: '/skills/typescript.png'},
        {title:'TailwindCSS', logo: '/skills/tailwindcss.png'},
        {title:'MongoDB', logo: '/skills/mongdb.png'},
      ],
      link: 'https://github.com/thanat-palm/login_app.git',
    },
    {
      id: 4,
      title: 'New Portfolio Website',
      category: 'Web',
      image:
        '/port/portfolio.png',
      description: 'This is my current portfolio web app, showcasing my work experience with a rich set of features: multi-language support (i18n), state management with Zustand, beautiful UI design using DaisyUI, engaging animations from Framer Motion, and a contact form system integrated via Formspree.',
      tool: [
        {title:'React', logo: '/skills/react.png'},
        {title:'TypeScript', logo: '/skills/typescript.png'},
        {title:'TailwindCSS', logo: '/skills/tailwindcss.png'},
      ],
      link: 'https://github.com/thanat-palm/my-portfolio.git',
    },
    {
      id: 5,
      title: 'Get With easyOCR',
      category: 'Web',
      image:
        '/port/easyOCR.png',
      description: 'This web application is developed to extract text from images, utilizing the EasyOCR library and Python for backend processing, and displaying the results on the website via API integration.',
      tool: [
        {title:'React', logo: '/skills/react.png'},
        {title:'TypeScript', logo: '/skills/typescript.png'},
        {title:'TailwindCSS', logo: '/skills/tailwindcss.png'},
        {title:'Python', logo: '/skills/python.png'}
      ],
      link: 'https://github.com/thanat-palm/webApp_with_easyORC.git',
    },
]
