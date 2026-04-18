import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaAws,
  FaDatabase,
  FaServer,
  FaCodeBranch,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiTailwindcss,
  SiRedux,
  SiMui,
  SiMysql,
  SiSqlite,
  SiVite,
  SiYoutube,
  SiHtml5,
  SiCss3,
  SiSwagger,
} from 'react-icons/si';

// ========================
// PERSONAL INFO
// ========================
export const personalInfo = {
  name: 'Bhautik Rakhasiya',
  firstName: 'Bhautik',
  lastName: 'Rakhasiya',
  tagline: 'Full Stack Developer',
  titles: ['Full Stack Developer', 'Backend Architect', 'React Developer', 'Node.js Developer'],
  description:
    'Full Stack Developer with 2+ years of experience building production-grade web applications using Node.js, NestJS, Express.js, React.js, and MongoDB. Passionate about clean architecture, real-time systems, and turning complex problems into elegant solutions.',
  email: 'bhautikrakhasiya108@gmail.com',
  phone: '+91 82387 40682',
  location: 'Rajkot, Gujarat, India',
  resumeLink: '/Resume_FS.pdf',
  socials: {
    github: 'https://github.com/bhautik-rakhasiya',
    linkedin: 'https://linkedin.com/in/bhautik-rakhasiya',
    email: 'mailto:bhautikrakhasiya108@gmail.com',
  },
  // Place your actual photo at public/images/profile.jpg
  profilePhoto: '/images/profile.jpg',
  photos: [
    '/images/photo-1.jpg',
    '/images/photo-2.jpg',
    '/images/photo-3.jpg',
    '/images/photo-4.jpg',
  ],
};

// ========================
// NAVIGATION
// ========================
export const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/contact', label: 'Contact' },
];

// ========================
// ABOUT
// ========================
export const aboutData = {
  paragraphs: [
    "I'm a Software Developer at Kevit.io with hands-on experience building production-grade web applications. I specialize in Node.js, NestJS, React.js, and MongoDB — crafting everything from event-driven webhook pipelines to interactive banking frontends.",
    "I thrive on solving real-world engineering challenges — whether it's architecting a system to process 1,000+ YouTube webhooks per day, synchronizing 50,000+ records reliably, or implementing secure AWS Cognito authentication flows.",
    "I graduated with a degree in Computer Engineering from V.V.P. Engineering College, Rajkot (CGPA: 8.54), and I'm always exploring new technologies to push the boundaries of what's possible on the web.",
  ],
  highlights: [
    { icon: '🎯', text: 'Problem Solver' },
    { icon: '🚀', text: 'Scalable Architecture' },
    { icon: '💻', text: 'Clean Code Advocate' },
    { icon: '🤝', text: 'Team Collaborator' },
  ],
  stats: [
    {
      number: 4,
      suffix: '+',
      label: 'Projects Delivered',
      icon: '🚀',
      desc: 'Production-grade full-stack systems',
    },
    {
      number: 2,
      suffix: '+',
      label: 'Years Experience',
      icon: '💼',
      desc: 'Building at Kevit.io, Rajkot',
    },
  ],
};

// ========================
// SKILLS
// ========================
export const skillsData = [
  // Frontend
  { name: 'JavaScript', level: 92, icon: SiJavascript, color: '#f7df1e', category: 'Frontend' },
  { name: 'TypeScript', level: 86, icon: SiTypescript, color: '#3178c6', category: 'Frontend' },
  { name: 'HTML5', level: 88, icon: SiHtml5, color: '#e34f26', category: 'Frontend' },
  { name: 'CSS3', level: 85, icon: SiCss3, color: '#1572b6', category: 'Frontend' },
  { name: 'React.js', level: 88, icon: FaReact, color: '#61dafb', category: 'Frontend' },
  { name: 'Redux', level: 78, icon: SiRedux, color: '#764abc', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 87, icon: SiTailwindcss, color: '#06b6d4', category: 'Frontend' },
  { name: 'MUI', level: 80, icon: SiMui, color: '#007fff', category: 'Frontend' },
  // Backend
  { name: 'Node.js', level: 93, icon: FaNodeJs, color: '#339933', category: 'Backend' },
  { name: 'Express.js', level: 91, icon: SiExpress, color: '#ffffff', category: 'Backend' },
  { name: 'NestJS', level: 88, icon: SiNestjs, color: '#e0234e', category: 'Backend' },
  { name: 'MongoDB', level: 87, icon: SiMongodb, color: '#47a248', category: 'Backend' },
  { name: 'MySQL', level: 74, icon: SiMysql, color: '#4479a1', category: 'Backend' },
  { name: 'SQLite', level: 68, icon: SiSqlite, color: '#003b57', category: 'Backend' },
  // Cloud & Tools
  { name: 'AWS (Cognito/S3/SES)', level: 80, icon: FaAws, color: '#ff9900', category: 'Cloud' },
  {
    name: 'YouTube API / Webhooks',
    level: 85,
    icon: SiYoutube,
    color: '#ff0000',
    category: 'Cloud',
  },
  { name: 'Git / GitHub', level: 90, icon: FaGitAlt, color: '#f05032', category: 'Tools' },
  { name: 'Postman', level: 88, icon: SiPostman, color: '#ff6c37', category: 'Tools' },
  { name: 'Vite', level: 80, icon: SiVite, color: '#646cff', category: 'Tools' },
  { name: 'Swagger', level: 82, icon: SiSwagger, color: '#85EA2D', category: 'Tools' },
  // Architecture
  {
    name: 'Monolithic Architecture',
    level: 80,
    icon: FaServer,
    color: '#6c63ff',
    category: 'Backend',
  },
  {
    name: 'Monorepo Architecture',
    level: 78,
    icon: FaCodeBranch,
    color: '#2ed573',
    category: 'Backend',
  },
];

// ========================
// EXPERIENCE
// ========================
export const experienceData = [
  {
    company: 'Kevit.io',
    role: 'Software Developer',
    location: 'Rajkot, Gujarat',
    period: 'Jun 2024 – Present',
    description:
      'Building and delivering scalable, production-grade web applications across the full stack. Working on YouTube livestreaming infrastructure, digital banking portals, and internal telemetry platforms — handling everything from backend architecture to responsive React frontends.',
    technologies: [
      'Node.js',
      'Express.js',
      'NestJS',
      'React.js',
      'MongoDB',
      'TypeScript',
      'AWS Cognito',
      'YouTube Data API',
    ],
    responsibilities: [
      'Architected a YouTube livestreaming platform from scratch, processing 1,000+ daily webhooks via PubSubHubbub and managing 50,000+ synchronized video records.',
      'Engineered a scoring-based video classification algorithm using metadata to auto-map videos — reducing manual classification to zero.',
      'Implemented idempotent webhook processing ensuring exactly-once data consistency at scale.',
      'Architected the frontend of a Digital Banking Portal from scratch using React.js, MUI, Redux, i18n, and AWS Cognito with full RBAC implementation.',
      'Built an internal Telemetry & Resource Management Platform integrating ClickUp API for automated time-tracking, project health scoring, and resource allocation insights.',
      'Developed a Society Management PWA using React.js, Tailwind CSS, Context API, and RBAC with mobile-responsive, installable UI.',
    ],
    icon: '💼',
    color: '#6c63ff',
  },
];

// ========================
// PROJECTS
// ========================
export const projectsData = [
  {
    title: 'YouTube Livestreaming & Video Sync Platform',
    subtitle: 'Real-Time Streaming Infrastructure',
    description:
      'A full-stack YouTube livestreaming and video synchronization platform built from scratch. Processes 1,000+ webhooks daily via PubSubHubbub, manages 50,000+ videos across multiple channels, and delivers personalized iframe-based streaming to individual users.',
    longDescription: [
      'Architected the complete backend from scratch: database schema, YouTube Data API v3 integration, and data access patterns for a high-reliability pipeline.',
      'Built a high-throughput event-driven ingestion system using PubSubHubbub webhooks — reliably processing 1,000+ events daily for real-time video synchronization.',
      'Implemented idempotent webhook processing to prevent duplicate ingestion, guaranteeing exactly-once consistency and eliminating race conditions.',
      'Managed and synchronized 50,000+ videos across multiple YouTube channels (pool players & pool halls) with accurate cross-channel data mapping.',
      'Engineered a scoring-based video classification algorithm using titles, descriptions, and channel metadata — reducing manual classification to zero.',
      'Built a custom iframe-based streaming UI with rich search, sort, filtering, and a user profile panel for personalizing embed colors and streaming views.',
      'Integrated AWS Cognito passwordless authentication (email + OTP) on both frontend and backend with full token verification and session management.',
    ],
    image: '/images/livestreaming.png',
    tags: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'React.js',
      'YouTube Data API v3',
      'PubSubHubbub',
      'AWS Cognito',
      'WebSocket',
    ],
    liveUrl: 'https://wolfpackservices.ca/pages/livestream',
    githubUrl: '#',
    featured: true,
    color: '#ffa500',
    icon: '🎬',
  },
  {
    title: 'Digital Banking Portal',
    subtitle: 'Production-Grade Banking Web Application',
    description:
      'A scalable, production-grade Digital Banking Portal — architected from scratch on the frontend with React.js. Features a comprehensive reusable component library, Redux state management, multi-language i18n support, AWS Cognito authentication, and full Role-Based Access Control.',
    longDescription: [
      'Architected the full frontend from scratch: component structure, folder architecture, and UI design system for a scalable, maintainable banking application.',
      'Built a comprehensive reusable component library using React.js and MUI with consistent UI behaviour across all screens.',
      'Implemented Redux for global state management ensuring predictable data flow throughout the application.',
      'Integrated multi-language support via i18n — enabling seamless locale switching without page reload.',
      'Implemented Role-Based Access Control (RBAC) at the component level for secure, context-aware UI rendering based on user roles.',
      'Integrated AWS Cognito on the frontend for secure user authentication, session management, and protected routing.',
      'Focused on responsive design, accessibility, and pixel-perfect implementation of complex banking workflows.',
    ],
    image: '/images/banking-portal.png',
    tags: ['React.js', 'TypeScript', 'MUI', 'Redux', 'AWS Cognito', 'i18n', 'Tailwind CSS', 'RBAC'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    color: '#F24E1E',
    icon: '🏦',
  },
  {
    title: 'Telemetry & Resource Management Platform',
    subtitle: 'Internal Engineering Intelligence Tool',
    description:
      'An internal platform that automates time-tracking ingestion via ClickUp API, scores project health across key parameters, tracks resource utilization, and provides the Head of Engineering with real-time data-driven insights for optimal team allocation.',
    longDescription: [
      'Architected and built the full backend system independently — from API integration through business logic to scheduled automation.',
      'Integrated ClickUp API to automate time-tracking data ingestion, eliminating manual reporting across all company projects and team members.',
      'Built a project health scoring engine evaluating bug ratio, task estimation accuracy, and on-time delivery rate — giving leads a real-time performance view.',
      'Developed a user availability and resource allocation module tracking engineer assignments, bandwidth utilization, and providing actionable distribution insights.',
      'Built scheduled data-sync jobs to pull updated time-tracking and task data from ClickUp at regular intervals, ensuring always-fresh platform data.',
      'Delivered the complete backend independently: Node.js, ClickUp API integration, database schema, business logic, and scheduled automation.',
    ],
    image:
      'https://www.slideteam.net/media/catalog/product/cache/1280x720/r/e/resource_demand_and_capacity_planning_dashboard_slide01.jpg',
    tags: ['Node.js', 'ClickUp API', 'MongoDB', 'TypeScript', 'Scheduled Jobs', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    color: '#FF10ff',
    icon: '📊',
  },
  {
    title: 'Society Management Web App',
    subtitle: 'PWA with RBAC & Mobile-Responsive UI',
    description:
      'An internal society management application built with React.js and Tailwind CSS. Features mobile number + password authentication via React Context API, comprehensive RBAC with route-level protection, and Progressive Web App support for native-like device installation.',
    longDescription: [
      'Built authentication state management globally via React Context API — ensuring secure, consistent session handling across all protected routes.',
      'Designed and enforced a Role-Based Access Control (RBAC) system with route-level protection — each user role accessing only their permitted screens.',
      'Developed a fully mobile-responsive, modular component library using Tailwind CSS for consistent UI across all device sizes.',
      'Implemented Progressive Web App (PWA) support enabling society members to install and use the app natively on their devices without an app store.',
    ],
    image: '/images/society-management.png',
    tags: ['React.js', 'Tailwind CSS', 'Context API', 'RBAC', 'PWA', 'Responsive Design'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    color: '#3B82F6',
    icon: '🏘️',
  },
];

// ========================
// EDUCATION
// ========================
export const educationData = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Engineering',
    institution: 'V.V.P. Engineering College',
    location: 'Rajkot, Gujarat',
    year: '2021 – 2025',
    cgpa: '8.54',
    highlights: [
      'Specialized in web technologies and software development',
      'Built multiple full-stack projects during coursework',
      'Strong foundation in data structures, algorithms, and system design',
    ],
    icon: '🎓',
    color: '#00d4ff',
  },
  {
    degree: 'Class XII — Science',
    field: 'Science (PCM)',
    institution: 'Shri G.T. Sheth Vidhyalaya',
    location: 'Rajkot, Gujarat',
    year: '2019 – 2021',
    cgpa: '80.06%',
    highlights: [
      'Physics, Chemistry & Mathematics stream',
      'Strong analytical and problem-solving foundation',
    ],
    icon: '📖',
    color: '#6c63ff',
  },
  {
    degree: 'Class X',
    field: 'Secondary Education',
    institution: 'Shri Mirambika Vidhyalaya',
    location: 'Rajkot, Gujarat',
    year: '2017 – 2019',
    cgpa: '97.48%',
    highlights: [
      'Academic excellence with 97.48 percentile',
      'Built early passion for logic and technology',
    ],
    icon: '🏫',
    color: '#00ff88',
  },
];

// ========================
// CONTACT
// ========================
export const contactData = {
  heading: "Let's Build Something Amazing",
  description:
    "Got a project in mind or just want to connect? I'm always open to discussing new opportunities, creative ideas, or ways to bring your vision to life.",
  email: personalInfo.email,
  phone: personalInfo.phone,
  location: personalInfo.location,
  socials: personalInfo.socials,
};

// ========================
// FOOTER
// ========================
export const footerData = {
  tagline: 'Crafting scalable solutions & pixel-perfect interfaces.',
  quickLinks: [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ],
  services: [
    'Full Stack Development',
    'Backend Architecture',
    'API Development',
    'Frontend Development',
  ],
};
