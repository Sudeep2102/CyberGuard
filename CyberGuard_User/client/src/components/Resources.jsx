import React from 'react';
import '../styles/resources.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

const Resources = () => {
  return (
    <div className="resources">
      <div className="row">
        <div className="resource-item">
          <img src={image1} alt="" />
          <a href="https://www.youtube.com/watch?v=3e4JdZyrJGg&t=3s" className="link">How to File a Cyber Crime Complaint in India?</a>
        </div>
        <div className="resource-item">
          <img src={image2} alt="" />
          <a href="https://www.youtube.com/watch?v=rvBNGtt6wIY&t=49s" className="link">How to file Cyber fraud complaints online in Hindi?</a>
        </div>
        <div className="resource-item">
          <img src={image3} alt="" />
          <a href="https://www.youtube.com/watch?v=1ADdKh4wHVc&t=2s" className="link">What to do if someone blackmails using pictures?</a>
        </div>
      </div>
      <div className="row">
        <div className="resource-item">
          <img src={image4} alt="" />
          <p>Cyber Crime: What is it?</p>
          <a href="https://www.kaspersky.com/resource-center/threats/what-is-cybercrime" className="link">Read More -&gt;</a>
        </div>
        <div className="resource-item">
          <img src={image5} alt="" />
          <p>Understanding and recognizing potential cyber threats to protect oneself and others online</p>
          <a href="https://www.ibm.com/services/security?utm_content=SRCWW&p1=Search&p4=43700068113644962&p5=p&gad_source=1&gclid=Cj0KCQjw_qexBhCoARIsAFgBleu2iOlLGUV6sA4vcYNHTMzRvGXY_LABEol7zrE3C804eo-J0RNqbMEaAlv-EALw_wcB&gclsrc=aw.ds" className="link">Read More -&gt;</a>
        </div>
        <div className="resource-item">
          <img src={image6} alt="" />
          <p>To stay safe online, it's crucial to adopt various cyber safety practices</p>
          <a href="https://www.snbsd.com/about/online-safety-guide" className="link">Read More -&gt;</a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
