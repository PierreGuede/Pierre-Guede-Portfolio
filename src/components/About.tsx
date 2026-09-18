import { useEffect, useRef } from 'react';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = '' }) => {
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
        <h2 className="text-3xl font-bold mb-6 section-title">À propos</h2>
            <p className="mb-4 leading-8 text-[var(--cv-text-muted)]">
              Développeur fullstack spécialisé dans la conception et le développement de plateformes web et de
              solutions numériques. Je m'intéresse particulièrement aux applications performantes, sécurisées,
              maintenables et adaptées aux usages réels.
            </p>
            <p className="mb-4 leading-8 text-[var(--cv-text-muted)]">
              Mon parcours m'a amené à travailler sur des plateformes de gestion des péages, du personnel, des
              opérations internes, de la fiscalité, de la paie et de la gestion universitaire. J'interviens autant sur
              l'interface que sur les API, les modèles de données, l'intégration de services et la maintenance.
            </p>
            <p className="leading-8 text-[var(--cv-text-muted)]">
              Je suis rigoureux, autonome, habitué à collaborer avec des équipes métier et techniques, et attentif à
              la qualité du code livré en production.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["Applications métier", "Péages, personnel, opérations internes, fiscalité et gestion universitaire."],
              ["Intégration & API", "REST, GraphQL, Swagger/OpenAPI, services de paiement et notifications."],
              ["Qualité & support", "Tests unitaires, tests fonctionnels, débogage, maintenance corrective et évolutive."],
              ["IA responsable", "Assistance au développement, documentation, analyse technique et revue humaine systématique."],
            ].map(([title, text]) => (
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
