import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/fillingComplaint.css';

const FillingComplaint = () => {
  return (
    <div className="filling-complaint">
      <h1>Filling a Complaint</h1>
      <div className="white-box1">
        <h3>Terms and Conditions</h3>
        <p>
          The information I've provided on this form is correct to the best of my knowledge. I acknowledge that providing false information could make me liable to penal actions under Indian Laws.
        </p>
        <p>
          I understand that action on the complaints reported on this portal shall be taken by concerned authorities as per Indian Laws.
        </p>
        <p>
          The complaint information you submit to this site is encrypted via secure socket layer (SSL) encryption. Please see the <Link to="/privacy-policy" className="privacy-policy-link">Privacy Policy</Link> for further information.
        </p>
        <p>We thank you for your cooperation.</p>
      </div>
      <div className="terms">
        <Link to="/report">
          <button className="accept-button">I Accept</button>
        </Link>
      </div>
    </div>
  );
};

export default FillingComplaint;
