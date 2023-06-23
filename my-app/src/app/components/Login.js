"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);

  const validateEmail = (emailSubmited) => {
    if (!email) {
      setErrorEmail(true);
    }
    let regex = /^(\w+|-)([\.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(email.toLowerCase()) === false) {
      setErrorEmail(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let submit = true;
    if (!email) {
      submit = false;
    }
    let regex = /^(\w+|-)([\.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(email.toLowerCase()) === false) {
      setErrorEmail(true);
      submit = true;
    }

    if (submit) {
      console.log("submit successfull");
    }
  };

  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Form.Group className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>

            <Form.Control
              onBlur={(e) => validateEmail(e.target.value)}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorEmail(false);
              }}
              isInvalid={errorEmail}
              placeholder="Enter Email"
            />
         {errorEmail && <span style={{color:"red"}}> <AiOutlineExclamationCircle size={20} style={{verticalAlign:"bottom", paddingBottom:"2px"}}/>Invalid Email, please enter proper address</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>

            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button>Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
