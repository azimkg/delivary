import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import burgerb from "../../assets/burger.svg";
import burgermobile from "../../assets/burger-mobile.svg";
import closemobile from "../../assets/closemobile.svg";
import unionmobile from "../../assets/unionmobile.png";
import close from "../../assets/close.svg";
import union from "../../assets/Union.png";
import trash from "../../assets/trash.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [all, setAll] = useState(false);
  const [burger, setBurger] = useState(false);
  const [features, setFeatures] = useState(false);
  return (
    <div className="container">
      <div className="navbar__top">
        <div className="navbar__top-logo">
          <img src={logo} width="120" alt="image" />
        </div>
        <div className="navbar__mobile">
          <div className="navbar__top-logo-mobile">
            <img src={logo} width="120" alt="image" />
          </div>
          <div
            onClick={() => {
              setBurger(!burger);
            }}
            className="navbar__mobile-burger"
          >
            {all ? (
              <img className="navbar__burger" src={closemobile} alt="image" />
            ) : (
              <img src={burgermobile} alt="image" />
            )}
          </div>
        </div>
        <div className="navbar__right-mobile">
          <div className="navbar__bottom-user-mobile">
            <Link to="/enter">
              <img
                src={unionmobile}
                alt="image"
                className="navbar__bottom-user-link"
              />
            </Link>
          </div>
          <div className="navbar__bottom-trash-mobile">
            <Link to="/cart">
              <img
                src={trash}
                alt="image"
                className="navbar__bottom-trash-link"
              />
            </Link>
          </div>
          <div className="navbar__bottom-price-mobile">
            <span className="navbar__bottom-priceOfTrash">2800Сом</span>
          </div>
        </div>
        <div className="navbar__top-stock">
          <Link to="/nav">
            <p className="navbar__top-stock-link">Акции</p>
          </Link>
        </div>
      </div>
      <div className="navbar__bottom">
        <div
          onClick={() => {
            setAll(!all);
            setFeatures(false);
          }}
          className="navbar__bottom-burger"
        >
          {all ? (
            <img className="navbar__burger" src={close} alt="image" />
          ) : (
            <img src={burgerb} alt="image" />
          )}
          <p className="navbar__bottom-catalog">Каталог продуктов</p>
        </div>
        <input
          type="search"
          className="navbar__bottom-search"
          placeholder="Поиск"
        />
        <div className="navbar__bottom-right">
          <div className="navbar__bottom-user">
            <Link to="/enter">
              <img
                src={union}
                alt="image"
                className="navbar__bottom-user-link"
              />
            </Link>
          </div>
          <div className="navbar__bottom-trash">
            <Link to="/cart">
              <img
                src={trash}
                alt="image"
                className="navbar__bottom-trash-link"
              />
            </Link>
          </div>
          <div className="navbar__bottom-price">
            <span className="navbar__bottom-priceOfTrash">2800Сом</span>
          </div>
        </div>
      </div>
      {burger ? (
        <div
          className="all__burger"
          onClick={() => {
            setBurger(false);
          }}
        >
          <div className="burger__block-content">
            <div className="burger__block">
              <p className="burger__block-link">Акции</p>
            </div>
            <div className="burger__block">
              <p className="burger__block-link">График доставки</p>
            </div>
            <div className="burger__block">
              <p className="burger__block-link">О компании</p>
            </div>
            <div className="burger__number-block">
              <p className="burger__number">+996778825885</p>
              <p className="burger__number">+996778825885</p>
            </div>
            <div className="burger__number-button">
              <button>Войти в личный кабинет</button>
            </div>
          </div>
        </div>
      ) : null}
      {all ? (
        <div className="all__categories grow">
          <div
            className="all__categories-link"
            onClick={() => {
              setAll(false);
            }}
          >
            <p>Ароматная выпечка</p>
          </div>
          <div
            className="all__categories-link"
            onClick={() => {
              setAll(false);
            }}
          >
            <p>Свежевыжатые соки</p>
          </div>
          <div
            className="all__categories-link"
            onClick={() => {
              setAll(false);
            }}
          >
            <p>Овощи, зелень</p>
          </div>

          <div
            className="all__categories-link"
            onClick={() => {
              setAll(false);
            }}
          >
            <p>Фрукты, ягоды</p>
          </div>
          <div className="all__categories-link">
            <p>Для наших детей</p>
          </div>
          <div className="all__categories-link">
            <p>Молоко, творог, яйца</p>
          </div>
          <div className="all__categories-link">
            <p>Сыры</p>
          </div>
          <div className="all__categories-link">
            <p>Йогурты и десерты</p>
          </div>
          <div className="all__categories-link">
            <p>Хлеб, выпечка</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
