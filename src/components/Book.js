/* eslint-disable linebreak-style */
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { delBook } from '../redux/books/book';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <li key={book.item_id}>
      <span>
        {` ${book.title} `}
      </span>
      <span>
        {` ${book.category}`}
      </span>
      <button type="button" onClick={() => dispatch(delBook(book.item_id))}>
        Remove Book
      </button>
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
