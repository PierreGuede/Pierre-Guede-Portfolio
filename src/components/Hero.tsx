import { ArrowDown, ArrowRight, Compass, Download, Github, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface HeroProps {
  onExplore: () => void;
}

const Hero = ({ onExplore }: HeroProps) => {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: "easeOut" as const },
  });

  return (
    <section id="home" className="hero-section relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-4 py-16 sm:py-20">
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="max-w-6xl mx-auto grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="relative z-10">
          <motion.p {...reveal(0.05)} className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--cv-border)] bg-[var(--cv-surface)]/80 px-4 py-2 text-sm font-semibold text-[var(--cv-accent-strong)] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--cv-accent)] animate-pulse" />
            Développeur fullstack · Applications métier
          </motion.p>
          <motion.h1 {...reveal(0.14)} className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-[var(--cv-text)] sm:text-6xl lg:text-7xl">
            Je transforme les besoins métier en <span className="hero-highlight">logiciels utiles.</span>
          </motion.h1>
          <motion.p {...reveal(0.24)} className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cv-text-muted)] sm:text-xl">
            Pierre Mauril Mafoya GUEDE — je conçois des plateformes web et des API, du frontend Angular ou Vue.js aux services NestJS, Spring Boot et Laravel.
          </motion.p>

          <motion.div {...reveal(0.32)} className="mt-7 flex flex-wrap gap-2.5" aria-label="Repères de parcours">
            {[["4+ ans", "en développement"], ["Web", "interfaces & API"], ["Bénin", "Abomey-Calavi"]].map(([value, label]) => (
              <div key={value} className="hero-fact rounded-xl border border-[var(--cv-border)] bg-[var(--cv-card)] px-4 py-3">
                <span className="block text-lg font-extrabold text-[var(--cv-accent-strong)]">{value}</span>
                <span className="text-xs text-[var(--cv-text-muted)]">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div {...reveal(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
            <button type="button" onClick={onExplore} data-open-explorer className="cv-button-primary inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold transition-transform hover:-translate-y-0.5">
              <Compass size={18} /> Explorer mon univers <ArrowRight size={18} />
            </button>
            <a href="#projects" className="cv-button-outline inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold">
              Parcours classique <ArrowDown size={16} />
            </a>
            <a href="/CV_PIERRE_MAURIL_MAFOYA_GUEDE.pdf" download className="inline-flex items-center gap-2 px-3 py-3 font-semibold text-[var(--cv-accent-strong)] transition-colors hover:text-[var(--cv-accent)]">
              <Download size={18} /> CV
            </a>
          </motion.div>
          <motion.div {...reveal(0.48)} className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--cv-text-muted)]">
            <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-[var(--cv-accent)]" /> Abomey-Calavi, Bénin</span>
            <a className="inline-flex items-center gap-2 transition-colors hover:text-[var(--cv-accent-strong)]" href="https://github.com/PierreGuede" target="_blank" rel="noreferrer"><Github size={15} /> GitHub <span className="sr-only">(ouvre un nouvel onglet)</span></a>
          </motion.div>
        </div>

        <motion.div {...reveal(0.22)} className="relative mx-auto w-full max-w-lg">
          <div className="hero-portrait-glow" aria-hidden="true" />
          <div className="hero-profile cv-card relative rounded-[2rem] p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-[var(--cv-border)] pb-4">
              <div className="flex items-center gap-2" aria-hidden="true"><i className="h-2.5 w-2.5 rounded-full bg-[var(--cv-accent-warm)]" /><i className="h-2.5 w-2.5 rounded-full bg-[var(--cv-accent)]/50" /><i className="h-2.5 w-2.5 rounded-full bg-[var(--cv-accent-strong)]/30" /></div>
              <span className="font-mono text-xs tracking-wide text-[var(--cv-text-muted)]">PIERRE_GUEDE / PROFIL</span>
            </div>
            <div className="grid grid-cols-[0.85fr_1.15fr] items-center gap-4 py-7 sm:gap-6">
              <div className="portrait-frame relative mx-auto flex aspect-square w-full max-w-[190px] items-center justify-center overflow-hidden rounded-[1.5rem]">
                <img src="/memoji.png" alt="Portrait illustré de Pierre Guede" className="relative z-10 w-[90%] drop-shadow-xl" />
                <span className="portrait-ring" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--cv-accent)]">Mon terrain de jeu</p>
                <h2 className="mt-2 text-2xl font-black leading-tight text-[var(--cv-text)] sm:text-3xl">Des idées aux systèmes fiables.</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--cv-text-muted)]">Interfaces claires, API documentées, données bien structurées et intégrations prêtes pour le terrain.</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-[var(--cv-border)] pt-4 text-center">
              {[["01", "Comprendre"], ["02", "Construire"], ["03", "Améliorer"]].map(([num, label]) => (
                <div key={num} className="rounded-lg bg-[var(--cv-surface-strong)] px-2 py-3"><span className="block font-mono text-xs text-[var(--cv-accent)]">{num}</span><span className="mt-1 block text-xs font-semibold text-[var(--cv-text)] sm:text-sm">{label}</span></div>
              ))}
            </div>
          </div>
          <a href="#about" className="hero-scroll-hint mx-auto mt-6 flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--cv-text-muted)]">
            Explorer le parcours <ArrowDown size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
