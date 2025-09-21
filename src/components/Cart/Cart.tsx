import { FC, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../../store/cart/cartSelectors';
import { CartHeader } from './CartHeader';
import { CartFooter } from './CartFooter';
import { CartList } from './CartList';
import './Cart.css';
import { WrapperStyles } from '../WrapperStyles/WrapperStyles';

export const Cart: FC = () => {
  const cartCount = useSelector(selectCartCount);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="cart">
      <button type="button" className="cart-toggle" onClick={handleToggle}>
        Корзина ({cartCount})
      </button>

      {isOpen && (
        <WrapperStyles classNames="cart-dropdown">
          <CartHeader setIsClose={handleClose} />
          <CartList />
          <CartFooter setIsClose={handleClose} />
        </WrapperStyles>
      )}
    </div>
  );
};
