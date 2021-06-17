import Layout from '../components/Layout';
import { convertCurrency } from '../helpers/index';

export default function totalPicture({ bills, creditCards }) {
  // Get total for bills
  const billsTotal = () => {
    if (bills !== '') {
      const cost = bills.data.map((bill) => {
        if (bill.cost > 0) {
          return parseInt(bill.cost);
        }
        return cost;
      });
      const total = cost.reduce((a, b) => {
        return a + b;
      });
      return total;
    }
  };

  const creditCardTotal = () => {
    if (creditCards !== '') {
      const cost = creditCards.data.map((card) => {
        if (card.balance > 0) {
          return parseInt(card.balance * 0.02);
        }
        return cost;
      });
      const total = cost.reduce((a, b) => {
        return a + b;
      });
      return total;
    }
  };

  const income = parseInt(3400);

  return (
    <Layout>
      <h3>Total Monthly Expenses including Credit Cards and Monthly Bills</h3>
      <p>
        {' '}
        Total Monthly Spending:{' '}
        {convertCurrency(billsTotal() + creditCardTotal())}
      </p>
      <p>
        Monthly Leftover:{' '}
        {convertCurrency(billsTotal() + creditCardTotal() - income)}
      </p>
    </Layout>
  );
}

export async function getServerSideProps() {
  const billsRes = await fetch(`${process.env.API_URL}/api/bills`);
  const bills = await billsRes.json();
  const creditCardsRes = await fetch(`${process.env.API_URL}/api/creditCards`);
  const creditCards = await creditCardsRes.json();

  return {
    props: {
      bills,
      creditCards,
    },
  };
}
