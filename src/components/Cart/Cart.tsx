import { FC, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../store/cartSlice";
import { CartHeader } from "./CartHeader";
import { CartFooter } from "./CartFooter";
import { CartList } from "./CartList";
import "./Cart.css";

export const Cart: FC = () => {
  const cartCount = useSelector(selectCartCount);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleChange = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="cart">
      <button className="cart-toggle" onClick={handleChange}>
        Корзина ({cartCount})
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          <CartHeader setIsClose={handleClose} />
          <CartList />
          <CartFooter setIsClose={handleClose} />
        </div>
      )}
    </div>
  );
};
