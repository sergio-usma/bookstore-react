import BookElement from "./BookElement";
import * as PropTypes from "prop-types";
import { Component } from "react";

class BookList extends Component {
  render() {
    let { books, deleteBook } = this.props;
    const bookElements = books.map((book) => (
      <BookElement key={book.id} book={book} deleteBook={deleteBook} />
    ));

    return (
      <div>
        <h2>Book List</h2>
        {bookElements}
      </div>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.any,
  deleteBook: PropTypes.any,
};

export default BookList;
