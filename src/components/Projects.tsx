import { FC } from 'react';
import { Project } from '../types';

const Projects: FC = () => {
  const projects: Project[] = [
    {
      name: 'TEC-SCHOOL',
      description: 'Application de gestion globale pour les universités',
      technologies: ['Laravel', 'Vue.js']
    },
    {
      name: 'TEC-IT',
      description: 'Application de gestion de la fiscalité',
      technologies: ['Laravel', 'MySQL']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black bg-opacity-30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-[#00ff88]">Projets</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-white bg-opacity-5 backdrop-blur-lg"
            >
              <h3 className="text-xl font-bold text-white mb-4">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-[#00ff88] bg-opacity-20 text-[#00ff88] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
