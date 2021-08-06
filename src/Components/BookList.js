import React from 'react';
import { BookContext } from '../Contexts/BookContext';
import BookDetails from './BookDetails';

function BookList() {
  const { books } = React.useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">no books to read. hello free time:</div>
  );
}

export default BookList;
