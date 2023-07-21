import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/booksSlice.js";

function AddBook() {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: new Date().getTime(),
      title: bookName,
      author,
    };
    dispatch(addBook(newBook));
    setBookName("");
    setAuthor("");
  };

  return (
    <div className="">
      <h2 className="">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="">
            <input
              type="text"
              name="bookinput"
              className=""
              placeholder="Book title"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <div className="">
            <input
              type="text"
              name="author"
              className=""
              placeholder="Book Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="">
            <button type="submit" className="">
              Add Book
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
