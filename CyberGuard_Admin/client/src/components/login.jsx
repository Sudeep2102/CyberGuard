import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin@admin.com' && password === 'admin') {
      localStorage.setItem('login', true);
      navigate('/access');
    } else {
      setError('No admin access');
    }
  };

  return (
    <div className="login-content">
      <h1>Login</h1>
      {error && <div className="error-message">{error}</div>}
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <label>Email<span className="mandatory">*</span></label>
          <input
            type="email"
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password<span className="mandatory">*</span></label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='pwd'
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
