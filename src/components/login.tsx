import { Button, Container, TextField, Typography, Snackbar } from "@mui/material"
import { useState, ChangeEvent } from "react"

export const LoginPage = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [notification, setNotification] = useState("");
    const [emailError, setEmailError] = useState("");

    const validateEmail = () => {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

        return isValidEmail
    }


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const isValidEmail = validateEmail();

        if (!isValidEmail) {
            setEmailError('Invalid email');
            setNotification("")
        } else {
            setEmailError("");
            setNotification('Login successful');
        }
    }

    const onDataChange = (event: ChangeEvent<HTMLInputElement>) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    return (
        <Container>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    value={data.email}
                    error={emailError !== ''}
                    helperText={emailError}
                    margin="normal"
                    variant="outlined"
                    onChange={onDataChange}
                >
                </TextField>
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth
                    margin="normal"
                    value={data.password}
                    onChange={onDataChange}
                >
                </TextField>
                <Button  type="submit" variant="contained" color="primary" fullWidth >
                    Submit
                </Button>
            </form>
            <Snackbar open={Boolean(notification)} autoHideDuration={3000} message={notification} />

        </Container>
    )
}