import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://kitchen4you.kg/api";

const initialState = {
  orders: [],
};

export const getAllOrders = createAsyncThunk(
  "orders/getAllOrders",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      let res = await axios.get(API + "/my-orders/", {
        withCredentials: true,
      });
      dispatch(getCarts(res.data));
    } catch (e) {
      console.log(e);
    }
  }
);
export const postAllOrders = createAsyncThunk(
  "orders/postAllOrders",
  async (newOrder, { rejectWithValue, dispatch }) => {
    const Authorization = JSON.parse(
      localStorage.getItem("token")
    ).access_token;
    try {
      let res = await axios.post(API + "/orders/create/", newOrder, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-type": "application/json",
        },
      });
      dispatch(getCarts(res.data));
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
      state.orders = action.payload;
    },
  },
});

export const { getCarts } = orderSlice.actions;
export default orderSlice.reducer;
