import { convertDate } from '../helpers/index';
import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function BillItem({ bill, handleDelete }) {
  return (
    <tr>
      <td>{bill.name}</td>
      <td>${bill.cost}</td>
      <td>{convertDate(bill.dueDate)}</td>
      <td>{bill.category}</td>
      <td>{convertDate(bill.updated_at)}</td>
      <td>
        <a href='#' onClick={() => handleDelete(bill._id)}>
          <FaTimes />
        </a>
      </td>
      <td>
        <Link href={`/editBills/${bill._id}`}>
          <a>
            <FaPencilAlt />
          </a>
        </Link>
      </td>
      <td>
        {bill.paid === true ? (
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
