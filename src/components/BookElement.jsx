import React from "react";
import * as PropTypes from "prop-types";

class BookElement extends React.Component {
  render() {
    let { book, deleteBook } = this.props;
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
  book: PropTypes.any,
  deleteBook: PropTypes.any,
};

export default BookElement;
