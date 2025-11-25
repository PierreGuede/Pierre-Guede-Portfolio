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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className={`py-20 px-4 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 justify-center items-center align-center content-center text-center">
          <div 
            ref={aboutRef}
            className="opacity-0 transform translate-y-6 transition-all duration-700 ease-out w-full text-left"
          >
        <h2 className="text-3xl font-bold mb-8 text-[#00ff88]">À propos de moi</h2>
            <p className="mb-4">
              Développeur passionné par la création de solutions logicielles innovantes, 
              avec une expertise solide dans la conception et l'optimisation de logiciels.
            </p>
            <p className="mb-4">
              Je m'efforce constamment d'apprendre de nouvelles technologies et de me 
              tenir à jour avec les dernières tendances du développement web.
            </p>
            <p className="mb-4">
              Mon approche combine créativité et rigueur technique pour délivrer des
              solutions robustes et évolutives qui répondent aux besoins des utilisateurs.
            </p>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <img src="/memoji.png" alt="" className="w-3/6" />
            {/* Espace réservé pour une éventuelle image ou contenu supplémentaire */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// styles/about.css
/* Ces styles peuvent être ajoutés à votre fichier CSS global */

