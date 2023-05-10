import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({ title, author, removeBook }) {
  return (
    <div className="container">
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <button type="button" onClick={removeBook}>Remove</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default function BooksList() {
  const books = useSelector((state) => state.books.value);
  const dispatch = useDispatch();

  return (
    <ul style={{ listStyle: 'none' }}>
      {books.map((book) => (
        <li key={book.item_id}>
          <Book
            title={book.title}
            author={book.author}
            removeBook={() => dispatch(removeBook(book.item_id))}
          />
        </li>
      ))}
    </ul>
  );
}
