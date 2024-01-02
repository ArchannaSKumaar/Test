import React, { useState } from 'react';
import '../sideNav/sidenav.css';
import dash from '../sideNav/dashboard.png';
import perk from '../sideNav/plant.png';
import add from '../sideNav/puzzle.png';
import faq from '../sideNav/faq.png';
import sup from '../sideNav/message.png';

const SideNav = () => {
  const [selectedOption, setSelectedOption] = useState('dashboard');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="side-nav">
      <div
        className={`nav-option ${selectedOption === 'dashboard' && 'selected'}`}
        onClick={() => handleOptionClick('dashboard')}
      >
        <img src={dash} alt='dash'></img>
        Dashboard
      </div>
      <div
        className={`nav-option ${selectedOption === 'perks' && 'selected'}`}
        onClick={() => handleOptionClick('perks')}
      >
        <img src={perk} alt='perk'></img>
        Perks
      </div>
      <div
        className={`nav-option ${selectedOption === 'addons' && 'selected'}`}
        onClick={() => handleOptionClick('addons')}
      >
        <img src={add} alt='add'></img>
        Addons
      </div>
      <div
        className={`nav-option ${selectedOption === 'faq' && 'selected'}`}
        onClick={() => handleOptionClick('faq')}
      >
        <img src={faq} alt='faq'></img>
        FAQ
      </div>
      <div
        className={`nav-option ${selectedOption === 'support' && 'selected'}`}
        onClick={() => handleOptionClick('support')}
      >
        <img src={sup} alt='sup'></img>
        Support
      </div>
    </div>
  );
};

export default SideNav;
