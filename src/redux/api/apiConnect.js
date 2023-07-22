import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


const API_URl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qSHecdbX5x5TE96tBuIz/books`;

const getBooks = createAsyncThunk('books/getAllBooks', async () => {
    try {
        const response = await axios(API_URl);
        return await response.data;
    } catch (error) {
        return error;
    }
});

const addBook = createAsyncThunk('books/addBook', async (book) => {
    try {
        const response = await axios.post(API_URl, book);
        return await response.data;
    } catch (error) {
        return error;
    }
});

const deleteBook = createAsyncThunk('books/removeBook', async (bookId) => {
    try {
        const response = await axios.delete(`${API_URl}/${bookId}`);
        return response.data;
    } catch (error) {
        return error;
    }
});

export { getBooks, addBook, deleteBook };
