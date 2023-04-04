import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AxiosError } from 'axios';

import { axios } from '../../api';
import { AuthServerResponse, LoginUser, RegisterUser } from '../../types/Auth';
import { User } from '../../types/User';
import { getTokenLS } from '../../utils';

export const authRegister = createAsyncThunk<
  AuthServerResponse,
  RegisterUser,
  { rejectValue: string }
>('auth/authRegister', async (args, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/register', args);
    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      return rejectWithValue(e.response?.data.message);
    }
  }
});
export const authLogin = createAsyncThunk<AuthServerResponse, LoginUser, { rejectValue: string }>(
  'auth/authLogin',
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', args);
      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return rejectWithValue(e.response?.data.message);
      }
    }
  }
);
export const authMe = createAsyncThunk<AuthServerResponse, undefined, { rejectValue: string }>(
  'auth/authMe',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/auth/me', { headers: { Authorization: getTokenLS() } });
      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return rejectWithValue(e.response?.data.message);
      }
    }
  }
);
export const authDelete = createAsyncThunk<{ message: string }, undefined, { rejectValue: string }>(
  'auth/authDelete',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete('/auth/users', {
        headers: { Authorization: getTokenLS() },
      });
      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return rejectWithValue(e.response?.data.message);
      }
    }
  }
);

interface State {
  firstLoading: boolean;
  errorMessage: string;
  isLoading: boolean;
  user: User | null;
  token: string;
}

const initialState: State = {
  errorMessage: '',
  isLoading: true,
  user: null,
  token: '',
  firstLoading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.errorMessage = '';
      state.isLoading = true;
      state.token = '';
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(authRegister.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authRegister.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload ?? 'error';
      state.token = '';
      state.user = null;
    });
    builder.addCase(authRegister.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = '';
      state.token = payload.token;
      state.user = payload.userData;
    });
    builder.addCase(authLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authLogin.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload ?? 'error';
      state.token = '';
      state.user = null;
    });
    builder.addCase(authLogin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = '';
      state.token = payload.token;
      state.user = payload.userData;
    });
    builder.addCase(authMe.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload ?? 'error';
      state.token = '';
      state.user = null;
      state.firstLoading = false;
    });
    builder.addCase(authMe.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = '';
      state.user = payload.userData;
      state.token = getTokenLS();
      state.firstLoading = false;
    });
    builder.addCase(authDelete.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload ?? 'error';
    });
    builder.addCase(authDelete.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = '';
      state.user = null;
      state.token = '';
      state.firstLoading = false;
    });
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
