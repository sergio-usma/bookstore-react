import { createSlice } from '@reduxjs/toolkit';
import { addBook, getBooks, deleteBook } from '../api/apiConnect';

function destruct(key, [element]) {
  return {
    item_id: key,
    title: element.title,
    author: element.author,
    category: element.category,
  };
}
// Initial state:
const initialState = {
  books: [],
  length: 0,
  hasError: false,
  errorMessage: '',
  isLoading: false,
};
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
      state.errorMessage = '';
    }).addCase(getBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.errorMessage = action.payload;
    }).addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.errorMessage = '';

      const keys = Object.keys(action.payload);
      state.books = keys.map((key) => destruct(key, action.payload[key]));
      state.length = state.books.length;
    }).addCase(deleteBook.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
      state.errorMessage = '';
    })
        .addCase(deleteBook.fulfilled, (state) => {
          state.isLoading = false;
          state.hasError = false;
          state.length -= 1;
          state.errorMessage = '';
        })
        .addCase(deleteBook.rejected, (state, action) => {
          state.hasError = true;
          state.errorMessage = action.payload;
        })
        .addCase(addBook.pending, (state) => {
          state.isLoading = true;
          state.errorMessage = '';
          state.hasError = false;
        })
        .addCase(addBook.fulfilled, (state) => {
          state.isLoading = false;
          state.length += 1;
          state.hasError = false;
        })
        .addCase(addBook.rejected, (state, action) => {
          state.isLoading = false;
          state.hasError = true;
          state.errorMessage = action.payload;
        });
  },
});

export default bookSlice.reducer;

