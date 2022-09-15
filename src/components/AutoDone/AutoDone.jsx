import React from "react";
import { Link } from "react-router-dom";

const AutoDone = () => {
  return (
    <div className="container">
      <div className="autodone__block">
        <div className="cart-del-det"></div>
        <div className="autodone__block-text">
          <p>Вы зарегестрировались. Перейдите на свою почту и подтвердите.</p>
        </div>
        <Link to="/">
          <button className="cart-details-btn">Главное меню</button>
        </Link>
      </div>
    </div>
  );
};

export default AutoDone;
