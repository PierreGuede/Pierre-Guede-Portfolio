import { FC } from 'react';
import { Experience as ExperienceType } from '../types';

const Experience: FC = () => {
  const experiences: ExperienceType[] = [
    {
      company: 'HOMINTEC (CDD) – Bénin',
      period: 'Depuis novembre 2024',
      description: "Participation au développement et à la maintenance de plateformes de gestion des péages et du personnel. Optimisation d'applications internes en collaboration avec les équipes métier. Stack: NestJS (backend), Angular (frontend), Spring Boot, MySQL, PostgreSQL, Bootstrap, SweetAlert, IIS Manager."
    },
    {
      company: 'MTECH (CDD) – Bénin',
      period: 'Novembre 2023 - Mars 2024',
      description: "Conception et développement d’applications web, avec un focus sur l’interface utilisateur et la gestion du backend. Stack: Next.js (React), Node.js, MySQL."
    },
    {
      company: 'EDEAL – Bénin',
      period: 'Août 2023 - Novembre 2023',
      description: "Développement et personnalisation de logiciels de gestion d’entreprise (comptabilité, paie). Stack: Laravel (backend), Sage 100 Comptabilité, Sage 100 Gestion Commerciale."
    },
    {
      company: 'Consulting Engineering Team (TEC-Sarl) – Bénin',
      period: 'Avril 2022 - Janvier 2023',
      description: "Contribution au développement d’applications de gestion universitaire et fiscale. Stack: Laravel, Vue.js, MySQL."
    },
    {
      company: 'ATS-Afrique – Bénin',
      period: 'Septembre 2021 - Octobre 2021',
      description: "Découverte du framework Laravel et participation à des projets pour des entreprises partenaires."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 section-title">Parcours Professionnel</h2>
        <div className="block md:grid md:grid-cols-2 space-y-12 md:space-x-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg cv-card"
            >
              <h3 className="text-xl font-bold text-[var(--cv-text)]">{exp.company}</h3>
              <p className="text-sm mb-4 text-[var(--cv-accent)]">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
