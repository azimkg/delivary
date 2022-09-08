import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";
import { API } from "../helpers/API";

export function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
const access = getCookie("delivery-auth");
console.log(access);

const initialState = {
  orders: [],
};

export const getAllOrders = createAsyncThunk(
  "orders/getAllOrders",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      let res = await axios.get(API + "/api/my-orders/", {
        withCredentials: true,
      });
      dispatch(getCarts(res.data));
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
);
export const postAllOrders = createAsyncThunk(
  "orders/postAllOrders",
  async (newOrder, { rejectWithValue, dispatch }) => {
    const Authorization = `${
      JSON.parse(localStorage.getItem("token")).access_token
    }`;
    try {
      let res = await axios.post(`${API}/orders/create/`, newOrder, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-type": "application/json",
          Authorization,
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
