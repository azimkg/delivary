import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import NavigationMenu2 from "../NavigationMenu2/NavigationMenu2";
import "./Enter.css";

const Enter = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, error, signIn } = useContext(authContext);

  function handleRegister(username, password) {
    signIn(username, password, navigate);
  }
  return (
    <div className="container">
      <div className="navigation_menu">
        <NavigationMenu2 />
      </div>
      <div className="autorization">
        <div className="autorization__block">
          <h1 className="autorization__title">Вход</h1>
          <div className="autorization__input">
            <h2 className="autorization__text">Логин</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="autorization__inp"
              placeholder="Введите ваш логин"
            />
          </div>
          <div className="autorization__input">
            <h2 className="autorization__text">Пароль</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="autorization__inp"
              placeholder="Введите ваш пароль"
            />
          </div>
          <Link to="/autorization" className="autorization__link">
            Зарегистрируйтесь
          </Link>
          <button
            className="autorization__button"
            onClick={() => handleRegister(username, password)}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Enter;
