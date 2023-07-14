import PropTypes from "prop-types";
import BookElement from "./BookElement";

const BookList = ({ books, deleteBook }) => (
  <div>
    <h2>Book List</h2>
    {books.map((book) => (
      <BookElement key={book.id} book={book} deleteBook={deleteBook} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookList;
