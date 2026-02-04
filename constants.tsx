
import { Code2, Layout, Database, Terminal, Smartphone, TestTube, Cpu, Server } from 'lucide-react';
import React from 'react';
import { Project, Experience, Education, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Komal Chavda",
  title: "Python Ecosystem & IT Engineer",
  email: "komal.chavda@example.com",
  phone: "+91 9876543210",
  location: "Rajkot, Gujarat",
  linkedin: "linkedin.com/in/komal-chavda",
  bio: "Highly specialized IT Engineer with core expertise in Python development. Proficient in building robust backend architectures using Django and Flask, and crafting enterprise-grade ERP solutions with Frappe & ERPNext. Focused on high-performance RESTful APIs, clean code principles, and scalable system design."
};

export const PROJECTS: Project[] = [
  {
    title: "Flight Booking System",
    description: "A comprehensive full-stack web application designed for seamless travel management. Features real-time availability and secure booking workflows.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Book Warehouse Management",
    description: "Advanced inventory system with automated tracking, stock alerts, and sleek Tailwind-powered dashboards.",
    tags: ["Tailwind CSS", "PHP", "JavaScript"],
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Grocery Store App",
    description: "Intuitive Android application for local grocery shopping, featuring category filtering and localized payment integrations.",
    tags: ["Java", "Android", "XML"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Coffee Shop Website",
    description: "High-performance responsive frontend with interactive menu displays and localized branding.",
    tags: ["HTML5", "CSS3", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1501339819358-ee5969a1f166?auto=format&fit=crop&q=80&w=800"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "MidOcean Technologies",
    role: "Junior Python Developer",
    period: "Feb 2024 – Present",
    description: [
      "Architected backend services using Python with ERPNext & Frappe Framework.",
      "Developed high-performance RESTful APIs for mobile and web consumption.",
      "Implemented custom modules and complex business logic workflows using Python hooks.",
      "Optimized database queries and refined complete frontend architecture for better UX.",
      "Conducted rigorous QA testing and code reviews ensuring enterprise reliability."
    ]
  },
  {
    company: "OM IT Hub, Rajkot",
    role: "PHP Developer Intern",
    period: "Jun 2023 – Jan 2024",
    description: [
      "Developed backend logic using Core PHP for various client-facing projects.",
      "Managed MySQL database integration and performed optimization for large data sets.",
      "Collaborated on modern frontend modules using HTML, CSS, and JavaScript."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Parul University, Vadodara",
    degree: "B.Tech in Information Technology",
    period: "2024 – Present"
  },
  {
    institution: "RK University, Rajkot",
    degree: "Diploma in Computer Engineering",
    period: "Completed",
    score: "CGPA: 8.05/10"
  },
  {
    institution: "St. Mother Teresa School",
    degree: "Secondary School (12th)",
    period: "Completed",
    score: "86.94%"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Core",
    skills: ["Python (Core)", "Django", "Flask", "RESTful API", "FastAPI"],
    icon: "Server"
  },
  {
    title: "Enterprise Ecosystem",
    skills: ["Frappe Framework", "ERPNext", "Custom Workflows", "Hooks"],
    icon: "Terminal"
  },
  {
    title: "Databases & DevOps",
    skills: ["MySQL", "PostgreSQL", "Git & GitHub", "Docker", "Linux"],
    icon: "Database"
  },
  {
    title: "Frontend & UI",
    skills: ["React.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
    icon: "Layout"
  },
  {
    title: "Testing & QA",
    skills: ["Functional Testing", "Pytest", "Regression Testing", "Code Quality"],
    icon: "TestTube"
  }
];
