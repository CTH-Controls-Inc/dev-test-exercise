import '../styles/globals.css';
import '../styles/log-in.css';

function LoginApp({ Component, pageProps }) {
    return <Component { ...pageProps } />
}

export default LoginApp;