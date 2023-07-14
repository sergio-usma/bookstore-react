import React from "react";
import PropTypes from "prop-types";

class BookElement extends React.Component {
  render() {
    const { book, deleteBook } = this.props;
    return (
      <div>
        <h3>{book.title}</h3>
        <p>By {book.author}</p>
        <button type="button" onClick={() => deleteBook(book.id)}>
          Delete
        </button>
      </div>
    );
  }
}

BookElement.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookElement;
