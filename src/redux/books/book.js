import { createSlice, current } from '@reduxjs/toolkit';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = 'wAt6K5UCAIHzcWrwmyoA';
const appUrl = `${baseUrl}/apps/${apiKey}/books`;

const bookSlice = createSlice(
  {
    name: 'books',
    initialState: [],
    reducers: {
      addBook: (state, action) => [...current(state), { ...action.payload }],
      removeBook: (state, action) => current(state).filter((book) => book.id !== action.payload),
    },
  },
);

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
