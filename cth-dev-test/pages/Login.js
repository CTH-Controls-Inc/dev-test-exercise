'use client'
import React, { useState } from 'react';

// Styles for Login Form
const styles = {
  center: {
    backgroundColor: '#e2f0fc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  login: {
    width: '300px',
    backgroundColor: '#ffffff',
    color: '#000',
    padding: '2rem',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  logintitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '500',
    letterSpacing: '3px',
    marginBottom: '2rem',
  },
  loginfield: {
    marginBottom: '1.5rem',
  },
  loginbuttoncontainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  loginbutton: {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
  },
};

// Styles for API links
const socialLoginStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '1rem',
    },
    text: {
        fontSize: '12px',
      marginBottom: '15px',
    },
    linkContainer: {
      display: 'flex',
    },
    link: {
      display: 'inline-block',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      backgroundColor: '#000',
      marginRight: '1rem',
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
    },
  };
  
// Login Page
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setEmailValid(emailValidation(email));
  };

  const emailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {    
    event.preventDefault();

    console.log('Login Successful');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={styles.center}>
      <div style={styles.login}>
        <h2 style={styles.logintitle}>Welcome</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.loginfield}>
            <label htmlFor="email">Email</label>
            <input
                
              type="email"
              id="email"
              name="email"
              value={email} 
              onChange={handleEmailChange}
              style={
                emailValid
                  ? { backgroundColor : "#f5f5f5", border: '0.5px solid black', width: '100%'}
                  : {
                      border: '3px solid red',
                      boxShadow: '0px 0px 12px red',
                    }
                    
              }
            />
          </div>
          <div style={styles.loginfield}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ backgroundColor : "#f5f5f5", border: '0.5px solid black', width: '100%'}}
            />
            <p style={{marginTop: '5px', fontSize:'11px', textAlign:'right'}}><a style={{textDecoration:'underline'}}>forget password?</a></p>
          </div>
          <div style={styles.loginbuttoncontainer}>
            <button style={styles.loginbutton} type="submit">
              Login
            </button>
          </div>
          <div style={socialLoginStyles.container}>
            <p style={socialLoginStyles.text}>Or log in with:</p>
            <div style={socialLoginStyles.linkContainer}>
                <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLoginStyles.link}
                >
                G
                </a>
                <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLoginStyles.link}
                >
                F
                </a>
                <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLoginStyles.link}
                >
                T
                </a>
            </div>
            </div>
        <div style={{display: 'flex',
    justifyContent: 'center', marginTop: '15px'}}>
                <p style={{fontSize: '10px'}}>Don't have an account ? <a style={{textDecoration:'underline'}}>Register</a></p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
