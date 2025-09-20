import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TProduct } from "./productSlice";

type TCart = TProduct & {
  quantity: number;
};

interface IInitialState {
  cart: TCart[];
}

const initialState: IInitialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

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

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
