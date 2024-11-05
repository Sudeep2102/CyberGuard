import React, { useState } from 'react';
import '../styles/linkrepo.css';
import logo1 from '../assets/logo_1.png';
import logo2 from '../assets/logo_2.png';
import logo3 from '../assets/logo_3.png';
import logo4 from '../assets/logo_4.png';
import logo5 from '../assets/logo_5.png';

const LinkRepo = () => {
    const [isScrolling, setIsScrolling] = useState(true);

    const stopScrolling = () => {
        setIsScrolling(false);
    };

    const startScrolling = () => {
        setIsScrolling(true);
    };

    const logoUrls = [
        'https://www.india.gov.in',
        'https://dot.gov.in/cyber-dost',
        'https://cytrain.ncrb.gov.in/local/staticpage/view.php?page=CyTrain',
        'https://isea.gov.in/#:~:text=Key%20Verticals%20of%20ISEA%20Phase%2DIII&text=Creating%20a%20robust%20mechanism%20for,sectors%20(MSMEs%2C%20etc.)',
        'https://ncpcr.gov.in/',
    ];

    const handleLogoClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="container1">
            <h1>Link Repository</h1>
            <div
                className={`scrolling-logos ${isScrolling ? 'scrolling' : ''}`}
                onMouseEnter={stopScrolling}
                onMouseLeave={startScrolling}
            >
                {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        onClick={() => handleLogoClick(logoUrls[index])}
                        width={100}
                        height={100}
                    />
                ))}
                {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
                    <img
                        key={index + 5}
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        onClick={() => handleLogoClick(logoUrls[index + 5])}
                        width={100}
                        height={100}
                    />
                ))}
            </div>
        </div>
    );
};

export default LinkRepo;
