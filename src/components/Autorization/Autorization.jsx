import React from "react";
import { Link } from "react-router-dom";
import "../Enter/Enter.css";

const Autorization = () => {
  return (
    <div className="container">
      <div className="autorization">
        <div className="autorization__block">
          <h1 className="autorization__title">Регистрация</h1>
          <div className="autorization__input">
            <h2 className="autorization__text">Номер телефона</h2>
            <input
              type="text"
              className="autorization__inp"
              placeholder="Введите номер телефона"
            />
          </div>
          <div className="autorization__input">
            <h2 className="autorization__text">Почта</h2>
            <input
              type="text"
              className="autorization__inp"
              placeholder="Введите вашу почту"
            />
          </div>
          <div className="autorization__input">
            <h2 className="autorization__text">Имя</h2>
            <input
              type="text"
              className="autorization__inp"
              placeholder="Введите ваше имя"
            />
          </div>
          <Link to="/enter" className="autorization__link">
            Войти
          </Link>
          <button className="autorization__button">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
};

export default Autorization;
