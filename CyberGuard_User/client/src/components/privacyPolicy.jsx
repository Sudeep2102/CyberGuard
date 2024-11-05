import React from 'react';
import '../styles/privacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className='privacy-policy-body'>
      <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <div className="privacy-policy-content">
        <div className="section">
          <h4>User Provided Information</h4>
          <p>
            The Applications may obtain the information you provide when you download and register the Application. 
            Registration is optional. However, please keep in mind that you may not be able to use some of the features 
            offered by an Application unless you register. When you register and use the Application, you generally provide:
          </p>
          <ul>
            <li>Your name, email address, age, user name, password and other registration information</li>
            <li>Download or use applications from us</li>
            <li>Information you provide when you contact us for help</li>
            <li>Credit card information for use of the service</li>
            <li>Information you enter into our system when using the Application, such as contact information and other details</li>
          </ul>
        </div>
        <div className="section">
            <h4>Security</h4>
            <p>
              We are concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to authorized employees and contractors who need to know that information in order to operate, develop or improve our Application. Please be aware that, although we endeavor to provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default PrivacyPolicy;
