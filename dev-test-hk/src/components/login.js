import { useState } from "react";
import { TextField, Button } from "@mui/material";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const isFormValid = email && password && !errors.email && !errors.password;

  const validateEmail = (value) => {
    if (!value) {
      return "Email is required.";
    }
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(value)) {
      return "format: example@example.com";
    }
    return "";
  };

  const validatePassword = (value) => {
    if (!value) {
      return "Password is required";
    }
    if (value.length < 4) {
      return "Password should be at least 4 characters long";
    }
    return "";
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const error = validateEmail(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: error,
    }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const error = validatePassword(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform final validation
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (emailError || passwordError) {
      return;
    }

    // Proceed with login logic
    console.log("Login successful");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        value={email}
        onChange={handleEmailChange}
        error={!!errors.email}
        helperText={errors.email}
      />
      <br />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        error={!!errors.password}
        helperText={errors.password}
      />
      <br />
      <Button type="submit" variant="contained" color="primary" disabled={!isFormValid}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
