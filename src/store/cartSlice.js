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
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;