import Layout from '../components/Layout';
import CreditCardItem from '../components/CreditCardItem';
import CreditCardTotal from '../components/CreditCardTotal';
import styles from '../styles/CreditCardPage.module.css';

export default function creditCardsPage({ creditCards }) {
  const deleteCreditCard = async (id) => {
    console.log(`Delete Entry ${id}`);
  };
  return (
    <Layout
      title='Credit Cards'
      description='Your monthly credit card balances and minimum payments.'
    >
      <h3 className={styles.h1}>Credit Cards Page</h3>
      <p className={styles.p}>
        Your monthly credit card balances and minimum payments
      </p>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Credit Card</td>
            <td>Balance</td>
            <td>Min. Payment</td>
            <td>APR</td>
            <td>Due Date</td>
            <td>Edited</td>
            <td>Delete</td>
            <td>Edit</td>
            <td>Paid</td>
          </tr>
        </thead>
        <tbody id='table-body'>
          {creditCards.data.map((creditCard) => (
            <CreditCardItem
              key={creditCard._id}
              creditCard={creditCard}
              handleDelete={deleteCreditCard}
            />
          ))}
        </tbody>
      </table>

      <CreditCardTotal creditCards={creditCards} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const creditCardRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/creditCards`
  );
  const creditCards = await creditCardRes.json();

  return {
    props: {
      creditCards,
    },
  };
}
