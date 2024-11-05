import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/auth/login', { email, password });
      const token = res.data.token;
      localStorage.setItem('token', token);
      const id=res.data.userId;
      localStorage.setItem('id',id);
      console.log('Login successful!');
      // Redirect to home page
      navigate('/'); // Redirect to the home page
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        setError(error.response.data.msg);
      } else {
        setError('An error occurred while logging in.');
      }
    }
  };

  return (
    <div className="login-content">
      <h1>Login</h1>
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <label>Email<span className="mandatory">*</span></label>
          <input type="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password<span className="mandatory">*</span></label>
          <input type="password" placeholder="Enter your password" className='pwd' required value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Submit</button>
          {error && <p className="error">{error}</p>}
        </form>
        <p>Click <Link to="/register">here</Link> to register</p>
      </div>
    </div>
  );
};

export default Login;
