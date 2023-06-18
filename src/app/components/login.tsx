'use client';
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./login.module.css";
const Login = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values) => {
      // we can call API here
    }}

    //setting the
    validationSchema={Yup.object().shape({
      email: Yup.string()
      .required("Email is Required.")
      .matches( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid email"),
      password: Yup.string()
        .required("Password is required.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      return (
        <div className={styles.App}>
          <div className={styles.container}>
            <h1 className={styles.title}> Sign in </h1>
            <form onSubmit={handleSubmit}>
              <div className={styles.row}>
                <label>Email</label>
                <input
                  name="email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.input + " " + (errors.email && touched.email ? styles.error : "")}
                />
                {errors.email && touched.email && (
                  <div className={styles.inputfeedback}>{errors.email}</div>
                )}
              </div>
              <div className={styles.row}>
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.input + " " + (errors.password && touched.password ? styles.error : "")}
                />
                {errors.password && touched.password && (
                  <div className={styles.inputfeedback}>{errors.password}</div>
                )}
              </div>
              
              <button className={styles.button}>SIGN IN</button>
            </form>
            
          </div>
        </div>
      );
    }}
  </Formik>
);

export default Login;
