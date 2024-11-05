import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from '../assets/logo.png'; // Importing the image
import '../styles/header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigation = useNavigate();
  let login = localStorage.getItem('login');

  

  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/" className="logo-link"> {/* Link to the home page */}
          <img src={logo} alt="Logo" className="logo-image" /> {/* Using imported image */}
        </Link>
        <h4 className="header-text">Incident Response Portal for Cybercrime Reporting and Mitigation</h4>
      </div>
      {login == 'false' ? (
        <div className="buttons-container">
        <Link to="/login" className="login-button">LOGIN</Link> {/* Use Link for navigation */}
      </div>
      ) : (
        <div className='buttons-container'>
          <button onClick={() => { localStorage.setItem('login', false) ;navigation('/login')}} className="login-button">Logout</button>
        </div>
      )}
    </header>
  );
}

export default Header;
