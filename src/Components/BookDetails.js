import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';

function BookDetails({ book }) {
  const { removeBook } = useContext(BookContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">name: {book.title}</div>
      <div className="author">written by: {book.author}</div>
    </li>
  );
}

export default BookDetails;
