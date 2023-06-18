"use client";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailErrorClass = emailError ? "red-border" : "black-border";

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    alert("You have successfully Logged in.");
    window.location.reload();
  };

  const validateEmail = () => {
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email address");
    }
  };

  return (
    <div className="login-page-container">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <h3>Login Here</h3>
        <div>
          <label>Email:</label>
          <input
            type="text"
            required
            value={email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
            className={emailErrorClass}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
