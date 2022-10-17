import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../FoodSlice/CartSlice";
import { getAllFoods } from "../../FoodSlice/FoodSlice";
import "./MyRoom.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MyRoomProgressBar from "./MyRoomProgressBar";
import { Link } from "react-router-dom";

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
  console.log(historyOfUser);
  console.log(oneProduct);
  let date = /T/gi;

  return oneProduct.length > 0 ? (
    <>
      <div className="my_history">
        {historyOfUser?.map((num, indexes) =>
          oneProduct?.map((item, index) =>
            index === indexes ? (
              <div className="my_history-card">
                <div className="my_history-block">
                  <p className="my_history-date">
                    {num.created_at
                      ?.replace(date, " ")
                      .split("")
                      .slice(0, 10)
                      .join("")}
                  </p>
                  <p className="my_history-date">
                    {num.created_at
                      ?.replace(date, " ")
                      .split("")
                      .slice(10, 16)
                      .join("")}
                  </p>
                  <p className="my_history-sum">{num.order_amount} сом</p>
                </div>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={0}
                  slidesPerGroup={1}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="swiperHistory"
                >
                  <div className="history-blocks">
                    {item.map((val) =>
                      foods.map((elem) =>
                        val.product == elem.id ? (
                          <SwiperSlide key={elem.id}>
                            <div className="my_history-product">
                              <img
                                src={elem.cover_pic}
                                className="my_history-image"
                              />
                            </div>
                          </SwiperSlide>
                        ) : null
                      )
                    )}
                  </div>
                </Swiper>
              </div>
            ) : null
          )
        )}
      </div>
    </>
  ) : JSON.parse(localStorage.getItem("token"))?.access_token ? (
    <>
      <h2>Подождите...</h2>
    </>
  ) : (
    <div className="container ">
      <div className="unauthorized">
        <h2 className="my-history-title">
          Необходимо войти в личный кабинет для просмотра истории заказов
        </h2>
        <Link to="/enter">
          <button
            className="autorization__button my-history-enter"
            type="submit"
          >
            Войти
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyRoomHistory;
