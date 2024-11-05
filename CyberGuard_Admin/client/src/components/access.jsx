import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/regcomp.css';
import img1 from '../assets/user.png';
import img2 from '../assets/report.png';

const Regcomp = () => {
  return (
    <div className="comp-content">
      <h1>Register a Complaint</h1>
      <div className="rect-container">
        <div className="rect rect1">
          <img src={img1} alt="1" />
          <h2>USER</h2>
          <Link to="/userrecord">
            <button>Click for User</button>
          </Link>
        </div>
        <div className="rect rect2">
          <img src={img2} alt="2" />
          <h2>REPORTS</h2>
          <Link to="/reportrecord">
            <button>Click for Reports</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Regcomp;
