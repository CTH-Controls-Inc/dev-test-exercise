import React, { useState } from "react";

const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

const Homepage = () => {
  const [email, setEmail] = useState({
    value: "",
    isError: false,
  });
  const [password, setPassword] = useState({
    value: "",
    isError: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail({ ...email, isError: !EMAIL_REGEX.test(email.value) });
    setPassword({ ...password, isError: password.value === '' });

    if(EMAIL_REGEX.test(email.value) && password.value !== '' ) {
      alert("Login Successful");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail({ isError: false, value });
    } else if (name === "password") {
      setPassword({ isError: false, value });
    }
  };

  return (
    <form>
      <fieldset>
        <legend className="h1">Login</legend>
        <div className="mb-3">
          <label htmlFor="usernameInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${email.isError ? "is-invalid" : ""}`}
            placeholder="Email"
            onChange={handleChange}
          />
          <div className="invalid-feedback">Please enter valid email</div>
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="passwordInput"
            name="password"
            className={`form-control ${password.isError ? "is-invalid" : ""}`}
            placeholder="Password"
            onChange={handleChange}
          />
          <div className="invalid-feedback">Please enter password</div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Login
        </button>
      </fieldset>
    </form>
  );
};
export default Homepage;
