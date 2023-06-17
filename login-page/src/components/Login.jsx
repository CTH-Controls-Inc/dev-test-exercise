import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { lightBlue } from '@mui/material/colors';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import TextField from '@mui/material/TextField';

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
        <Grid align='center'>
          <Avatar sx={{ bgcolor: lightBlue[500] }}>
            <LoginTwoToneIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Grid spacing={2.5} direction={'column'} container>
          <Grid item>
            <TextField
              required
              id='outlined-required'
              label='Email'
              placeholder='john@doe.com'
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id='outlined-required'
              label='Password'
              placeholder='********'
              type='password'
              fullWidth
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Login;
