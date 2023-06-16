import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev Test Harsh K</title>
        <meta name="description" content="dev test for CTH Controls" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>CTH Controls Dev Test&nbsp;</p>
          <div>
            <a href="https://harshkeswani.dev" target="_blank" rel="noopener noreferrer">
              By Harsh K
            </a>
          </div>
        </div>
        <div className={styles.center}>test</div>
      </main>
    </>
  );
}
