import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { FaWordpressSimple, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

interface ExperienceProps { darkMode: boolean; }
const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const [showPrevious, setShowPrevious] = useState(false);

  return (
    <section className="py-0 px-6">
      <div className="max-w-container-872 mx-auto">
        {/* Current Position */}
        <div className="mb-12 mt-0">
          <div className={`text-sm uppercase tracking-wide mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-700'}`}>CURRENTLY</div>
          
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Website Coordinator</h3>
              <div className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>2024 - PRESENT</div>
            </div>
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 ${darkMode ? 'border-white' : 'border-black'}`}>
              {/* <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div> */}
              <div>
                  <div className={`${darkMode ? 'text-gray-300' : 'text-black'} text-xs`}>Onsite</div>
              </div>
            </div>
          </div>
          
          <p className={`text-lg -mt-4 mb-2 max-w-4xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Manage and maintain departmental website using WordPress, HTML, and CSS to ensure accurate, up-to-date
          
          </p>
          <p className={`text-lg -mt-4 mb-2 max-w-4xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          content.
          </p>
          <p className={`text-lg -mt-4 mb-2 max-w-4xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Implement responsive design strategies, enhancing accessibility across desktop and mobile platforms.
          </p>
          
          {/* Tech Stack Icons */}
          <div className="flex items-center space-x-2 mb-8 pt-0 py-0">
            {[
              FaWordpressSimple,
              FaHtml5,
              FaCss3Alt,
              FaJs,
            ].map((Icon, idx) => {
              const TechIcon = Icon as any;
              return (
                <div key={idx} className={`w-8 h-8 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
                  <TechIcon className={`${darkMode ? 'text-white' : 'text-black'} w-6 h-6`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Previous Roles */}
        <div className="-mt-8 my-2">
          <button
            onClick={() => setShowPrevious(!showPrevious)}
            className="flex items-center space-x-2 text-gray-400 "
          >
            {showPrevious ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            <span>Previous roles</span>
          </button>
          
          {showPrevious && (
            <div className="mt-4 space-y-6">
              {/* <div className="border-l-2 border-gray-700 pl-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Senior Frontend Developer</h4>
                    <div className="text-gray-400">2022 - 2024</div>
                  </div>
                  <div className="text-gray-400 text-sm">TechCorp</div>
                </div>
                <p className="text-gray-300 mb-4">
                  Led frontend development for enterprise applications using React, TypeScript, and modern web technologies.
                </p>
              </div> */}
              
              {/* <div className="border-l-2 border-gray-700 pl-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Frontend Developer</h4>
                    <div className="text-gray-400">2020 - 2022</div>
                  </div>
                  <div className="text-gray-400 text-sm">StartupXYZ</div>
                </div>
                <p className="text-gray-300 mb-4">
                  Developed responsive web applications and contributed to UI/UX design decisions.
                </p>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;