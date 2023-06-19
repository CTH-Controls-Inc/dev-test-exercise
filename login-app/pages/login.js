import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from '../styles/login.module.css';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <body className={styles['body_form']}>
        <div className={styles['container']}>
          <div className={styles['form_head_text']}>
            <h1>Login</h1>
          </div>
          <div className={styles['login_form']}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles['login_form']}>
              <div>
                <input
                  type="text"
                  {...register('email')}
                  className={errors.email ? styles.error : ''}
                  id={styles['input_form']}
                  placeholder='Email'
                />
                {errors.email && (
                  <span className={styles['error_message']}>{errors.email.message}</span>
                )}
              </div>
              <div>
                <input
                  type="password"
                  {...register('password')}
                  className={errors.password ? styles.error : ''}
                  id={styles['input_form']}
                  placeholder='Password'
                />
                {errors.password && (
                  <span className={styles['error_message']}>{errors.password.message}</span>
                )}
              </div>
                <button className={styles['button_form']} type="submit">Login</button>
            </form>
          </div>
          
        </div>
      </body>
    </div>
  );
};

export default Login;
