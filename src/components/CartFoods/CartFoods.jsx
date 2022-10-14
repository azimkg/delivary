import { List } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";
import deleteCart from "../../assets/delete.png";

const CartFoods = () => {
  const { getCart, cart, deleteFromCart, changeProductCount } =
    useContext(cartContext);
  const [carts, setCarts] = useState("");

  useEffect(() => {
    setCarts(cart);
  }, [cart]);

  useEffect(() => {
    getCart();
  }, []);
  return carts ? (
    <div>
      <div className="cart-cart ">
        <div>
          <h2 className="cart__title">Корзина</h2>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={carts.products}
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
                      <div className="priceprice">
                        <p className="cart-product-card-title-name">
                          {item.item.product_name}
                        </p>
                        <p className="cart-product-name-price">
                          {item.item.price} сом
                        </p>
                      </div>
                      <img
                        className="deleteCart"
                        onClick={() => deleteFromCart(item.item.id)}
                        src={deleteCart}
                        alt=""
                      />
                    </div>
                    <div className="cart-price-count-block">
                      <h3 className="cart-product-card-title-price">
                        {item.subPrice} сом
                      </h3>
                      <div className="cart-product-cardss">
                        <button
                          className="btn-cart-product"
                          onClick={() =>
                            changeProductCount(item.count - 1, item.item.id)
                          }
                        >
                          -
                        </button>
                        <p className="cart-product-card-count-1">
                          {item.count}
                        </p>
                        <button
                          className="btn-cart-product"
                          onClick={() =>
                            changeProductCount(item.count + 1, item.item.id)
                          }
                        >
                          +
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
    </div>
  ) : null;
};

export default CartFoods;
