import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'This field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validatePassword(value) {
  let error;

  if (!value) {
    error = 'This field is required';
  } else if (value.length < 8) {
    error = 'Your password must be at least 8 characters';
  } else if (value.search(/[a-z]/i) < 0) {
    error = 'Your password must contain at least one letter.';
  } else if (value.search(/[0-9]/) < 0) {
    error = 'Your password must contain at least one digit.';
  }
  return error;
}

function Login() {
  const paperstyle = {
    padding: 20,
    height: '47vh',
    width: 280,
    margin: '20px auto',
  };

  return (
    <Grid>
      <Paper elevation={3} style={paperstyle}>
        <Grid align='center'>
          <Avatar sx={{ bgcolor: '#1976D2' }}>
            <LoginTwoToneIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form>
              <Grid container direction={'column'} spacing={3}>
                <Grid item>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    name='email'
                    label='Email'
                    validate={validateEmail}
                    error={errors.email && touched.email}
                    helperText={<ErrorMessage name='email' />}
                  />
                </Grid>
                <Grid item>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    name='password'
                    type='password'
                    label='Password'
                    validate={validatePassword}
                    error={errors.password && touched.password}
                    helperText={<ErrorMessage name='password' />}
                  />
                </Grid>
                <Grid item>
                  <Button
                    fullWidth
                    type='submit'
                    color='primary'
                    variant='contained'
                    style={{ marginTop: '10px' }}
                  >
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}

export default Login;
