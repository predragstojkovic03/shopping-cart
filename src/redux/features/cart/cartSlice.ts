import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { Product } from '../products/productsSlice';
import { RootState } from '../../store';

export interface CartItem {
  product: Product;
  qty: number;
}

export interface CartState {
  cartItems: CartItem[];
  status: 'idle' | 'loading' | 'success' | 'failure';
}

const initialState: CartState = {
  cartItems: [],
  status: 'idle',
};

export const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const existing = state.cartItems.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      if (existing !== -1) {
        state.cartItems[existing].qty += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== action.payload
      );
    },
  },
});

export const { addCartItem, removeItemFromCart } = cartSlice.actions;

export const selectItems = (state: RootState) => state.cart.cartItems;

export default cartSlice;
