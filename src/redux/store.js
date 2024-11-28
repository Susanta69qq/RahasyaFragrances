import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Create the store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Save cart to localStorage on changes
store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
});

export default store;
