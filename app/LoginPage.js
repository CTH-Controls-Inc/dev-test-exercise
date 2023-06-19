"use client";
// Imported files - library
import "./LoginPage.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  // Variable declaration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  // Functions
  const checkForm = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email))
      return setError("Invalid email address");
  
    toast("You have successfully LOGGED IN, Congratulations!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // Clear form fields
    clearForm();
  };

  const clearForm = () => {
     setEmail("");
     setPassword("");
     setError("");
  }

  // Return statement - Form Return
  return (
    <div>
      <div className="loginForm">
        <h1>Login Page</h1>
        <br />
        <form onSubmit={checkForm}>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: error ? "red" : "" }}
          />
          {error && <label style={{ color: "red" }}>{error}</label>}
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

