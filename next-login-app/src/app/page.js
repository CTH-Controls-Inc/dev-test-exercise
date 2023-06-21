import styles from './styles/page.module.css';
import Login from './components/login';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}></div>
			{/* Login Dialogue  */}
			<Login />
			<div className={styles.grid}></div>
		</main>
	);
}
