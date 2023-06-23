"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [invalidFields, setInvalidFields] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform validation
    const invalidFieldsList = [];
    if (!username) {
      invalidFieldsList.push('username');
    }
    if (!email || !validateEmail(email)) {
      invalidFieldsList.push('email');
    }
    if (!password) {
      invalidFieldsList.push('password');
    }

    if (invalidFieldsList.length > 0) {
      setInvalidFields(invalidFieldsList);
      setErrorMessage('Please fill in all required fields correctly.');
      return;
    }

    // resets form fields
    setUsername('');
    setEmail('');
    setPassword('');
    setErrorMessage('');
    setInvalidFields([]);
  };

  const validateEmail = (email) => {
    //email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFieldInvalid = (fieldName) => {
    return invalidFields.includes(fieldName);
  };

  //each field is required so check condition and if not fulfilled display error message

  return (
    <div className="container">
      <h1>Login Page</h1>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleLogin}>
        <div className={`mb-3 ${isFieldInvalid('username') ? 'has-error' : ''}`}>
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            className={`form-control ${isFieldInvalid('username') ? 'is-invalid' : ''}`}
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className={`mb-3 ${isFieldInvalid('email') ? 'has-error' : ''}`}>
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="text"
            className={`form-control ${isFieldInvalid('email') ? 'is-invalid' : ''}`}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className={`mb-3 ${isFieldInvalid('password') ? 'has-error' : ''}`}>
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className={`form-control ${isFieldInvalid('password') ? 'is-invalid' : ''}`}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
