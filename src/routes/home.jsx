import { useState } from "react";
import BookList from "../components/BookList";
import AddBook from "../components/AddBook";

const Book = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Lord of the rings",
      author: "J.R.R. Tolkien",
    },
    {
      id: 2,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
    },
  ]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Bookstore</h1>
      <BookList books={books} deleteBook={deleteBook} />
      <AddBook addBook={addBook} />
    </div>
  );
};

export default Book;
