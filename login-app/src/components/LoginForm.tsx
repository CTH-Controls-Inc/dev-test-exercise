import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('Please provide a valid E-mail address').required('Valid Email is required'),
  password: yup.string().required('Password is required'),
});

const LoginForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values); // Form submission
    },
  });

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Email:   </label>
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.email && formik.errors.email ? 'error' : ''}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label>Password:    </label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <style jsx>{`
        .form-container {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          height: 40vh;
        }

        .form-group {
          margin-bottom: 1rem;
         
        }

        .error {
          border-color: red;
        }

        .error-message {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default LoginForm;

