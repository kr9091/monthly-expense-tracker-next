import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [session] = useSession();

  if (!session)
    return (
      <header className={styles.header}>
        <p className={styles.brand}>Monthly Expense Tracker</p>
        <nav className={styles.links}>
          <>
            <a
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign in
            </a>
          </>
        </nav>
      </header>
    );

  return (
    <header className={styles.header}>
      <p className={styles.brand}>Monthly Expense Tracker</p>
      <nav className={styles.links}>
        <>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/bills'>
            <a>Bills</a>
          </Link>
          <Link href='/creditCards'>
            <a>Credit Cards</a>
          </Link>
          <Link href='/summary'>
            <a>Summary</a>
          </Link>

          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </a>
        </>
      </nav>
    </header>
  );
}
