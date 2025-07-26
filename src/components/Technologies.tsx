import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

interface TechnologiesProps { darkMode: boolean; }
const Technologies: React.FC<TechnologiesProps> = ({ darkMode }) => {
  const iconClass = `w-10 h-10 ${darkMode ? 'text-white' : 'text-black'}`;

  const technologies = [
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'JavaScript', icon: FaJs },
    { name: 'Java', icon: FaJava },
    { name: 'HTML 5', icon: FaHtml5 },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
  ];

  return (
    <section className="py-4 px-6">
      <div className="max-w-container-872 mx-auto">
        <h2 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>TECHNOLOGIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {technologies.map((tech) => {
            const Icon = tech.icon as any;
            return (
              <div key={tech.name} className="group flex flex-col items-center justify-center">
                <div className="w-16 h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform cursor-pointer">
                  <Icon className={iconClass} />
                </div>
                <p className={`text-sm text-center transition-colors ${darkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-700 group-hover:text-black'}`}>{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;