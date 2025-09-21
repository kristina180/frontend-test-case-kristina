import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { selectSearchTerm } from '../../store/products/productSelectors';
import { setSearchTerm } from '../../store/products/productSlice';
import { WrapperStyles } from '../WrapperStyles/WrapperStyles';

export const ProductSearch: FC = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <WrapperStyles classNames="search">
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </WrapperStyles>
  );
};
