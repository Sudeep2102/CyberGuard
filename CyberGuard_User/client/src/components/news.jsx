import React from 'react';
import '../styles/news.css';
import bbcImage from '../assets/bbc.png';
import bbc1Image from '../assets/bbc1.png';
import guardianImage from '../assets/guardian.png';
import guardian1Image from '../assets/guardian1.png';

const News = () => {
  return (
    <div className="news">
      <div className="news-item">
        <div className="news-content">
          <img src={bbcImage} alt="BBC Logo" className="news-image" />
          <div className="news-details">
            <a href="https://firebrand.training/uk/blog/bbc-news-police-bust-global-cyber-gang-accused-of-industrial-scale-fraud#:~:text=A%20global%20network%20of%20cyber,over%20%C2%A31m%20in%20profits." className="link">Police bust global cyber gang accused of industrial-scale fraud</a>
            <p className="news-description">Police took down the international scam on Tuesday and say there could be up to 70,000 UK victims.</p>
          </div>
        </div>
        <img src={bbc1Image} alt="BBC 1" className="news-image-right" />
      </div>

      <div className="news-item">
        <div className="news-content">
          <img src={guardianImage} alt="Guardian Logo" className="news-image" />
          <div className="news-details">
            <a href="https://www.theguardian.com/technology/2024/apr/18/students-turning-to-cyberfraud-as-huge-phishing-site-infiltrated-police-reveal#:~:text=Students%20turning%20to%20cyberfraud%20as%20huge%20phishing%20site%20infiltrated%2C%20police%20reveal,-LabHost%20enabled%20users&text=University%20students%20have%20turned%20to,tens%20of%20thousands%20of%20people." className="link">Students turning to cyberfraud as huge phishing site infiltrated, police reveal</a>
            <p className="news-description">LabHost enabled users to set up websites designed to trick victims into revealing personal information – with 70,000 allegedly duped in the...</p>
          </div>
        </div>
        <img src={guardian1Image} alt="Guardian 1" className="news-image-right" />
      </div>
    </div>
  );
};

export default News;
