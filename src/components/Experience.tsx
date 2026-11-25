import { FC } from 'react';
import { Experience as ExperienceType } from '../types';
import { motion, useReducedMotion } from 'framer-motion';
import { usePreferences } from '../preferences';

const Experience: FC = () => {
  const reduceMotion = useReducedMotion();
  const { locale } = usePreferences();
  const english = locale === 'en';
  const frenchExperiences: ExperienceType[] = [
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
  const englishExperiences: ExperienceType[] = [
    { company: 'HOMINTEC (fixed-term) – Benin', role: 'Full-stack developer', period: 'November 2024 – July 2026', bullets: [
      'Designed, developed and maintained business platforms for tolls, HR and internal operations.',
      'Contributed to Gate-24: vehicle passages, transactions and toll booth operations.',
      'Built Angular frontends and NestJS services, REST APIs, payments, terminals, queues, ticket booking and notifications.',
      'Designed PostgreSQL databases, used Docker and supported the HOMINTEC-Gabon team.',
    ], stack: ['Angular', 'NestJS', 'PostgreSQL', 'Docker', 'REST API', 'POS'] },
    { company: 'MTECH (fixed-term) – Benin', role: 'Full-stack developer', period: 'November 2023 – March 2024', bullets: [
      'Designed and developed full-stack web applications.',
      'Built frontend and backend features, integrated services and consumed REST APIs.',
      'Contributed to data model design and evolution.',
    ], stack: ['React', 'Next.js', 'Node.js', 'MySQL', 'REST API'] },
    { company: 'EDEAL – Benin', role: 'Backend developer', period: 'August 2023 – November 2023', bullets: [
      'Developed backend features and customized business management solutions.',
      'Worked on accounting and payroll modules.',
      'Adapted features to specific user needs.',
    ], stack: ['Laravel', 'PHP', 'Sage 100', 'Business software'] },
    { company: 'Consulting Engineering Team (TEC-Sarl) – Benin', role: 'Full-stack developer', period: 'April 2022 – January 2023', bullets: [
      'Contributed to university management and tax software.',
      'Implemented and evolved product features in a web environment.',
      'Worked across frontend and backend development.',
    ], stack: ['Laravel', 'VueJS', 'MySQL'] },
    { company: 'ATS-Afrique – Benin', role: 'Full-stack developer intern', period: 'September 2021 – October 2021', bullets: [
      'First professional experience with Laravel.',
      'Contributed to projects for partner companies.',
    ], stack: ['Laravel', 'PHP'] },
  ];
  const experiences = english ? englishExperiences : frenchExperiences;

  return (
    <section id="experience" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold section-title">{english ? 'Professional experience' : 'Parcours professionnel'}</h2>
          <p className="mt-4 text-[var(--cv-text-muted)] leading-7">
            {english ? 'Roles focused on delivering business applications, integrating services, maintaining products and turning functional needs into dependable technical solutions.' : "Des missions centrées sur la livraison d'applications métier, l'intégration de services, la maintenance évolutive et la traduction de besoins fonctionnels en solutions techniques fiables."}
          </p>
        </div>
        <div className="experience-track relative grid lg:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={index} 
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              className="experience-stop relative p-6 rounded-lg cv-card"
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
              {(exp.bullets?.length ?? 0) > 2 && (
                <details className="experience-more">
                  <summary>{english ? 'Show more responsibilities' : 'Voir les autres missions'}</summary>
                  <ul className="mt-3 space-y-3 text-[var(--cv-text-muted)]">
                    {exp.bullets?.slice(2).map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </details>
              )}
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.stack?.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm cv-tag rounded">{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
