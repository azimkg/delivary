import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sales.css";

const Sales = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container ">
      <div className="breadcrumps__block">
        <Link to="/">
          <p className="breadcrumps">Главная</p>
        </Link>
        <span className="breadcrumps__slash">/</span>
        <p className="breadcrumps">Акции</p>
      </div>
      <div className="sales__product">
        <div>
          <h2 className="sales_product-text">
            Акционных продуктов не найдено.
          </h2>
          <Link to="/">
            <button className="cart-details-btn">
              Вернуться в главное меню
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sales;
