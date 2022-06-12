import React, { useEffect, useRef, useState } from 'react';
//@ts-ignore
import bluebirdSong from 'public/bluebird.mp3';
import './App.css';
import { BackSun, Stairs, Menu, Logo, Desk } from './Decorations'
import { Github, Gmail, LinkedIn, Sound } from './Icons';
import { useAudio } from './hooks/useAudio';

function App() {
  const [isSoundDisabled, setIsSoundDisabled] = useState<boolean>(false);
  const [isPlaying, setAudioStatus] = useAudio(bluebirdSong);
  const iconSize = 36;
  const iconColor = '#e3dbdb';

  const onSoundDisabled = () => {
    setIsSoundDisabled(isDisabled => !isDisabled);
  }

  return (
    <div className="App">
      <div />
      <div className='Container'>
        <div className='Header'>
          <div className='Sound-block Icon-block'>
            <Sound size={iconSize} disabled={isSoundDisabled} onClick={onSoundDisabled} color={iconColor} />
          </div>
          
          <div className='Contact-block Icon-block'>
            <LinkedIn size={iconSize} color={iconColor} />
            <Github size={iconSize} color={iconColor} />
            <Gmail size={iconSize} color={iconColor} />
          </div>
        </div>
        <div className='Scene'>
          <BackSun size={1000} />
          <Stairs size={75} />
          <Menu className='Menu-1' size={200} />
          <Menu className='Menu-2' size={250} />
          <Menu className='Menu-4' size={200} />
          <Menu className='Menu-3' size={250} />
          <div className='Desk'>
            <Desk size={120} />
            <Logo size={70} />
          </div>
        </div>
      </div>
      {/* <div>
        <BackSun size={800} />
        <Stairs size={50} />
        <Menu className='Menu-1' size={150} />
        <Menu className='Menu-2' size={150} />
        <Menu className='Menu-3' size={150} />
        <Menu className='Menu-4' size={150} />
        <Desk size={200} />
        <Logo size={150} />
      </div> */}
      <div />
    </div>

  );
}

export default App;
