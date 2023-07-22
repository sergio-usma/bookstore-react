import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/api/apiConnect.js";

function AddBook() {
  const [category, setCategory] = useState("category");
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category === "category" || !bookName) return;
    const newBook = {
      item_id: new Date().getTime(),
      title: bookName,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setCategory("category");
    setBookName("");
    setAuthor("");
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              type="text"
              name="bookinput"
              placeholder="Title"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Category">Select category</option>
              <option value="Action">Action</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">NonFiction</option>
            </select>
          </div>
          <div>
            <br />
            <button type="submit">Add Book</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
