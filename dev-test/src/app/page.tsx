'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [isEmailValid, setEmailValidity] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const emailValidationRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

  const blurHandler = (): void => {
    setEmailValidity(emailValidationRegex.test(email));
  };

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  return (
    <main className={styles.main}>
      <div className={styles.loginContainer}>
        <header className={styles.loginHeader}>
          Yet Another Login Page
        </header>
        <div className={styles.loginBody}>
          <div className={styles.emailContainer}>
            <input
              type="email"
              placeholder='Enter Email'
              className={`${!isEmailValid ? styles.emailInvalid : ''}`}
              value={email}
              onChange={emailChangeHandler}
              onBlur={blurHandler}
            />
            {!isEmailValid && (
              <div className={styles.emailError}>Entered value is not a valid email</div>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder='Enter Password'
              className={styles.passwordInput}
            />
          </div>
          <div>
            <button type="submit" className={styles.loginButton}>Log In</button>
          </div>
        </div>
      </div>
    </main>
  );
}