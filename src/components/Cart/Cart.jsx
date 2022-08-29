import React from "react";
import "boxicons";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart container">
      <div className="cart-cart">
        <div>
          <h2>Корзина</h2>
        </div>
        <div className="cart-typeOfDelivery">
          <div className="cart-typeOfDelivery-1">
            <p>Доставка</p>
            <input type="radio" />
          </div>
          <div className="cart-typeOfDelivery-2">
            <p>На вынос</p>
            <input type="radio" />
          </div>
        </div>
        <div className="cart-product-cards">
          <div className="cart-product-card">
            <div className="cart-product-card-imgWithCount">
              <img
                className="cart-product-card-img"
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
            <div className="cart-product-card-title">
              <div className="cart-product-card-titles">
                <div className="nameAndPrice">
                  <p className="cart-product-card-title-name">
                    Гамбургер с говядиной.
                  </p>
                  <p>135 сом</p>
                </div>
                <h3 className="cart-product-card-title-price">135 сом</h3>
                <div className="cart-product-card-count">
                  <p className="cart-product-card-count-1">1</p>
                  <div className="cart-product-card-count-btn">
                    <button>
                      <i class="bx bxs-up-arrow"></i>
                    </button>
                    <button>
                      <i class="bx bxs-down-arrow"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="cart-product-card">
            <div className="cart-product-card-imgWithCount">
              <img
                className="cart-product-card-img"
                src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
            <div className="cart-product-card-title">
              <div className="cart-product-card-titles">
                <div className="nameAndPrice">
                  <p className="cart-product-card-title-name">
                    Лапша с креветками
                  </p>
                  <p>160 сом</p>
                </div>
                <h3 className="cart-product-card-title-price">320 сом</h3>
                <div className="cart-product-card-count">
                  <p className="cart-product-card-count-1">2</p>
                  <div className="cart-product-card-count-btn">
                    <button>
                      <i class="bx bxs-up-arrow"></i>
                    </button>
                    <button>
                      <i class="bx bxs-down-arrow"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="cart-product-card">
            <div className="cart-product-card-imgWithCount">
              <img
                className="cart-product-card-img"
                src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
            <div className="cart-product-card-title">
              <div className="cart-product-card-titles">
                <div className="nameAndPrice">
                  <p className="cart-product-card-title-name">
                    Мясо с салатом под соусом
                  </p>
                  <p>190 сом</p>
                </div>
                <h3 className="cart-product-card-title-price">380 сом</h3>
                <div className="cart-product-card-count">
                  <p className="cart-product-card-count-1">2</p>
                  <div className="cart-product-card-count-btn">
                    <button>
                      <i class="bx bxs-up-arrow"></i>
                    </button>
                    <button>
                      <i class="bx bxs-down-arrow"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="cart-product-card">
            <div className="cart-product-card-imgWithCount">
              <img
                className="cart-product-card-img"
                src="https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
            <div className="cart-product-card-title">
              <div className="cart-product-card-titles">
                <div className="nameAndPrice">
                  <p className="cart-product-card-title-name">
                    Ленивый завтрак
                  </p>
                  <p>110 сом</p>
                </div>
                <h3 className="cart-product-card-title-price">330 сом</h3>
                <div className="cart-product-card-count">
                  <p className="cart-product-card-count-1">3</p>
                  <div className="cart-product-card-count-btn">
                    <button>
                      <i class="bx bxs-up-arrow"></i>
                    </button>
                    <button>
                      <i class="bx bxs-down-arrow"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="cart-details">
        <div className="cart-detailss">
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
