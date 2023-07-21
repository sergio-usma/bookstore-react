import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/booksSlice.js";

const DeleteBtn = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(removeBook(id))}>
      Delete
    </button>
  );
};

DeleteBtn.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteBtn;
