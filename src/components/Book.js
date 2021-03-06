import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/book';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <li key={book.item_id} className="book-sec">
      <div className="book-info">
        <span className="book-cat">
          {` ${book.category}`}
        </span>
        <span className="book-name">
          {` ${book.title} `}
        </span>
      </div>
      <div className="btn-sec">
        <button type="button" className="btn-c"> Comments </button>
        <div className="line-2" />
        <button type="button" className="btn-r" onClick={() => dispatch(deleteBook(book.item_id))}>
          Remove
        </button>
        <div className="line-2" />
        <button type="button" className="btn-e"> Edit </button>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
