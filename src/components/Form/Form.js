import { useEffect, useState } from "react";

import styles from "./Form.module.css";

const Form = () => {
	/*
        Initialize state for form inputs
    */
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	/*
        State management for valid/invalid form inputs.
            Initial state is false as there is no input.
    */
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [passwordIsValid, setPasswordIsValid] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			/*
                Conditionally check if email is valid (includes @)
            */
			email.includes("@") ? setEmailIsValid(true) : setEmailIsValid(false);
		}, 500);
	}, [email, setEmailIsValid]);

	const emailChangeHandler = (e) => {
		/*
            Set email to user input
        */
		setEmail(e.target.value);
	};

	const passwordChangeHandler = (e) => {
		/*
            Set password to user input
        */
		setPassword(e.target.value);

		/*
            Conditionally check if password is valid (min 6 characters)
        */
		password.length + 1 >= 6
			? setPasswordIsValid(true)
			: setPasswordIsValid(false);
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();
		/*
            Conditionally check if the form inputs are valid on submit
        */
		if (emailIsValid && passwordIsValid) {
			alert("Thank you for logging in!");
			/*
                On Successful submit, reset to default state
            */
			setEmail("");
			setEmailIsValid(false);
			setPassword("");
			setPasswordIsValid(false);
		} else {
			alert("Email or Password is invalid.");
		}
	};

	return (
		<div className={styles.formContainer}>
			<form
				className={styles.form}
				onSubmit={formSubmitHandler}>
				<div className={styles.formBlock}>
					<label>Email</label>
					<input
						type='email'
						value={email}
						onChange={emailChangeHandler}
						className={!emailIsValid ? styles.error : undefined}
					/>
				</div>
				<div className={styles.formBlock}>
					<label>Password</label>
					<input
						type='password'
						value={password}
						onChange={passwordChangeHandler}
						className={!passwordIsValid ? styles.error : undefined}
					/>
				</div>
				<div className={styles.formBlock}>
					<button className={styles.button}>Login</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
