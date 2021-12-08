import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import { addBooktoStore } from '../redux/books/book';

const BooksPage = () => {
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const title = e.target.querySelector('#title');
    const category = e.target.querySelector('#category');
    const newBook = {
      item_id: uuidv4(),
      title: title.value,
      category: category.value,
    };
    title.value = '';
    category.value = '';
    dispatch(addBooktoStore(newBook));
  };
  const bookList = useSelector((state) => state.books);

  return (
    <div>
      <h1> Awesome Books </h1>
      <ul>
        {bookList.map((book) => <Book key={book.item_id} book={book} />)}
      </ul>
      <form id="add-book-form" onSubmit={(e) => submitForm(e)}>
        <input id="title" placeholder="Book Name" />
        <input id="category" placeholder="Category" />
        <button type="submit"> Add Book </button>
      </form>
    </div>
  );
};

export default BooksPage;
