"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {AiOutlineExclamationCircle} from "react-icons/ai";
import { useState } from "react";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
        <div style={{
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
   <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Email
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext  defaultValue="email@example.com" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Password
                </Form.Label>
                <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
        <Button>Submit</Button>
      </Form>

        </div>
   
    </div>
  );
};

export default Login;
