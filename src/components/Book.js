import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/book';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <li key={book.id}>
      <span>
        {` ${book.title} `}
      </span>
      <span>
        {`by ${book.author}`}
      </span>
      <button type="button" onClick={() => dispatch(removeBook(book.id))}>
        Remove Book
      </button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
