import React, { useState } from 'react';
import '../styles/feedbackForm.css';

const FeedbackForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [acknowledgementNumber, setAcknowledgementNumber] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setState('');
    setAcknowledgementNumber('');
    setFeedback('');
    alert('Feedback received!');
  };

  return (
    <div className="feedback-form">
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="left-section">
            <div className="field">
              <label>First Name:</label>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" required />
            </div>
            <div className="field">
              <label>Phone Number:</label>
              <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value.slice(0, 10))} placeholder="Enter your phone number" required pattern="[0-9]{10}" />
            </div>
            <div className="field">
              <label>State:</label>
              <select value={state} onChange={(e) => setState(e.target.value)} required>
                <option value="">Select State</option>
                {indianStates.map((state, index) => (
                  <option key={index}>{state}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Acknowledgement Number <br/> (if any):</label>
              <input type="text" value={acknowledgementNumber} onChange={(e) => setAcknowledgementNumber(e.target.value)} placeholder="Enter acknowledgement number" required />
            </div>
          </div>
          <div className="right-section">
            <div className="field">
              <label>Last Name:</label>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" required />
            </div>
            <div className="field">
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email id" required />
            </div>
            <div className="field">
              <label>Feedback:</label>
              <div>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value.slice(0, 500))}
                  placeholder="Enter your feedback (not greater than 500 characters)"
                  maxLength={500}
                  required
                ></textarea>
                <div className="feedback-warning">* Feedback should not be greater than 500 characters</div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
};

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export default FeedbackForm;
