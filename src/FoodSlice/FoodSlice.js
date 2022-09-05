import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://kitchen4you.kg/api";
const initialState = {
  foods: [],
  edit: null,
};

export const getAllFoods = createAsyncThunk(
  "foods/getAllFoods",
  async (_, { rejectWithValue, dispatch }) => {
    let res = await axios.get(`${API}/products/` + window.location.search);
    dispatch(getPosts(res.data));
  }
);
export const getOneFoods = createAsyncThunk(
  "foods/getOneFoods",
  async (newProduct, { rejectWithValue, dispatch }) => {
    let res = await axios.get(`${API}/products/${newProduct.id}`);
    dispatch(editPosts(res.data));
  }
);
export const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.foods = action.payload;
    },
    editPosts: (state, action) => {
      state.edit = action.payload;
    },
  },
});

export const { getPosts, editPosts } = foodSlice.actions;
export default foodSlice.reducer;
