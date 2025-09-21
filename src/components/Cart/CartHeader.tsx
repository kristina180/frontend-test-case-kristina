import { memo } from 'react';
import { FC } from 'react';
import { X } from 'lucide-react';

type TProps = {
  setIsClose: () => void;
};

export const CartHeader: FC<TProps> = memo(({ setIsClose }) => {
  return (
    <div className="cart-header">
      <h3>Корзина</h3>
      <button onClick={setIsClose}>
        <X size={20} />
      </button>
    </div>
  );
});
