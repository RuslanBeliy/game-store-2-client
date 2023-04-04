import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { GameCart } from '../../types/Game';
import { calculateCountGames, calculateTotalPrice, getCartLS } from '../../utils';

interface State {
  cart: GameCart[];
  countGames: number;
  totalPrice: number;
}

const cartData = getCartLS();

const initialState: State = {
  cart: cartData.games,
  countGames: cartData.countGames,
  totalPrice: cartData.totalPrice,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }: PayloadAction<GameCart>) {
      const game = state.cart.find(
        (game) => game._id === payload._id && game.platform === payload.platform
      );
      if (game) {
        game.amount++;
      } else {
        state.cart.push(payload);
      }
      state.countGames = calculateCountGames(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart)
    },
    deleteFromCart(state, { payload }: PayloadAction<GameCart>) {
      const idx = state.cart.findIndex(
        (game) => game._id === payload._id && game.platform === payload.platform
      );
      state.cart.splice(idx, 1);
      state.countGames = calculateCountGames(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart)
    },
    decrementCart(state, { payload }: PayloadAction<GameCart>) {
      const game = state.cart.find(
        (game) => game._id === payload._id && game.platform === payload.platform
      );
      if (!game) return;

      game.amount--;
      state.countGames = calculateCountGames(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart)
    },
    clearCart(state) {
      state.cart = [];
      state.countGames = 0;
      state.totalPrice = 0;
    },
  },
});

export const { actions: cartActions, reducer: cartReducer } = cartSlice;
