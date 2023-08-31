import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "./../../api/product";

export const fetchProducts = createAsyncThunk(
  "product/fetchProductsStatus",
  async () => {
    const response = await productApi.fetchProducts();
    console.log("response => ", response.data);
    return response.data;
  }
);

export const addProduct = createAsyncThunk();

const initialState = {
  products: [],
  loading: "idle" | "pending" | "success" | "failed",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // getProducts: (state) => {
    //   return async () => {
    //     const products = await productApi.fetchProducts();
    //     state.products = products.data;
    //   };
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
