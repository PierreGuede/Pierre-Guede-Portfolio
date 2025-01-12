import { FC } from 'react';
import { 
  AngularJsIcon, LaravelIcon, NestJsIcon, NextJsIcon, ReactJsIcon, VueJsIcon,
  GitHubIcon, GitIcon, VsCodeIcon, ClickUpIcon, SqlServerIcon, SqlIcon, PostgresIcon,
  WordPressIcon
} from './SkillsIcon';
import { Skill, SkillCategory } from '../types';

const Skills: FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: 'Vue.js', icon: <VueJsIcon/> },
        { name: 'React', icon: <ReactJsIcon/> },
        { name: 'Next.js', icon: <NextJsIcon/> },
        { name: 'Angular', icon: <AngularJsIcon/> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: 'Laravel', icon: <LaravelIcon/> },
        { name: 'Nest.js', icon: <NestJsIcon/> }
      ]
    },
    {
      title: "Outils",
      skills: [
        { name: 'GitHub', icon: <GitHubIcon/> },
        { name: 'Git', icon: <GitIcon/> },
        { name: 'VS Code', icon: <VsCodeIcon/> },
        { name: 'ClickUp', icon: <ClickUpIcon/> },
        { name: 'SQL Server', icon: <SqlServerIcon/> },
        { name: 'SQL', icon: <SqlIcon/> },
        { name: 'PostgreSQL', icon: <PostgresIcon/> }
      ]
    },
    {
      title: "CMS",
      skills: [
        { name: 'WordPress', icon: <WordPressIcon/> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black bg-opacity-30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-[#00ff88]">Stack Technique</h2>
        <div className="block lg:flex lg:flex-wrap lg:gap-8">
          {skillCategories.map((category: SkillCategory, categoryIndex: number) => (
            <div key={categoryIndex} className="flex-1 min-w-[45%]">
              <h3 className="text-xl font-semibold mb-6 text-[#00ff88]">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {category.skills.map((skill: Skill, skillIndex: number) => (
                  <div 
                    key={skillIndex} 
                    className="p-4 rounded-lg text-center bg-white bg-opacity-5 backdrop-blur-lg hover:bg-opacity-10 transition-all"
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
