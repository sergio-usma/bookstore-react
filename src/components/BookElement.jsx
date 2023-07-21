import PropTypes from "prop-types";
import DeleteBtn from "./DeleteBtn.jsx";

function BookElement({ bookArr }) {
  return (
    <section className="" key={bookArr.item_id}>
      <div key={bookArr.item_id}>
        <h2 className="">{bookArr.title}</h2>
        <p className="">{bookArr.author}</p>
        <DeleteBtn id={bookArr.item_id} />
      </div>
    </section>
  );
}

BookElement.propTypes = {
  bookArr: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookElement;
