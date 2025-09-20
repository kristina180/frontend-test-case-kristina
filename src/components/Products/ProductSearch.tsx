import { FC } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { selectSearchTerm, setSearchTerm } from "../../store/productSlice";

export const ProductSearch: FC = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};
