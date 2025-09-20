import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type TUser = {
  id: number;
  name: string;
  email: string;
};

interface IInitialState {
  user: TUser | null;
}

const initialState: IInitialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.user.user;

export const { setUser } = userSlice.actions;
