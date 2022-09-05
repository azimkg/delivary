import { configureStore } from "@reduxjs/toolkit";
import FoodSlice from "../FoodSlice/FoodSlice";

export const store = configureStore({
  reducer: {
    food: FoodSlice,
  },
});
