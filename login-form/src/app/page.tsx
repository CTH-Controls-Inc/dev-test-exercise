
import type { NextPage } from 'next'
import Head from 'next/head'
import  Login from './components/login';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
      </Head>
      <main>
        <Login>
        </Login>
      </main>
    </div>
  )
}

export default Home
