import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/carrot.svg";
import burgerb from "../../assets/burger.svg";
import burgermobile from "../../assets/burger-mobile.svg";
import closemobile from "../../assets/closemobile.svg";
import unionmobile from "../../assets/unionmobile.png";
import close from "../../assets/close.svg";
import union from "../../assets/Union.png";
import trash from "../../assets/trash.png";

const Navbar = () => {
  const [all, setAll] = useState(false);
  const [burger, setBurger] = useState(false);
  const [features, setFeatures] = useState(false);
  return (
    <div className="container">
      <div className="navbar__top">
        <div className="navbar__top-logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar__mobile">
          <div className="navbar__top-logo-mobile">
            <img src={logo} alt="" />
          </div>
          <div
            onClick={() => {
              setBurger(!burger);
            }}
            className="navbar__mobile-burger"
          >
            {all ? (
              <img className="navbar__burger" src={closemobile} alt="" />
            ) : (
              <img src={burgermobile} alt="" />
            )}
          </div>
        </div>
        <div className="navbar__right-mobile">
          <div className="navbar__bottom-user-mobile">
            <img
              src={unionmobile}
              alt=""
              className="navbar__bottom-user-link"
            />
          </div>
          <div className="navbar__bottom-trash-mobile">
            <img src={trash} alt="" className="navbar__bottom-trash-link" />
          </div>
          <div className="navbar__bottom-price-mobile">
            <span className="navbar__bottom-priceOfTrash">2800Сом</span>
          </div>
        </div>
        <div className="navbar__top-stock">
          <p className="navbar__top-stock-link">Акции</p>
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
            <img className="navbar__burger" src={close} alt="" />
          ) : (
            <img src={burgerb} alt="" />
          )}
          <p className="navbar__bottom-catalog">Каталог продуктов</p>
        </div>
        <input
          type="text"
          className="navbar__bottom-search"
          placeholder="Поиск"
        />
        <div className="navbar__bottom-right">
          <div className="navbar__bottom-user">
            <img src={union} alt="" className="navbar__bottom-user-link" />
          </div>
          <div className="navbar__bottom-trash">
            <img src={trash} alt="" className="navbar__bottom-trash-link" />
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
          <p>Акции</p>
          <p>аьлдв</p>
          <p>лдват</p>
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
