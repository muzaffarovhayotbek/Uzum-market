// orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: []
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addToOrders: (state, action) => {
      state.orders = [...state.orders, ...action.payload]; // Bu yerda action.payload massiv bo'lgani uchun, uni qo'shish
    }
  }
});

export const { addToOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
