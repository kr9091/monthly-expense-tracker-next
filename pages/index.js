import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();
  if (loading)
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  return (
    <Layout>
      <h1 className={styles.title}>Monthly Expense Tracker Next</h1>
      <p>Track your monthly expenses and cut the bloat!</p>
      <p> Sign in to start</p>
    </Layout>
  );
}
