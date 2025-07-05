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
        'https://cdn.dribbble.com/userupload/18060197/file/original-7aa360ec7102e8d9cb431d35739d7e38.png?crop=0x0-2400x1800&format=webp&resize=400x300&vertical=center',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, sed.',
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
        'https://cdn.dribbble.com/userupload/42451716/file/original-5c0a330e52ea14c68abe2475338c617f.png?format=webp&resize=400x300&vertical=center',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi accusamus perspiciatis.',
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
        'https://cdn.dribbble.com/userupload/20811320/file/original-28f79681a1d95e55b9827a1a907a8062.png?crop=0x0-1600x1200&format=webp&resize=400x300&vertical=center',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur alias quia ipsam suscipit at vitae.',
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
        'https://cdn.dribbble.com/userupload/17505394/file/original-c7493ca8f98b6ddcfa387646b014a07d.jpg?format=webp&resize=400x300&vertical=center',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, sed.',
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
        'https://cdn.dribbble.com/userupload/17505394/file/original-c7493ca8f98b6ddcfa387646b014a07d.jpg?format=webp&resize=400x300&vertical=center',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi accusamus perspiciatis.',
      tool: [

      ],
      link: '',
    },
]
