import React from "react";
import "./Details.css";
import vector from "../../assets/Vector.png";

const Details = () => {
  return (
    <div className="container">
      <div className="details">
        <div className="details__block">
          <img
            src="https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="details__photos"
          />
        </div>
        <div className="details__block-right">
          <h1 className="details__right-title">Томаты на ветке</h1>
          <p className="details__right-description">
            Томаты на ветке красные (помидоры) - более плотные, яркие и
            ароматные по сравнению с обычными. Они славятся низкой калорийностью
            и высоким содержанием витаминов, клетчатки, пектина и минеральных
            веществ. В них содержатся также каротиноиды, кислоты и мощный
            антиоксидант ликопин.
          </p>
          <div className="details__right-footer">
            <div className="details__right-price">
              <span className="details__right-cost">250 сом</span>
              <span className="details__right-weight">/ кг</span>
            </div>
            <div className="details__cart-block">
              <img src={vector} alt="" />
              <button className="details__cart">В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
