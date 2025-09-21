import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { selectCart } from '../../store/cart/cartSelectors';
import { ButtonQuantityControls } from '../ButtonQuantityControls/ButtonQuantityControls';
import { placeholderImg } from '../../utils/constants';

export const CartList: FC = () => {
  const cart = useSelector(selectCart);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: number): void => {
    dispatch({ type: 'cart/removeFromCart', payload: id });
  };

  const handleUpdateQuantity = (id: number, quantity: number): void => {
    if (quantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    dispatch({ type: 'cart/updateQuantity', payload: { id, quantity } });
  };

  return (
    <div className="cart-items">
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.name}
              onError={(e) => {
                e.currentTarget.src = placeholderImg;
              }}
            />

            <div className="item-details">
              <h4>{item.name}</h4>
              <p>${item.price}</p>
              <ButtonQuantityControls
                quantity={item.quantity}
                onIncrease={() =>
                  handleUpdateQuantity(item.id, item.quantity + 1)
                }
                onDecrease={() =>
                  handleUpdateQuantity(item.id, item.quantity - 1)
                }
              />
            </div>
            <button
              className="remove-btn"
              onClick={() => handleRemoveItem(item.id)}
            >
              Удалить
            </button>
          </div>
        ))
      )}
    </div>
  );
};
