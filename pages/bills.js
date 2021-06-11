import Layout from '../components/Layout';
import BillItem from '../components/BillItem';
import BillTotal from '../components/BillTotal';
import styles from '../styles/BillsPage.module.css';

export default function billsPage({ bills }) {
  const deleteBill = async (id) => {
    console.log(`Delete Entry ${id}`);
  };
  return (
    <Layout title='Monthly Bills' description='All of your monthly bills'>
      <h1 className={styles.h1}>Your Bills Page</h1>
      <p className={styles.p}>
        Here you can see a summary of all of your monthly bills.
      </p>

      {bills.length === 0 && <h3>No Bills to display</h3>}

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Bills</td>
            <td>Payment</td>
            <td>Due Date</td>
            <td>Category</td>
            <td>Edited</td>
            <td>Delete</td>
            <td>Edit</td>
            <td>Paid</td>
          </tr>
        </thead>
        <tbody id='table-body'>
          {bills.data.map((bill) => (
            <BillItem key={bill._id} bill={bill} handleDelete={deleteBill} />
          ))}
        </tbody>
      </table>
      <BillTotal bills={bills} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const billsRes = await fetch(`${process.env.API_URL}/api/bills`);
  const bills = await billsRes.json();

  return {
    props: {
      bills,
    },
  };
}
