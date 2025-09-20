import { FC } from "react";
import { useSelector } from "react-redux";
import { selectFilteredAndSortedProducts } from "../../store/productSlice";
import { ProductCard } from "./ProductCard";

export const ProductList: FC = () => {
  const products = useSelector(selectFilteredAndSortedProducts);

  return (
    <div className="products">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div>Товары не найдены</div>
      )}
    </div>
  );
};
