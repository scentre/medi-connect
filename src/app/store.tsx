import { configureStore } from "@reduxjs/toolkit";

// import { bookSlice } from "./fearures/bookSlice";

import bookSliceReducer from "./features/bookSlice";

export const store = configureStore({
  reducer: {
    book: bookSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppDispatch = typeof store.dispatch; // Type to access dispatch
