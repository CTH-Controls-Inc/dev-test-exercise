"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const validateEmail = () => {
    const regex = /\S+@\S+\.\S+/;
    const isValid = regex.test(email);
    setEmailError(!isValid);
  };

  return (
    <main className={styles.main}>
      <div>
        <Typography variant="h4" component="h1" align="center">
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            error={emailError}
            helperText={emailError && "Invalid email"}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Password"
            type={type ? "password" : "text"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <Button
                  onClick={() => {
                    setShowPassword(!showPassword);
                    setType(!type);
                  }}
                  size="small"
                  variant="text"
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              ),
            }}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </div>
    </main>
  );
}
