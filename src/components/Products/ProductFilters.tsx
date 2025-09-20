import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  selectSelectedCategory,
  selectSortBy,
  setSelectedCategory,
  setSortBy,
} from "../../store/productSlice";
import { ProductSearch } from "../Products/ProductSearch";

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

  return (
    <div className="filters">
      <ProductSearch />

      <div className="filter-controls">
        <button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? "Скрыть фильтры" : "Показать фильтры"}
        </button>

        <div className="filters-view">
          {showFilters && (
            <>
              <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="all">Все категории</option>
                <option value="phones">Телефоны</option>
                <option value="laptops">Ноутбуки</option>
                <option value="tablets">Планшеты</option>
              </select>
              <select value={sortBy} onChange={handleSortChange}>
                <option value="name">По названию</option>
                <option value="price">По цене</option>
              </select>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
