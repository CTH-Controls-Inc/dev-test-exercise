import styles from "@/styles/Home.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";
import Head from "next/head";
import LoginForm from "../components/login";

const inter = Inter({ subsets: ["latin"] });

// preset for the dark theme of the web app
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: [
      "ui - monospace",
      "Menlo",
      "Monaco",
      "Cascadia Mono",
      "Segoe UI Mono",
      "Roboto Mono",
      "Oxygen Mono",
      "Ubuntu Monospace",
      "Source Code Pro",
      "Fira Mono",
      "Droid Sans Mono",
      "Courier New",
      "monospace",
    ],
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
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
        <div className={styles.center}>
          <LoginForm />
        </div>
      </main>
    </ThemeProvider>
  );
}
