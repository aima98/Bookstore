import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, fetchBooks } from '../redux/utils';

function Book({ title, author, removeBook }) {
  return (
    <div className="container">
      <div className="Book">
        <div className="book-content">
          <div className="book-info">
            <h4 className="book-category">Category</h4>
            <h2>{title}</h2>
            <h6>{author}</h6>
            <div className="action-buttons">
              <button className="rmv-btn" type="button">Comments</button>
              <div className="vertical-divider" />
              <button className="rmv-btn" type="button" onClick={removeBook}>Remove</button>
              <div className="vertical-divider" />
              <button className="rmv-btn" type="button">Edit</button>
            </div>
          </div>
          <div className="Progress">
            <div className="circle-container">
              <div className="circle" />
            </div>
            <div className="stat">
              <p className="percent-complete">64%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
            <div className="current-chapter">
              <div className="current">
                <p className="label">CURRENT CHAPTER</p>
                <p className="chapter">Chapter 17: &quot;A lesson learned&quot;</p>
              </div>
              <div>
                <button className="primary-button" type="button">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>

        </div>
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
  const { isLoading, isError, value } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const loading = isLoading && <p>Loading...</p>;
  const error = isError && <p>Error loading books, try again</p>;

  return (
    <>
      {loading}
      {error}
      <ul style={{ listStyle: 'none' }}>
        {value.map((book) => (
          <li key={book.item_id}>
            <Book
              title={book.title}
              author={book.author}
              removeBook={() => dispatch(deleteBook(book.item_id))}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
