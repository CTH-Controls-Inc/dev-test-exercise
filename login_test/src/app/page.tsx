"use client";
import styles from './page.module.css';
import  React,{useState} from 'react';
import {Button,Box,Typography,TextField} from '../lib/mui';



export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const handleEmail=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(event.target.value)
    setIsValidEmail(validateEmail(email))
  }
  const handlePassword=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(event.target.value)


  }
  const handleClick=()=>{
    if (password ===''){
      setIsValidPassword(true)

    }
    if (email === ''){

      setIsValidEmail(true)
      setEmailError('please enter email')

    }
    if (email !== ''&& password !==''  && !isValidEmail){

      alert('login success')
      console.log({
        email:email,
        password:password
      })
    }




  }
  const validateEmail = (email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)){

      return false
    }
    setEmailError('invalid email')
    return true

  };

  return (
      <div className={styles.main} >

        <Box sx={{
          width: 450,
          height: 350,
          padding:'30px',
          boxShadow: '0 2px 30px rgba(0, 0, 0, 0.3)',
          backgroundColor: 'aliceblue',
          borderRadius: '3px'



        }} >
          <Typography variant="h4" align="center" mb={4}  sx={{ marginTop: '30px' , marginBottom:'10px'}} >
            Login
          </Typography>
          <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              error={isValidEmail}
              helperText={isValidEmail && emailError}
              value={email}
              onChange={handleEmail}
              onFocus={()=>setIsValidEmail(false)}


          />
          <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={handlePassword}
              onFocus={()=>setIsValidPassword(false)}
              error={isValidPassword}
              helperText={isValidPassword && 'please enter password'}

          />
          <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleClick}

          >
            Login
          </Button>
        </Box>
      </div>
  );
}