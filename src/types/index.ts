import { ReactNode } from "react";

export interface Experience {
    company: string;
    period: string;
    description: string;
  }
  
  export interface Project {
    name: string;
    description: string;
    technologies: string[];
  }
  
  export interface Skill {
    name: string;
    icon: ReactNode;
  }
  