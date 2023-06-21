'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isEmailValid, setEmailValid] = useState(true);

	const handleEmailChange = (e) => {
		const emailcurrentstate = e.target.value;
		setEmail(emailcurrentstate);
		console.log(email.length);

		// Validate the email field
		if (!validateEmail(emailcurrentstate) && emailcurrentstate.length > 0) {
			setEmailValid(false);
			return;
		} else {
			setEmailValid(true);
		}
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validateEmail(email)) {
			setEmailValid(false);
			return;
		}
	};

	const validateEmail = (emailValue) => {
		// Basic email validation (regex or any other validation logic can be used here)
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(emailValue);
	};

	return (
		<div style={styles.center}>
			<div style={styles.login}>
				<h2 style={styles.logintitle}>Login to your Account</h2>
				<form onSubmit={handleSubmit}>
					<div style={styles.loginfield}>
						<label htmlFor='email'>Email Address</label>
						<input
							type='email'
							id='email'
							name='email'
							value={email}
							onChange={handleEmailChange}
							style={
								isEmailValid
									? {
											border: '1px solid black',
									  }
									: {
											border: '3px solid red',
											boxShadow: '0px 0px 12px red',
									  }
							}
						/>
						{!isEmailValid && (
							<p style={{ color: 'red', fontSize: '0.8rem' }}>
								Please enter a valid email address.
							</p>
						)}
					</div>
					<div style={styles.loginfield}>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							name='password'
							value={password}
							onChange={handlePasswordChange}
						/>
					</div>
					<div style={styles.loginbuttoncontainer}>
						<button style={styles.loginbutton} type='submit'>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;

const styles = {
	logintitle: {
		marginBottom: '40px',
		justifyContent: 'center',
		display: 'flex',
		alignItems: 'center',
	},
	login: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	loginfield: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '1rem',
	},
	loginbuttoncontainer: {
		justifyContent: 'center',
		display: 'flex',
		alignItems: 'center',
	},
	loginbutton: {
		marginTop: '1rem',
		marginBottom: '1rem',
		width: '100%',
		height: '2rem',
		borderRadius: '2rem',
		backgroundColor: 'Green',
		color: 'black',
		fontSize: '1rem',
		fontWeight: '600',
	},
};
