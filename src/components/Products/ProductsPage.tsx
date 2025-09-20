import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useMockData } from "../../hooks/useMockProducts";
import {
  selectLoadingProducts,
  setLoading,
  setProducts,
} from "../../store/productSlice";
import { ProductFilters } from "./ProductFilters";
import { ProductList } from "./ProductList";
import "./Products.css";

export const ProductsPage: FC = () => {
  const dispatch = useAppDispatch();
  const loading = useSelector(selectLoadingProducts);
  const { data: dataProducts } = useMockData();

  useEffect(() => {
    dispatch(setLoading(true));

    const timer = setTimeout(() => {
      dispatch(setProducts(dataProducts));
      dispatch(setLoading(false));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, dataProducts]);

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
