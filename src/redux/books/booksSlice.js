import { createSlice } from '@reduxjs/toolkit';
import { addBook, deleteBook, fetchBooks } from '../utils';

const initialState = {
  value: [],
  isLoading: false,
  isError: undefined,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.value.push(action.payload);
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.value = state.value.filter((book) => book.item_id !== action.payload);
    });

    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    });

    builder.addCase(fetchBooks.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default booksSlice.reducer;
