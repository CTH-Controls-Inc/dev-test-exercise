import Head from 'next/head';
import LoginForm from '../components/email-form'

export default function Home() {
  return (
    <div>
    <Head>
      <title>Login Page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <LoginForm/>
    </main>
  </div>
  )
}
