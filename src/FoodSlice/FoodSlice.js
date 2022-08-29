import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://kitchen4you.kg/api";
const initialState = {
  foods: [],
};

export const getAllFoods = createAsyncThunk(
  "foods/getAllFoods",
  async (_, { rejectWithValue, dispatch }) => {
    let res = await axios.get(API);
    dispatch(getPosts(res.data));
  }
);

export const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.foods = action.payload;
    },
  },
});

export const { getPosts } = foodSlice.actions;
export default foodSlice.reducer;
