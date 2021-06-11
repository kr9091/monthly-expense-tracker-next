import Head from 'next/head';
import Header from './Header';
import styles from '../styles/Layout.module.css';

export default function Layout({ title, keywords, decription, children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={decription} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Monthly Expense Tracker',
  description: 'Track your monthly expenses and cut the bloat!',
  keywords: 'expenses, bills, management',
};
