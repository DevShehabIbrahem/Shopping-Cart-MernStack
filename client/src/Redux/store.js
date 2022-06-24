import { configureStore } from "@reduxjs/toolkit";
import productsSilce from "./Slice/productsSilce";

export const store = configureStore({
  reducer: { allData: productsSilce },
});
