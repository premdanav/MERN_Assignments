import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isAuthenticated: false,
  favoriteDish: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFavDish: (state, action) => {
      state.favoriteDish = action.payload;
    },
    setAuth: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    clearAuth: (state, action) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setFavDish, setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
