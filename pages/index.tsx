import React from "react";
import {Box, Button, createTheme, Grid, TextField, ThemeProvider} from "@mui/material";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const theme = createTheme({
    palette: {
        primary: {
            main: '#FF0000',
            contrastText: '#fff',
        },
    },
});

const themeDefault = createTheme({
    palette: {
        primary: {
            main: '#5ba1ec',
            contrastText: '#fff',
        },
    },
});


interface IFormInputs {
    email: string;
    password: string;
}

const email =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


const SignupSchema = yup.object({
    email: yup.string().email().required().trim().lowercase().matches(new RegExp(email), 'email must be a valid email'),
    password: yup.string().defined().required().typeError('Please input a valid password')
});

const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormInputs>({
        mode: 'onSubmit',
        resolver: yupResolver(SignupSchema)
    });

    const onSubmit = (data: IFormInputs) => {
        if (data) {
            toast.success('Congrats! SignIn Successfully')
        }
    };


    return (
        <div className="container" style={{textAlign: "center", width: "30vw", margin: '30vh auto 0'}}>
            <Box component='form' onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                    <ThemeProvider theme={errors.email?.message ? theme : themeDefault}>
                        <Grid item xs={12}>
                            <TextField fullWidth
                                       label='Email address'
                                       size='small'
                                       {...register("email")}
                                       helperText={errors.email?.message}
                            />
                        </Grid>
                    </ThemeProvider>

                    <Grid item xs={12}>
                        <TextField fullWidth
                                   label='Enter your password'
                                   size='small'
                                   {...register("password")}
                                   helperText={errors.password?.message}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type='submit' fullWidth variant="contained">Sign In</Button>
                    </Grid>
                </Grid>
                <ToastContainer/>
            </Box>
        </div>
    )
}

export default Contact
