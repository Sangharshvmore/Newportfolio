import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Filter, Calendar, Plus, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  year: string;
  link?: string;
}

interface ProjectsProps { darkMode: boolean; }
const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [showTechDropdown, setShowTechDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [techSearch, setTechSearch] = useState('');
  const [yearSearch, setYearSearch] = useState('');
  const [mainSearch, setMainSearch] = useState('');

  const techDropdownRef = useRef<HTMLDivElement>(null);
  const yearDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        techDropdownRef.current &&
        !techDropdownRef.current.contains(event.target as Node)
      ) {
        setShowTechDropdown(false);
      }
      if (
        yearDropdownRef.current &&
        !yearDropdownRef.current.contains(event.target as Node)
      ) {
        setShowYearDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const techOptions = ['NextJS', 'TypeScript', 'C++', 'Java', 'Python', 'AI&ML', 'React'];
  const yearOptions = ['2026', '2025', '2024', '2023', '2022'];

  const filteredTechOptions = techOptions.filter(tech => 
    tech.toLowerCase().includes(techSearch.toLowerCase())
  );

  const filteredYearOptions = yearOptions.filter(year => 
    year.includes(yearSearch)
  );

  const projects: Project[] = [
    {
      id: '1',
      title: 'SmartCal',
      description: 'Calculator web app with hidden encrypted folder',
      image: 'https://user-images.githubusercontent.com/92887139/247130682-226c651e-3695-47b1-b88a-c7d0c354d178.png',
      tech: ['NextJS', 'TypeScript'],
      year: '2025',
      link: 'https://github.com/Sangharshvmore/SmartCal.git'
    },
    {
      id: '2',
      title: 'NASA Dashboard',
      description: 'Use free NASA APIs in this dashboard',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      tech: ['NextJS', 'TypeScript'],
      year: '2024',
      link: 'https://github.com/Sangharshvmore/Nasa-api.git'
    },
    {
      id: '3',
      title: 'FastFood Joint',
      description: 'McDonalds Delivery App clone for restaurant use',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      tech: ['NextJS', 'TypeScript'],
      year: '2025',
      link: 'https://github.com/Sangharshvmore/Fast-Food-Joint.git'
    },
    {
      id: '4',
      title: 'ATM System',
      description: 'Simple command-line Automated Teller Machine (ATM) simulation written in Java',
      image: 'https://codewithcurious.com/wp-content/uploads/2023/02/Handwritten-Notes-20.png', // Fixed direct image
      tech: ['Java'],
      year: '2024',
      link: 'https://github.com/Sangharshvmore/ATM-System.git'
    },
    {
      id: '5',
      title: 'FloppyBird',
      description: 'Floppy Bird is a simple 2D game inspired by the popular Flappy Bird',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Flappy_Bird_icon.png', // Replace with a proper image
      tech: ['Java', 'Swing'],
      year: '2024',
      link: 'https://github.com/Sangharshvmore/FloopyBird.git'
    },
    {
      id: '6',
      title: 'Pizza Billing System',
      description: 'Billing system that allows customers to customize their pizza orders',
      image: 'https://assets.api.gamma.app/1r8ks2hx9x7k6pm/screenshots/lpdp6jul391ra7k/84biuqml5lhjj1l/slide/k3CbNDWThOSFNw4ezFHP3acbQqo',
      tech: ['Java'],
      year: '2024',
      link: 'https://github.com/Sangharshvmore/Billing-System.git'
    },
    {
      id: '7',
      title: 'Tic Tac Toe',
      description: 'A dynamic Tic-Tac-Toe game built with Java and Swing',
      image: 'https://www.wisediy.com/wp-content/uploads/sites/781/2015/11/Screen-Shot-2015-11-27-at-2.52.44-PM.png',
      tech: ['Java', 'Swing'],
      year: '2024',
      link: 'https://github.com/Sangharshvmore/Tic-Tac-Toe.git'
    },
    {
      id: '8',
      title: 'Todo list',
      description: 'A simple and dynamic Todo list build using node.js',
      image: 'https://tse3.mm.bing.net/th/id/OIP.m3oeVnycklCIBwpoLajL0QHaFt',
      tech: ['Node'],
      year: '2024',
      link: 'https://github.com/Sangharshvmore/Todo-List.git'
    }
  ];
  

  const filteredProjects = projects.filter(project => {
    const techMatch = selectedTechs.length === 0 || project.tech.some(tech => selectedTechs.includes(tech));
    const yearMatch = selectedYears.length === 0 || selectedYears.includes(project.year);
    const searchMatch = !mainSearch || 
      project.title.toLowerCase().includes(mainSearch.toLowerCase()) ||
      project.description.toLowerCase().includes(mainSearch.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(mainSearch.toLowerCase()));
    return techMatch && yearMatch && searchMatch;
  });

  const handleTechToggle = (tech: string) => {
    setSelectedTechs(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const handleYearToggle = (year: string) => {
    setSelectedYears(prev => 
      prev.includes(year) 
        ? prev.filter(y => y !== year)
        : [...prev, year]
    );
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, filteredProjects.length - 2));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, filteredProjects.length - 2)) % Math.max(1, filteredProjects.length - 2));
  };

  return (
    <section className="py-4 px-6 ">
      <div className="max-w-container-872 mx-auto">
        <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>RECENT PROJECTS</h2>
        
        {/* Filters */}
        <div className="flex items-center space-x-4 mb-2">
          {/* Main Search Bar */}
           <div className="flex-1 max-w-2xl"> {/* to increae length of search bar */}
            <input
              type="text"
              placeholder="Search projects..."
              value={mainSearch}
              onChange={(e) => setMainSearch(e.target.value)}
              className={`w-full px-4 py-2 text-sm rounded-full border-2 focus:outline-none focus:border-blue-500 ${
                darkMode 
                  ? 'bg-black text-white border-white placeholder-gray-400' 
                  : 'bg-white text-black border-black placeholder-gray-500'
              }`}
            />
          </div>

          {/* Tech Filter Dropdown */}
          <div className="relative" ref={techDropdownRef}>
            <button 
              onClick={() => setShowTechDropdown(!showTechDropdown)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-colors ${
                selectedTechs.length > 0 ? 'bg-blue-600 border-blue-600 text-white' : `bg-transparent ${darkMode ? 'border-white text-white hover:border-gray-300' : 'border-black text-black hover:border-gray-600'}`
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Tech ({selectedTechs.length})</span>
            </button>
            
            {showTechDropdown && (
              <div className={`absolute top-full left-0 mt-2 w-56 rounded-lg border shadow-lg z-50 bg-black border-gray-700`}>
                <div className="p-3">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-white">Select Tech Stack</span>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Search tech..."
                      value={techSearch}
                      onChange={(e) => setTechSearch(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-full border focus:outline-none focus:border-blue-500 bg-gray-800 text-white border-gray-600 placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    {filteredTechOptions.map((tech) => (
                      <label key={tech} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedTechs.includes(tech)}
                          onChange={() => handleTechToggle(tech)}
                          className="rounded"
                        />
                        <span className="text-sm text-gray-300">{tech}</span>
                      </label>
                    ))}
                    {filteredTechOptions.length === 0 && (
                      <div className="text-sm text-center py-2 text-gray-400">
                        No tech found
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Year Filter Dropdown */}
          <div className="relative" ref={yearDropdownRef}>
            <button 
              onClick={() => setShowYearDropdown(!showYearDropdown)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-colors ${
                selectedYears.length > 0 ? 'bg-blue-600 border-blue-600 text-white' : `bg-transparent ${darkMode ? 'border-white text-white hover:border-gray-300' : 'border-black text-black hover:border-gray-600'}`
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Year ({selectedYears.length})</span>
            </button>
            
            {showYearDropdown && (
              <div className={`absolute top-full left-0 mt-2 w-40 rounded-lg border shadow-lg z-50 bg-black border-gray-700`}>
                <div className="p-3">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-white">Select Year</span>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Search year..."
                      value={yearSearch}
                      onChange={(e) => setYearSearch(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-full border focus:outline-none focus:border-blue-500 bg-gray-800 text-white border-gray-600 placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    {filteredYearOptions.map((year) => (
                      <label key={year} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedYears.includes(year)}
                          onChange={() => handleYearToggle(year)}
                          className="rounded"
                        />
                        <span className="text-sm text-gray-300">{year}</span>
                      </label>
                    ))}
                    {filteredYearOptions.length === 0 && (
                      <div className="text-sm text-center py-2 text-gray-400">
                        No year found
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Clear Filters Button */}
          {(selectedTechs.length > 0 || selectedYears.length > 0) && (
            <button 
              onClick={() => {
                setSelectedTechs([]);
                setSelectedYears([]);
              }}
              className="px-3 py-2 text-sm rounded-full border transition-colors text-gray-400 border-gray-600 hover:bg-gray-700 bg-transparent"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-4">
            {filteredProjects.slice(currentIndex, currentIndex + 3).map((project) => (
              <div 
                key={project.id} 
                className={`bg-transparent rounded-lg overflow-hidden hover:bg-gray-1000 transition-colors group w-62 mx-auto border-2 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Navigation Button */}
          <button
            onClick={prevProject}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 p-2 bg-transparent rounded-full border-2 transition-colors shadow-lg z-10 ${
              darkMode 
                ? 'border-white hover:border-gray-300' 
                : 'border-black hover:border-gray-600'
            }`}
          >
            <ChevronLeft className={`w-4 h-4 ${darkMode ? 'text-white' : 'text-black'}`} />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={nextProject}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 p-2 bg-transparent rounded-full border-2 transition-colors shadow-lg z-10 ${
              darkMode 
                ? 'border-white hover:border-gray-300' 
                : 'border-black hover:border-gray-600'
            }`}
          >
            <ChevronRight className={`w-4 h-4 ${darkMode ? 'text-white' : 'text-black'}`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;