import React from "react";
import "boxicons";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart container">
      <div className="cart-details">
        <div>
          <h2>Оформление заказа</h2>
        </div>
        <div className="cart-details-border">
          <div>
            <p>Адрес доставки</p>
            <input className="cart-details-adress" type="text" />
          </div>
          <div className="cart-details-adress-2">
            <div className="cart-details-adress-2-1">
              <p>Этаж</p>
              <input type="text" />
            </div>
            <div className="cart-details-adress-2-2">
              <p>Квартира</p>
              <input type="text" />
            </div>
          </div>
          <div className="cart-details-adress-2">
            <div className="cart-details-adress-2-1">
              <p>Номер телефона</p>
              <input type="text" />
            </div>
            <div className="cart-details-adress-2-2">
              <p>Имя</p>
              <input type="text" />
            </div>
          </div>
          <div className="cart-typeOfPay">
            <div className="cart-typeOfPay-1">
              <p>Оплата наличными</p>
              <input type="radio" />
            </div>
            <div className="cart-typeOfPay-2">
              <p>Оплата картой</p>
              <input type="radio" />
            </div>
          </div>
          <div className="cart-details-price">
            <div className="cart-details-price-1">
              <p>price:</p>
              <p>1165 сом</p>
            </div>
            <div className="cart-details-price-1">
              <p>скидка:</p>
              <p>0 сом</p>
            </div>
            <div className="cart-details-price-1">
              <h2>Итого к оплате:</h2>
              <h2>1165 сом</h2>
            </div>
            <button className="cart-details-btn">Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
