"use client";
import { useFormik } from 'formik';
import styles from './login.module.css'
import * as Yup from 'yup';

const LoginPage = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
  
    <div className={styles.container}>
      <h1>Login Page</h1>
      <form onSubmit={formik.handleSubmit}>
        
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`${styles.input} ${
              formik.errors.email && formik.touched.email ? styles.error : ''
            }`}
          />
          {formik.errors.email && formik.touched.email && (
            <div className={styles['error-message']}>{formik.errors.email}</div>
          )}
        
        <div>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={styles.input}
          />
          {formik.errors.password && formik.touched.password && (
            <div className={styles['error-message']}>{formik.errors.password}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
   
  );
};

export default LoginPage;
