import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";
import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllCategories } from "../../FoodSlice/CategoriesSlice";

export default function Carousel() {
  const category = useSelector((state) => state.categories.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={6}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {category.map((item) => (
          <SwiperSlide
            key={item.id}
            className="swipe"
            onClick={() => navigate(`/category/${item.id}/product`)}
          >
            {item.category_name}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
