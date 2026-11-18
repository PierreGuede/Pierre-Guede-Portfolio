import { ArrowUp } from 'lucide-react';

const Footer = () => (
  <footer className="portfolio-footer relative overflow-hidden pt-10">
    <div className="portfolio-footer-top mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 pb-6">
      <div className="text-sm text-[var(--cv-text-muted)]">
        <p>© 2026 Pierre Mauril Mafoya GUEDE</p>
        <p className="mt-1 text-xs">Développeur Fullstack · Bénin</p>
      </div>
      <a href="#home" className="footer-top-link inline-flex items-center gap-2 text-sm font-semibold text-[var(--cv-accent-strong)]"><ArrowUp size={16} /> Retour en haut</a>
    </div>
    <div className="footer-name-wrap relative overflow-hidden " aria-label="Pierre Mauril Mafoya Guede">
      <p className="footer-name pt-12" aria-hidden="true">PIERRE MAURIL MAFOYA GUEDE</p>
    </div>
  </footer>
);

export default Footer;
