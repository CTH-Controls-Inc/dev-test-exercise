"use client"
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = () => {
    const keyword = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!keyword.test(email)) {
      return false;
    } else {
      return true;
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail()) {
      alert("Invalid Email");
    } else {
      alert("Log In Successful");
    }
  };

  return (
    <div>
      <form className="form-input" onSubmit={(e) => onFormSubmit(e)}>
          <input 
              type="text" 
              placeholder='Email' 
              required
              value={email}
              onChange={handleEmailChange}
          />
          <input
              type="text" 
              placeholder='Password' 
              required
              value={password}
              onChange={handlePasswordChange}
          />
          <button className="login-btn">Login</button>
      </form>
      <div>
        <button className="basic-btn">Create Account</button>
        <button className="basic-btn">Forgot Password</button>
      </div>
    </div>
  )
}

export default LoginPage
