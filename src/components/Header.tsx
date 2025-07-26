import React from 'react';
import { Moon, Sun, User, Phone } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`top-0 left-0 right-0 z-50 backdrop-blur-md ${darkMode ? 'bg-black/80' : 'bg-transparent'}`}>
      <div className="max-w-container-872 mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src=".\src\img\gojo_chibi_by_merthony_dghyvpx-fullview.png"  // Use your actual image path
              alt="Logo"
              className="w-14 h-14 rounded-lg logo-animate"
            />
            {/* <h1 className="text-xl font-bold text-white tracking-wide">Sangharsh</h1> */}
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <a
                href="tel:+917420904369"
                className="text-sm hover:text-green-500 transition-colors"
              >
                Call
              </a>
            </div>
            
            {/* <div className="text-gray-400 text-sm">0/200 points</div> */}
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4 text-gray-300" /> : <Moon className="w-4 h-4 text-gray-300" />}
            </button>
            
            <div className="text-gray-300 text-sm">EN</div>
            
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;