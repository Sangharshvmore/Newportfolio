import React from 'react';
import { MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';
import { FileText } from 'lucide-react';
import sangharsAiImg from '../img/Sanghars_Ai.jpg';

interface HeroProps { darkMode: boolean; }
const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className="pt-6 pb-4 px-6">
      <div className="max-w-container-872 mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
              <img
                src={sangharsAiImg}
                alt="Sangharsh Vijay More"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full border-4 border-black flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
          </div>

          {/* Introduction */}
          <div className="flex-1">
            <h2 className={`text-4xl lg:text-5xl font-bold ${darkMode ? 'text-white' : 'text-black'} mb-4`}>
              Hi, I am Sangharsh Vijay More,
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 leading-relaxed`}>
              {/* a frontend developer, specializing in UI design and creating engaging user 
              experiences with a strong attention to detail. */}
              A frontend developer skilled in React, Next.js, TypeScript, and Tailwind CSS, with expertise in creating responsive, high-performance, and user-focused web applications using modern UI/UX practices.
            </p>
            <div className={`flex items-center justify-between ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-8`}>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 " />
                <span>Nagpur Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
              <a href="https://drive.google.com/file/d/1ZQycov0Ujsg20UaCcO44mMdylq1bjmDG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileText className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                </a>
                <a href="https://github.com/Sangharshvmore" target="_blank" rel="noopener noreferrer">
                  <Github className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                </a>
                <a href="https://www.linkedin.com/in/sangharshvmore/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                </a>
                {/* Add more social links as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;