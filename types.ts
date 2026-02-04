
export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}
