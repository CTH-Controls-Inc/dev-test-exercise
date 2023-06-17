import Login from './components/Login';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <>
      <div className='App'>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          sx={{ minHeight: '100vh' }}
        >
          <Grid item xs={3}>
            <Login />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
