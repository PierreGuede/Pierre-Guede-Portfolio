import { FC, useEffect, useState } from 'react';
import { MotionValue, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';

const navItems = [
  { path: 'home', label: 'Accueil' },
  { path: 'about', label: 'À propos' },
  { path: 'skills', label: 'Compétences' },
  { path: 'experience', label: 'Expérience' },
  { path: 'education', label: 'Formation' },
  { path: 'projects', label: 'Projets' },
  { path: 'contact', label: 'Contact' },
];

interface ShrinkingWordProps {
  initial: string;
  suffix: string;
  start: number;
  end: number;
  scrollY: MotionValue<number>;
  reduceMotion: boolean;
  isScrolled: boolean;
}

const ShrinkingWord: FC<ShrinkingWordProps> = ({ initial, suffix, start, end, scrollY, reduceMotion, isScrolled }) => {
  const animatedWidth = useTransform(scrollY, [0, start, end], ['3em', '3em', '0em']);
  const animatedOpacity = useTransform(scrollY, [start, end - 10, end], [1, 0.72, 0]);
  const animatedScale = useTransform(scrollY, [start, end], [1, 0.08]);
  const maxWidth = reduceMotion ? (isScrolled ? '0em' : '3em') : animatedWidth;
  const opacity = reduceMotion ? (isScrolled ? 0 : 1) : animatedOpacity;
  const scaleX = reduceMotion ? (isScrolled ? 0.08 : 1) : animatedScale;

  return (
    <span className="navbar-word">
      <span>{initial}</span>
      <motion.span className="navbar-word-suffix" style={{ maxWidth, opacity, scaleX }} aria-hidden="true">{suffix}</motion.span>
    </span>
  );
};

interface ShrinkingGapProps {
  scrollY: MotionValue<number>;
  reduceMotion: boolean;
  isScrolled: boolean;
}

const ShrinkingGap: FC<ShrinkingGapProps> = ({ scrollY, reduceMotion, isScrolled }) => {
  const animatedWidth = useTransform(scrollY, [0, 70, 105], ['.34em', '.18em', '.06em']);
  const width = reduceMotion ? (isScrolled ? '.06em' : '.34em') : animatedWidth;
  return <motion.span aria-hidden="true" className="navbar-word-gap" style={{ width }} />;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 44);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <nav
      className={`portfolio-nav fixed inset-x-0 top-0 z-50 ${isScrolled ? 'is-scrolled' : ''}`}
      aria-label="Navigation principale"
    >
      <div className="navbar-inner mx-auto h-full max-w-6xl px-4">
        <div className="navbar-left hidden items-center justify-center gap-4 xl:flex">
          {navItems.slice(0, 3).map(({ path, label }) => (
            <a key={path} href={`#${path}`} className="nav-link navbar-link">{label}</a>
          ))}
        </div>

        <a href="#home" aria-label="Pierre Mauril Guede, retour à l’accueil" className="navbar-brand" onClick={() => setIsOpen(false)}>
          <span className="navbar-brand-text" aria-hidden="true">
            <ShrinkingWord initial="P" suffix="ierre" start={8} end={72} scrollY={scrollY} reduceMotion={reduceMotion} isScrolled={isScrolled} />
            <ShrinkingGap scrollY={scrollY} reduceMotion={reduceMotion} isScrolled={isScrolled} />
            <ShrinkingWord initial="M" suffix="auril" start={20} end={88} scrollY={scrollY} reduceMotion={reduceMotion} isScrolled={isScrolled} />
            <ShrinkingGap scrollY={scrollY} reduceMotion={reduceMotion} isScrolled={isScrolled} />
            <ShrinkingWord initial="G" suffix="uede" start={34} end={104} scrollY={scrollY} reduceMotion={reduceMotion} isScrolled={isScrolled} />
          </span>
        </a>

        <div className="navbar-right hidden items-center justify-center gap-4 xl:flex">
          {navItems.slice(3).map(({ path, label }) => (
            <a key={path} href={`#${path}`} className="nav-link navbar-link">{label}</a>
          ))}
          <a href="/CV_PIERRE_MAURIL_MAFOYA_GUEDE.pdf" download className="navbar-cv inline-flex items-center gap-1.5 rounded-md font-semibold">
            <Download size={14} /> CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="navbar-menu-button inline-flex items-center justify-center rounded-lg p-2 text-[var(--cv-text)] transition-colors hover:bg-[var(--cv-surface-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cv-accent)] xl:hidden"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav-panel xl:hidden ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5">
          {navItems.map(({ path, label }) => (
            <a key={path} href={`#${path}`} className="mobile-nav-link" tabIndex={isOpen ? 0 : -1} onClick={() => setIsOpen(false)}>
              <span>{label}</span><span aria-hidden="true">↗</span>
            </a>
          ))}
          <a href="/CV_PIERRE_MAURIL_MAFOYA_GUEDE.pdf" download className="cv-button-primary mt-3 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-semibold" tabIndex={isOpen ? 0 : -1} onClick={() => setIsOpen(false)}>
            <Download size={17} /> Télécharger mon CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
