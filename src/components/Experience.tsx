import { FC } from 'react';
import { Experience as ExperienceType } from '../types';

const Experience: FC = () => {
  const experiences: ExperienceType[] = [
    {
      company: 'HOMINTEC (CDD) – Bénin',
      role: 'Développeur Fullstack',
      period: 'Novembre 2024 - Juillet 2026',
      bullets: [
        "Conception, développement et maintenance de plateformes web métier pour la gestion des péages, du personnel et des opérations internes.",
        "Participation à Gate-24 : passages, transactions et opérations liées aux postes de péage.",
        "Développement frontend Angular, services backend NestJS, API REST, paiements, TPE, files d'attente, réservation de tickets et notifications.",
        "Conception de bases PostgreSQL, utilisation de Docker et accompagnement d'une équipe HOMINTEC-Gabon."
      ],
      stack: ['Angular', 'NestJS', 'PostgreSQL', 'Docker', 'API REST', 'TPE']
    },
    {
      company: 'MTECH (CDD) – Bénin',
      role: 'Développeur Fullstack',
      period: 'Novembre 2023 - Mars 2024',
      bullets: [
        "Conception et développement d'applications web fullstack.",
        "Développement de fonctionnalités frontend et backend, intégration de services et consommation d'API REST.",
        "Participation à la conception et à l'évolution des modèles de données."
      ],
      stack: ['React', 'Next.js', 'Node.js', 'MySQL', 'API REST']
    },
    {
      company: 'EDEAL – Bénin',
      role: 'Développeur Backend',
      period: 'Août 2023 - Novembre 2023',
      bullets: [
        "Développement backend et personnalisation de solutions de gestion d'entreprise.",
        "Intervention sur des modules liés à la comptabilité et à la gestion de la paie.",
        "Adaptation de fonctionnalités aux besoins spécifiques des utilisateurs."
      ],
      stack: ['Laravel', 'PHP', 'Sage 100', 'Gestion métier']
    },
    {
      company: 'Consulting Engineering Team (TEC-Sarl) – Bénin',
      role: 'Développeur Fullstack',
      period: 'Avril 2022 - Janvier 2023',
      bullets: [
        "Participation au développement d'applications de gestion universitaire et fiscale.",
        "Implémentation et évolution de modules fonctionnels dans un environnement web.",
        "Développement frontend et backend."
      ],
      stack: ['Laravel', 'VueJS', 'MySQL']
    },
    {
      company: 'ATS-Afrique – Bénin',
      role: 'Stagiaire Développeur Fullstack',
      period: 'Septembre 2021 - Octobre 2021',
      bullets: [
        "Première expérience professionnelle avec Laravel.",
        "Implication dans des projets pour des entreprises partenaires."
      ],
      stack: ['Laravel', 'PHP']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold section-title">Parcours professionnel</h2>
          <p className="mt-4 text-[var(--cv-text-muted)] leading-7">
            Des missions centrées sur la livraison d'applications métier, l'intégration de services, la maintenance
            évolutive et la traduction de besoins fonctionnels en solutions techniques fiables.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg cv-card"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[var(--cv-text)]">{exp.company}</h3>
                  <p className="text-sm font-semibold text-[var(--cv-accent-strong)]">{exp.role}</p>
                </div>
                <p className="text-sm text-[var(--cv-accent)] font-semibold">{exp.period}</p>
              </div>
              <ul className="space-y-3 text-[var(--cv-text-muted)] leading-7">
                {exp.bullets?.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 rounded-full bg-[var(--cv-accent-warm)] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.stack?.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm cv-tag rounded">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
