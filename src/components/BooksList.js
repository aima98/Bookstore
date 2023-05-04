import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div className="container">
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <button type="button">Remove</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default function BooksList() {
  return (
    <ul style={{ listStyle: 'none' }}>
      <li><Book title="S" author="Frank Herbert" /></li>
      <li><Book title="The Great Gatsby" author="Herman Melville" /></li>
    </ul>
  );
}
