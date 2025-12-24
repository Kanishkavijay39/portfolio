/**
 * Portfolio data constants
 * Centralized data for easy maintenance
 * 
 * IMPORTANT: Sensitive data (email, phone) comes from environment variables
 * to protect privacy. Never commit real contact info to the repository.
 */

export const personalInfo = {
  name: 'Kanishka',
  title: 'Software Engineer @ Adobe',
  subtitle: 'Backend & Full-Stack Developer',
  // Use environment variables for privacy - fallback to placeholders
  email: import.meta.env.VITE_CONTACT_EMAIL || 'your.email@example.com',
  phone: import.meta.env.VITE_CONTACT_PHONE || '+1 (123) 456-7890'
};

export const aboutText = {
  intro: "I'm a Software Engineer at Adobe as MTS-II working as full-stack developer. I work with Node.js, React.js, AWS, and cutting-edge AI technologies including Agentic AI and Crew AI.",
  description: "I specialize in creating robust APIs, microservices, and data-driven applications using technologies like MongoDB, PostgreSQL, Redis, Elasticsearch, and Kafka. Previously worked at OYO, building high-performance distributed systems. I hold a Master's degree in Computer Applications."
};

export const skills = [
  {
    id: 1,
    icon: '☕',
    title: 'Backend',
    description: 'Java, Spring Boot, Node.js, Python, Ruby, REST APIs'
  },
  {
    id: 2,
    icon: '🗄️',
    title: 'Databases',
    description: 'MongoDB, PostgreSQL, Redis, Elasticsearch, DynamoDB, SQL'
  },
  {
    id: 3,
    icon: '⚛️',
    title: 'Frontend & Full-Stack',
    description: 'React.js, JavaScript, HTML/CSS'
  },
  {
    id: 4,
    icon: '🔧',
    title: 'Message Queues & Streaming',
    description: 'Kafka, SQS, Apache Thrift'
  },
  {
    id: 5,
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'AWS, Docker, Git, GitHub'
  },
  {
    id: 6,
    icon: '🤖',
    title: 'AI & Emerging Tech',
    description: 'Agentic AI, Crew AI'
  }
];

/**
 * Fallback projects (used if GitHub API fails or no repos found)
 * Real projects are fetched dynamically from GitHub API
 */
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
  { id: 1, label: 'GitHub', url: 'https://github.com/Kanishkavijay39' },
  { id: 2, label: 'LinkedIn', url: 'https://www.linkedin.com/in/kanishka-b29841185/' }
];

