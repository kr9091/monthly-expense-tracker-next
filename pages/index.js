import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>Monthly Expense Tracker Next</h1>
      <p>Track your monthly expenses and cut the bloat!</p>
    </Layout>
  );
}
