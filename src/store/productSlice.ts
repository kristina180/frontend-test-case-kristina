import { configureStore, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type TProduct = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

interface IInitialState {
  products: TProduct[];
  searchTerm: string;
  selectedCategory: string;
  sortBy: string;
  loading: boolean;
  error: string | null;
}

const initialState: IInitialState = {
  products: [],
  searchTerm: "",
  selectedCategory: "all",
  sortBy: "name",
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "products",
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

export const selectProducts = (state: RootState) => state.products.products;
export const selectSearchTerm = (state: RootState) => state.products.searchTerm;
export const selectSelectedCategory = (state: RootState) =>
  state.products.selectedCategory;
export const selectSortBy = (state: RootState) => state.products.sortBy;
export const selectLoadingProducts = (state: RootState) =>
  state.products.loading;
export const selectErrorProducts = (state: RootState) => state.products.error;

export const selectFilteredAndSortedProducts = createSelector(
  [selectProducts, selectSearchTerm, selectSelectedCategory, selectSortBy],
  (products, searchTerm, selectedCategory, sortBy) => {
    return products
      .filter((product) => {
        const matchesSearch = product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesCategory =
          selectedCategory === "all" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "price") return a.price - b.price;
        return 0;
      });
  }
);

export const {
  setProducts,
  setSearchTerm,
  setSelectedCategory,
  setSortBy,
  setLoading,
  setError,
} = productSlice.actions;
