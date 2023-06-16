import { Alert, Button, TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [snackOpen, setSnackOpen] = useState(false);

  // initialized form state before user starts typing
  const isFormValid = email && password && !errors.email && !errors.password;

  const handleClose = () => {
    setSnackOpen(false);
  };

  // custom email validation regex, example format -> abc123@provider.com
  const validateEmail = (value) => {
    if (!value) {
      return "Email is required.";
    }
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(value)) {
      return "Please enter email in format: example@example.com";
    }
    return "";
  };

  // basic password validation, at least 1 character required
  const validatePassword = (value) => {
    if (!value) {
      return "Password is required";
    }
    return "";
  };

  // reads input value from email field, gets validation result,
  // then displays appropriate message
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const error = validateEmail(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: error,
    }));
  };

  // same as above handler, but for password
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

    // required as failsafe, even though login button will be disabled
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      return;
    }

    // show a snackbar that user has successfully logged in
    setSnackOpen(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        value={email}
        onChange={handleEmailChange}
        error={!!errors.email}
        helperText={errors.email}
        style={styles.formField}
      />
      <br />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        error={!!errors.password}
        helperText={errors.password}
        style={styles.formField}
      />
      <br />
      <Button type="submit" variant="outlined" disabled={!isFormValid} style={styles.loginBtn}>
        Login
      </Button>
      <Snackbar
        open={snackOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={2500}
        onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Logged in as {email}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default LoginForm;

const styles = {
  formField: {
    width: "400px",
    maxWidth: "90vw",
    marginBottom: "1rem",
  },
  loginBtn: {
    width: "400px",
    maxWidth: "90vw",
    height: "40px",
  },
};
