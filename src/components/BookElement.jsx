import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/api/apiConnect.js";
import "../styles/BookElement.css";
import "bootstrap/dist/css/bootstrap.min.css";

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

      <div className="col-auto ms-auto border-end border-gray pe-5">
        <div>Progress</div>
        <div>
          <h3 className="mb-0 h2 fw-bold">33%</h3>
          <p className="text-muted mt-0">Completed</p>
        </div>
      </div>

      <div className="col-auto ps-5 ">
        <p className="text-muted m-0">CURRENT CHAPTER</p>
        <p className="fw-bold">Chapter 7</p>
        <button type="button" className="btn btn-outline-primary w-100">
          Update progress
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
