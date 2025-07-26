import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';


function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      <div className="relative z-10">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Technologies darkMode={darkMode} />
        <MusicPlayer darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;