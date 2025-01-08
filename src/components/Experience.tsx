import { FC } from 'react';
import { Experience as ExperienceType } from '../types';

const Experience: FC = () => {
  const experiences: ExperienceType[] = [
    {
      company: 'MTECH-BENIN',
      period: 'Novembre 2023 - Mars 2024',
      description: "Développement d'applications web avec Next.js, gestion de l'interface utilisateur et développement backend."
    },
    {
      company: 'Edeal',
      period: 'Août 2023 - Novembre 2023',
      description: 'Travail sur des projets utilisant SAGE et développement avec Laravel.'
    },
    {
      company: 'TEC-Sarl',
      period: 'Avril 2022 - Janvier 2023',
      description: 'Développement de solutions web avec Laravel et Vue.js'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-[#00ff88]">Expérience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-white bg-opacity-5 backdrop-blur-lg"
            >
              <h3 className="text-xl font-bold text-white">{exp.company}</h3>
              <p className="text-sm mb-4 text-[#00ff88]">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
