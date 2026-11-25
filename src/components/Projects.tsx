import { useEffect, useState } from 'react';
import { Project } from '../types';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Check, Code2, ExternalLink, Github, Layers3, Radio, X } from 'lucide-react';
import { usePreferences } from '../preferences';

type PortfolioProject = Project & { category: string; state: string; accent: string; architecture: string[] };

const projects: PortfolioProject[] = [
  {
    name: 'HomQueue', category: 'Gestion de files d’attente', state: 'Backend · en développement', accent: 'teal',
    description: 'Une base backend pour organiser les files, rendez-vous et priorités dans des environnements à forte affluence.',
    technologies: ['Spring Boot', 'WebSocket', 'PostgreSQL', 'Docker', 'API REST'],
    longDescription: 'HomQueue explore la gestion de files d’attente multi-domaines : création de tickets et rendez-vous, priorisation et actualisation en temps réel. Le projet met l’accent sur la coordination des flux et la structure du service backend.',
    architecture: ['Clients & opérateurs', 'API REST · WebSocket', 'Règles de file & priorités', 'PostgreSQL'],
    githubUrl: 'https://github.com/PierreGuede/queue-waiter-list',
  },
  {
    name: 'Fiscality', category: 'Gestion fiscale', state: 'Application · code public', accent: 'warm',
    description: 'Une application de gestion fiscale pensée pour structurer les dossiers, les opérations et les rapports.',
    technologies: ['Laravel', 'Livewire', 'MySQL', 'PowerGrid', 'Maatwebsite'],
    longDescription: 'Fiscality est développée avec Laravel et Livewire. Le projet s’appuie sur des composants de gestion de données, l’export Excel, la gestion des permissions et les notifications pour simplifier le suivi des obligations et la production de rapports.',
    architecture: ['Interface Livewire', 'Services Laravel', 'Permissions & notifications', 'MySQL · exports'],
    githubUrl: 'https://github.com/PierreGuede/Fiscality',
  },
  {
    name: 'KoriGo API', category: 'Livraison · Tchad', state: 'API · déploiement à venir', accent: 'blue',
    description: 'Une API REST pour les services de livraison, conçue autour des opérations et du contexte local.',
    technologies: ['Spring Boot', 'Java 21', 'PostgreSQL', 'SpringDoc OpenAPI', 'JPA'],
    longDescription: 'KoriGo API est un service REST construit avec Spring Boot et Java 21. Il comprend une architecture CRUD, la documentation OpenAPI, la validation des données, la persistance PostgreSQL et des tests unitaires.',
    architecture: ['Clients & livreurs', 'API REST · OpenAPI', 'Services & validation', 'JPA · PostgreSQL'],
    githubUrl: 'https://github.com/PierreGuede/korigo-api',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const reduceMotion = useReducedMotion();
  const { locale } = usePreferences();
  const english = locale === 'en';
  const englishProjectCopy = [
    { category: 'Queue management', state: 'Backend · in development', description: 'A backend foundation for organizing queues, appointments and priorities in high-traffic environments.', longDescription: 'HomQueue explores multi-domain queue management: ticket and appointment creation, prioritization and real-time updates. The project focuses on coordinating flows and structuring the backend service.', architecture: ['Customers & operators', 'REST API · WebSocket', 'Queue rules & priorities', 'PostgreSQL'] },
    { category: 'Tax management', state: 'Application · public code', description: 'A tax management app designed to organize records, operations and reports.', longDescription: 'Fiscality is built with Laravel and Livewire. It uses data-management components, Excel exports, permissions and notifications to simplify compliance tracking and reporting.', architecture: ['Livewire interface', 'Laravel services', 'Permissions & notifications', 'MySQL · exports'] },
    { category: 'Delivery · Chad', state: 'API · deployment coming soon', description: 'A REST API for delivery services, designed around operations and local context.', longDescription: 'KoriGo API is a REST service built with Spring Boot and Java 21. It includes CRUD architecture, OpenAPI documentation, validation, PostgreSQL persistence and unit tests.', architecture: ['Customers & couriers', 'REST API · OpenAPI', 'Services & validation', 'JPA · PostgreSQL'] },
  ];
  const localizedProjects = projects.map((project, index) => english ? { ...project, ...englishProjectCopy[index] } : project);

  useEffect(() => {
    if (!selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelectedProject(null); };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 px-4 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="projects-heading mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--cv-accent)]">{english ? 'Systems I’m building' : 'Quelques systèmes que je construis'}</p>
            <h2 className="text-3xl font-bold section-title sm:text-4xl">{english ? 'Projects in progress' : 'Projets en cours de route'}</h2>
            <p className="mt-4 leading-7 text-[var(--cv-text-muted)]">
              {english ? 'Personal projects built around practical needs. Some are backend-only for now; their architecture and source code show the work behind them.' : 'Des projets personnels autour de besoins concrets. Certains sont des backends sans interface publique pour le moment : leur architecture et leur code racontent déjà le travail réalisé.'}
            </p>
          </div>
          <a href="https://github.com/PierreGuede" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--cv-accent-strong)] transition-colors hover:text-[var(--cv-accent)]">
            {english ? 'All repositories' : 'Tous mes dépôts'} <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="project-grid grid gap-6 lg:grid-cols-3">
          {localizedProjects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, delay: index * 0.11, ease: 'easeOut' }}
              className={`project-card cv-card group flex flex-col overflow-hidden rounded-2xl project-${project.accent}`}
            >
              <button type="button" onClick={() => setSelectedProject(project)} className="flex h-full flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cv-accent)]" aria-label={english ? `Explore the ${project.name} project` : `Découvrir le projet ${project.name}`}>
                <div className="project-visual relative m-3 mb-0 overflow-hidden rounded-xl p-5 sm:p-6">
                  <div className="project-visual-grid" aria-hidden="true" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--cv-border)] bg-[var(--cv-surface)]/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[var(--cv-text-muted)]"><Code2 size={13} /> {english ? 'Backend / API' : 'Backend / API'}</span>
                    <span className="font-mono text-xs text-[var(--cv-text-muted)]">0{index + 1}</span>
                  </div>
                  <div className="project-flow relative z-10 mt-6 space-y-2">
                    {project.architecture.map((layer, layerIndex) => (
                      <div key={layer} className="project-layer flex items-center gap-3 rounded-lg border border-[var(--cv-border)] bg-[var(--cv-surface)]/90 px-3 py-2.5" style={{ marginLeft: `${layerIndex * 8}px`, marginRight: `${layerIndex * 8}px` }}>
                        <span className={`project-layer-index ${layerIndex === project.architecture.length - 1 ? 'is-last' : ''}`}>{layerIndex === 0 ? <Radio size={13} /> : layerIndex === project.architecture.length - 1 ? <Layers3 size={13} /> : <span>{String(layerIndex).padStart(2, '0')}</span>}</span>
                        <span className="text-xs font-semibold text-[var(--cv-text)] sm:text-sm">{layer}</span>
                        {layerIndex < project.architecture.length - 1 && <span className="ml-auto h-px flex-1 bg-[var(--cv-border)]" />}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[var(--cv-text-muted)]"><span className="h-1.5 w-1.5 rounded-full bg-[var(--cv-accent)]" /> {english ? 'Architecture overview' : 'Architecture snapshot'}</div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--cv-accent)]">{project.category}</span>
                    <span className="rounded-full bg-[var(--cv-surface-strong)] px-2.5 py-1 text-[11px] font-semibold text-[var(--cv-text-muted)]">{project.state}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-black text-[var(--cv-text)]">{project.name}</h3>
                  <p className="mt-2 flex-1 leading-7 text-[var(--cv-text-muted)]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => <span key={tech} className="cv-tag rounded px-2.5 py-1 text-xs font-medium">{tech}</span>)}
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-[var(--cv-border)] pt-4 text-sm font-semibold text-[var(--cv-accent-strong)]">
                    <span>{english ? 'Explore project' : 'Explorer le projet'}</span><span className="project-arrow flex h-8 w-8 items-center justify-center rounded-full border border-[var(--cv-border)]"><ArrowUpRight size={17} /></span>
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-[var(--cv-text-muted)]">{english ? 'The diagrams provide a visual guide to each project’s layers. Public demos will be added as deployments become available.' : 'Les schémas illustrent les couches du projet à titre de repère. Les démonstrations publiques seront ajoutées au fil des déploiements.'}</p>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--cv-text)]/45 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
            <motion.div role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" className="project-dialog cv-card max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 sm:p-8" initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} transition={{ duration: 0.22 }} onClick={(event) => event.stopPropagation()}>
              <div className="flex items-start justify-between gap-4">
                <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--cv-accent)]">{selectedProject.category}</p><h3 id="project-dialog-title" className="mt-2 text-3xl font-black text-[var(--cv-accent-strong)]">{selectedProject.name}</h3><p className="mt-2 text-sm text-[var(--cv-text-muted)]">{selectedProject.state}</p></div>
                <button type="button" aria-label={english ? 'Close details' : 'Fermer les détails'} onClick={() => setSelectedProject(null)} className="rounded-full border border-[var(--cv-border)] p-2 text-[var(--cv-text-muted)] transition-colors hover:bg-[var(--cv-surface-strong)]"><X size={20} /></button>
              </div>
              <p className="mt-7 leading-7 text-[var(--cv-text-muted)]">{selectedProject.longDescription}</p>
              <div className="mt-7">
                <h4 className="font-bold text-[var(--cv-text)]">{english ? 'Technologies & tools' : 'Technologies & outils'}</h4>
                <div className="mt-3 flex flex-wrap gap-2">{selectedProject.technologies.map((tech) => <span key={tech} className="cv-tag rounded px-3 py-1.5 text-sm">{tech}</span>)}</div>
              </div>
              <div className="mt-7 rounded-xl border border-[var(--cv-border)] bg-[var(--cv-surface-strong)] p-4">
                <h4 className="flex items-center gap-2 font-bold text-[var(--cv-text)]"><Check size={17} className="text-[var(--cv-accent)]" /> {english ? 'What you can explore' : 'Ce que tu peux explorer'}</h4>
                <p className="mt-2 text-sm leading-6 text-[var(--cv-text-muted)]">{english ? 'The public repository contains the source code and technical decisions. Demo links will be added when the project is deployed.' : 'Le dépôt public contient le code source et les choix techniques. Les liens de démonstration seront ajoutés lorsque le projet sera déployé.'}</p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="cv-button-primary inline-flex items-center gap-2 rounded-md px-4 py-2.5 font-semibold"><Github size={17} /> {english ? 'View code' : 'Voir le code'} <ExternalLink size={14} /></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
