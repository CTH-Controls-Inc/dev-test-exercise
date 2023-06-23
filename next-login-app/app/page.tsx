"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={values => {
            // simulate server response
            console.log(values);
          }}>
          {({ errors, touched }) => (
            <Form>
              <div>
                <Field
                  style={
                    errors.email && touched.email
                      ? { borderColor: "red" }
                      : null
                  }
                  type='email'
                  name='email'
                />
                <ErrorMessage name='email' component='div' />
              </div>
              <div>
                <Field type='password' name='password' />
                <ErrorMessage name='password' component='div' />
              </div>
              <div>
                <button type='submit'>Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
}
