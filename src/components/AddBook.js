import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/utils';
import styles from './AddBook.module.css';

const template = {
  item_id: '',
  title: '',
  author: '',
  category: '',
};

export default function AddBook() {
  const [values, setValue] = useState(template);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    setValue((values) => ({
      ...values, item_id: crypto.randomUUID(), [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addBook(values));
    setValue({});
  }

  return (
    <section className={styles.addBook}>
      <h2>ADD A NEW BOOK</h2>
      <form className={styles.form}>
        <input
          className={styles.input}
          value={values.title || ''}
          type="text"
          name="title"
          placeholder="Book title"
          onChange={handleChange}
        />

        <input
          className={styles.input1}
          value={values.author || ''}
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleChange}
        />

        <button type="submit" className={styles.btn} onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </section>
  );
}
