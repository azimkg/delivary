import React from "react";
import "./Categories.css";
import azimzhan from "../../assets/azimzhan.jpg";
import hot from "../../assets/hot.webp";
import soup from "../../assets/soup.webp";
import pasty from "../../assets/pasty.webp";
import wok from "../../assets/wok.webp";
import salad from "../../assets/salad.webp";
import sandvich from "../../assets/sandvich.webp";
import zakuska from "../../assets/kalach.webp";
import breakfast from "../../assets/Breakfast.webp";
import garnir from "../../assets/garnir.webp";
import toping from "../../assets/toping.webp";
import rolly from "../../assets/rolly.webp";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="containe">
        <h2 className="popular_food-text">Категории</h2>
        <div className="categories_cards">
          <div className="cat__block">
            <Link to="/category/3/product">
              <img className="cat__desktop" src={azimzhan} alt="pasty" />
              <h2 className="cat__title">Пицца</h2>
            </Link>
          </div>
          <div className="cat__block cat__block-mobile">
            <Link to="/category/14/product">
              <img
                className="cat__desktop cat__img-small"
                src={rolly}
                alt="image"
              />
              <h2 className="cat__title">Роллы</h2>
            </Link>
          </div>
          <div className="cat__block cat__block-mobile">
            <Link to="/category/4/product">
              <img
                className="cat__desktop cat__img-small"
                src={hot}
                alt="pasty"
              />
              <h2 className="cat__title">Горячие блюда</h2>
            </Link>
          </div>
          <div className="cat__block cat__block-mobile">
            <Link to="/category/5/product">
              <img
                className="cat__desktop cat__img-small"
                src={soup}
                alt="pasty"
              />
              <h2 className="cat__title">Супы</h2>
            </Link>
          </div>
          <div className="cat__block cat__block-mobile">
            <Link to="/category/6/product">
              <img
                className="cat__desktop cat__img-small"
                src={pasty}
                alt="image"
              />
              <h2 className="cat__title">Пасты</h2>
            </Link>
          </div>
          <div className="cat__block">
            <Link to="/category/7/product">
              <img
                className="cat__desktop cat__img-small"
                src={wok}
                alt="image"
              />
              <h2 className="cat__title">Wok и Боулы</h2>
            </Link>
          </div>
          <div className="cat__block  cat__block-mobile">
            <Link to="/category/8/product">
              <img className="cat__desktop" src={breakfast} alt="image" />
              <h2 className="cat__title">Завтраки</h2>
            </Link>
          </div>
          <div className="cat__block cat__block-mobile">
            <Link to="/category/9/product">
              <img
                className="cat__desktop cat__img-small"
                src={salad}
                alt="image"
              />
              <h2 className="cat__title">Салаты</h2>
            </Link>
          </div>
          <div className="cat__block cat__block-mobile ">
            <Link to="/category/10/product">
              <img
                className="cat__desktop cat__img-small"
                src={sandvich}
                alt="image"
              />
              <h2 className="cat__title">Сэндвичи и Бургеры</h2>
            </Link>
          </div>
          <div className="cat__block cat__block-mobile">
            <Link to="/category/11/product">
              <img
                className="cat__desktop cat__img-small"
                src={zakuska}
                alt="image"
              />
              <h2 className="cat__title">Горячие закуски</h2>
            </Link>
          </div>
          <div className="cat__block  cat__block-mobile">
            <Link to="/category/12/product">
              <img
                className="cat__desktop cat__img-small"
                src={garnir}
                alt="image"
              />
              <h2 className="cat__title">Гарниры</h2>
            </Link>
          </div>
          <div className="cat__block   cat__block-mobile">
            <Link to="/category/13/product">
              <img
                className="cat__desktop cat__img-small"
                src={toping}
                alt="image"
              />
              <h2 className="cat__title">Топинги</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
