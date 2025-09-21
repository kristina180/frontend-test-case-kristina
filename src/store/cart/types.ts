import { TProduct } from '../products/types';

export type TCart = TProduct & {
  quantity: number;
};

export interface IInitialState {
  cart: TCart[];
}
