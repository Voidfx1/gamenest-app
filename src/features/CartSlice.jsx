import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

const CartSlice = createSlice({
  name: 'cart',
  initialState: JSON.parse(localStorage.getItem('GameNest_cart')) || [],
  reducers: {
    addToCart: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id);
      if (exists) {
        toast.error('This Product is already in your cart', { id: '123' });
      } else {
        state.push(action.payload);
        toast.success('New Product has been added to cart', { id: '123' });
        localStorage.setItem('GameNest_cart', JSON.stringify(state));
      }
    },
    changeCartQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
      localStorage.setItem('GameNest_cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const newState = state.filter(item => item.id !== action.payload.id);
      localStorage.setItem('GameNest_cart', JSON.stringify(newState));
      toast.error('Product removed from cart', { id: '123' });
      return newState;
    },
    clearCart: () => {
      localStorage.removeItem('GameNest_cart');
      toast.success('🛒 Cart cleared successfully');
      return [];
    }
  }
});

export const { addToCart, removeFromCart, changeCartQuantity, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
