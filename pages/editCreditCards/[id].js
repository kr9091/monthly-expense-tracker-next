import { useState } from 'react';
import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import { convertDate } from '../../helpers/index';
import { useRouter } from 'next/router';
import styles from '../../styles/EditPage.module.css';

export default function editCreditCards({ creditCard }) {
  const [values, setValues] = useState({
    name: creditCard.data.name,
    balance: creditCard.data.balance,
    apr: creditCard.data.apr,
    dueDate: creditCard.data.dueDate,
    paid: creditCard.data.paid,
  });

  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();

    const res = fetch(
      `http://localhost:3000/api/creditCards/${creditCard.data._id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }
    );
    setShowModal(true);
    setTimeout(() => {
      router.push('/creditCards');
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
      <h3>Editing: {creditCard.data.name}</h3>

      <form className={styles.form} onSubmit={submitForm}>
        <label htmlFor='name'>Card Name:</label>
        <input
          type='text'
          name='name'
          value={values.name}
          onChange={inputHandler}
          placeholder='Card'
        />
        <label htmlFor='balance'>Balance:</label>
        <input
          type='text'
          name='balance'
          value={values.balance}
          onChange={inputHandler}
          placeholder='Balance'
        />
        <label htmlFor='apr'>APR:</label>
        <input
          type='text'
          name='apr'
          value={values.apr}
          onChange={inputHandler}
          placeholder='APR 2.99'
        />
        <label htmlFor='dueDate'>Due Date:</label>
        <input
          type='date'
          name='dueDate'
          value={convertDate(values.dueDate)}
          onChange={inputHandler}
        />
        <label htmlFor='PaidStatus'>Paid:</label>
        <input
          type='checkbox'
          name='PaidStatus'
          checked={values.paid}
          onChange={checkboxHandler}
        />
        <button type='submit' value='submit' id='submit-edit-button'>
          Update Credit Card
        </button>
      </form>

      {showModal === true ? <Modal /> : ''}
    </Layout>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`http://localhost:3000/api/creditCards/${id}`);
  const creditCard = await res.json();

  return {
    props: {
      creditCard,
    },
  };
}
