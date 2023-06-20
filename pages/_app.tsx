// pages/_app.tsx
import '../app/globals.css' // Import your global CSS here
import type { AppProps } from 'next/app'
import Layout from '../app/layout' // Import your Layout component (adjust the path as necessary)

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

