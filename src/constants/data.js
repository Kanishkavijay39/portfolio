/**
 * Portfolio data constants
 * Centralized data for easy maintenance
 */

export const personalInfo = {
  name: 'Kanishka',
  title: 'Backend Engineer | Problem Solver',
  email: 'your.email@example.com',
  phone: '+1 (123) 456-7890'
};

export const aboutText = {
  intro: "I'm a passionate backend engineer with a focus on building scalable, efficient, and robust server-side applications. With expertise in backend technologies, I create powerful APIs and systems that power modern applications.",
  description: "My journey in backend development started with curiosity and has evolved into a career I'm truly passionate about. I specialize in architecting solutions, optimizing performance, and implementing best practices for maintainable code."
};

export const skills = [
  {
    id: 1,
    icon: '⚙️',
    title: 'Backend',
    description: 'Node.js, Express, Python, Django, Flask'
  },
  {
    id: 2,
    icon: '🗄️',
    title: 'Database',
    description: 'MongoDB, MySQL, PostgreSQL, Redis'
  },
  {
    id: 3,
    icon: '🔌',
    title: 'APIs & Services',
    description: 'REST, GraphQL, Microservices, WebSockets'
  },
  {
    id: 4,
    icon: '🛠️',
    title: 'DevOps & Tools',
    description: 'Git, Docker, AWS, CI/CD, Kubernetes'
  }
];

export const projects = [
  {
    id: 1,
    title: 'E-Commerce API',
    description: 'RESTful API for e-commerce platform with payment integration, authentication, and order management system.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'Real-Time Chat Service',
    description: 'Scalable microservices-based chat application with WebSocket support and message queuing.',
    tags: ['Python', 'Redis', 'WebSocket'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'Authentication Service',
    description: 'Secure authentication microservice with JWT, OAuth2, and role-based access control.',
    tags: ['Node.js', 'PostgreSQL', 'JWT'],
    demoLink: '#',
    githubLink: '#'
  }
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export const socialLinks = [
  { id: 1, label: 'GitHub', url: '#' },
  { id: 2, label: 'LinkedIn', url: 'https://www.linkedin.com/in/kanishka-b29841185/' },
  { id: 3, label: 'Twitter', url: '#' }
];

