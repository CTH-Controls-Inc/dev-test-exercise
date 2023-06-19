import React, { useState } from 'react';
import { debounce } from 'lodash';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const validateEmail = (email) => {
    
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const validateEmailDebounced = debounce((email) => {
    setIsValidEmail(validateEmail(email));
  }, 1000);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailTouched(false);
    validateEmailDebounced(value);
  };

  const handleEmailBlur = () => {
    setIsEmailTouched(true);
    validateEmailDebounced.flush();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitted Email:', email);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            style={{ border: !isValidEmail && isEmailTouched ? '1px solid red' : '1px solid #ccc' }}
          />
          {!isValidEmail && isEmailTouched && (
            <p style={{ color: 'red' }}>Please enter a valid email address.</p>
          )}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
