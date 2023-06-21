


import React, { useState } from 'react';
import './App.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Here you can add the logic for actual login functionality
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError('Please enter a valid email address.');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleFormSubmit}>
      <label>Email</label>
        <div>
         
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
            style={{ border: emailError ? '2px solid red' : 'none' }}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <label>Password</label>
        <div>
          
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className='button'>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;

