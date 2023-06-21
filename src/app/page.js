"use client"
import Image from 'next/image'
import { useState, useEffect} from 'react';
import cn from "classnames";

import styles from './page.module.css'
import validateEmail from './utils'

export default function Home() {
  const [email, setEmail] = useState(undefined);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if(email) {
      setIsValid(validateEmail(email))
    }
  })

  function showMessage() {
    if(isValid) {
      alert("Congratulations, you loged in!");
    }
  }

  return (
    <main className={styles.main}>
      <form class="form" onSubmit={showMessage}>
        <h1>Get started</h1>
        <div className={styles.container}>
          <label for='username' className={styles.input__label}>Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="username"
            class={styles.input}>
          </input>
        </div>
        <div className={styles.container}>
          <label for={email} className={styles.input__label}>Email</label>
          <input
            id="Email"
            name="Email"
            type="email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder="example@mail.com" 
            className={`${styles.input} ${isValid ? '' : styles['input--error']} `}>
          </input>
          <span className={cn(styles['error-message'])}>{!isValid && 'Enter a valid email address'}</span>
        </div>
        <button type='submit' className={styles.button}>sign in</button>
        </form>            
    </main>
  )
}
