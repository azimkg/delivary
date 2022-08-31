import React, { useContext, useEffect } from "react";
import "boxicons";
import "./Cart.css";
import { cartContext } from "../../context/cartContext";
import { List } from "antd";

const Cart = () => {
  const { getCart, cart, deleteFromCart, changeProductCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  console.log(cart);
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
        <List
          itemLayout="horizontal"
          dataSource={cart.products}
          renderItem={(item) => (
            <div key={item.item.id} className="cart-product-cards">
              <div className="cart-product-card">
                <div className="cart-product-card-imgWithCount">
                  <img
                    className="cart-product-card-img"
                    src={item.item.cover_pic}
                    alt={item.item.product_name}
                  />
                </div>
                <div className="cart-product-card-title">
                  <div className="cart-product-card-titles">
                    <div className="nameAndPrice">
                      <p className="cart-product-card-title-name">
                        {item.item.product_name}
                      </p>
                      <p>{item.item.price}сом</p>
                    </div>
                    <h3 className="cart-product-card-title-price">
                      {item.subPrice}сом
                    </h3>
                    <div className="cart-product-card-count">
                      <p className="cart-product-card-count-1">{item.count}</p>
                      <div className="cart-product-card-count-btn">
                        <button>
                          <i
                            className="bx bxs-up-arrow"
                            onClick={() =>
                              changeProductCount(item.count + 1, item.item.id)
                            }
                          ></i>
                        </button>
                        <button>
                          <i
                            className="bx bxs-down-arrow"
                            onClick={() =>
                              changeProductCount(item.count - 1, item.item.id)
                            }
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          )}
        />
      </div>
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
              <p>цена:</p>
              <p>{cart.totalPrice} сом</p>
            </div>
            <div className="cart-details-price-1">
              <p>скидка:</p>
              <p>0 сом</p>
            </div>
            <div className="cart-details-price-1">
              <h2>Итого к оплате:</h2>
              <h2>{cart.totalPrice} сом</h2>
            </div>
            <button className="cart-details-btn">Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
