import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { axios } from '../../api';

export const uploadImage = createAsyncThunk<{ url: string }, FormData, { rejectValue: string }>(
  'uploadImage/uploadImage',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/upload', formData);
      return data;
    } catch (e) {
      return rejectWithValue('Не удалось загрузить картинку');
    }
  }
);

interface State {
  errorMessage: string;
  isLoading: boolean;
  imageUrl: string;
}

const initialState: State = {
  errorMessage: '',
  isLoading: true,
  imageUrl: '',
};

const uploadImageSlice = createSlice({
  name: 'uploadImage',
  initialState,
  reducers: {
    resetUploadImage(state) {
      state.errorMessage = '';
      state.imageUrl = '';
      state.isLoading = true;
    },
  },
  extraReducers(builder) {
    builder.addCase(uploadImage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadImage.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload ?? 'error';
      state.imageUrl = '';
    });
    builder.addCase(uploadImage.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = '';
      state.imageUrl = 'https://game-store-ars7.onrender.com/api' + payload.url;
    });
  },
});

export const { actions: uploadImageActions, reducer: uploadImageReducer } = uploadImageSlice;
