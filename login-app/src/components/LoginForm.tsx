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
         style={{
            width: 1000,
            height: 80,
            fontSize: 90,
            fontFamily: "Work Sans",
            backgroundColor: 'powderblue',
          }}
          
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
            className="text-box"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <button className="submit-button"
        type="submit" >Login</button>
      </form>

      {/* Since this is a basic one page app, I chose to simplify the css + typescript issues, so excluded webpack. 
      therefore, i added the jsx file here*/}

      <style jsx>{`
        .form-container {
            font-family: "Work Sans", sans-serif;
            
            font-size: 4em;
            width: 28em;
            line-height: 0.9em;
            margin-left: auto;
            margin-right: auto;
            margin-top: 1.5em;
            text-align: center;
            justify-content: center;
            align-items: center;
        }

        .form-group {
            font-weight: 600;
            margin-bottom: 1rem;
            margin-left: auto;
            margin-right: auto;
            margin-top: 1.5em;
         
        }
        .text-box {
            font-family: "Work Sans", sans-serif;
            height:80px;
            width: 1000px;
            font-size:90pt;
            backgroundColor: 'powderblue'
        }

        .error {
          border-color: red;
        }

        .error-message {
          color: red;
        }
        .submit-button {
            width: 200px ;
            height:88px;
            background: powderblue;
            font-family: "Work Sans", sans-serif;
            margin-top: 10px;
            font-size: 72px;
        }
      `}</style>
    </div>
  );
};

export default LoginForm;

