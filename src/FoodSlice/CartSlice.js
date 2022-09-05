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
    let formData = new FormData();
    formData.append("full_name", newOrder.full_name);
    formData.append("phone_number", newOrder.phone_number);
    formData.append("product", newOrder.product);
    formData.append("address", newOrder.address);
    formData.append("floor", newOrder.floor);
    formData.append("apartment", newOrder.apartment);
    formData.append("delivery", newOrder.delivery);
    formData.append("order_amount", newOrder.order_amount);
    await axios.post(`${API}/orders/create/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    // dispatch(getAllOrders());
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
