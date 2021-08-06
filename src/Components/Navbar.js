import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';

function Navbar() {
  const { books } = useContext(BookContext);
  console.log(books);
  return (
    <div className="navbar">
      <h1>my reading list</h1>
      <p>currently you have {books.length} books to get through</p>
    </div>
  );
}
export default Navbar;
