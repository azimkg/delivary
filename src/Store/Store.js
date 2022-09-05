import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../FoodSlice/CartSlice";
import FoodSlice from "../FoodSlice/FoodSlice";

export const store = configureStore({
  reducer: {
    food: FoodSlice,
    order: CartSlice,
  },
});
