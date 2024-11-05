import React from 'react';
import '../styles/disclaimer.css';

const Disclaimer = () => {
  return (
    <div className='disclaimer-body'>
      <div className="disclaimer-container">
        <h1><strong>Disclaimer:</strong></h1>
        <p>The contents of this website are for information purposes only, enabling public to have a quick and an easy access 
        to information. We are taking every effort to provide accurate and updated information. However, it is likely that the 
        details such as telephone numbers, name of the officer holding a post, etc may change prior to their updating in the
        web site. Hence, we do not assume any legal liability on the completeness, accuracy or usefulness of the contents 
        provided in this web site.</p>
        <p>The links are provided to other external sites in some documents. We are not responsible for the accuracy of the 
        contents in those sites. The hyperlinks given to external sites do not constitute an endorsement of information, 
        products or services offered by these sites.</p>
        <p>Despite our best efforts, we do not guarantee that the documents in this site are free from infection by computer
        viruses etc.</p>
        <p>We welcome your suggestions to improve our site and request that any error found may kindly be brought to our notice.</p>
        <p><em>Thanks for visiting our site.</em></p>
        <p><em>Web Site Administration Team</em></p>
      </div>
    </div>
  );
};

export default Disclaimer;
