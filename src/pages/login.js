import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform login logic here
    // For simplicity, we're just validating the email format

    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }

    // Continue with the login process
  };

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
<form class="w-full max-w-sm">
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        email
      </label>
    </div>
    <div class="md:w-2/3">
       <input
            className={`bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ${
              !isValidEmail ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="JohnDoe@gmail.com"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          {!isValidEmail && (
            <p className="text-red-500 text-xs italic">Invalid email address</p>
          )}
            
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
  <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
      Password
      </label>
    </div>
    <div class="md:w-2/3">
      <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
       
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={handleSubmit} type="button">
        Submit
      </button>
    </div>
  </div>
</form>
  );
};

export default Login;
