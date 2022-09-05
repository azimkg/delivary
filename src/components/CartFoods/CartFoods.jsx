import { List } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";

const CartFoods = () => {
  const { getCart, cart, deleteFromCart, changeProductCount } =
    useContext(cartContext);
  const [carts, setCarts] = useState("");

  useEffect(() => {
    setCarts(cart);
  }, [cart]);

  useEffect(() => {
    getCart();
  }, [carts]);
  return carts ? (
    <div>
      <div className="cart-cart">
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
    </div>
  ) : null;
};

export default CartFoods;
