import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        slidesPerGroup={8}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swipe">Молоко</SwiperSlide>
        <SwiperSlide className="swipe">Хлеб</SwiperSlide>
        <SwiperSlide className="swipe">Мясо</SwiperSlide>
        <SwiperSlide className="swipe">Сыр</SwiperSlide>
        <SwiperSlide className="swipe">Овощи</SwiperSlide>
        <SwiperSlide className="swipe">Масло</SwiperSlide>
        <SwiperSlide className="swipe">Картофель</SwiperSlide>
        <SwiperSlide className="swipe">Яйца</SwiperSlide>
        <SwiperSlide className="swipe">Сладости</SwiperSlide>
        <SwiperSlide className="swipe">Творог</SwiperSlide>
        <SwiperSlide className="swipe">Кефир</SwiperSlide>
        <SwiperSlide className="swipe">Вода</SwiperSlide>
      </Swiper>
    </div>
  );
}
