import Head from 'next/head'
import {Container} from '@mui/material'; // importing required material ui components
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import loginStyles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>CTH Controls Dev Task</title>
      </Head>
      <Container maxWidth="sm" className={loginStyles.container}>
      <h1>Dev Task for CTH Controls.</h1>
      <div className={styles.description}>
          <p>Navigate to /login or <Link href="/login">click here</Link></p>
          </div>
      </Container>
      {/* <main className={`${styles.main} ${inter.className}`}> */}
        
      {/* </main> */}
    </>
  )
}
