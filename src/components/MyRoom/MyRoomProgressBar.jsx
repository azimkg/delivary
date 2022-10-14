import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../FoodSlice/CartSlice";

const MyRoomProgressBar = () => {
  const historyOfUser = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  let arr = historyOfUser?.reduce(
    (prev, cur) => prev.order_amount + cur.order_amount
  );
  console.log(arr);

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    // width: `${arr}%`,
    // backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>итого:900</span>
        {/* <p>{arr}</p> */}
      </div>
    </div>
  );
};

export default MyRoomProgressBar;
