import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.brand}>Monthly Expense Tracker</p>
      <nav className={styles.links}>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/bills'>
          <a>Bills</a>
        </Link>
        <Link href='/creditCards'>
          <a>Credit Cards</a>
        </Link>
      </nav>
    </header>
  );
}
