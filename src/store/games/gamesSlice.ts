import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AxiosError } from 'axios';

import { axios } from '../../api';
import { ServerResponseGame } from '../../types/Game';

export const getAllGames = createAsyncThunk<
  ServerResponseGame,
  undefined | Record<string, unknown>,
  { rejectValue: string }
>('games/getAllGames', async (args, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/games', {
      params: args,
    });
    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      return rejectWithValue(e.response?.data.message);
    }
  }
});

interface State extends ServerResponseGame {
  errorMessage: string;
  isLoading: boolean;
}

const initialState: State = {
  countItems: 0,
  games: [],
  errorMessage: '',
  isLoading: true,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    defaultGameSate(state) {
      state.countItems = 0;
      state.errorMessage = '';
      state.games = [];
      state.isLoading = true;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllGames.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(getAllGames.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.countItems = 0;
      state.errorMessage = payload ?? 'error';
      state.games = [];
    });
    builder.addCase(getAllGames.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.countItems = payload.countItems;
      state.errorMessage = '';
      state.games = payload.games;
    });
  },
});

export const { actions: gamesActions, reducer: gamesReducer } = gamesSlice;
