import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(regex.test(email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      alert('Sucessfully Login!');
      setEmail('')
      setPassword('')
    }

  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
            style={{ border: isValidEmail ? '1px solid black' : '1px solid red' }}
          />
          {!isValidEmail && <p className="error">Entered value is not a valid email</p>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
