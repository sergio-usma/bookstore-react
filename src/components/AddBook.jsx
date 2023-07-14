import { useState } from "react";

const AddBook = (book) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    book.addBook({ title, author });
    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          placeholder="Enter book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          id="author"
          placeholder="Enter book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddBook;
