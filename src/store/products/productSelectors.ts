import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

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
          selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'price') return a.price - b.price;
        return 0;
      });
  }
);
