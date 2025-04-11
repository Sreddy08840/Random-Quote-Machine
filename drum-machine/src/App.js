import React, { useState, useEffect } from 'react';
import './DrumMachine.css';

const DrumMachine = () => {
  const [displayText, setDisplayText] = useState('Drum Machine');
  const [activePad, setActivePad] = useState(null);

  const drumPads = [
    {
      id: 'Heater-1',
      key: 'Q',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      name: 'Heater 1'
    },
    {
      id: 'Heater-2',
      key: 'W',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      name: 'Heater 2'
    },
    {
      id: 'Heater-3',
      key: 'E',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      name: 'Heater 3'
    },
    {
      id: 'Heater-4',
      key: 'A',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      name: 'Heater 4'
    },
    {
      id: 'Clap',
      key: 'S',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      name: 'Clap'
    },
    {
      id: 'Open-HH',
      key: 'D',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      name: 'Open HH'
    },
    {
      id: 'Kick-n-Hat',
      key: 'Z',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      name: 'Kick n\' Hat'
    },
    {
      id: 'Kick',
      key: 'X',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      name: 'Kick'
    },
    {
      id: 'Closed-HH',
      key: 'C',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      name: 'Closed HH'
    }
  ];

  const playSound = (pad) => {
    const audio = document.getElementById(pad.key);
    audio.currentTime = 0;
    audio.play();
    setDisplayText(pad.name);
    setActivePad(pad.key);
    setTimeout(() => setActivePad(null), 200);
  };

  const handleKeyDown = (e) => {
    const pad = drumPads.find(p => p.key === e.key.toUpperCase());
    if (pad) {
      playSound(pad);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div id="drum-machine" className="drum-machine">
      <div id="display" className="display">
        {displayText}
      </div>
      <div className="drum-pads">
        {drumPads.map((pad) => (
          <div
            key={pad.id}
            id={pad.id}
            className={`drum-pad ${activePad === pad.key ? 'active' : ''}`}
            onClick={() => playSound(pad)}
          >
            {pad.key}
            <audio
              id={pad.key}
              className="clip"
              src={pad.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;