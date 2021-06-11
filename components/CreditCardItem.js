import { convertDate, convertCurrency } from '../helpers/index';
import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function CreditCardItem({ creditCard, handleDelete }) {
  return (
    <tr>
      <td>{creditCard.name}</td>
      <td>{convertCurrency(creditCard.balance)}</td>
      <td>
        {convertCurrency(creditCard.balance * 0.02)} -{' '}
        {convertCurrency(creditCard.balance * 0.03)}
      </td>
      <td>{creditCard.apr}%</td>
      <td>{convertDate(creditCard.dueDate)}</td>
      <td>{convertDate(creditCard.updated_at)}</td>
      <td>
        <a href='#' onClick={() => handleDelete(creditCard._id)}>
          <FaTimes />
        </a>
      </td>
      <td>
        <Link href={`/editCreditCards/${creditCard._id}`}>
          <a>
            <FaPencilAlt />
          </a>
        </Link>
      </td>
      <td>
        {creditCard.paid === true ? (
          <input
            type='checkbox'
            name='paid_status'
            id='paid_status'
            checked
            disabled
          />
        ) : (
          <input type='checkbox' name='paid_status' id='paid_status' disabled />
        )}
      </td>
    </tr>
  );
}
