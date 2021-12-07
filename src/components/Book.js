import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/book';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <li key={book.item_id}>
      <span>
        {` ${book.title} `}
      </span>
      <span>
        {`by ${book.category}`}
      </span>
      <button type="button" onClick={() => dispatch(deleteBook(book.item_id))}>
        Remove Book
      </button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
