import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cart.cart;

export const selectCartCount = createSelector([selectCart], (cart) =>
  cart.reduce((total, item) => total + item.quantity, 0)
);

export const selectTotalPrice = createSelector([selectCart], (cart) =>
  cart.reduce((total, item) => total + item.price * item.quantity, 0)
);

export const selectCartItemById = createSelector(
  [selectCart, (_: RootState, id: number) => id],
  (cart, id) => cart.find((item) => item.id === id)
);
