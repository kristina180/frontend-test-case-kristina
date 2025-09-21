type TUser = {
  id: number;
  name: string;
  email: string;
};

export interface IInitialState {
  user: TUser | null;
}
