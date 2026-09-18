import { FC } from "react";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";

const Hero: FC = () => {
    return (
      <section className="min-h-[calc(100vh-4rem)] flex items-center px-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-sm sm:text-base mb-4 font-semibold uppercase tracking-[0.18em] text-[var(--cv-accent)]">
              Développeur Fullstack - Applications web & plateformes numériques
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-[var(--cv-text)] mb-5">
              Pierre Mauril Mafoya GUEDE
            </h1>
            <p className="text-lg sm:text-xl leading-8 text-[var(--cv-text-muted)] max-w-3xl">
              Je conçois des applications métier robustes, sécurisées et maintenables, du frontend Angular ou VueJS
              jusqu'aux API NestJS, Spring Boot ou Laravel, avec PostgreSQL, Docker et une vraie attention aux besoins utilisateurs.
            </p>

            <div className="mt-7 grid sm:grid-cols-3 gap-3 max-w-3xl">
              {[
                ["4+ ans", "d'expérience professionnelle"],
                ["Fullstack", "frontend, backend, API"],
                ["Bénin", "Abomey-Calavi"],
              ].map(([value, label]) => (
                <div key={value} className="cv-card rounded-lg p-4">
                  <p className="text-2xl font-black text-[var(--cv-accent-strong)]">{value}</p>
                  <p className="text-sm text-[var(--cv-text-muted)]">{label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-300 cv-button-outline font-semibold"
            >
              <Mail size={18} />
              Me contacter
            </a>
            <a
              href="/CV_PIERRE_MAURIL_MAFOYA_GUEDE.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-300 cv-button-primary font-semibold"
            >
              <Download size={18} />
              Télécharger CV
            </a>
            <a
              href="https://pierre-guede.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-300 text-[var(--cv-accent-strong)] font-semibold"
            >
              Voir en ligne <ArrowRight size={18} />
            </a>
            </div>
          </div>

          <div className="cv-card rounded-lg p-6 sm:p-8">
            <div className="flex items-center gap-5">
              <img src="/memoji.png" alt="Avatar Pierre Guede" className="w-28 sm:w-36 shrink-0" />
              <div>
                <p className="font-bold text-xl text-[var(--cv-text)]">Profil opérationnel</p>
                <p className="mt-2 text-[var(--cv-text-muted)]">Architecture logicielle, intégration de services, paiements, bases de données et déploiement.</p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[var(--cv-text-muted)]">
              <p className="flex gap-3"><MapPin className="text-[var(--cv-accent)] shrink-0" size={20} /> 132P, Fignonhou, Abomey-Calavi, Bénin</p>
              <p className="rounded-lg bg-[var(--cv-surface-strong)] p-4 leading-7">
               Développeur Fullstack spécialisé dans la conception et le développement de plateformes web et de solutions numériques. Titulaire d'une Licence en Architecture des Logiciels et d'une Licence Nationale en Système Informatique et Logiciel, je dispose d'une expérience professionnelle dans le développement, l'intégration et la maintenance d'applications métier.
 </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
