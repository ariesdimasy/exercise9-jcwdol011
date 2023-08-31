import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cartList.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cartList));
    },
    getCart: (state) => {
      const cartList = localStorage.getItem("cart");
      state.cartList = JSON.parse(cartList);
    },
  },
});

export const { addCart, getCart } = cartSlice.actions;

export default cartSlice.reducer;
