"use client"

import React, { useState } from 'react';
import './page.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }

  };

  const isValidEmail = (email: string) => {
      // For simplicity, we'll use a basic regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="login">
    <h1>Login</h1>
    <input 
    type="text"  
    name="email" 
    value={email} 
    placeholder="Enter email" 
    onChange={handleEmailChange} 
    style={{ borderColor: emailError ? 'red' : '' }} ></input>
     <span> {emailError && <p style={{ color: 'red' }}>{emailError}</p>} </span>
    <input 
    type="password" 
    name="password" 
    value={password} 
    placeholder="Enter password" 
    onChange={handlePasswordChange} ></input>
    <div className="button" onClick={handleSubmit}>Login</div>
   
</div>
    
  );
};

export default Login;

