import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

interface FooterProps { darkMode: boolean; }
const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className="py-4 px-6">
      <div className="max-w-container-872 mx-auto border-t border-gray-800 pt-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>my socials</h2>
          <ExternalLink className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`} />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a 
            href="https://github.com/Sangharshvmore" 
            className="border-2 p-6 rounded-lg hover:bg-gray-700 transition-colors group"
          >
            <Github className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors mb-3" />
            <p className={`transition-colors ${darkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-700 group-hover:text-black'}`}>GitHub</p>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/sangharshvmore/" 
            className="border-2 p-6 rounded-lg hover:bg-gray-700 transition-colors group"
          >
            <Linkedin className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors mb-3" />
            <p className="text-gray-400 group-hover:text-white transition-colors">LinkedIn</p>
          </a>
          
          <a 
            href="https://x.com/sangharsh46640?t=YB37MtL_NFQPktarNK20XQ&s=09" 
            className="border-2 p-6 rounded-lg hover:bg-gray-700 transition-colors group"
          >
            <Twitter className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors mb-3" />
            <p className="text-gray-400 group-hover:text-white transition-colors">Twitter</p>
          </a>
          
          <a 
            href="mailto:sangharshv.more@gmail.com" 
            className="border-2 p-6 rounded-lg hover:bg-gray-700 transition-colors group"
          >
            <Mail className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors mb-3" />
            <p className="text-gray-400 group-hover:text-white transition-colors">Email</p>
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © 2025 Sangharsh More. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;