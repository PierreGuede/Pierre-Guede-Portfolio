import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft, ArrowUpRight, Boxes, BriefcaseBusiness, Github, MapPin, MessageCircle,
  Compass, X,
} from 'lucide-react';
import { usePreferences } from '../preferences';

type IslandStop = {
  id: 'projects' | 'experience' | 'skills' | 'contact';
  label: string;
  subtitle: string;
  icon: typeof Boxes;
  x: number;
  y: number;
  className: string;
};

const stops: IslandStop[] = [
  { id: 'projects', label: 'Projets', subtitle: 'Le port des projets', icon: Boxes, x: 70, y: 25, className: 'island-stop-projects' },
  { id: 'experience', label: 'Expérience', subtitle: 'Le quartier des équipes', icon: BriefcaseBusiness, x: 82, y: 49, className: 'island-stop-experience' },
  { id: 'skills', label: 'Compétences', subtitle: 'La forêt des outils', icon: Compass, x: 22, y: 47, className: 'island-stop-skills' },
  { id: 'contact', label: 'Contact', subtitle: 'Le phare des échanges', icon: MessageCircle, x: 52, y: 76, className: 'island-stop-contact' },
];

const projects = [
  { name: 'HomQueue', text: 'Backend de gestion de files d’attente, rendez-vous et priorités.', stack: 'Spring Boot · WebSocket · PostgreSQL', url: 'https://github.com/PierreGuede/queue-waiter-list' },
  { name: 'Fiscality', text: 'Application de gestion fiscale avec interface Livewire et exports.', stack: 'Laravel · Livewire · MySQL', url: 'https://github.com/PierreGuede/Fiscality' },
  { name: 'KoriGo API', text: 'API REST de livraison, conçue autour des opérations au Tchad.', stack: 'Spring Boot · Java · PostgreSQL', url: 'https://github.com/PierreGuede/korigo-api' },
];

const experience = [
  ['HOMINTEC', 'Développeur Fullstack', '2024 — 2026'],
  ['MTECH', 'Développeur Fullstack', '2023 — 2024'],
  ['EDEAL', 'Développeur Backend', '2023'],
  ['TEC-Sarl', 'Développeur Fullstack', '2022 — 2023'],
  ['ATS-Afrique', 'Stagiaire Développeur Fullstack', '2021'],
];

const skillGroups = [
  ['Frontend', 'Angular · Vue.js · React · Next.js · Tailwind CSS'],
  ['Backend & API', 'Spring Boot · NestJS · Node.js · Laravel · REST · GraphQL'],
  ['Mobile', 'Flutter · React Native · Kotlin · Swift · Skip'],
  ['Données & outils', 'PostgreSQL · MySQL · Docker · Git · Swagger · Postman'],
];

interface IslandExperienceProps {
  onClose: () => void;
}

const IslandExperience: FC<IslandExperienceProps> = ({ onClose }) => {
  const [selectedStop, setSelectedStop] = useState<IslandStop['id'] | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const { locale } = usePreferences();
  const english = locale === 'en';
  const localizedStops = english ? stops.map((stop) => ({
    ...stop,
    label: ({ projects: 'Projects', experience: 'Experience', skills: 'Skills', contact: 'Contact' } as const)[stop.id],
    subtitle: ({ projects: 'Project harbor', experience: 'Team district', skills: 'Tool forest', contact: 'Lighthouse of ideas' } as const)[stop.id],
  })) : stops;
  const localizedProjects = english ? projects.map((project, index) => ({ ...project, text: [
    'Backend for managing queues, appointments and priorities.',
    'Tax management app with a Livewire interface and exports.',
    'Delivery REST API designed around operations in Chad.',
  ][index] })) : projects;
  const localizedExperience = english ? experience.map(([company, , period]) => [company, company === 'ATS-Afrique' ? 'Full-stack developer intern' : company === 'EDEAL' ? 'Backend developer' : 'Full-stack developer', period]) : experience;
  const localizedSkillGroups = english ? [
    ['Frontend', 'Angular · Vue.js · React · Next.js · Tailwind CSS'],
    ['Backend & APIs', 'Spring Boot · NestJS · Node.js · Laravel · REST · GraphQL'],
    ['Mobile', 'Flutter · React Native · Kotlin · Swift · Skip'],
    ['Data & tools', 'PostgreSQL · MySQL · Docker · Git · Swagger · Postman'],
  ] : skillGroups;
  const selected = localizedStops.find((stop) => stop.id === selectedStop) ?? null;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
    )).filter((element) => element.offsetParent !== null);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <motion.div
      className="island-experience fixed inset-0 z-[100] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="island-title"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0 }}
      onKeyDown={handleKeyDown}
    >
      <div className="island-shell min-h-[100svh]">
        <header className="island-header sticky top-0 z-30 border-b border-[var(--cv-border)]">
          <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-4 px-4 py-3 sm:px-7">
            <div className="flex items-center gap-3">
              <span className="island-brand-mark" aria-hidden="true">PG</span>
              <div><p className="text-sm font-black tracking-wide text-[var(--cv-text)]">PIERRE GUEDE</p><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-[var(--cv-text-muted)]">Mode exploration</p></div>
            </div>
            <div className="island-header-route hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[.15em] text-[var(--cv-text-muted)] sm:flex"><span className="island-route-dot" /> {english ? 'Portfolio archipelago' : 'Archipel du parcours'} <span className="opacity-40">/</span> {english ? 'Benin' : 'Bénin'}</div>
            <button ref={closeButtonRef} type="button" onClick={onClose} className="island-exit inline-flex items-center gap-2 rounded-full border border-[var(--cv-border)] bg-[var(--cv-surface)] px-3.5 py-2 text-sm font-semibold text-[var(--cv-text)] transition-all hover:-translate-y-0.5 hover:border-[var(--cv-accent)]" aria-label={english ? 'Close exploration and return to the portfolio' : 'Fermer le mode exploration et revenir au portfolio'}>
              <ArrowLeft size={16} /><span className="hidden sm:inline">{english ? 'Back to portfolio' : 'Retour au portfolio'}</span><span className="sm:hidden">{english ? 'Back' : 'Retour'}</span><X className="sm:hidden" size={15} />
            </button>
          </div>
        </header>

        <main className="island-main mx-auto grid max-w-[1480px] gap-5 px-3 py-4 sm:gap-7 sm:px-7 sm:py-7 lg:grid-cols-[minmax(0,1.25fr)_minmax(340px,.75fr)] lg:items-center">
          <section className="island-map-column" aria-label={english ? 'Interactive portfolio map' : 'Carte interactive du parcours'}>
            <div className="island-map-heading mb-3 flex items-end justify-between gap-3 px-1 sm:mb-4">
              <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[var(--cv-accent)]">{english ? 'Choose a destination' : 'Choisis une destination'}</p><h1 id="island-title" className="mt-1 text-2xl font-black text-[var(--cv-text)] sm:text-3xl">{english ? 'Explore my world' : 'Explore mon univers'}</h1></div>
              <span className="hidden font-mono text-[10px] uppercase tracking-[.13em] text-[var(--cv-text-muted)] sm:block">{english ? '4 places · 1 journey' : '4 lieux · 1 parcours'}</span>
            </div>

            <div className="island-map" role="group" aria-label={english ? 'Choose an area on the map or use the buttons below' : 'Sélectionne une zone sur la carte ou utilise les boutons ci-dessous'}>
              <div className="island-map-glow" aria-hidden="true" />
              <svg className="island-map-art" viewBox="0 0 800 620" role="img" aria-labelledby="map-title map-description" preserveAspectRatio="xMidYMid meet">
                  <title id="map-title">{english ? 'Illustrated map of my portfolio archipelago' : 'Carte illustrée de l’archipel du parcours'}</title>
                  <desc id="map-description">{english ? 'A calm island with four destinations: projects to the north, experience to the east, skills to the west and contact to the south.' : 'Une île paisible avec quatre destinations : les projets au nord, l’expérience à l’est, les compétences à l’ouest et le contact au sud.'}</desc>
                <defs>
                  <linearGradient id="island-land" x1=".1" y1="0" x2=".9" y2="1"><stop offset="0" stopColor="#e4eee3" /><stop offset=".53" stopColor="#d5e6d9" /><stop offset="1" stopColor="#c5ddd2" /></linearGradient>
                  <linearGradient id="island-shore" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e9d8b3" /><stop offset="1" stopColor="#e0c995" /></linearGradient>
                  <radialGradient id="island-water"><stop offset="0" stopColor="#dcece7" /><stop offset="1" stopColor="#e8f0e9" /></radialGradient>
                  <filter id="island-shadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="16" stdDeviation="17" floodColor="#284b4a" floodOpacity=".16" /></filter>
                </defs>
                <rect width="800" height="620" fill="url(#island-water)" />
                <path className="island-waterline" d="M40 180c80-70 107-50 160-95s123-46 183-19 127 15 176 60 118 65 166 107M8 422c78-34 135-5 196 19s125 33 183 7 117-23 170 6 145 27 231-2" />
                <path className="island-waterline island-waterline-two" d="M58 207c74-48 100-38 151-78s118-40 173-17 118 10 160 48 113 57 170 87M20 398c77-25 135-1 193 20s117 23 173 3 116-18 165 9 136 22 223-5" />
                <path d="M107 308c3-95 79-166 168-188 57-14 88-55 163-42 82 14 116 62 183 77 80 18 111 85 83 153-24 56-3 93-34 142-33 52-91 46-139 86-58 48-100 51-156 16-53-33-104-4-163-29-66-28-118-91-105-153 5-24-1-41 0-62Z" fill="url(#island-shore)" filter="url(#island-shadow)" />
                <path d="M128 305c2-82 69-145 147-165 54-14 83-47 148-36 72 13 103 55 161 69 69 16 97 73 73 132-20 48-4 82-30 123-28 44-78 40-119 73-51 41-88 44-136 14-45-29-91-4-141-26-57-24-103-78-92-131 5-21-1-36-1-53Z" fill="url(#island-land)" stroke="#aec9ba" strokeWidth="2" />
                <path d="M232 196c40-27 78-34 122-27m67-12c43 5 67 25 104 35m51 65c18 25 23 48 17 74m-69 100c-29 28-54 42-85 43m-98-17c-37-15-63-15-97-39m-49-82c-8-30-2-55 9-77" fill="none" stroke="#b7cec0" strokeWidth="2" strokeDasharray="5 9" opacity=".7" />
                <path className="island-trail" d="M403 309c54-39 82-106 163-161M406 307c106 14 167-4 242-5M399 309c-91-33-160-32-222-18M402 321c19 67 14 101 10 150" />
                <path className="island-river" d="M339 143c-3 31 39 48 17 82s-30 40-11 69 23 31 2 55-19 43 9 60" />
                <g className="island-forest" fill="#8eb49e">
                  <path d="m221 244 17-35 17 35h-10l15 25h-44l15-25Zm81-63 14-29 15 29h-9l13 21h-37l13-21Zm181 35 17-35 17 35h-10l15 24h-44l15-24Zm114 85 16-33 16 33h-9l13 22h-40l13-22Zm-82 137 18-36 18 36h-11l15 25h-45l15-25Zm-217-11 16-32 16 32h-10l14 22h-41l14-22Zm-97-110 15-31 15 31h-9l13 22h-39l13-22Zm299-111 14-29 14 29h-8l12 20h-36l12-20Z" />
                  <circle cx="202" cy="284" r="9" /><circle cx="527" cy="183" r="8" /><circle cx="607" cy="354" r="10" /><circle cx="310" cy="422" r="8" /><circle cx="517" cy="412" r="7" />
                </g>
                <g className="island-houses" fill="#fffdf7" stroke="#a7bfb2" strokeWidth="2">
                  <path d="m535 140 22-20 22 20v26h-44z" /><path d="m576 153 17-16 17 16v21h-34z" /><path d="m621 290 24-20 24 20v28h-48z" /><path d="m654 305 16-14 16 14v20h-32z" /><path d="m359 472 24-21 24 21v28h-48z" /><path d="m397 485 18-16 18 16v22h-36z" /><path d="m173 274 22-19 22 19v26h-44z" /><path d="m204 284 17-15 17 15v20h-34z" />
                </g>
                <g className="island-dock" fill="none" stroke="#9bb9b0" strokeWidth="5" strokeLinecap="round"><path d="M375 305h-32m-4 12h28m-23 12h19" /></g>
                <circle cx="401" cy="307" r="16" fill="#fffdf7" stroke="#a9c5b6" strokeWidth="3" />
                <path d="M398 314v-14l9 7-9 7Z" fill="#0f8b8d" />
              </svg>

              {localizedStops.map((stop, index) => {
                const Icon = stop.icon;
                const isSelected = selectedStop === stop.id;
                return (
                  <button
                    key={stop.id}
                    type="button"
                    className={`island-stop ${stop.className} ${isSelected ? 'is-selected' : ''}`}
                    style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
                    onClick={() => setSelectedStop(stop.id)}
                    aria-pressed={isSelected}
                    aria-label={`${stop.label} : ${stop.subtitle}`}
                  >
                    <span className="island-stop-number">0{index + 1}</span>
                    <span className="island-stop-icon"><Icon size={17} /></span>
                    <span className="island-stop-label"><strong>{stop.label}</strong><small>{stop.subtitle}</small></span>
                    <span className="island-stop-ping" aria-hidden="true" />
                  </button>
                );
              })}

              <AnimatePresence>
                {selected && <motion.div className="island-traveller" aria-hidden="true" initial={false} animate={{ left: `${selected.x}%`, top: `${selected.y}%` }} transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 90, damping: 15 }}><img src="/memoji.png" alt="" /></motion.div>}
              </AnimatePresence>
              <div className="island-map-compass" aria-hidden="true"><span>N</span><Compass size={17} /></div>
              <div className="island-map-scale" aria-hidden="true"><span /> <small>MON PARCOURS</small></div>
            </div>
            <div className="island-mobile-hint flex items-center justify-center gap-2 pt-3 text-[11px] text-[var(--cv-text-muted)]"><MapPin size={13} className="text-[var(--cv-accent)]" /> {english ? 'Choose a destination to see details' : 'Sélectionne une destination pour voir le détail'}</div>
          </section>

          <aside className="island-details" aria-live="polite" aria-atomic="false">
            <AnimatePresence mode="wait" initial={false}>
              {selected ? (
                <motion.section
                  key={selected.id}
                  className="island-info-card cv-card rounded-[1.5rem] p-5 sm:p-7"
                  initial={reduceMotion ? false : { opacity: 0, y: 16, scale: .985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -10, scale: .99 }}
                  transition={{ duration: .28 }}
                  aria-labelledby="island-info-title"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[var(--cv-accent)]">{english ? 'Destination' : 'Destination'} · 0{localizedStops.findIndex((stop) => stop.id === selected.id) + 1}</p><h2 id="island-info-title" className="mt-2 text-3xl font-black text-[var(--cv-text)]">{selected.label}</h2><p className="mt-1 text-sm text-[var(--cv-text-muted)]">{selected.subtitle}</p></div>
                    <span className="island-info-icon"><selected.icon size={21} /></span>
                  </div>
                  <div className="island-info-content mt-6">
                    {selected.id === 'projects' && <div className="space-y-3">{localizedProjects.map((project, index) => <article key={project.name} className="island-project-item"><div className="flex items-center gap-2"><span className="island-index">0{index + 1}</span><h3 className="font-bold text-[var(--cv-text)]">{project.name}</h3></div><p className="mt-1.5 text-sm leading-5 text-[var(--cv-text-muted)]">{project.text}</p><p className="mt-2 font-mono text-[10px] leading-4 text-[var(--cv-accent-strong)]">{project.stack}</p><a href={project.url} target="_blank" rel="noreferrer" className="island-content-link mt-2">{english ? 'View code' : 'Explorer le code'} <ArrowUpRight size={14} /></a></article>)}</div>}
                    {selected.id === 'experience' && <div className="island-career-list">{localizedExperience.map(([company, role, period], index) => <article key={company} className="island-career-item"><span className="island-career-node">{index === 0 ? <span /> : String(index + 1).padStart(2, '0')}</span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-baseline justify-between gap-x-3"><h3 className="font-bold text-[var(--cv-text)]">{company}</h3><span className="font-mono text-[10px] text-[var(--cv-accent)]">{period}</span></div><p className="mt-0.5 text-sm text-[var(--cv-text-muted)]">{role}</p></div></article>)}</div>}
                    {selected.id === 'skills' && <div className="space-y-4">{localizedSkillGroups.map(([title, stack], index) => <article key={title} className="island-skill-group"><div className="flex items-center gap-2"><span className="island-index">0{index + 1}</span><h3 className="font-bold text-[var(--cv-text)]">{title}</h3></div><p className="mt-2 pl-9 text-sm leading-6 text-[var(--cv-text-muted)]">{stack}</p></article>)}</div>}
                    {selected.id === 'contact' && <div className="space-y-3"><p className="text-sm leading-6 text-[var(--cv-text-muted)]">{english ? 'An opportunity, an assignment or an idea? I’d be happy to talk.' : 'Une opportunité, une mission ou une idée ? Je serai heureux d’en discuter.'}</p><a className="island-contact-link" href="mailto:pierremauril01@gmail.com"><span className="island-contact-icon"><MessageCircle size={17} /></span><span><small>E-mail</small><strong>pierremauril01@gmail.com</strong></span><ArrowUpRight size={17} /></a><a className="island-contact-link" href="tel:+2290156115410"><span className="island-contact-icon"><MessageCircle size={17} /></span><span><small>{english ? 'Phone' : 'Téléphone'}</small><strong>+229 01 56 11 54 10</strong></span><ArrowUpRight size={17} /></a><a className="island-contact-link" href="https://github.com/PierreGuede" target="_blank" rel="noreferrer"><span className="island-contact-icon"><Github size={17} /></span><span><small>{english ? 'Code & projects' : 'Code & projets'}</small><strong>github.com/PierreGuede</strong></span><ArrowUpRight size={17} /></a><p className="flex items-center gap-2 pt-1 text-xs text-[var(--cv-text-muted)]"><MapPin size={14} className="text-[var(--cv-accent)]" /> Abomey-Calavi, {english ? 'Benin' : 'Bénin'}</p></div>}
                  </div>
                  <div className="island-info-footer mt-6 flex items-center justify-between border-t border-[var(--cv-border)] pt-4"><span>ARCHIPEL DU PARCOURS</span><span>PG · 2026</span></div>
                </motion.section>
              ) : (
                <motion.section key="welcome" className="island-welcome cv-card rounded-[1.5rem] p-6 sm:p-8" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} aria-label={english ? 'Exploration instructions' : 'Instructions d’exploration'}>
                  <span className="island-welcome-icon"><Compass size={23} /></span>
                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[.2em] text-[var(--cv-accent)]">{english ? 'Welcome aboard' : 'Bienvenue à bord'}</p>
                  <h2 className="mt-2 text-3xl font-black leading-tight text-[var(--cv-text)]">{english ? 'Discover my journey in a different way.' : 'Mon parcours, à découvrir autrement.'}</h2>
                  <p className="mt-4 leading-7 text-[var(--cv-text-muted)]">{english ? 'Each place tells part of my story. Choose a marker on the map to open its details and explore at your own pace.' : 'Chaque lieu raconte une partie de mon travail. Choisis un repère sur la carte pour ouvrir ses détails et parcourir le contenu à ton rythme.'}</p>
                  <div className="island-welcome-route mt-7">{localizedStops.map((stop, index) => <div key={stop.id} className="island-welcome-route-stop"><span>{String(index + 1).padStart(2, '0')}</span><span>{stop.label}</span></div>)}</div>
                  <p className="mt-6 text-xs text-[var(--cv-text-muted)]">{english ? 'Keyboard navigation: press Tab to move between locations, then Enter to select one.' : 'Navigation au clavier : utilise Tab pour passer d’un lieu à l’autre, puis Entrée pour le sélectionner.'}</p>
                </motion.section>
              )}
            </AnimatePresence>
          </aside>
        </main>

        <footer className="island-bottom mx-auto flex max-w-[1480px] items-center justify-between gap-4 px-4 pb-5 pt-1 text-[10px] text-[var(--cv-text-muted)] sm:px-7"><span>PIERRE MAURIL MAFOYA GUEDE</span><span>{english ? 'Interactive exploration · Benin' : 'Une exploration interactive · Bénin'}</span></footer>
      </div>
    </motion.div>
  );
};

export default IslandExperience;
