import { configureStore, createStore } from "@reduxjs/toolkit";
import CartAdd from './cartSlice';
import counterReducer from './counterSlice'
export const store = configureStore({
  reducer: {
    cart: CartAdd,
    counter: counterReducer
  }
})