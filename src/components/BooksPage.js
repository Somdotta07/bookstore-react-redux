import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import { addBook } from '../redux/books/book';

const BooksPage = () => {
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const title = e.target.querySelector('#title');
    const author = e.target.querySelector('#author');
    const newBook = {
      id: uuidv4(),
      title: title.value,
      author: author.value,
    };
    title.value = '';
    author.value = '';
    dispatch(addBook(newBook));
  };
  const bookList = useSelector((state) => state.books);

  return (
    <div>
      <h1> Awesome Books </h1>
      <ul>
        {bookList.map((book) => <Book key={book.id} book={book} />)}
      </ul>
      <form id="add-book-form" onSubmit={(e) => submitForm(e)}>
        <input id="title" placeholder="Book Title" />
        <input id="author" placeholder="Book Author" />
        <button type="submit"> Add Book </button>
      </form>
    </div>
  );
};

export default BooksPage;
