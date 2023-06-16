"use client";

import React from "react";
import styles from "./login.module.css";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);

  const validateForm = () => {
    if (!/^.*@.*\..*$/.test(email)) {
      setEmailError(true);
      return false;
    }
    setEmailError(false);
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    // TODO: send request to server
  };

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Log In</h1>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input + (emailError ? " " + styles.error : "")}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateForm}
            value={email}
          />
          <div
            className={
              styles.errorText + (emailError ? "" : " " + styles.hidden)
            }
          >
            Invalid email address
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <div
            className={
              styles.errorText + (passwordError ? "" : " " + styles.hidden)
            }
          >
            Invalid email address
          </div>
        </div>
        <button className={styles.submit} type="submit">
          Log In
        </button>
      </form>
    </main>
  );
}
