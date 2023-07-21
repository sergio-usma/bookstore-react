import { useSelector } from "react-redux";
import BookElement from "./BookElement.jsx";

function BookState() {
  const { arrBooks } = useSelector((state) => state.books);
  return (
    <section className="">
      {arrBooks.map((book) => (
        <BookElement bookArr={book} key={book.item_id} />
      ))}
    </section>
  );
}

export default BookState;
