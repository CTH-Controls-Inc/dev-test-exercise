import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { onLogin } from "./validatorApi";

const Login = () => {
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [emailSuccessMessage, setEmailSuccessMessage] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Login Data Handler
  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  // Front End Email validation using Regex
  const emailIsValid = (email) => {
    const emailTestRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailTestRegex.test(email);
  };

  // Back End Email validation with Success and Error messages receivied from server validator
  const handleLoginBE = async (event) => {
    event.preventDefault();
    try {
      const response = await onLogin(loginData);
      if (response) {
        setEmailSuccessMessage(response.message);
        setTimeout(() => {
          setEmailSuccessMessage("");
        }, 1000);
      }
    } catch (error) {
      setEmailErrorMessage(error.response.data.errors[0].msg);
      setTimeout(() => {
        setEmailErrorMessage("");
      }, 1000);
    }
  };

  const handleLoginFE = async (event) => {
    try {
      if (!emailIsValid(loginData.email)) {
        setEmailErrorMessage("Please use a valid email address. (Client Side Validation)");
        setTimeout(() => {
          setEmailErrorMessage("");
        }, 1000);
        return;
      } else {
        setEmailSuccessMessage("Email address is valid. (Client Side Validation)");
        setTimeout(() => {
          setEmailSuccessMessage("");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="container d-flex flex-column align-items-center mt-5">
        <h3 className="text-center">Login Page</h3>
        <div className="mt-5">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                placeholder="Enter email"
                value={loginData.email}
                onChange={handleChange}
                className={
                  emailErrorMessage && loginData.email ? "is-invalid" : ""
                }
              />
              <Form.Text className="text-muted">
                Please use a valid email address.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              {!emailErrorMessage && !emailSuccessMessage && (
                <Button variant="primary" type="submit" onClick={handleLoginBE}>
                  Login BE
                </Button>
              )}
              {!emailErrorMessage && !emailSuccessMessage && (
                <Button variant="primary" type="submit" onClick={handleLoginFE}>
                  Login FE
                </Button>
              )}
            </div>

            <div className="d-flex justify-content-center mt-3">
              {emailErrorMessage && (
                <p
                  className="alert alert-danger"
                  style={{ width: "200px", textAlign: "center" }}
                >
                  {emailErrorMessage}
                </p>
              )}
              {emailSuccessMessage && (
                <p
                  className="alert alert-success"
                  style={{ width: "200px", textAlign: "center" }}
                >
                  {emailSuccessMessage}
                </p>
              )}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
