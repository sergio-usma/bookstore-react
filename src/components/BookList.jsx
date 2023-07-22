import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "./BookElement.jsx";
import { getBooks } from "../redux/api/apiConnect.js";

function BookList() {
  const { books, isLoading, length, hasError, errorMessage } = useSelector(
    (store) => store.books,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch, length]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (hasError) {
    return (
      <div>
        Something went wrong:
        {errorMessage}
      </div>
    );
  }

  return (
    <div>
      {length === 0 ? (
        <div>There&apos;s nothing here. Please add a new book!</div>
      ) : (
        books.map((book) => (
          <Book
            author={book.author}
            category={book.category}
            title={book.title}
            key={book.item_id}
            id={book.item_id}
          />
        ))
      )}
    </div>
  );
}
export default BookList;
