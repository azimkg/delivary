import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://kitchen4you.kg/api";
const initialState = {
  orders: [],
};

export const getAllOrders = createAsyncThunk(
  "orders/getAllOrders",
  async (_, { rejectWithValue, dispatch }) => {
    let res = await axios.post(`${API}/my-orders/`);
    dispatch(getCarts(res.data));
  }
);
export const postAllOrders = createAsyncThunk(
  "orders/postAllOrders",
  async (newOrder, { rejectWithValue, dispatch }) => {
    try {
      let res = await axios.post(`${API}/orders/create/`, newOrder, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-type": "application/json",
        },
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
);

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getCarts: (state, action) => {
      state.foods = action.payload;
    },
  },
});

export const { getCarts } = orderSlice.actions;
export default orderSlice.reducer;
