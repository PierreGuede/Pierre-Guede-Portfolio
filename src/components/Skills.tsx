import { FC } from 'react';
import { 
  AngularJsIcon, LaravelIcon, NestJsIcon, NextJsIcon, ReactJsIcon, VueJsIcon,
  GitHubIcon, GitIcon, VsCodeIcon, SqlIcon, PostgresIcon,
  WordPressIcon
} from './SkillsIcon';
import { Skill, SkillCategory } from '../types';

const Skills: FC = () => {
  const textIcon = (label: string) => (
    <div className="h-12 w-12 mx-auto rounded-full bg-[#efe6dc] text-[var(--cv-accent-strong)] flex items-center justify-center text-xs font-bold">
      {label}
    </div>
  );

  const skillCategories: SkillCategory[] = [
    {
      title: "Compétences Techniques",
      skills: [
        { name: 'Vue.js', icon: <VueJsIcon/> },
        { name: 'React', icon: <ReactJsIcon/> },
        { name: 'Next.js', icon: <NextJsIcon/> },
        { name: 'Angular', icon: <AngularJsIcon/> },
        { name: 'NestJS', icon: <NestJsIcon/> },
        { name: 'Laravel', icon: <LaravelIcon/> },
        { name: 'Node.js', icon: textIcon('Node') },
        { name: 'Java (Spring Boot)', icon: textIcon('Java') },
        { name: 'MySQL', icon: <SqlIcon/> },
        { name: 'PostgreSQL', icon: <PostgresIcon/> }
      ]
    },
    {
      title: "Compétences en Développement Web",
      skills: [
        { name: 'Bootstrap', icon: textIcon('BS') },
        { name: 'Tailwind CSS', icon: textIcon('TW') },
        { name: 'API REST', icon: textIcon('API') },
        { name: 'GraphQL', icon: textIcon('GQL') },
        { name: 'WordPress', icon: <WordPressIcon/> }
      ]
    },
    {
      title: "Gestion de Projets & Collaboration",
      skills: [
        { name: 'Agile/Scrum', icon: textIcon('Agile') },
        { name: 'Git', icon: <GitIcon/> },
        { name: 'GitHub', icon: <GitHubIcon/> },
        { name: 'Jira', icon: textIcon('Jira') },
        { name: 'Trello', icon: textIcon('Tre') },
        { name: 'VS Code', icon: <VsCodeIcon/> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 section-title">Compétences</h2>
        <div className="block lg:flex lg:flex-wrap lg:gap-8">
          {skillCategories.map((category: SkillCategory, categoryIndex: number) => (
            <div key={categoryIndex} className="flex-1 min-w-[45%]">
              <h3 className="text-xl font-semibold mb-6 text-[var(--cv-accent)]">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {category.skills.map((skill: Skill, skillIndex: number) => (
                  <div 
                    key={skillIndex} 
                    className="p-4 rounded-lg text-center cv-card hover:shadow-md transition-all"
                  >
                    <div className="h-12 w-12 mx-auto mb-2">
                      {skill.icon}
                    </div>
                    <p className="mt-2">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
