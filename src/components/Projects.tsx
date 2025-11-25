import { FC, useState } from 'react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Empêcher le défilement du body quand le modal est ouvert
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restaurer le défilement du body quand le modal est fermé
    document.body.style.overflow = 'auto';
  };

  const projects: Project[] = [
    {
      name: 'TEC-SCHOOL',
      description: 'Application de gestion globale pour les universités',
      technologies: ['Laravel', 'Vue.js'],
      longDescription: 'TEC-SCHOOL est une application complète de gestion universitaire permettant de gérer les inscriptions, les cours, les notes, les paiements et la communication entre étudiants et professeurs. Elle offre une interface intuitive pour simplifier les processus administratifs.',
      imageUrl:'',
      githubUrl: 'https://github.com/pierre-guede/tec-school',
      // demoUrl: 'https://tec-school.example.com'
    },
    {
      name: 'TEC-IT',
      description: 'Application de gestion de la fiscalité',
      technologies: ['Laravel', 'MySQL'],
      longDescription: 'TEC-IT est une solution innovante pour la gestion fiscale des entreprises. Elle permet de suivre les obligations fiscales, générer des rapports automatisés, et optimiser la conformité fiscale grâce à des alertes intelligentes et des tableaux de bord personnalisables.',
      imageUrl:'',
      githubUrl: 'https://github.com/pierre-guede/tec-it',
      // demoUrl: 'https://tec-it.example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black bg-opacity-30 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-[#00ff88]">Projets</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-white bg-opacity-5 backdrop-blur-lg cursor-pointer transition-all duration-300 hover:bg-opacity-10"
              onClick={() => openModal(project)}
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
              <button 
                className="mt-4 px-4 py-2 bg-[#00ff88] text-black rounded-md font-medium hover:bg-opacity-90 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(project);
                }}
              >
                Voir détails
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal avec effet de fade */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <>
            {/* Overlay avec effet de fade */}
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-70 z-40 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              {/* Contenu du modal avec effet de fade et scale */}
              <motion.div 
                className="bg-gray-900 rounded-xl max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh] z-50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#00ff88]">{selectedProject.name}</h3>
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {selectedProject.imageUrl && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.name} 
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        // Fallback si l'image n'existe pas
                        e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Image+Non+Disponible';
                      }}
                    />
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2 text-white">Description</h4>
                  <p className="text-gray-300">{selectedProject.longDescription || selectedProject.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2 text-white">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-[#00ff88] bg-opacity-20 text-[#00ff88] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-700 transition-all flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a 
                      href={selectedProject.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#00ff88] text-black rounded-md font-medium hover:bg-opacity-90 transition-all flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                      Démo
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
