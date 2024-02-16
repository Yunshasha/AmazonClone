import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productStore";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
export default store;
