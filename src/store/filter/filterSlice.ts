import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface State {
  genre: string;
  age: string;
  sortBy: string;
  orderBy: string;
  platform: string;
  searchText: string;
}

const initialState: State = {
  genre: '',
  age: '',
  sortBy: '',
  orderBy: '',
  searchText: '',
  platform: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters(state, { payload }: PayloadAction<Omit<State, 'platform' | 'searchText'>>) {
      state.genre = payload.genre;
      state.age = payload.age;
      state.sortBy = payload.sortBy;
      state.orderBy = payload.orderBy;
    },
    setDefaultFilters(state) {
      state.genre = '';
      state.age = '';
      state.orderBy = '';
      state.sortBy = '';
    },
    resetFilters(state) {
      state.genre = '';
      state.age = '';
      state.orderBy = '';
      state.sortBy = '';
      state.searchText = '';
      state.platform = '';
    },
    setPlatform(state, { payload }: PayloadAction<string>) {
      state.platform = payload;
    },
    setSearchText(state, { payload }: PayloadAction<string>) {
      state.searchText = payload;
    },
  },
});

export const { actions: filterActions, reducer: filterReducer } = filterSlice;
