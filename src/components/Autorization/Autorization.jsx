import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import "../Enter/Enter.css";

const Autorization = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const { error, signUp } = useContext(authContext);

  function handleLogin(email, password1, password2, username, phone_number) {
    signUp({ email, password1, password2, username, phone_number }, navigate);
  }
  return (
    <div className="container">
      <div className="autorization">
        <div className="autorization__block">
          <h1 className="autorization__title">Регистрация</h1>
          <div className="autorization__input">
            <h2 className="autorization__text">Номер телефона</h2>
            <input
              type="number"
              value={phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
              className="autorization__inp"
              placeholder="Введите номер телефона"
            />
          </div>
          <div className="autorization__input">
            <h2 className="autorization__text">Почта</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="autorization__inp"
              placeholder="Введите вашу почту"
            />
          </div>
          <div className="autorization__input">
            <h2 className="autorization__text">Имя</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="autorization__inp"
              placeholder="Введите ваше имя"
            />
          </div>
          <div className="autorization__input">
            <h2 className="autorization__text">Пароль</h2>
            <input
              type="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              className="autorization__inp"
              placeholder="Введите пароль"
            />
          </div>
          <div className="autorization__input">
            <h2 className="autorization__text">Повторите пароль</h2>
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="autorization__inp"
              placeholder="Повторите пароль"
            />
          </div>
          <Link to="/enter" className="autorization__link">
            Войти
          </Link>
          <button
            className="autorization__button"
            onClick={() =>
              handleLogin(email, password1, password2, username, phone_number)
            }
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};

export default Autorization;
