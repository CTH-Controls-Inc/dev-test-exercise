"use client";
import React from 'react';
import { useState } from 'react';

import styles from './login.module.css';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setEmailValid] = useState(true);
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setEmailValid(true);
    };
  
    const handleLogin = () => {
      if (!validateEmail(email)) {
        setEmailValid(false);
        return;
      }
      
    };
  
    const validateEmail = (email) => {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return emailRegex.test(email);
    };


  return (
    <div className={styles.container}>
    <h1 className={styles.heading}>Login Page</h1>
    <div className={styles.input}>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        className={isEmailValid ? '' : styles.error}
      />
      {!isEmailValid && <p className={styles['error-message']}>Invalid email address.</p>}
    </div>
    <div className={styles.input}>
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className={styles.Button}>
        <button onClick={handleLogin}>Login</button>
    </div>
    
  </div>
  )
}
