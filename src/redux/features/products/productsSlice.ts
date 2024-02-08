import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface ProductsState {
  products: Product[];
  status: 'idle' | 'loading' | 'success' | 'failure';
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get<Product[]>(
      'https://fakestoreapi.com/products/'
    );
    const formattedProducts: Product[] = response.data.map(
      ({ id, description, image, price, title }) => {
        return { id, description, image, price, title };
      }
    );

    return formattedProducts;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = 'loading';
    });
  },
});

export default productsSlice;
