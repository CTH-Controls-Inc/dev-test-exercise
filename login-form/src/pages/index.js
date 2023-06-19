import { Inter } from 'next/font/google'
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    //const Email = e.target.value;
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value) && e.target.value>0? "" : "Invalid email address");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
  };

  const validateEmail = (email) => {
    // Basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
            isInvalid={emailError !== ""}
          />
          <Form.Control.Feedback type="invalid">
            {emailError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Login
        </Button>
      </Form>
    </div>
  );
  
}
