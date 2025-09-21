import { FC } from 'react';
import { useSelector } from 'react-redux';
import {} from '../../hooks/useAppDispatch';
import { useFetchMockData } from '../../hooks/useFetchMockData';
import { selectLoadingProducts } from '../../store/products/productSelectors';

import { ProductFilters } from './ProductFilters';
import { ProductList } from './ProductList';
import './Products.css';

export const ProductsPage: FC = () => {
  const loading = useSelector(selectLoadingProducts);

  useFetchMockData();

  return (
    <div className="product-list">
      {loading ? (
        <div className="loading">Загрузка товаров...</div>
      ) : (
        <>
          <ProductFilters />
          <ProductList />
        </>
      )}
    </div>
  );
};
