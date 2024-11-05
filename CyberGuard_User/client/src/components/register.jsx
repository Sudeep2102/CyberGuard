import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import '../styles/register.css';

const Register = () => {
  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];
  const [name, setName]=useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const user = {
      name,
      email,
      phone,
      state: selectedState,
      password
    };

    try {
      const response = await axios.post('http://localhost:3001/api/auth/register', user); // Use Axios instead of fetch
      console.log(response.data);
      setRegistrationSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setSelectedState('');
      setPassword('');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="register-content">
      <h1>Register</h1>
      <div className="register-form">
        {registrationSuccess ? (
          <p className="success-message">User successfully registered!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Name<span className="mandatory">*</span></label>
            <input type="text" value={name} placeholder="Enter your name" required onChange={(e) => setName(e.target.value)} />

            <label>Email<span className="mandatory">*</span></label>
            <input type="email" value={email} placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />

            <label>Phone<span className="mandatory">*</span></label>
            <div className="phone-input">
              <select className="country-code" required>
                <option value="+91">🇮🇳 +91</option>
              </select>
              <input type="text" value={phone} placeholder="Enter your phone number" className="phone-number" required onChange={(e) => setPhone(e.target.value)} />
            </div>

            <label>State<span className="mandatory">*</span></label>
            <select value={selectedState} required onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">Select your state</option>
              {states.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>

            <label>Password<span className="mandatory">*</span></label>
            <input type="password" value={password} placeholder="Enter your password" className='pwd' required onChange={(e) => setPassword(e.target.value)} />

            <button type="submit">Submit</button>
          </form>
        )}
        <p>Click <Link to="/login">here</Link> for existing user</p>
      </div>
    </div>
  );
};

export default Register;
