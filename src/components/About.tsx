import { useEffect, useRef } from 'react';
import { usePreferences } from '../preferences';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = '' }) => {
  const { locale } = usePreferences();
  const english = locale === 'en';
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const current = aboutRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section id="about" className={`py-20 px-4 scroll-mt-24 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          <div 
            ref={aboutRef}
            className="opacity-0 transform translate-y-6 transition-all duration-700 ease-out w-full text-left cv-card p-6 sm:p-8 rounded-lg"
          >
        <h2 className="text-3xl font-bold mb-6 section-title">{english ? 'About' : 'À propos'}</h2>
            <p className="mb-4 leading-8 text-[var(--cv-text-muted)]">
              {english ? 'I enjoy turning real needs into tools that are simple to use and reliable over time. I work across web and mobile interfaces, as well as the services and data behind them.' : 'J’aime partir d’un besoin concret et le traduire en un outil simple à utiliser et fiable dans le temps. Je travaille aussi bien sur les interfaces web et mobiles que sur les services et les données qui les font fonctionner.'}
            </p>
            <p className="mb-4 leading-8 text-[var(--cv-text-muted)]">
              {english ? 'My experience spans toll management, HR, internal operations, taxation, payroll and university management. These areas taught me to listen to users and account for real-world constraints.' : 'Mon expérience couvre la gestion des péages, du personnel, des opérations internes, de la fiscalité, de la paie et de la gestion universitaire. Ces domaines m’ont appris à écouter les utilisateurs et à tenir compte des réalités du terrain.'}
            </p>
            <p className="leading-8 text-[var(--cv-text-muted)]">
              {english ? 'I care about code quality, documentation and clear collaboration between technical and business teams.' : 'J’accorde de l’importance à la qualité du code, à la documentation et à une collaboration claire entre équipes techniques et métier.'}
            </p>
          </div>
          <div className="about-highlights grid gap-4">
            {(english ? [
              ['Business applications', 'Tolls, HR, internal operations, taxation and university management.'],
              ['Integrations & APIs', 'REST, GraphQL, Swagger/OpenAPI, payment services and notifications.'],
              ['Quality & support', 'Unit and functional testing, debugging, corrective and ongoing maintenance.'],
              ['Responsible AI', 'Development assistance, documentation, technical analysis and systematic human review.'],
            ] : [
              ["Applications métier", "Péages, personnel, opérations internes, fiscalité et gestion universitaire."],
              ["Intégration & API", "REST, GraphQL, Swagger/OpenAPI, services de paiement et notifications."],
              ["Qualité & support", "Tests unitaires, tests fonctionnels, débogage, maintenance corrective et évolutive."],
              ["IA responsable", "Assistance au développement, documentation, analyse technique et revue humaine systématique."],
            ]).map(([title, text]) => (
              <div key={title} className="cv-card rounded-lg p-5">
                <h3 className="font-bold text-[var(--cv-accent-strong)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--cv-text-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
