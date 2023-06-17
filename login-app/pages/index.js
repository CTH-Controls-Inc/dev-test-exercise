import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform email validation
    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Add your login logic here
  };

  const isValidEmail = (value) => {
    // Email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Login</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            required
            error={!!emailError}
            helperText={emailError}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={{ marginBottom: '10px' }}
          />
          <Button type="submit" variant="contained" color="primary" style={{ marginBottom: '10px' }}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
