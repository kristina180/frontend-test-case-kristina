import { memo } from "react";
import { FC } from "react";

type TProps = {
  setIsClose: () => void;
};

export const CartHeader: FC<TProps> = memo(({ setIsClose }) => {
  return (
    <div className="cart-header">
      <h3>Корзина</h3>
      <button onClick={setIsClose}>×</button>
    </div>
  );
});
