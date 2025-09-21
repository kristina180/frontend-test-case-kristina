import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user/userSlice';
import { productSlice } from './products/productSlice';
import { cartSlice } from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    products: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
