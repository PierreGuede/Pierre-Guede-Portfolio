import { FC } from 'react';
import { Skill } from '../types';
import { AngularJsIcon, LaravelIcon, NestJsIcon, NextJsIcon, ReactJsIcon, VueJsIcon } from './SkillsIcon';

const Skills: FC = () => {
  const skills: Skill[] = [
    { name: 'Vue.js', icon: <VueJsIcon/> },
    { name: 'React', icon: <ReactJsIcon/> },
    { name: 'Laravel', icon: <LaravelIcon/> },
    { name: 'Nest.js', icon: <NestJsIcon/> },
    { name: 'Next.js', icon: <NextJsIcon/> },
    { name: 'Angular', icon: <AngularJsIcon/> }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black bg-opacity-30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-[#00ff88]">Stack Technique</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg text-center bg-white bg-opacity-5 backdrop-blur-lg"
            >
              <div className="h-12 w-12 mx-auto mb-2">
                {skill.icon}
              </div>
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
