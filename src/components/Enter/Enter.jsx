import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import NavigationMenu2 from "../NavigationMenu2/NavigationMenu2";
import { ToastContainer, toast } from "react-toastify";
import "./Enter.css";

const Enter = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, error, signIn } = useContext(authContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const regex = () => {
    toast.warning("Введите правильный email", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  function handleRegister(username, password) {
    const EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    if (!EMAIL_REGEXP.test(username)) {
      return regex();
    }

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
            <h2 className="autorization__text">Email</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="autorization__inp"
              placeholder="Введите ваш email"
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
      <ToastContainer />
    </div>
  );
};

export default Enter;
