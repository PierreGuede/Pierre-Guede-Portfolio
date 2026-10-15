import { FC, useState } from 'react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

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
      name: 'HomQueue',
      description: 'Application backend de gestion de files d\'attente multi-domaines',
      technologies: ['SpringBoot', 'WebSocket', 'PostgreSQL', 'Docker', 'API REST'],
      longDescription: "HomQueue est une application backend exploitable pour gérer les files d'attente de type banque, super-marché et autres domaines. Le système intègre des fonctionnalités avancées : gestion de rendez-vous avec création automatique de tickets prioritaires, prédictions IA pour l'optimisation du staffing, système de priorisation intelligent (VIP, rendez-vous), notifications en temps réel (SMS/Push), analytics et performance en temps réel, et intégration WebSocket pour les mises à jour live. Le projet met l'accent sur l'expérience utilisateur et l'optimisation opérationnelle grâce à l'analyse de données.",
      imageUrl:'',
      githubUrl: 'https://github.com/PierreGuede/queue-waiter-list',
    },
    {
      name: 'Fiscality',
      description: 'Application web de gestion de fiscalité',
      technologies: ['Laravel', 'Livewire', 'MySQL', 'Livewire PowerGrid'],
      longDescription: "Fiscality est une application web complète de gestion fiscale développée avec Laravel et Livewire. Elle offre une interface réactive sans rechargement de page grâce à Livewire, inclut des fonctionnalités avancées comme PowerGrid pour la gestion des données, export Excel avec Maatwebsite, gestion des permissions avec Spatie Laravel Permission, interface moderne avec WireUI, et système de notifications. L'application simplifie le suivi des obligations fiscales et la génération de rapports.",
      imageUrl:'',
      githubUrl: 'https://github.com/PierreGuede/Fiscality',
    },
    {
      name: 'KoriGoApi',
      description: 'API de service de livraison repensée pour le Tchad',
      technologies: ['SpringBoot', 'PostgreSQL', 'SpringDoc OpenAPI', 'Lombok'],
      longDescription: "KoriGoApi est une API REST développée avec Spring Boot 4.0.4 et Java 21 pour un service de livraison adapté au contexte tchadien. Le projet inclut une architecture CRUD complète, documentation API automatique avec SpringDoc OpenAPI, persistance avec PostgreSQL et Spring Data JPA, validation de données, sécurité avec Spring Security Crypto, et tests unitaires. Cette API vise à moderniser les services de livraison en Afrique centrale avec une architecture scalable et maintenable.",
      imageUrl:'',
      githubUrl: 'https://github.com/PierreGuede/korigo-api',
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold section-title">Projets</h2>
          <p className="mt-4 text-[var(--cv-text-muted)] leading-7">
            Un aperçu des plateformes métier et solutions numériques sur lesquelles j'ai contribué, avec une priorité
            donnée à la valeur opérationnelle, aux API et à la qualité de maintenance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg cv-card cursor-pointer transition-all duration-300 hover:shadow-md"
              onClick={() => openModal(project)}
            >
              <h3 className="text-xl font-bold text-[var(--cv-text)] mb-4">{project.name}</h3>
              <p className="mb-4 leading-7 text-[var(--cv-text-muted)]">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm cv-tag rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button 
                className="mt-4 px-4 py-2 cv-button-primary rounded-md font-medium transition-all"
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
              className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              {/* Contenu du modal avec effet de fade et scale */}
              <motion.div 
                className="bg-[#fbf9f7] text-[var(--cv-text)] rounded-xl max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh] z-50 border border-[var(--cv-border)]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[var(--cv-accent-strong)]">{selectedProject.name}</h3>
                  <button 
                    onClick={closeModal}
                    className="text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    <X size={24} />
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
                  <h4 className="text-xl font-semibold mb-2">Description</h4>
                  <p className="text-[var(--cv-text-muted)]">{selectedProject.longDescription || selectedProject.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm cv-tag rounded"
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
                      className="px-4 py-2 bg-slate-900 text-white rounded-md font-medium hover:opacity-90 transition-all flex items-center gap-2"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a 
                      href={selectedProject.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 cv-button-primary rounded-md font-medium transition-all flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
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
