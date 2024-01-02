import React, { useState } from 'react';
import '../sideNav/sidenav.css';

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
        Dashboard
      </div>
      <div
        className={`nav-option ${selectedOption === 'perks' && 'selected'}`}
        onClick={() => handleOptionClick('perks')}
      >
        Perks
      </div>
      <div
        className={`nav-option ${selectedOption === 'addons' && 'selected'}`}
        onClick={() => handleOptionClick('addons')}
      >
        Addons
      </div>
      <div
        className={`nav-option ${selectedOption === 'faq' && 'selected'}`}
        onClick={() => handleOptionClick('faq')}
      >
        FAQ
      </div>
      <div
        className={`nav-option ${selectedOption === 'support' && 'selected'}`}
        onClick={() => handleOptionClick('support')}
      >
        Support
      </div>
    </div>
  );
};

export default SideNav;
