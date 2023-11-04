import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import type { RootState } from "../store";
import type { BookState } from "../types";

// Defining our initialState's type
type InitialStateType = {
  bookList: BookState[];
};

const bookList: BookState[] = [
  {
    id: uuidv4(),
    title: "1984",
    author: "George Orwell",
  },
  {
    id: uuidv4(),
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
  },
  {
    id: uuidv4(),
    title: "The Lord of the Rings",
    author: "J.R.R Tolkien",
  },
];

const initialState: InitialStateType = {
  bookList,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addNewBook: (state, action: PayloadAction<BookState>) => {
      state.bookList.push(action.payload);
    },
    updateBook: (state, action: PayloadAction<BookState>) => {
      const {
        payload: { title, id, author },
      } = action;

      // eslint-disable-next-line no-param-reassign
      state.bookList = state.bookList.map((book) =>
        book.id === id ? { ...book, author, title } : book
      );
    },
    deleteBook: (state, action: PayloadAction<{ id: string }>) => {
      // eslint-disable-next-line no-param-reassign
      state.bookList = state.bookList.filter(
        (book) => book.id !== action.payload.id
      );
    },
  },
});

// To able to use reducers we need to export them.
export const { addNewBook, updateBook, deleteBook } = bookSlice.actions;

// Selector to access bookList state.
export const selectBookList = (state: RootState) => state.book.bookList;

export default bookSlice.reducer;
