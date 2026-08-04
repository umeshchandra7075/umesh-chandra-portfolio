export const profile = {
  name: "Vanga Umesh Chandra",
  initials: "VU",
  role: "Computer Science Engineering Student",
  roles: [
    "Python Developer",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Backend Engineer",
  ],
  tagline: "Learning Today. Building for Tomorrow.",
  summary:
    "Computer Science undergraduate focused on building fast, reliable full-stack products end to end — from schema design and REST APIs to interfaces people enjoy using. Currently sharpening data structures, algorithms, and system design fundamentals while shipping real projects.",
  location: "Hyderabad, Telangana, India",
  email: "vanga.umeshchandra@gmail.com",
  phone: "+91 7075298595",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/umeshchandra7075",
    linkedin: "https://www.linkedin.com/in/vanga-umesh-chandra-4b7332417/",
    leetcode: "https://leetcode.com/u/umeshchandra_24/",
    hackerrank: "https://www.hackerrank.com/profile/umeshchandra_24",
    twitter: "https://x.com/umesh7075",
    instagram: "https://www.instagram.com/umesh_chandra_24/",
  },
  githubUsername: "umeshchandra7075",
};

export const education = {
  degree: "B.Tech in Computer Science Engineering",
  college: "Malla Reddy Vishwa Vidyapeeth Technical Campus",
  cgpa: "8.33",
  period: "2025 – 2029",
};

export const stats = [
  { label: "Projects Shipped", value: 7, suffix: "+" },
  { label: "CGPA", value: 8.33, suffix: "" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "Hackathons", value: 1, suffix: "" },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 88 },
      { name: "SQL", level: 78 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 84 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 78 },
      { name: "PostgreSQL", level: 75 },
      { name: "SQLite", level: 76 },
      { name: "Supabase", level: 74 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 86 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 82 },
      { name: "Prisma", level: 74 },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "DBMS", level: 80 },
      { name: "OOP", level: 84 },
      { name: "Data Structures", level: 78 },
      { name: "Algorithms", level: 76 },
      { name: "Operating Systems", level: 74 },
      { name: "Computer Networks", level: 72 },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "lifelink-ai",
    title: "LifeLink AI",
    subtitle: "Universal Personal Emergency & Health Intelligence Platform",
    description:
      "A real-time platform that connects a user's health data, emergency contacts, and location to coordinate a faster response during a medical emergency, with live status updates powered by sockets.",
    features: [
      "Real-time emergency alerts via Socket.IO",
      "Health profile & emergency contact management",
      "Role-based access with secure authentication",
      "PostgreSQL schema modeled with Prisma ORM",
    ],
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Socket.IO"],
    github: "https://github.com/umeshchandra7075",
    featured: true,
  },
  {
    slug: "learning-dashboard",
    title: "Learning Dashboard",
    subtitle: "Personal study & progress tracking workspace",
    description:
      "A clean dashboard for tracking courses, study streaks, and goals, built on the Next.js App Router with a Supabase backend and fluid Framer Motion transitions.",
    features: [
      "Course & goal tracking with progress visualization",
      "Supabase auth and persistent storage",
      "Type-safe data layer end to end",
      "Animated charts and page transitions",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    github: "https://github.com/umeshchandra7075",
    featured: true,
  },
  {
    slug: "eamcet-daily",
    title: "EAMCET Daily",
    subtitle: "Daily prep companion for EAMCET aspirants",
    description:
      "A lightweight static web app delivering daily practice questions, tips, and countdowns for students preparing for the EAMCET entrance exam.",
    features: [
      "Daily question feed",
      "Exam countdown timer",
      "Fast, dependency-free vanilla JS build",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/umeshchandra7075",
  },
  {
    slug: "she-can-foundation",
    title: "She Can Foundation Website",
    subtitle: "Nonprofit website for a women-empowerment foundation",
    description:
      "A responsive informational website built to help a nonprofit foundation communicate its mission, programs, and ways to get involved.",
    features: [
      "Fully responsive multi-section layout",
      "Accessible semantic markup",
      "Optimized for fast load on mobile networks",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/umeshchandra7075",
  },
  {
    slug: "todo-manager",
    title: "Todo Manager",
    subtitle: "Minimal task management app",
    description:
      "A CRUD todo application focused on clean state management and a distraction-free interface.",
    features: ["Create, complete & delete tasks", "Persistent local storage", "Keyboard-friendly UX"],
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/umeshchandra7075",
  },
  {
    slug: "random-quote-generator",
    title: "Random Quote Generator",
    subtitle: "Fetches and displays inspirational quotes",
    description:
      "A small utility app that fetches quotes from an API and lets users share their favorites — built as a fundamentals exercise in async JS.",
    features: ["API integration", "One-click sharing", "Smooth fade transitions"],
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/umeshchandra7075",
  },
  {
    slug: "number-guessing-game",
    title: "Number Guessing Game",
    subtitle: "Classic logic game with score tracking",
    description:
      "An interactive browser game that challenges the player to guess a random number with limited attempts and live feedback.",
    features: ["Difficulty levels", "Attempt & score tracking", "Responsive layout"],
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/umeshchandra7075",
  },
];

export const achievements = [
  {
    title: "National Level 48-Hour Hackathon",
    description: "Participated in a 48-hour national-level hackathon, building a working prototype under tight time constraints.",
  },
  {
    title: "Content Writer Intern",
    description: "Interned as a Content Writer at InAmigos Foundation, producing structured, audience-focused content.",
  },
  {
    title: "CGPA 8.33",
    description: "Maintaining a strong academic record throughout the B.Tech program.",
  },
  {
    title: "HackerRank CSS (Basic)",
    description: "Certified for foundational CSS problem-solving on HackerRank.",
  },
  {
    title: "AI & ML Industry Preparedness",
    description: "Completed an industry-preparedness internship program focused on AI & Machine Learning.",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  category: string;
};

export const certifications: Certification[] = [
  { title: "AI & ML Industry Preparedness Internship", issuer: "Industry Program", category: "AI & ML" },
  { title: "AI & ML Course Completion Certificate", issuer: "Course Provider", category: "AI & ML" },
  { title: "Content Writing Internship Completion", issuer: "InAmigos Foundation", category: "Internship" },
  { title: "HackerRank CSS (Basic)", issuer: "HackerRank", category: "Frontend" },
];

export type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  type: "education" | "internship" | "project" | "hackathon" | "certification";
};

export const timeline: TimelineItem[] = [
  {
    year: "2025",
    title: "Started B.Tech in Computer Science Engineering",
    subtitle: "Malla Reddy Vishwa Vidyapeeth Technical Campus",
    type: "education",
  },
  {
    year: "2025",
    title: "Content Writer Intern",
    subtitle: "InAmigos Foundation",
    type: "internship",
  },
  {
    year: "2025",
    title: "National Level 48-Hour Hackathon",
    subtitle: "Built a working prototype in 48 hours",
    type: "hackathon",
  },
  {
    year: "2025",
    title: "AI & ML Industry Preparedness Internship",
    subtitle: "Completed industry-oriented AI/ML training",
    type: "certification",
  },
  {
    year: "2025 – 2026",
    title: "Built LifeLink AI, Learning Dashboard & more",
    subtitle: "Full-stack projects across the MERN & Next.js stack",
    type: "project",
  },
  {
    year: "2029",
    title: "Expected Graduation",
    subtitle: "B.Tech, Computer Science Engineering — CGPA 8.33",
    type: "education",
  },
];

export const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end web applications — from database schema to a polished, responsive UI.",
  },
  {
    title: "Frontend Development",
    description: "Fast, accessible, pixel-precise interfaces built with React and Tailwind CSS.",
  },
  {
    title: "Backend Development",
    description: "Reliable REST APIs and server logic with Node.js, Express, and SQL/NoSQL databases.",
  },
  {
    title: "REST API Development",
    description: "Well-documented, secure APIs designed for real client applications to consume.",
  },
  {
    title: "Responsive Website Development",
    description: "Websites that feel native on everything from a small phone to an ultrawide monitor.",
  },
];

export const testimonials = [
  {
    quote:
      "Umesh picks up new tools fast and doesn't stop at 'it works' — he cares about how the code is structured. A dependable teammate for any hackathon.",
    name: "Hackathon Teammate",
    role: "48-Hour National Hackathon",
  },
  {
    quote:
      "He turned around clear, well-researched content on tight deadlines during his internship, always asking the right questions before writing.",
    name: "Program Supervisor",
    role: "InAmigos Foundation",
  },
  {
    quote:
      "Consistently one of the strongest project presentations in class — clean code, thoughtful architecture, and a real product mindset.",
    name: "Faculty Mentor",
    role: "Dept. of CSE",
  },
];

export const blogPosts = [
  {
    title: "What Building LifeLink AI Taught Me About Real-Time Systems",
    excerpt:
      "Notes on designing a Socket.IO-driven architecture for an emergency-response platform, and the tradeoffs that came with it.",
    date: "2026-04-12",
    tag: "Engineering",
  },
  {
    title: "Prisma + PostgreSQL: A Schema-First Workflow I Actually Enjoy",
    excerpt:
      "How a schema-first approach with Prisma changed the way I model data before writing a single API route.",
    date: "2026-03-02",
    tag: "Backend",
  },
  {
    title: "Getting Serious About Data Structures & Algorithms",
    excerpt: "A practical study plan I'm using to build real problem-solving speed, not just pattern memorization.",
    date: "2026-01-18",
    tag: "DSA",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Timeline", href: "#timeline" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
