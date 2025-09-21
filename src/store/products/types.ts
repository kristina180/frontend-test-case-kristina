export type TProduct = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

export interface IInitialState {
  products: TProduct[];
  searchTerm: string;
  selectedCategory: string;
  sortBy: string;
  loading: boolean;
  error: string | null;
}
