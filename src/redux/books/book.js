import { createSlice, current } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = 'av9kWU1C4HkPZEQJTJP0';
const appUrl = `${baseUrl}/apps/${apiKey}/books`;

const bookSlice = createSlice(
  {
    name: 'books',
    initialState: [],
    reducers: {
      addBook: (state, action) => [...current(state), { ...action.payload }],
      // eslint-disable-next-line max-len
      removeBook: (state, action) => current(state).filter((book) => book.item_id !== action.payload),
      fetchBooks: (state, action) => action.payload,
    },
  },
);

const delBook = (id) => {
  const delBookThunk = async (dispatch) => {
    const response = await fetch(`${appUrl}/${id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const msg = await response;
    if (msg.status) {
      dispatch({ type: 'books/removeBook', payload: id });
    }
  };
  return delBookThunk;
};

const addBooktoStore = (book) => {
  const newBook = { item_id: uuidv4(), ...book };
  const addBookThunk = async (dispatch) => {
    const response = await fetch(appUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    });
    const msg = await response;
    if (msg.status) {
      dispatch({ type: 'books/addBook', payload: newBook });
    }
  };
  return addBookThunk;
};

const fetchBooks = async (dispatch) => {
  const response = await fetch(appUrl);
  const books = await response.json();
  const bookList = Object.entries(books).map(([id, [book]]) => (
    {
      item_id: id,
      title: book.title,
      category: book.category,
    }
  ));
  dispatch({ type: 'book/fetchBooks', payload: bookList });
};

export { addBooktoStore, delBook, fetchBooks };
export default bookSlice.reducer;
