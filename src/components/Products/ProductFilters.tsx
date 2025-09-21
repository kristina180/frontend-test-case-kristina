import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
  selectSelectedCategory,
  selectSortBy,
} from '../../store/products/productSelectors';

import {
  setSelectedCategory,
  setSortBy,
} from '../../store/products/productSlice';
import { ProductSearch } from '../Products/ProductSearch';
import { CATEGORY_OPTIONS, SORT_OPTIONS } from '../../utils/constants';

type TOption = { value: string; label: string };

export const ProductFilters: FC = () => {
  const dispatch = useAppDispatch();

  const selectedCategory = useSelector(selectSelectedCategory);
  const sortBy = useSelector(selectSortBy);

  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedCategory(e.target.value));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(e.target.value));
  };

  const renderOption = (arrayOptions: TOption[]) => {
    return arrayOptions.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ));
  };

  return (
    <div className="filters">
      <ProductSearch />

      <div className="filter-controls">
        <button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
        </button>

        <div className="filters-view">
          {showFilters && (
            <>
              <select value={selectedCategory} onChange={handleCategoryChange}>
                {renderOption(CATEGORY_OPTIONS)}
              </select>
              <select value={sortBy} onChange={handleSortChange}>
                {renderOption(SORT_OPTIONS)}
              </select>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
