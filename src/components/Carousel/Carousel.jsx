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
    <div className="container">
      <Swiper
        slidesPerView={10}
        spaceBetween={30}
        // slidesPerGroup={10}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          // when window width is >= 640px
          374: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 10,
            spaceBetween: 30,
          },
        }}
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
