import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products/productSlice';
import cartReducer from './carts/cartSlice'

export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer
  },
})