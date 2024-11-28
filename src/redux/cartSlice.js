import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (error) {
    console.warn("Failed to load cart from localstorage: ", error);
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.total =
          existingProduct.quantity * existingProduct.price;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
          existingProduct.total =
            existingProduct.quantity * existingProduct.price;
        } else {
          return state.filter((item) => item._id !== action.payload._id);
        }
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item._id !== action.payload._id);
    },
    clearCart: () => [],
  },
});

//selector to calculate total cart amount
export const selectCartTotal = (state) => {
 return state.cart.reduce((total, item) => total + item.total, 0);
};

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
