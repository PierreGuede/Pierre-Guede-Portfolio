import { FC } from 'react';
import { 
  AngularJsIcon, LaravelIcon, NestJsIcon, NextJsIcon, ReactJsIcon, VueJsIcon,
 GitIcon, VsCodeIcon, SqlIcon, PostgresIcon,
  WordPressIcon,
  NodeJsIcon,
  HtmlIcon,
  CssIcon,
  TailwindIcon,
  PhpIcon,
  ApiRestIcon,
  GraphQlIcon,
  DockerIcon,
  SwaggerIcon,
  PostmanIcon,
  GitHubIcon
} from './SkillsIcon';
import { Skill, SkillCategory } from '../types';
import { SpirngBootIcon } from './SkillsIcon';

const Skills: FC = () => {

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: 'Angular', icon: <AngularJsIcon/> },
        { name: 'VueJS', icon: <VueJsIcon/> },
        { name: 'React', icon: <ReactJsIcon/> },
        { name: 'Next.js', icon: <NextJsIcon/> },
        { name: 'HTML5', icon: <HtmlIcon/> },
        { name: 'CSS/SASS', icon: <CssIcon/>},
        { name: 'Tailwind CSS', icon: <TailwindIcon/> }
      ]
    },
    {
      title: "Backend & API",
      skills: [
        { name: 'Java / Spring Boot', icon: <SpirngBootIcon/> },
        { name: 'NestJS', icon: <NestJsIcon/> },
        { name: 'Node.js', icon: <NodeJsIcon/> },
        { name: 'Laravel', icon: <LaravelIcon/> },
        { name: 'PHP', icon: <PhpIcon/> },
        { name: 'API REST', icon: <ApiRestIcon/> },
        { name: 'GraphQL', icon: <GraphQlIcon/> }
      ]
    },
    {
      title: "Données, DevOps & Outils",
      skills: [
        { name: 'PostgreSQL', icon: <PostgresIcon/> },
        { name: 'MySQL', icon: <SqlIcon/> },
        { name: 'Docker', icon: <DockerIcon/> },
        { name: 'Git', icon: <GitIcon/> },
        { name: 'GitHub', icon: <GitHubIcon/> },
        { name: 'Swagger / OpenAPI', icon: <SwaggerIcon/> },
        { name: 'Postman', icon: <PostmanIcon/> },
        { name: 'VS Code', icon: <VsCodeIcon/> },
        { name: 'WordPress', icon: <WordPressIcon/> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold section-title">Compétences</h2>
          <p className="mt-4 text-[var(--cv-text-muted)] leading-7">
            Une stack fullstack orientée applications métier : interfaces modernes, services backend, bases de données,
            API documentées, conteneurisation et maintenance en exploitation.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category: SkillCategory, categoryIndex: number) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-semibold mb-6 text-[var(--cv-accent)]">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
                {category.skills.map((skill: Skill, skillIndex: number) => (
                  <div 
                    key={skillIndex} 
                    className="p-4 min-h-32 rounded-lg text-center cv-card hover:shadow-md transition-all flex flex-col justify-center"
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
