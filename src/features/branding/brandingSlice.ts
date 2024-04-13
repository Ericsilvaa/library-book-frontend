import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IBrandingResponse, IBrandingState } from './interfaces';
import brandingActions from './brandingActions';
import { STATUS_CODES } from '../../api/constants';

const initialState: IBrandingState = {
  data: null,
  completed_at: null,
  isLoading: false,
  success: null,
  code: null,
  message: null,
  error: null
};

export const getBranding = createAsyncThunk<IBrandingResponse>('branding/getBranding', async (_void, thunkAPI) => {
  try {
    const response = await brandingActions.getBranding();
    return response.data as IBrandingResponse;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const brandingSlice = createSlice({
  name: 'branding',
  initialState,
  reducers: {
    reset: (state) => {
      (state.data = null),
        (state.success = null),
        (state.data = null),
        (state.error = null),
        (state.message = null),
        (state.code = null),
        (state.isLoading = false);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBranding.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBranding.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.success = payload.success;
        state.code = payload.code;
        state.message = payload.message;
        state.completed_at = payload.completed_at;

        if (payload.code === STATUS_CODES.OK) {
          state.data = payload.data;
          state.data.completed_at = payload.completed_at;
        } else {
          state.error = payload.error;
        }
      })
      .addCase(getBranding.rejected, (state, action) => {
        state.error = true;
        state.success = false;
        state.isLoading = false;
        state.message = action.error.message ?? '';
      });
  }
});

export const { reset } = brandingSlice.actions;
export default brandingSlice.reducer;
