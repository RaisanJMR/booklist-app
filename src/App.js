import React from 'react';
import BookContextProvider from './Contexts/BookContext';
// import BookForm from './Components/BookForm';
import BookList from './Components/BookList';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        {/* <BookForm /> */}
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
