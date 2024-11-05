// Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <footer className="footer">
      <div className="button-container">
        <Link
          to="/feedback"
          className={`footer-button ${activeTab === 'feedback' ? 'active' : ''}`}
          onClick={() => handleTabClick('feedback')}
        >
          Feedback
        </Link>
        <div className="divider"></div>
        <Link
          to="/faq"
          className={`footer-button ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => handleTabClick('faq')}
        >
          FAQ
        </Link>
        <div className="divider"></div>
        <Link
          to="/contact-us"
          className={`footer-button ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => handleTabClick('contact')}
        >
          Contact Us
        </Link>
        <div className="divider"></div>
        <Link
          to="/disclaimer"
          className={`footer-button ${activeTab === 'disclaimer' ? 'active' : ''}`}
          onClick={() => handleTabClick('disclaimer')}
        >
          Disclaimer
        </Link>
        <div className="divider"></div>
        <Link
          to="/privacy-policy"
          className={`footer-button ${activeTab === 'privacy-policy' ? 'active' : ''}`}
          onClick={() => handleTabClick('privacy-policy')}
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
