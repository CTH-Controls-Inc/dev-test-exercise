"use client";
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
    setIsValidEmail(validateEmail(enteredEmail));
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const validateEmail = (email: string) => {
    // Use a regular expression to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            style={{ border: isValidEmail ? '1px solid black' : '1px solid red' }}
          />
          {!isValidEmail && <p>Please enter a valid email address.</p>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


const Page: React.FC = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default Page;
