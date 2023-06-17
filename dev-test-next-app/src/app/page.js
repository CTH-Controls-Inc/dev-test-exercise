import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles['login-container']}>
					<h1>Login</h1>
					<input
						className={styles['login-input']}
						type='email'
						placeholder='E-mail'
					/>
					<input
						className={styles['login-input']}
						type='password'
						placeholder='Password'
					/>
				</div>
    </main>
  )
}
