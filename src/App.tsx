import React from 'react';
import './App.css';
import { BackSun, Stairs, Menu, Logo, Desk } from './Decorations'
import { Github, Gmail, LinkedIn, Sound } from './Icons';

function App() {
  const iconSize = 24;
  const iconColor = '#e3dbdb';

  return (
    <div className="App">
      <div />
      <div className='Container'>
        <div className='Header'>
          <div className='Sound-block Icon-block'>
            <Sound size={iconSize} disabled color={iconColor} />
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
          <Menu className='Menu-1' size={150} />
          <Menu className='Menu-2' size={150} />
          <Menu className='Menu-3' size={150} />
          <Menu className='Menu-4' size={150} />
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
