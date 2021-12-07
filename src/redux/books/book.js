import { createSlice, current } from '@reduxjs/toolkit';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = 'av9kWU1C4HkPZEQJTJP0';
const appUrl = `${baseUrl}/apps/${apiKey}/books`;

const bookSlice = createSlice(
  {
    name: 'books',
    initialState: [],
    reducers: {
      addBook: (state, action) => [...current(state), { ...action.payload }],
      removeBook: (state, action) => current(state).filter((book) => book.id !== action.payload),
      fetchBooks: (state, action) => action.payload,
    },
  },
);

// Fetch data from API
const fetchBooks = async (dispatch) => {
  const res = await fetch(appUrl);
  const bookObj = await res.json();
  const bookList = Object.entries(bookObj).map(([id, [book]]) => ({
    item_id: id,
    title: book.title,
    category: book.category,
  }));
  dispatch({ type: 'books/fetchBooks', payload: bookList });
};
// Add data to our App
const addBooks = (book) => {
  const addBookThunk = async (dispatch) => {
    const res = await fetch(appUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    const msg = res;
    if (msg.status) {
      dispatch({ type: 'books/addBooks', payload: book });
    }
  };
  return addBookThunk;
};
// Remove data from App
const deleteBook = (id) => {
  const deleteBookThunk = async (dispatch) => {
    const res = await fetch(`${appUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const msg = res;
    if (msg.status) {
      dispatch({ type: 'books/deleteBook', payload: id });
    }
  };
  return deleteBookThunk;
};

export { addBooks, deleteBook, fetchBooks };
export default bookSlice.reducer;
