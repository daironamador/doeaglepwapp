/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ReactHowler from 'react-howler';
import { FaPlay, FaPause } from 'react-icons/fa';

const RadioPlayer = () => {
  const [playing, setPlaying] = useState(true);
  const [currentSong, setCurrentSong] = useState({
    title: 'Loading...',
    image: '../public/losaimg.jpeg', // This will always be used
  });

  useEffect(() => {
    const fetchCurrentSong = async () => {
      try {
        const response = await fetch(
          'https://cast5.asurahosting.com/rpc/losarad2/streaminfo.get'
        );
        const data = await response.json();
        const trackData = data.data[0].track;
        
        setCurrentSong({
          title: `${trackData.artist} - ${trackData.title}`,
          image: '../public/losaimg.jpeg', // This will always be used
        });
      } catch (error) {
        console.error('Error fetching current song:', error);
      }
    };

    fetchCurrentSong();
    const interval = setInterval(fetchCurrentSong, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white homebg">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/bglosa.png)' }}></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <img
          src={currentSong.image}
          alt="Current song"
          className="w-48 h-48 rounded-full mb-4"
        />
        <h1 className="text-2xl mb-2">LOSA Radio - La más completa</h1>
        <h2 className="text-xl mb-4">{currentSong.title}</h2>
        <ReactHowler
          src="http://65.108.98.93:7528/stream"
          playing={playing}
          html5={true}
          onLoad={() => console.log('Stream loaded successfully')}
          onPlay={() => console.log('Stream playing')}
          onPause={() => console.log('Stream paused')}
          onEnd={() => console.log('Stream ended')}
          onError={(error) => console.error('Stream error:', error)}
        />
        <button
          className="bg-blue-500 px-4 py-2 rounded flex items-center"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? <FaPause /> : <FaPlay />}
          <span className="ml-2">{playing ? 'Pause' : 'Play'}</span>
        </button>
      </div>
    </div>
  );
};

export default RadioPlayer;
