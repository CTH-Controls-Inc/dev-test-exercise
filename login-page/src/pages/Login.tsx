import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/Login.module.css";
import { Button } from "@nextui-org/react";


const Login = () => {
  //State variable to track email, password and form interaction
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailTouched, setEmailTouched] = useState(false);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isLoginSuccess, setLoginSuccess] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    //Event listener to handle click outside email input
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emailInputRef.current &&
        !emailInputRef.current.contains(event.target as Node)
      ) {
        setEmailTouched(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle email input change
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
    setEmailValid(validateEmail(value)); // Check email validity
    setLoginSuccess(false); // Reset login success status when email is changed
  };

  // Function to handle password input change
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setLoginSuccess(false); // Reset login success status when password is changed
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailValid(false); // Set email as invalid if it is not a valid email format
    } else {
      // Simulating login success
      setTimeout(() => {
        setLoginSuccess(true);
      }, 1000);
    }
  };

  const validateEmail = (value: string) => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className={styles.container}>
      {isLoginSuccess ? (
        <p className={styles.successMessage}>Login Successful!</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.formStyles}>
          <h1>Login</h1>
          <label htmlFor="userEmail">
            Email:
            </label>
            <input
              type="email"
              value={email}
              id="userEmail"
              placeholder="email"
              onChange={handleEmailChange}
              onBlur={() => setEmailTouched(true)}
              className={`${styles.inputField} ${
                !isEmailValid && isEmailTouched ? styles.invalidInput : ""
              }`}
              required
              ref={emailInputRef}
            />
         
          {isEmailTouched && !isEmailValid && (
            <p className={styles.error}>Please enter a valid email address</p>
          )}
          <label htmlFor="password">
            Password:
            </label>
            <input
              type="password"
              value={password}
              id="password"
              placeholder="password"
              onChange={handlePasswordChange}
              required
            />
        
        <Button type="submit" auto>
            Login
          </Button>
        </form>
      )}
    </div>
  );
};

export default Login;
