import React from "react";
import "./Categories.css";
import azimzhan from "../../assets/azimzhan.jpg";
import azimzhan2 from "../../assets/azimzhan2.jpg";
import azimzhan3 from "../../assets/azimzhan3.jpg";
import azimzhan4 from "../../assets/azimzhan4.jpg";

const Categories = () => {
  return (
    <>
      <div className="containe">
        <h2 className="popular_food-text">Категории</h2>
        <div className="categories_cards">
          <div className="cat__block">
            <img
              className="cat__desktop cat__img-small"
              src={azimzhan}
              alt=""
            />
            <h2 className="cat__title">Пицца</h2>
          </div>
          <div className="cat__block cat__block-mobile">
            <img
              className="cat__desktop cat__img-small"
              src={azimzhan2}
              alt=""
            />
            <h2 className="cat__title">Восточная кухня</h2>
          </div>
          <div className="cat__block cat__block-mobile">
            <img
              className="cat__desktop cat__img-small"
              src={azimzhan4}
              alt=""
            />
            <h2 className="cat__title">Десерты</h2>
          </div>
          <div className="cat__block cat__block-mobile">
            <img
              className="cat__desktop cat__img-small"
              src={azimzhan3}
              alt=""
            />
            <h2 className="cat__title">Роллы</h2>
          </div>
          <div className="cat__block cat__block-mobile">
            <img
              className="cat__desktop cat__img-small"
              src={azimzhan}
              alt=""
            />
            <h2 className="cat__title">Пицца</h2>
          </div>
          <div className="cat__block">
            <img
              className="cat__desktop cat__img-small"
              src={azimzhan2}
              alt=""
            />
            <h2 className="cat__title">Восточная кухня</h2>
          </div>
          <div className="cat__block cat__block-mobile">
            <img
              className="cat__desktop cat__img-small"
              src={azimzhan4}
              alt=""
            />
            <h2 className="cat__title">Десерты</h2>
          </div>
          <div className="cat__block cat__block-mobile ">
            <img
              className="cat__desktop cat__img-small"
              src={azimzhan3}
              alt=""
            />
            <h2 className="cat__title">Роллы</h2>
          </div>
          <div className="cat__block cat__block-mobile">
            <img
              className="cat__desktop cat__img-small"
              src={azimzhan}
              alt=""
            />
            <h2 className="cat__title">Пицца</h2>
          </div>
          <div className="cat__block cat__block-mobile">
            <img
              className="cat__desktop cat__img-small"
              src={azimzhan2}
              alt=""
            />
            <h2 className="cat__title">Восточная кухня</h2>
          </div>
          <div className="cat__block">
            <img
              className="cat__desktop cat__img-small"
              src={azimzhan4}
              alt=""
            />
            <h2 className="cat__title">Десерты</h2>
          </div>
          <div className="cat__block cat__block-mobile">
            <img
              className="cat__desktop cat__img-small"
              src={azimzhan3}
              alt=""
            />
            <h2 className="cat__title">Роллы</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
