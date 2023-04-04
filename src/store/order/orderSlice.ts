import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AxiosError } from 'axios';

import { axios } from '../../api';
import { GameCart } from '../../types/Game';
import { Order } from '../../types/Order';
import { getTokenLS } from '../../utils';

export const createOrder = createAsyncThunk<Order, GameCart[], { rejectValue: string }>(
  'order/createOrder',
  async (order, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/orders', order, {
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
export const getOrders = createAsyncThunk<Order[], undefined, { rejectValue: string }>(
  'order/getOrders',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/orders', {
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
  isLoading: boolean;
  errorMessage: string;
  order: Order[];
}

const initialState: State = {
  isLoading: true,
  errorMessage: '',
  order: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createOrder.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(createOrder.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload ?? 'error';
    });
    builder.addCase(createOrder.fulfilled, (state) => {
      state.isLoading = false;
      state.errorMessage = '';
    });
    builder.addCase(getOrders.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(getOrders.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload ?? 'error';
      state.order = [];
    });
    builder.addCase(getOrders.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = '';
      state.order = payload;
    });
  },
});

export const { actions: orderActions, reducer: orderReducer } = orderSlice;
