import { useState } from "react";

const Form = () => {
	/*
        Initialize state for form inputs
    */
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
	};

	return (
		<form>
			<div>
				<label>Email</label>
				<input
					type='email'
					value={email}
					onChange={emailChangeHandler}
				/>
			</div>
			<div>
				<label>Password</label>
				<input
					type='password'
					value={password}
					onChange={passwordChangeHandler}
				/>
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	);
};

export default Form;
