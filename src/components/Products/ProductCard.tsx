import { FC } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { selectCart, selectCartItemById } from "../../store/cartSlice";
import { TProduct } from "../../store/productSlice";
import { ButtonQuantityControls } from "../ButtonQuantityControls/ButtonQuantityControls";
import { RootState } from "../../store/store";
import { placeholderImg } from "../../utils/constants";

interface IProps {
  product: TProduct;
}

export const ProductCard: FC<IProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cart = useSelector(selectCart);
  const { id, image, name, description, price } = product;
  const quantityInCart =
    useSelector((state: RootState) => selectCartItemById(state, product.id))
      ?.quantity || 0;

  const handleClickAddCartButton = () => {
    const action = { type: "cart/addToCart", payload: product };
    dispatch(action);
  };

  const handleIncrease = () => {
    const quantity = quantityInCart + 1;
    dispatch({ type: "cart/updateQuantity", payload: { id, quantity } });
  };

  const handleDecrease = () => {
    const quantity = quantityInCart - 1;

    if (quantity <= 0) {
      dispatch({ type: "cart/removeFromCart", payload: id });
    } else {
      dispatch({ type: "cart/updateQuantity", payload: { id, quantity } });
    }
  };

  return (
    <div key={id} className="product-card">
      <img
        src={image || placeholderImg}
        alt={name}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = placeholderImg;
        }}
      />

      <h3>{name}</h3>
      <p>{description}</p>
      <div className="price">${price}</div>

      {quantityInCart === 0 ? (
        <button onClick={handleClickAddCartButton}>Добавить в корзину</button>
      ) : (
        <ButtonQuantityControls
          quantity={quantityInCart}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      )}
    </div>
  );
};
