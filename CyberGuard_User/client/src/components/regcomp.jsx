import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/regcomp.css';
import img1 from '../assets/reg1.png';
import img2 from '../assets/reg2.png';
import img3 from '../assets/reg3.png';

const Regcomp = () => {
  return (
    <div className="comp-content">
      <h1>Register a Complaint</h1>
      <div className="rect-container">
        <div className="rect rect1">
          <img src={img1} alt="1" />
          <h2>FINANCIAL<br/>FRAUD</h2>
          <Link to="/filling-complaint">
            <button>Register a Complaint</button>
          </Link>
        </div>
        <div className="rect rect2">
          <img src={img2} alt="2" />
          <h2>WOMEN/CHILDREN RELATED CRIME</h2>
          <Link to="/filling-complaint">
            <button>Register a Complaint</button>
          </Link>
        </div>
        <div className="rect rect3">
          <img src={img3} alt="3" />
          <h2>OTHER<br/>CYBERCRIMES</h2>
          <Link to="/filling-complaint">
            <button>Register a Complaint</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Regcomp;
