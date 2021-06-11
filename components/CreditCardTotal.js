import { convertCurrency } from '../helpers/index';
import styles from '../styles/Total.module.css';

export default function BillTotal({ creditCards }) {
  const total = () => {
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
    <div className={styles.total}>
      <div className='spending'>
        Total Monthly Spending: {convertCurrency(total())}
      </div>
      <div className='income'>
        Total Monthly Income: {convertCurrency(income)}
      </div>
      <div className='net'>
        Net Income Each Month: {convertCurrency(income - total())}
      </div>
    </div>
  );
}
