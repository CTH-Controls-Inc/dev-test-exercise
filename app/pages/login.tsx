"use client";
import React,{useState} from 'react';

// Login page component
const Login = () =>{
  // State variables for email, password, and email error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);

  // Event handler for email input change
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Event handler for password input change
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    
  };

  // Event handler for form submission
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError(!validateEmail(email));
    if (validateEmail(email)) {
      console.log('Email:', email);
      console.log('Password:', password);
    }
    
  };

  // Function to validate email using regex
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Render the login page UI
  return(
    <div className='flex justify-center items-center h-screen bg-gradient-to-b from-green-400 to-blue-400 '>
    <div className="flex flex-col justify-center items-center border-2 border-gray-100 p-20 shadow-lg bg-white">
    <h1 className="text-2xl font-medium mb-8 text-gray-700">Welcome</h1>
    <form onSubmit={onSubmit} className="flex flex-col ">
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
        className={`w-64 h-10 border-2 focus:outline-none focus:border-teal-400 focus:ring-1 p-2 mb-3 text-black ${
          emailError ? 'border-red-500 ' : 'border-gray-400'
        }`}
      />
      {emailError && (
        <p className="text-left text-red-500 mb-4 text-xs leading-none">Invalid email address</p>
      )}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
        className="w-64 h-10 border-2 focus:outline-none focus:border-teal-400 focus:ring-1 p-2 mb-3 border-gray-400 text-black"
      />
      <button
        type="submit"
        className=" shadow-sm w-full h-10 text-white bg-teal-400 text-black mt-4 ease-in-out duration-700 transition hover:bg-teal-600 "
      >
        Login
      </button>
    </form>
  </div>
  </div>
  )
}

export default Login;