import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Welcome to my app</p>
        <div>
          <a
            href="https://amrthabit.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Amr Thabit
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Link className={styles.loginPageButton} href="/login">
          Log In
        </Link>
      </div>
    </main>
  );
}
