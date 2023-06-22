"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {AiOutlineExclamationCircle} from "react-icons/ai";
import { useState } from "react";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);
    const handleSubmit = () =>{

    }

  return (
    <div>
        <div style={{
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
        <Form>
            <Form.Group  className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Email
                </Form.Label>
                
                <Form.Control isInvalid={errorEmail}  defaultValue="email@example.com" />
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Password
                </Form.Label>
            
                <Form.Control type="password" placeholder="Password" />
                
            </Form.Group>
        <Button>Submit</Button>
      </Form>

        </div>
   
    </div>
  );
};

export default Login;
