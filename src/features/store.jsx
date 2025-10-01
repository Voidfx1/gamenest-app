import { configureStore } from '@reduxjs/toolkit';  
import CartSlice from './CartSlice'
import SiteSlice from './CartSlice'
export const store = configureStore({
  reducer: {
    cart: CartSlice,
    site: SiteSlice
  }
})