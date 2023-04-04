import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth/authSlice';
import { cartReducer } from './cart/cartSlice';
import { filterReducer } from './filter/filterSlice';
import { gamesReducer } from './games/gamesSlice';
import { orderReducer } from './order/orderSlice';
import { uploadImageReducer } from './uploadImage/uploadImageSlice';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    filter: filterReducer,
    uploadImage: uploadImageReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
