import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/api/apiConnect.js";

function Book({ id, category, title, author }) {
  const dispatch = useDispatch();
  return (
    <div>
      <span>{category}</span>
      <h3>{title}</h3>
      <p>{author}</p>
      <div>
        <button type="button" onClick={() => dispatch(deleteBook(id))}>
          Remove
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
