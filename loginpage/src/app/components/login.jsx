'use client'
import React from 'react';
import styles from './login.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email('Please enter a valid email address').required('Email is required'),
    password: yup.string().required('Password is required')
});

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        reValidateMode: 'onBlur'
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.input}>
                    <label>Email</label>
                    <input
                        {...register('email')}
                        className={errors.email ? styles.error : ''}
                    />
                    {errors.email && <p className={styles['error-message']}>{errors.email.message}</p>}
                </div>
                <div className={styles.input}>
                    <label>Password</label>
                    <input
                        {...register('password')}
                        type="password"
                        className={errors.password ? styles.error : ''}
                    />
                    {errors.password && <p className={styles['error-message']}>{errors.password.message}</p>}
                </div>
                <button className={styles.button} type="submit">Login</button>
            </form>
        </div>
    );

}
export default LoginPage;
