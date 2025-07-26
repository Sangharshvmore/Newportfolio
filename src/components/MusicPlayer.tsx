import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

interface MusicPlayerProps { darkMode: boolean; }
const MusicPlayer: React.FC<MusicPlayerProps> = ({ darkMode }) => {
  const [songs] = useState<Song[]>([
    { id: 1, title: 'All I Am', artist: 'Alice In Chains', duration: '3:45', cover: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228' },
    { id: 2, title: 'Bohemian Rhapsody', artist: 'Queen', duration: '5:55', cover: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=400&h=400&fit=crop' },
    
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const refreshSong = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    setCurrentSongIndex(randomIndex);
  };

  return (
    <section className="py-4 px-6">
      <div className="max-w-[872px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>CURRENT SONG</h2>
          <button 
            onClick={refreshSong}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
        </div>
        
        <div className={`border-2 rounded-lg p-6 ${darkMode ? 'text-white' : 'text-black'}`}>
          <div className="flex items-center space-x-4">
            <img 
              src={songs[currentSongIndex].cover} 
              alt={songs[currentSongIndex].title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold">{songs[currentSongIndex].title}</h3>
              <p className="text-gray-400">{songs[currentSongIndex].artist}</p>
              <p className="text-sm text-gray-500 mt-1">{songs[currentSongIndex].duration}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;