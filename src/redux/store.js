import { configureStore } from '@reduxjs/toolkit';

import bookReducer from './books/booksSlice.js';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
    reducer: {
        books: bookReducer,
        categories: categoriesReducer,
    },
});

export default store;
