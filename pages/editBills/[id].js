import { useState } from 'react';
import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import styles from '../../styles/EditPage.module.css';
import { convertDate, RelativeTime } from '../../helpers/index';
import { useRouter } from 'next/router';

export default function editBills({ bill }) {
  const [values, setValues] = useState({
    name: bill.data.name,
    cost: bill.data.cost,
    category: bill.data.category,
    dueDate: bill.data.dueDate,
    paid: bill.data.paid,
  });

  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();

    const res = fetch(`${process.env.API_URL}/api/bills/${bill.data._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    setShowModal(true);
    setTimeout(() => {
      router.push('/bills');
    }, 3000);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name);
    return setValues({ ...values, [name]: value });
  };

  const checkboxHandler = (e) => {
    const value = e.target.checked;
    return setValues({ ...values, paid: value });
  };

  return (
    <Layout>
      <h3>Editing: {bill.data.name}</h3>

      <form className={styles.form} onSubmit={submitForm}>
        <label htmlFor='editedName'>Bill:</label>
        <input
          type='text'
          name='name'
          value={values.name}
          onChange={inputHandler}
        />
        <label htmlFor='editedCost'>Cost:</label>
        <input
          type='text'
          name='cost'
          value={values.cost}
          onChange={inputHandler}
        />
        <label htmlFor='editedDueDate'>Due Date:</label>
        <input
          type='date'
          name='dueDate'
          value={convertDate(values.dueDate)}
          onChange={inputHandler}
        />
        <label htmlFor='editedCategory'>Category:</label>
        <select name='category' value={values.category} onChange={inputHandler}>
          <option disabled>Choose Category</option>
          <option value='Loans'>Loans</option>
          <option value='Utilities'>Utilities</option>
          <option value='Housing'>Housing</option>
          <option value='Credit Cards'>Credit Cards</option>
          <option value='Services'>Services</option>
        </select>
        <label htmlFor='editedPaidStatus'>Paid:</label>
        <input
          type='checkbox'
          name='paid'
          checked={values.paid}
          onChange={checkboxHandler}
        />
        <button type='submit' value='submit' id='submit-edit-button'>
          Update Bill
        </button>
      </form>

      {showModal === true ? <Modal /> : ''}
    </Layout>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${process.env.API_URL}/api/bills/${id}`);
  const bill = await res.json();

  return {
    props: {
      bill,
    },
  };
}
