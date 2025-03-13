import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    removeCart: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    }
  },
});

export default cartSlice.reducer;
export const { addToCart, removeCart } = cartSlice.actions;