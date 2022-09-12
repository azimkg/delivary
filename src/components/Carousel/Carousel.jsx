import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";
import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../FoodSlice/CategoriesSlice";

export default function Carousel() {
  const category = useSelector((state) => state.categories.category);
  const dispatch = useDispatch();

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
          <Link to={`/category/${item.id}/product`}>
            <SwiperSlide key={item.id} className="swipe">
              {item.category_name}
            </SwiperSlide>
          </Link>
        ))}
      </Swiper>
    </div>
  );
}
