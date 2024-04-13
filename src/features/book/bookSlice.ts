import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IBookResponse, IBookState } from './IBook';
import bookActions from './bookActions';
import { STATUS_CODES } from '../../api/constants';

const initialState: IBookState = {
  books: [],
  isLoading: false,
  message: null,
  success: null
};

type GetBooksParams = string;

export const getBooks = createAsyncThunk<IBookResponse, GetBooksParams>('book/getBooks', async (params, thunkAPI) => {
  try {
    const response = await bookActions.getBooks(params);
    return response.data as IBookResponse;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    reset: (state) => {
      state.books = [];
      state.isLoading = false;
      state.message = null;
      state.success = null;
    },
    filterBooksByLength: (state, { payload }) => {
      console.log('🚀 ~ payload:', payload);

      state.books = state.books.slice(0, parseInt(payload));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.success = payload.success;
        state.message = payload.message;

        if (payload.code === STATUS_CODES.OK) {
          state.books = payload.data.books;
        } else {
          state.success = payload.success;
        }
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.success = false;
        state.isLoading = false;
        state.message = action.error.message ?? '';
      });
  }
});

export const { reset, filterBooksByLength } = bookSlice.actions;
export default bookSlice.reducer;
