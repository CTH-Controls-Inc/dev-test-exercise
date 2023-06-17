"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
export default function Home() {
  
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

  //Handle Email Checking and Validation  
	const handleLogin = (e) => {
		let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		setEmail(e.target.value);
		if (!email.match(emailRegex)) {
			setError('Email is not valid');
		} else {
			setError(false);
		}
	};
  return (
    <main className={styles.main}>
      <div className={styles['login-container']}>
					<h1>Login</h1>
					<input
						className={error ? styles['error-input'] : styles['login-input']}
						type='email'
						placeholder='E-mail'
            onChange={(e) => {
							handleLogin(e);
						}}
					/>
					<input
						className={styles['login-input']}
						type='password'
						placeholder='Password'
            onChange={(e) => {
							setPassword(e.target.value)
						}}
					/>
          {error && <p className={styles.error}>{error}</p>}
				</div>
    </main>
  )
}
