import { FC } from "react";
import { Plus, Minus } from "lucide-react";
import "./ButtonQuantityControls.css";

interface IProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const ButtonQuantityControls: FC<IProps> = ({
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="quantity-controls">
      <button onClick={onDecrease}>
        <Minus size={16} />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>
        <Plus size={16} />
      </button>
    </div>
  );
};
