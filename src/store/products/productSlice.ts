import { createSlice } from '@reduxjs/toolkit';

import { IInitialState } from './types';

const initialState: IInitialState = {
  products: [],
  searchTerm: '',
  selectedCategory: 'all',
  sortBy: 'name',
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setProducts,
  setSearchTerm,
  setSelectedCategory,
  setSortBy,
  setLoading,
  setError,
} = productSlice.actions;
