import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
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
  SiNextdotjs,
  SiVercel,
  SiVite,
  SiFramer,
} from 'react-icons/si';

// ========================
// PERSONAL INFO
// ========================
export const personalInfo = {
  name: 'Bhautik Rakhasiya',
  firstName: 'Bhautik',
  lastName: 'Rakhasiya',
  tagline: 'Full Stack Developer',
  titles: [
    'Full Stack Developer',
    'Backend Architect',
    'React Developer',
    'Node.js Engineer',
  ],
  description:
    'I build scalable backend systems and polished frontend experiences. Passionate about clean architecture, real-time systems, and turning complex problems into elegant solutions.',
  email: 'bhautik@example.com',
  phone: '+91 98765 43210',
  location: 'Rajkot, Gujarat, India',
  resumeLink: '#',
  socials: {
    github: 'https://github.com/bhautikrakhasiya',
    linkedin: 'https://linkedin.com/in/bhautikrakhasiya',
    twitter: 'https://twitter.com/bhautikrakh',
    email: 'mailto:bhautik@example.com',
  },
  // Place your actual photos at public/images/
  profilePhoto: '/images/profile.svg',
  photos: [
    '/images/photo-1.svg',
    '/images/photo-2.svg',
    '/images/photo-3.svg',
    '/images/photo-4.svg',
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
    "I'm a Full Stack Developer at Kevit Technology with hands-on experience in building production-grade web applications. I specialize in Node.js, NestJS, React, and MongoDB — crafting everything from scalable REST APIs to interactive frontends.",
    "I thrive on solving real-world engineering challenges — whether it's architecting a system to handle 1,000+ YouTube webhooks per day or building user-friendly banking interfaces with pixel-perfect precision.",
    "I graduated with a degree in Computer Engineering from VVP Engineering College, Rajkot, and I'm always exploring new technologies to push the boundaries of what's possible on the web.",
  ],
  highlights: [
    { icon: '🎯', text: 'Problem Solver' },
    { icon: '🚀', text: 'Scalable Architecture' },
    { icon: '💻', text: 'Clean Code Advocate' },
    { icon: '🤝', text: 'Team Collaborator' },
  ],
  stats: [
    { number: 3, suffix: '+', label: 'Major Projects' },
    { number: 2, suffix: '+', label: 'Years Experience' },
    { number: 1000, suffix: '+', label: 'Webhooks/Day' },
    { number: 8.64, suffix: '', label: 'CGPA' },
  ],
};

// ========================
// SKILLS
// ========================
export const skillsData = [
  { name: 'JavaScript', level: 92, icon: SiJavascript, color: '#f7df1e', category: 'Frontend' },
  { name: 'TypeScript', level: 85, icon: SiTypescript, color: '#3178c6', category: 'Frontend' },
  { name: 'React', level: 88, icon: FaReact, color: '#61dafb', category: 'Frontend' },
  { name: 'Next.js', level: 75, icon: SiNextdotjs, color: '#ffffff', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss, color: '#06b6d4', category: 'Frontend' },
  { name: 'Redux', level: 72, icon: SiRedux, color: '#764abc', category: 'Frontend' },
  { name: 'Framer Motion', level: 70, icon: SiFramer, color: '#bb4bff', category: 'Frontend' },
  { name: 'Node.js', level: 93, icon: FaNodeJs, color: '#339933', category: 'Backend' },
  { name: 'NestJS', level: 88, icon: SiNestjs, color: '#e0234e', category: 'Backend' },
  { name: 'Express.js', level: 90, icon: SiExpress, color: '#ffffff', category: 'Backend' },
  { name: 'MongoDB', level: 87, icon: SiMongodb, color: '#47a248', category: 'Backend' },
  { name: 'Git / GitHub', level: 88, icon: FaGitAlt, color: '#f05032', category: 'Tools' },
  { name: 'Postman', level: 85, icon: SiPostman, color: '#ff6c37', category: 'Tools' },
  { name: 'Vite', level: 80, icon: SiVite, color: '#646cff', category: 'Tools' },
  { name: 'Vercel', level: 75, icon: SiVercel, color: '#ffffff', category: 'Tools' },
];

// ========================
// EXPERIENCE
// ========================
export const experienceData = [
  {
    company: 'Kevit Technology',
    role: 'Full Stack Developer',
    location: 'Rajkot, Gujarat',
    period: 'Jun 2024 - Present',
    description:
      'Working as a Full Stack Developer building scalable web applications. Handling end-to-end development from database design to frontend delivery across multiple projects.',
    technologies: ['Node.js', 'NestJS', 'React', 'MongoDB', 'TypeScript', 'Express.js'],
    icon: '💼',
    color: '#6c63ff',
  },
];

// ========================
// PROJECTS
// ========================
export const projectsData = [
  {
    title: 'YouTube Livestreaming Platform',
    subtitle: 'Real-Time Streaming Infrastructure',
    description:
      'A comprehensive livestreaming solution built around YouTube iframe integration. Engineered to handle 1,000+ YouTube webhooks per day with reliable event processing. Started from scratch and designed a scalable architecture that supports real-time stream monitoring, webhook ingestion, and event-driven processing.',
    longDescription: [
      'Built a complete livestreaming platform with YouTube iframe integration for seamless video embedding.',
      'Designed and implemented a webhook processing pipeline handling 1,000+ YouTube webhooks per day.',
      'Architected the system from scratch with a focus on scalability, reliability, and real-time performance.',
      'Implemented event-driven architecture for stream state management and notification systems.',
      'Built monitoring dashboards for tracking stream health, webhook delivery rates, and system performance.',
    ],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
    tags: ['Node.js', 'NestJS', 'MongoDB', 'WebSocket', 'YouTube API', 'Webhooks'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    color: '#ff4757',
    icon: '🎬',
  },
  {
    title: 'TACB - Banking Portal',
    subtitle: 'User-Friendly Banking Interface',
    description:
      'A bank-related web application focused on delivering an exceptional user experience. Worked primarily on the frontend, creating intuitive interfaces for banking operations with clean, accessible design that makes complex financial workflows feel simple.',
    longDescription: [
      'Developed a user-friendly banking portal with focus on UI/UX excellence.',
      'Created responsive, accessible interfaces for complex banking operations.',
      'Implemented form validation, data visualization, and transaction management features.',
      'Worked closely with the design team to ensure pixel-perfect implementation.',
      'Optimized frontend performance for smooth interactions across devices.',
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=500&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    color: '#2ed573',
    icon: '🏦',
  },
  {
    title: 'Cysource - E-Learning Platform',
    subtitle: 'Course Management & Examination System',
    description:
      'An Udemy-style e-learning platform where users can purchase courses, watch content, and take exams. Features course catalog management, secure payment integration, progress tracking, and examination systems with automated grading.',
    longDescription: [
      'Built an end-to-end e-learning platform similar to Udemy with course purchasing and management.',
      'Implemented course catalog with search, filtering, and categorization features.',
      'Developed an examination system with multiple question types and automated grading.',
      'Integrated secure payment processing for course purchases.',
      'Built progress tracking, bookmarking, and certificate generation features.',
    ],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Payment Gateway'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    color: '#6c63ff',
    icon: '📚',
  },
];

// ========================
// EDUCATION
// ========================
export const educationData = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Engineering',
    institution: 'VVP Engineering College',
    location: 'Rajkot, Gujarat',
    year: '2021 - 2025',
    cgpa: '8.64',
    highlights: [
      'Specialized in web technologies and software development',
      'Built multiple full-stack projects during coursework',
      'Strong foundation in data structures, algorithms, and system design',
    ],
    icon: '🎓',
    color: '#00d4ff',
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
