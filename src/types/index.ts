export interface Experience {
    company: string;
    period: string;
    description: string;
  }
  
  export interface Project {
    name: string;
    description: string;
    technologies: string[];
    longDescription?: string;
    imageUrl?: string;
    githubUrl?: string;
    demoUrl?: string;
  }
  export interface Skill {
    name: string;
    icon: JSX.Element;
  }
  
  export interface SkillCategory {
    title: string;
    skills: Skill[];
  }
