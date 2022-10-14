import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API = "http://kitchen4you.kg/api";

const initialState = {
  category: [],
};

export const getAllCategories = createAsyncThunk(
  "category/getAllOrders",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      let res = await axios.get(`${API}/categories/`);
      dispatch(getCategory(res.data));
    } catch (e) {
      console.log(e);
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { getCategory } = categorySlice.actions;
export default categorySlice.reducer;
