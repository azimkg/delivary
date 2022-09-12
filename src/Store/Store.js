import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../FoodSlice/CartSlice";
import CategoriesSlice from "../FoodSlice/CategoriesSlice";
import FoodSlice from "../FoodSlice/FoodSlice";

export const store = configureStore({
  reducer: {
    food: FoodSlice,
    order: CartSlice,
    categories: CategoriesSlice,
  },
});
