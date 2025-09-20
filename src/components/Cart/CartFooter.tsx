import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { selectCart, selectTotalPrice } from "../../store/cartSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

type TProps = {
  setIsClose: () => void;
};

export const CartFooter: FC<TProps> = ({ setIsClose }) => {
  const dispatch = useAppDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  const cart = useSelector(selectCart);
  const [showCheckout, setShowCheckout] = useState<boolean>(false);

  const handleCheckout = () => {
    setShowCheckout(true);
    setTimeout(() => {
      dispatch({ type: "cart/clearCart" });
      alert("Заказ оформлен!");
      setShowCheckout(false);
      setIsClose();
    }, 1000);
  };

  return (
    <div className="cart-footer">
      <div className="total">Итого: ${totalPrice}</div>
      <button
        className="checkout-btn"
        onClick={handleCheckout}
        disabled={cart.length === 0 || showCheckout}
      >
        {showCheckout ? "Оформляем..." : "Оформить заказ"}
      </button>
    </div>
  );
};
