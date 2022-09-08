import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../FoodSlice/CartSlice";
import { getAllFoods } from "../../FoodSlice/FoodSlice";
import "./MyRoom.css";
import MyRoomProgressBar from "./MyRoomProgressBar";

const MyRoomHistory = () => {
  const historyOfUser = useSelector((state) => state.order.orders);
  const foods = useSelector((state) => state.food.foods);
  const [oneProduct, setOneProduct] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(getAllFoods());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      product();
    }, 1500);
  }, [historyOfUser]);

  function product() {
    let ordered = [];
    if (historyOfUser) {
      historyOfUser.map((item) => {
        ordered.push(item.ordered_product);
      });
    }
    return setOneProduct(ordered);
  }
  console.log(oneProduct);

  return oneProduct ? (
    <>
      <div className="my_history-progressBar">
        <MyRoomProgressBar bgcolor={"#6a1b9a"} completed="" />
      </div>
      <div className="my_history">
        {oneProduct.map((item, index) => (
          <div key={index} className="my_history-card">
            <p className="my_history-date">08.06.2022</p>
            <div className="my_history-line"></div>

            {item.map((val) =>
              foods.map((elem) =>
                val.product == elem.id ? (
                  <p key={elem.id}>{elem.product_name}</p>
                ) : null
              )
            )}
          </div>
        ))}
      </div>
    </>
  ) : null;
};

export default MyRoomHistory;
