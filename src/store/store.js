import { configureStore, createStore } from "@reduxjs/toolkit";
import CartAdd from './cartSlice';
import counterReducer from './counterSlice'
import ordersReducer from './orderSlice'
export const store = configureStore({
  reducer: {
    cart: CartAdd,
    counter: counterReducer,
    orders: ordersReducer
    
  }
})