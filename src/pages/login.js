import React, { useState } from 'react';
import { TextField, Button, Container, Modal, Box, Typography } from '@mui/material'; // importing required material ui components
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import styles from '../styles/LoginPage.module.css'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [isLoginSuccessModalOpen, setIsLoginSuccessModalOpen] = useState(false);

  const isLoginFormValid = () => {
    return email.trim() !== '' && password.trim() !== '' && !isEmailError; //trim password and email for lingering white space and check for empty values
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoginSuccessModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginSuccessModalOpen(false);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailError(!validateEmail(value));
  };

  const validateEmail = (value) => { // regex to verify correct email address format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  return (
    <Container maxWidth="sm" className={styles.container}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange} // verify email format on input change
            fullWidth
            required
            error={isEmailError} // material ui flag to show/hide error 
            helperText={isEmailError ? 'Invalid email address' : ''}
          />
        </div>
        <div>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.loginButton}
          disabled={!isLoginFormValid()}
        >
          Login
        </Button>
      </form>
      <Modal open={isLoginSuccessModalOpen} onClose={handleCloseModal} className={styles.modal}>
        <Box className={styles.loginSuccessModal}>
          <div className={styles.modalContainer}><CheckCircleOutlineSharpIcon color="success"/><Typography variant="h6" color="success">Login Success!</Typography></div>
          <Button className={styles.cancelButton} onClick={handleCloseModal}><CancelOutlinedIcon/></Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default LoginPage;
