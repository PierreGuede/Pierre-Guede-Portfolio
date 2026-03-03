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
        <div className="grid md:grid-cols-2 gap-8 justify-center items-center align-center content-center text-center">
          <div 
            ref={aboutRef}
            className="opacity-0 transform translate-y-6 transition-all duration-700 ease-out w-full text-left cv-card p-8 rounded-lg"
          >
        <h2 className="text-3xl font-bold mb-8 section-title">À propos de moi</h2>
            <p className="mb-4">
              Développeur fullstack passionné par la création de solutions innovantes, je suis motivé par les défis
              et l’apprentissage continu. Rigoureux et autonome, j’aime travailler en équipe pour concevoir des
              projets efficaces et adaptés aux besoins des utilisateurs.
            </p>
            <p className="mb-4">
              J’ai travaillé sur des plateformes de gestion des péages, du personnel, de la fiscalité et de
              l’universitaire, du frontend au backend, avec Angular, React/Next.js, Laravel, NestJS, Spring Boot,
              MySQL et PostgreSQL.
            </p>
            <p className="mb-6">
              Actuellement à la recherche d’un poste de développeur, je suis ouvert à toute opportunité professionnelle.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3 section-title">Langues</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Français — langue maternelle</li>
                <li>Anglais — intermédiaire</li>
                <li>Allemand — débutant</li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <img src="/memoji.png" alt="Avatar Pierre Guede" className="w-3/6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
