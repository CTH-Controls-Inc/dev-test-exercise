import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Login() {
  const paperstyle = {
    padding: 20,
    height: '70vh',
    width: 280,
    margin: '20px auto',
  };

  return (
    <Grid>
      <Paper elevation={3} style={paperstyle}>
        Sign In
      </Paper>
    </Grid>
  );
}

export default Login;
