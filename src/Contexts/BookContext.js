import React, { createContext, useState } from 'react';
import uuid from 'uuid/dist/v5';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { id: 1, title: 'name of wind', author: 'Elizabath' },
    { id: 2, title: 'the narrow bridge', author: 'Mc clary' },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider
      value={{ books: books, addBook: addBook, removeBook: removeBook }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
