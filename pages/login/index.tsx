import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(email);
    //we can use validator package here but this is just a small requirement so regular expresstion is okay for now
  };

  const handleBlur = () => {
    if (!validateEmail(email)) {
      setError('Invalid email address');
    }
  };

  const handleChange = (value: string) => {
    setEmail(value);

    if (error) {
      setError('');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 px-6">
      <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
        <div className="flex justify-center items-center">
          <span className="text-gray-700 font-semibold text-2xl">Login</span>
        </div>
        <form className="mt-4">
          <label className="block">
            <span className="text-gray-700 text-sm">Email</span>
            <input
              type="email"
              // className={`w-full pt-3 pb-3 pl-2 pr-2 rounded-md shadow-sm ${error ? 'border-2 border-red-500' : ''}`}

              className={`w-full pt-3 pb-3 pl-2 pr-2 rounded-md shadow-sm border-2 ${
                error ? 'border-red-600' : 'border-gray-300'
              }`}
              placeholder="riddhi26.patel@gmail.com"
              value={email}
              onBlur={handleBlur}
              onChange={(event) => handleChange(event.target.value)}
            />
            {error && <div className="text-red-600 text-sm">{error}</div>}
          </label>
          <label className="block mt-3">
            <span className="text-gray-700 text-sm">Password</span>
            <input
              type="password"
              className="w-full pt-3 pb-3 pl-2 pr-2 rounded-md shadow-sm border-2"
              placeholder="********"
            />
          </label>
          <div className="mt-4">
            <button className="py-2 px-4 bg-blue-600 text-white rounded-md w-full" type='submit'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
