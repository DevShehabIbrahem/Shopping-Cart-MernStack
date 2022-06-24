import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "allData/fetchProducts",
  async (thunkAPI) => {
    const res = await fetch("http://localhost:5001/api/products").then((data) =>
      data.json()
    );
    return res;
  }
);
const initialState = { products: [], filterBySize: [] };
const product = createSlice({
  name: "allData",
  initialState,
  reducers: {
    filterbySize: (state, { payload }) => {
      let productsFilterClone = [...state.products];

      // //Search for Size Inside The Elements [xxl,m,s,xl,sm]
      const filter = productsFilterClone.filter(
        (p) => p.sizes.indexOf(payload) !== -1
      );

      return {
        ...state,
        filterBySize: filter,
      };
    },

    Allproducts: (state, { payload }) => {
      let productsClone = [...state.products];
      let productsCloneSize = [...state.filterBySize];

      const SortAllproducts = productsClone.sort(function (a, b) {
        if (payload === "Lowest") {
          return a.price - b.price;
        } else if (payload === "Highest") {
          return b.price - a.price;
        } else {
          return a.id < b.id ? 1 : -1; // Sorting Element By Id [String]
        }
      });

      const SortSizeData = productsCloneSize.sort(function (a, b) {
        if (payload === "Lowest") {
          return a.price - b.price;
        } else if (payload === "Highest") {
          return b.price - a.price;
        } else {
          return a.id < b.id ? 1 : -1; // Sorting Element By Id [String]
        }
      });

      return {
        ...state,
        products: SortAllproducts,
        filterBySize: SortSizeData,
      };
    },
  },

  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        products: payload,
      };
    },
  },
});

export default product.reducer;

export const { filterbySize } = product.actions;
export const { filterSort } = product.actions;
export const { Allproducts } = product.actions;
export const { filterOrder } = product.actions;

export const shopping = (state) => state.allData.products;
export const filtersize = (state) => state.allData.filterBySize;
export const orderFiltring = (state) => state.allData.filterByorder;
