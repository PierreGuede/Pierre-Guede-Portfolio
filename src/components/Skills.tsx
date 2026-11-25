import { FC, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Database, Layers3, Smartphone } from 'lucide-react';
import {
  AngularJsIcon, LaravelIcon, NestJsIcon, NextJsIcon, ReactJsIcon, VueJsIcon,
  GitIcon, VsCodeIcon, SqlIcon, PostgresIcon, WordPressIcon, NodeJsIcon,
  HtmlIcon, CssIcon, TailwindIcon, PhpIcon, ApiRestIcon, GraphQlIcon,
  DockerIcon, SwaggerIcon, PostmanIcon, GitHubIcon, SpirngBootIcon,
  FlutterIcon, KotlinIcon, SwiftIcon, ReactNativeIcon, SkipIcon,
} from './SkillsIcon';

const skillCategories = [
  {
    id: 'frontend', title: 'Frontend', kicker: 'Interfaces & expérience', icon: <Layers3 size={18} />,
    summary: 'Des interfaces accessibles, réactives et pensées pour les usages métier.',
    skills: [
      { name: 'Angular', icon: <AngularJsIcon /> }, { name: 'Vue.js', icon: <VueJsIcon /> },
      { name: 'React', icon: <ReactJsIcon /> }, { name: 'Next.js', icon: <NextJsIcon /> },
      { name: 'HTML5', icon: <HtmlIcon /> }, { name: 'CSS / Sass', icon: <CssIcon /> },
      { name: 'Tailwind CSS', icon: <TailwindIcon /> },
    ],
  },
  {
    id: 'backend', title: 'Backend', kicker: 'Services & API', icon: <Code2 size={18} />,
    summary: 'Des services structurés et documentés, connectés aux besoins des produits.',
    skills: [
      { name: 'Java · Spring Boot', icon: <SpirngBootIcon /> }, { name: 'NestJS', icon: <NestJsIcon /> },
      { name: 'Node.js', icon: <NodeJsIcon /> }, { name: 'Laravel', icon: <LaravelIcon /> },
      { name: 'PHP', icon: <PhpIcon /> }, { name: 'API REST', icon: <ApiRestIcon /> },
      { name: 'GraphQL', icon: <GraphQlIcon /> },
    ],
  },
  {
    id: 'outils', title: 'Outils', kicker: 'Données, livraison & qualité', icon: <Database size={18} />,
    summary: 'Les outils qui soutiennent le développement, la documentation et la livraison.',
    skills: [
      { name: 'PostgreSQL', icon: <PostgresIcon /> }, { name: 'MySQL', icon: <SqlIcon /> },
      { name: 'Docker', icon: <DockerIcon /> }, { name: 'Git', icon: <GitIcon /> },
      { name: 'GitHub', icon: <GitHubIcon /> }, { name: 'Swagger / OpenAPI', icon: <SwaggerIcon /> },
      { name: 'Postman', icon: <PostmanIcon /> }, { name: 'VS Code', icon: <VsCodeIcon /> },
      { name: 'WordPress', icon: <WordPressIcon /> },
    ],
  },
  {
    id: 'mobile', title: 'Mobile', kicker: 'Applications iOS & Android', icon: <Smartphone size={18} />,
    summary: 'Des applications mobiles natives et cross-platform, du prototype jusqu\'aux stores.',
    skills: [
      { name: 'Flutter', icon: <FlutterIcon /> },
      { name: 'React Native', icon: <ReactNativeIcon /> },
      { name: 'Kotlin', icon: <KotlinIcon /> },
      { name: 'Swift', icon: <SwiftIcon /> },
      { name: 'Skip', icon: <SkipIcon /> },
    ],
  },
];

const Skills: FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const panels = Array.from(document.querySelectorAll<HTMLElement>('[data-skill-panel]'));
    if (!('IntersectionObserver' in window) || panels.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
      if (!visible) return;
      const nextIndex = panels.indexOf(visible.target as HTMLElement);
      if (nextIndex >= 0) setActiveCategory(nextIndex);
    }, { rootMargin: '-22% 0px -38% 0px', threshold: [0.05, 0.2, 0.4, 0.6, 0.8] });

    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (index: number) => {
    const panel = document.getElementById(`skills-${skillCategories[index].id}`);
    const isMobile = window.matchMedia('(max-width: 640px)').matches;
    panel?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: isMobile ? 'nearest' : 'start',
      inline: isMobile ? 'start' : 'nearest',
    });
  };

  return (
    <section id="skills" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--cv-accent)]">Mon environnement de travail</p>
          <h2 className="text-3xl font-bold section-title sm:text-4xl">Compétences</h2>
          <p className="mt-4 leading-7 text-[var(--cv-text-muted)]">Explore mes outils par domaine. Sur mobile, fais défiler les cartes horizontalement.</p>
        </div>

        <div className="skills-story">
          <nav className="skills-story-nav" aria-label="Catégories de compétences">
            <p className="skills-story-label">Explorer par domaine</p>
            <div className="skills-story-tabs">
              {skillCategories.map((category, index) => (
                <button
                  key={category.id}
                  type="button"
                  aria-current={activeCategory === index ? 'location' : undefined}
                  aria-controls={`skills-${category.id}`}
                  onClick={() => scrollToCategory(index)}
                  className={`skills-story-tab ${activeCategory === index ? 'is-active' : ''}`}
                >
                  <span className="skills-story-tab-icon">{category.icon}</span>
                  <span className="min-w-0 flex-1 text-left"><span className="skills-story-tab-number">0{index + 1}</span><span className="skills-story-tab-title">{category.title}</span></span>
                  <span className="skills-story-tab-count">{String(category.skills.length).padStart(2, '0')}</span>
                  {activeCategory === index && <motion.span layoutId="skill-story-indicator" className="skills-story-active-mark" transition={{ type: 'spring', stiffness: 340, damping: 32 }} />}
                </button>
              ))}
            </div>
          </nav>

          <div className="skills-story-main">
            <div className="skills-story-progress" aria-hidden="true"><span style={{ height: `${((activeCategory + 1) / skillCategories.length) * 100}%` }} /></div>
            <div className="skills-story-panels">
            {skillCategories.map((category, categoryIndex) => (
              <section
                key={category.id}
                id={`skills-${category.id}`}
                data-skill-panel
                aria-labelledby={`skills-title-${category.id}`}
                className={`skills-story-panel ${activeCategory === categoryIndex ? 'is-active' : ''}`}
              >
                <div className="skills-story-panel-inner cv-card rounded-2xl p-5 sm:p-7 lg:p-8">
                  <div className="skills-story-panel-top">
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--cv-accent)]">{category.kicker}</p>
                      <h3 id={`skills-title-${category.id}`} className="mt-2 text-2xl font-black text-[var(--cv-text)] sm:text-3xl">{category.title}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--cv-text-muted)]">{category.summary}</p>
                    </div>
                    <span className="skills-story-panel-number" aria-hidden="true">0{categoryIndex + 1}</span>
                  </div>
                  <div className="skills-story-list">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.97 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: reduceMotion ? 0 : skillIndex * 0.055 }}
                        className="skill-row group flex min-h-[76px] items-center gap-3 rounded-xl border border-[var(--cv-border)] bg-[var(--cv-surface)]/75 px-3 py-3 sm:px-4"
                      >
                        <span className="skill-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--cv-surface-strong)] p-1.5">{skill.icon}</span>
                        <span className="text-sm font-semibold leading-snug text-[var(--cv-text)]">{skill.name}</span>
                        <span className="skill-dot ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cv-border)]" />
                      </motion.div>
                    ))}
                  </div>
                  <div className="skills-story-panel-footer"><span>0{categoryIndex + 1} / 0{skillCategories.length}</span><span>{String(category.skills.length).padStart(2, '0')} compétences</span></div>
                </div>
              </section>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
