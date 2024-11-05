//navbar.jsx: 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className="navbar">
      <div className="rectangle">
        <Link
          to="/"
          className={`special-button ${activeButton === 'home' ? 'active-button' : ''}`}
          onClick={() => handleButtonClick('home')}
        >
          <FaHome className="icon" />
        </Link>
        <Link
          to="/regcomp"
          className={`text-button ${activeButton === 'register' ? 'active-button' : ''}`}
          onClick={() => handleButtonClick('register')}
        >
          REGISTER A COMPLAINT
        </Link>
        <Link
          to="/resources"
          className={`text-button ${activeButton === 'resources' ? 'active-button' : ''}`}
          onClick={() => handleButtonClick('resources')}
        >
          RESOURCES
        </Link>
        <Link
          to="/news"
          className={`text-button1 ${activeButton === 'news' ? 'active-button' : ''}`}
          onClick={() => handleButtonClick('news')}
        >
          NEWS
        </Link>
        <Link
          to="/faq"
          className={`text-button2 ${activeButton === 'faq' ? 'active-button' : ''}`}
          onClick={() => handleButtonClick('faq')}
        >
          FAQ
        </Link>
        <Link
          to="/contact-us"
          className={`text-button ${activeButton === 'contact' ? 'active-button' : ''}`}
          onClick={() => handleButtonClick('contact')}
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;