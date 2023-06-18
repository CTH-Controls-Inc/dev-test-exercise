import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(true);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <React.Fragment>
      <div className={styles.formBody}>
        <h4 className={styles.formHead}>Login</h4>
        <form onSubmit={handleSubmit} className={styles.logForm}>
          <div>
            <input
              className={styles.formInput}
              placeholder="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              style={{
                border: isValidEmail ? "" : "5px solid red",
              }}
            />
          </div>
          <div>
            <input
              className={styles.formInput}
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          {!isValidEmail && (
            <p className={styles.errorMessage}>
              Please enter a valid email address
            </p>
          )}
          {isSubmitted && (
            <p className={styles.message}>Login Successfully!!</p>
          )}
          <button className={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
