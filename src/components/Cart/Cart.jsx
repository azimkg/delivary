import React, { useContext, useEffect, useState } from "react";
import "boxicons";
import "./Cart.css";
import deleteCart from "../../assets/delete.png";
import { cartContext } from "../../context/cartContext";
import { List } from "antd";
import { useDispatch } from "react-redux";
import { getAllOrders, postAllOrders } from "../../FoodSlice/CartSlice";

const Cart = () => {
  const { getCart, cart, deleteFromCart, changeProductCount } =
    useContext(cartContext);
  const [full_name, setFull_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [product, setProduct] = useState("");
  const [address, setAddress] = useState("");
  const [floor, setFloor] = useState("");
  const [apartment, setApartment] = useState("");
  const [delivery, setDelivery] = useState(false);
  const [order_amount, setOrder_amount] = useState("");

  const [carts, setCarts] = useState(null);

  const [delivary, setDelivary] = useState("");

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    setProduct(cart.products.map((item) => item.item.id).join(","));
  }, [cart]);

  const dispatch = useDispatch();

  useEffect(() => {
    setOrder_amount(cart.totalPrice);
  }, [cart.totalPrice]);

  function submitOrder() {
    let newOrder = {
      product: +product,
      full_name: full_name,
      phone_number: phone_number,
      floor: floor,
      apartment: apartment,
      delivery: delivery,
      order_amount: +order_amount,
      address: address,
    };

    dispatch(postAllOrders(newOrder));

    setDelivery("");
    setAddress("");
    setProduct("");
    setApartment("");
    setFull_name("");
    setPhone_number("");
    setFloor("");
    setOrder_amount("");
  }
  console.log(cart);
  return (
    <div className="cart container">
      <div className="cart-cart">
        <div>
          <h2>Корзина</h2>
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
      <div className="cart-details">
        <div>
          <h2 className="cart__title">Оформление заказа</h2>
        </div>
        <div className="cart-typeOfDelivery">
          <div className="cart-typeOfDelivery-1">
            <p className="cart-del">Доставка</p>
            <input
              type="radio"
              value="доставка"
              onChange={(e) => setDelivary(e.target.value)}
              onClick={() => setDelivery(true)}
              name="delivary"
            />
          </div>
          <div className="cart-typeOfDelivery-2">
            <p className="cart-del">На вынос</p>
            <input
              type="radio"
              value="на вынос"
              onChange={(e) => setDelivary(e.target.value)}
              name="delivary"
              onClick={() => setDelivery(false)}
            />
          </div>
        </div>
        <div className="cart-details-border">
          {delivary == "на вынос" ? null : (
            <>
              <div className="cart-details-adress-2">
                <div className="cart-details-adress-2-1">
                  <p>Этаж</p>
                  <input
                    type="text"
                    value={floor}
                    name="floor"
                    onChange={(e) => setFloor(e.target.value)}
                  />
                </div>
                <List
                  className="cart-details-adresses"
                  itemLayout="horizontal"
                  dataSource={cart.products}
                  renderItem={(item) => (
                    <div key={item.item.id}>
                      <input
                        type="number"
                        value={item.item.id}
                        name="product"
                        onChange={(e) => setProduct(e.target.value)}
                      />
                    </div>
                  )}
                />

                <div className="cart-details-adress-2-2">
                  <p>Квартира</p>
                  <input
                    type="text"
                    value={apartment}
                    name="apartment"
                    onChange={(e) => setApartment(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}
          <div>
            <p>Адрес доставки</p>
            <input
              className="cart-details-adress"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              name="address"
            />
          </div>
          <div className="cart-details-adress-2">
            <div className="cart-details-adress-2-1">
              <p>Номер телефона</p>
              <input
                type="number"
                value={phone_number}
                name="phone_number"
                onChange={(e) => setPhone_number(e.target.value)}
              />
            </div>
            <div className="cart-details-adress-2-2">
              <p>Имя</p>
              <input
                type="text"
                value={full_name}
                name="full_name"
                onChange={(e) => setFull_name(e.target.value)}
              />
            </div>
          </div>
          <div className="cart-details-price">
            <div className="cart-details-price-1">
              <p>цена:</p>
              <p>{cart.totalPrice} сом</p>
            </div>
            {/* <div className="cart-details-price-1">
              <p>скидка:</p>
              <p>0 сом</p>
            </div> */}
            <div className="cart-details-price-1">
              <h2>Итого к оплате:</h2>
              <h2>{cart.totalPrice} сом</h2>
            </div>
            <button className="cart-details-btn" onClick={submitOrder}>
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
