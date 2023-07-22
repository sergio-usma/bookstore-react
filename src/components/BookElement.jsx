import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/api/apiConnect.js";
import "../styles/BookElement.css";

function Book({ id, category, title, author }) {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="book__description">
        <span className="book__category">{category}</span>
        <h3 className="book__title">{title}</h3>
        <p className="book__author">{author}</p>
        <div className="book__button-container">
          <button className="book__button-container__btn" type="button">
            Comments
          </button>
          <button
            className="book__button-container__btn"
            type="button"
            onClick={() => dispatch(deleteBook(id))}
          >
            Remove
          </button>
          <button className="book__button-container__btn" type="button">
            Edit
          </button>
        </div>
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
