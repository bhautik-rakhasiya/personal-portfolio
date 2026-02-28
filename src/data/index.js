import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaAws,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiRedux,
  SiFirebase,
  SiExpress,
} from 'react-icons/si';

export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

export const heroData = {
  greeting: "Hi, I'm",
  name: 'John Doe',
  titles: [
    'Full Stack Developer',
    'UI/UX Designer',
    'Open Source Contributor',
    'Tech Enthusiast',
  ],
  description:
    'I craft beautiful, performant, and accessible web experiences. Passionate about building products that make a difference.',
  resumeLink: '#',
};

export const aboutData = {
  description: [
    "I'm a passionate full-stack developer with 5+ years of experience building web applications that users love. I specialize in React, Node.js, and modern JavaScript ecosystems.",
    "When I'm not coding, you'll find me contributing to open source projects, writing technical blog posts, or exploring the latest in AI and machine learning.",
    "I believe in writing clean, maintainable code and creating interfaces that are both beautiful and functional. Every project is an opportunity to learn something new.",
  ],
  stats: [
    { number: 50, suffix: '+', label: 'Projects Completed' },
    { number: 5, suffix: '+', label: 'Years of Experience' },
    { number: 30, suffix: '+', label: 'Happy Clients' },
    { number: 15, suffix: 'K+', label: 'Lines of Code' },
  ],
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face',
};

export const skillsData = [
  { name: 'JavaScript', level: 95, icon: SiJavascript, color: '#f7df1e', category: 'Frontend' },
  { name: 'TypeScript', level: 88, icon: SiTypescript, color: '#3178c6', category: 'Frontend' },
  { name: 'React', level: 93, icon: FaReact, color: '#61dafb', category: 'Frontend' },
  { name: 'Next.js', level: 85, icon: SiNextdotjs, color: '#ffffff', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss, color: '#06b6d4', category: 'Frontend' },
  { name: 'Redux', level: 82, icon: SiRedux, color: '#764abc', category: 'Frontend' },
  { name: 'Node.js', level: 90, icon: FaNodeJs, color: '#339933', category: 'Backend' },
  { name: 'Express.js', level: 87, icon: SiExpress, color: '#ffffff', category: 'Backend' },
  { name: 'Python', level: 78, icon: FaPython, color: '#3776ab', category: 'Backend' },
  { name: 'MongoDB', level: 85, icon: SiMongodb, color: '#47a248', category: 'Backend' },
  { name: 'PostgreSQL', level: 80, icon: SiPostgresql, color: '#4169e1', category: 'Backend' },
  { name: 'GraphQL', level: 75, icon: SiGraphql, color: '#e10098', category: 'Backend' },
  { name: 'Docker', level: 72, icon: FaDocker, color: '#2496ed', category: 'Tools' },
  { name: 'Git', level: 90, icon: FaGitAlt, color: '#f05032', category: 'Tools' },
  { name: 'AWS', level: 70, icon: FaAws, color: '#ff9900', category: 'Tools' },
  { name: 'Firebase', level: 82, icon: SiFirebase, color: '#ffca28', category: 'Tools' },
  { name: 'Figma', level: 78, icon: FaFigma, color: '#f24e1e', category: 'Tools' },
];

export const experienceData = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    date: 'Jan 2023 - Present',
    description: [
      'Led the development of a microservices-based SaaS platform serving 100K+ users',
      'Architected and implemented a real-time collaboration feature using WebSockets',
      'Mentored a team of 5 junior developers and conducted code reviews',
      'Reduced page load time by 40% through performance optimization',
    ],
    icon: '💼',
    color: '#6c63ff',
  },
  {
    title: 'Full Stack Developer',
    company: 'InnovateLab',
    location: 'New York, NY',
    date: 'Jun 2021 - Dec 2022',
    description: [
      'Built and maintained a React-based dashboard for data analytics',
      'Developed RESTful APIs using Node.js and Express with PostgreSQL',
      'Implemented CI/CD pipelines using GitHub Actions and Docker',
      'Collaborated with UX designers to improve user engagement by 35%',
    ],
    icon: '🚀',
    color: '#00d4ff',
  },
  {
    title: 'Frontend Developer',
    company: 'WebStudio',
    location: 'Austin, TX',
    date: 'Mar 2020 - May 2021',
    description: [
      'Developed responsive web applications using React and Redux',
      'Created reusable component libraries used across 10+ projects',
      'Integrated third-party APIs and payment gateways',
      'Wrote unit and integration tests achieving 85% code coverage',
    ],
    icon: '💻',
    color: '#00ff88',
  },
  {
    title: 'Junior Developer',
    company: 'StartupHub',
    location: 'Remote',
    date: 'Jan 2019 - Feb 2020',
    description: [
      'Built landing pages and marketing websites using HTML, CSS, and JavaScript',
      'Assisted in migrating legacy jQuery codebase to React',
      'Participated in agile ceremonies and sprint planning',
      'Learned modern development practices and tools',
    ],
    icon: '🌱',
    color: '#ff6b6b',
  },
];

export const projectsData = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory management, AI-powered recommendations, and seamless payment processing.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'AI Chat Application',
    description:
      'Real-time chat application with AI-powered responses, sentiment analysis, and multi-language translation support.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['Next.js', 'OpenAI', 'Socket.io', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Project Management Tool',
    description:
      'Collaborative project management tool with Kanban boards, Gantt charts, and real-time team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tags: ['React', 'GraphQL', 'TypeScript', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Fitness Tracker App',
    description:
      'Cross-platform fitness tracking application with workout plans, progress analytics, and social features.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop',
    tags: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description:
      'Beautiful weather dashboard with interactive maps, 7-day forecasts, and location-based alerts.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'OpenWeather API', 'Mapbox', 'D3.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Blog Platform',
    description:
      'Full-stack blog platform with markdown editor, SEO optimization, and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    tags: ['Next.js', 'MDX', 'Prisma', 'Vercel'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

export const contactData = {
  email: 'hello@johndoe.dev',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    dribbble: 'https://dribbble.com',
  },
};
