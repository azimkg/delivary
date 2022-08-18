import React from "react";
import { Link } from "react-router-dom";
import "./Enter.css";

const Enter = () => {
  return (
    <div className="container">
      <div className="autorization">
        <div className="autorization__block">
          <h1 className="autorization__title">Вход</h1>
          <div className="autorization__input">
            <h2 className="autorization__text">Номер телефона</h2>
            <input
              type="text"
              className="autorization__inp"
              placeholder="Введите номер телефона"
            />
          </div>
          <div className="autorization__input">
            <h2 className="autorization__text">Пароль</h2>
            <input
              type="text"
              className="autorization__inp"
              placeholder="Введите ваш пароль"
            />
          </div>
          <Link to="/autorization" className="autorization__link">
            Зарегистрируйтесь
          </Link>
          <button className="autorization__button">Войти</button>
        </div>
      </div>
    </div>
  );
};

export default Enter;
