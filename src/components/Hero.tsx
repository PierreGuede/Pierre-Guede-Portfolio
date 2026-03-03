import { FC } from "react";

const Hero: FC = () => {
    return (
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-3xl">
          <p className="text-lg mb-4 text-[var(--cv-accent)]">Bonjour, je suis</p>
          <h1 className="text-5xl font-bold text-[var(--cv-text)] mb-4">Pierre Mauril Mafoya GUEDE</h1>
          <h2 className="text-3xl mb-5 text-[var(--cv-text-muted)]">Développeur Fullstack</h2>
          <p className="mb-8 leading-8 text-[var(--cv-text-muted)]">
            Développeur passionné par la création de solutions innovantes, rigoureux et autonome, orienté
            résultats et qualité logicielle.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-md transition-all duration-300 cv-button-outline"
            >
              Me contacter
            </a>
            <a
              href="/CV_PIERRE_MAURIL_MAFOYA_GUEDE.pdf"
              download
              className="inline-block px-8 py-3 rounded-md transition-all duration-300 cv-button-primary"
            >
              Télécharger CV
            </a>
            {/* <a
              href="https://pierre-guede.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-md transition-all duration-300 cv-button-outline"
            >
              Portfolio
            </a> */}
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
