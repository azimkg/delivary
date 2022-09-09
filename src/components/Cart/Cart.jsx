import React, { useContext, useEffect, useState } from "react";
import "boxicons";
import "./Cart.css";
import { Link } from "react-router-dom";
import { Container, Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import deleteCart from "../../assets/delete.png";
import empty from "../../assets/empty.png";
import { cartContext } from "../../context/cartContext";
import { List } from "antd";
import { useDispatch } from "react-redux";
import { getAllOrders, postAllOrders } from "../../FoodSlice/CartSlice";

const Cart = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
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
  function showModal() {
    setShowMessageModal(true);
  }
  function showModalClose() {
    setShowMessageModal(false);
  }
  function showMessageClose() {
    setShowMessage(false);
  }
  console.log(cart);
  return (
    <>
      <div className="cart container">
        <div className="cart-cart cart-del">
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

        <div className="cart-details cart-details-mobile">
          <div>
            <h2 className="cart__title">Оформление заказа</h2>
          </div>
          <div className="cart-typeOfDelivery">
            <div className="cart-typeOfDelivery-1">
              <p className="cart-deliv">Доставка</p>
              <input
                className="inp__radio"
                type="radio"
                value="доставка"
                onChange={(e) => setDelivary(e.target.value)}
                onClick={() => setDelivery(true)}
                name="delivary"
              />
            </div>
            <div className="cart-typeOfDelivery-2">
              <p className="cart-deliv">На вынос</p>
              <input
                className="inp__radio"
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
                    <p className="cart__del-title">Этаж</p>
                    <input
                      className="inp__del"
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
                          className="inp__del"
                          type="number"
                          value={item.item.id}
                          name="product"
                          onChange={(e) => setProduct(e.target.value)}
                        />
                      </div>
                    )}
                  />

                  <div className="cart-details-adress-2-2">
                    <p className="cart__del-title">Квартира</p>
                    <input
                      className="inp__del"
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
              <p className="cart__del-title">Адрес доставки</p>
              <input
                className="cart-details-adress inp__del"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                name="address"
              />
            </div>
            <div className="cart-details-adress-2">
              <div className="cart-details-adress-2-1">
                <p className="cart__del-title">Номер телефона</p>
                <input
                  className="inp__del"
                  type="number"
                  value={phone_number}
                  name="phone_number"
                  onChange={(e) => setPhone_number(e.target.value)}
                />
              </div>
              <div className="cart-details-adress-2-2">
                <p className="cart__del-title">Имя</p>
                <input
                  className="inp__del"
                  type="text"
                  value={full_name}
                  name="full_name"
                  onChange={(e) => setFull_name(e.target.value)}
                />
              </div>
            </div>
            <div className="cart-details-price">
              <div className="cart-details-price-1">
                <p className="cart-det-title">цена:</p>
                <h4 classname="cart-det-price">{cart.totalPrice} сом</h4>
              </div>
              {/* <div className="cart-details-price-1">
              <p>скидка:</p>
              <p>0 сом</p>
            </div> */}
              <div className="cart-details-price-1">
                <h2 className="cart-det-title">Итого к оплате:</h2>
                <h3 classname="cart-det-price prices">{cart.totalPrice} сом</h3>
              </div>
              <button className="cart-details-btn" onClick={submitOrder}>
                Оформить заказ
              </button>
              <p className="cart__bonus">
                При заказе на сумму от 500 сом ,вы получите бонус в размере 100
                баллов
              </p>
            </div>
          </div>
        </div>
      </div>

      <Container>
        {showButton && (
          <button
            className="cart-details-mobile-link cart-details-btn"
            onClick={() => setShowMessage(true)}
            size="lg"
          >
            Оформить заказ
          </button>
        )}
        <CSSTransition
          in={showMessage}
          classNames="alert"
          unmountOnExit
          timeout={1000}
          onEnter={() => setShowButton(false)}
          onExited={() => setShowButton(true)}
        >
          <Alert
            variant="primary"
            dismissible
            onClose={() => setShowMessage(false)}
          >
            <Alert.Heading>
              <div className="cart-details cart-details-mobile-block">
                <div className="cart-del-det">
                  <h2 className="cart__title">Оформление заказа</h2>
                  <img
                    className="cart-del-img"
                    src={deleteCart}
                    onClick={() => setShowMessage(false)}
                  />
                </div>
                <div className="cart-typeOfDelivery">
                  <div className="cart-typeOfDelivery-1">
                    <p className="cart-deliv">Доставка</p>
                    <input
                      className="inp__radio"
                      type="radio"
                      value="доставка"
                      onChange={(e) => setDelivary(e.target.value)}
                      onClick={() => setDelivery(true)}
                      name="delivary"
                    />
                  </div>
                  <div className="cart-typeOfDelivery-2">
                    <p className="cart-deliv">На вынос</p>
                    <input
                      className="inp__radio"
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
                          <p className="cart__del-title">Этаж</p>
                          <input
                            className="inp__del"
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
                                className="inp__del"
                                type="number"
                                value={item.item.id}
                                name="product"
                                onChange={(e) => setProduct(e.target.value)}
                              />
                            </div>
                          )}
                        />

                        <div className="cart-details-adress-2-2">
                          <p className="cart__del-title">Квартира</p>
                          <input
                            className="inp__del"
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
                    <p className="cart__del-title">Адрес доставки</p>
                    <input
                      className="cart-details-adress inp__del"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      name="address"
                    />
                  </div>
                  <div className="cart-details-adress-2">
                    <div className="cart-details-adress-2-1">
                      <p className="cart__del-title">Номер телефона</p>
                      <input
                        className="inp__del"
                        type="number"
                        value={phone_number}
                        name="phone_number"
                        onChange={(e) => setPhone_number(e.target.value)}
                      />
                    </div>
                    <div className="cart-details-adress-2-2">
                      <p className="cart__del-title">Имя</p>
                      <input
                        className="inp__del"
                        type="text"
                        value={full_name}
                        name="full_name"
                        onChange={(e) => setFull_name(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="cart-details-price">
                    <div className="cart-details-price-1">
                      <p className="cart-det-title">цена:</p>
                      <h4 classname="cart-det-price">{cart.totalPrice} сом</h4>
                    </div>
                    <div className="cart-details-price-1">
                      <h2 className="cart-det-title">Итого к оплате:</h2>
                      <h3 classname="cart-det-price prices">
                        {cart.totalPrice} сом
                      </h3>
                    </div>
                    <button
                      className="cart-details-btn"
                      onClick={(submitOrder, showModal)}
                    >
                      Оформить заказ
                    </button>
                  </div>
                </div>
              </div>
            </Alert.Heading>
          </Alert>
        </CSSTransition>
      </Container>
      <Container>
        <CSSTransition
          in={showMessageModal}
          classNames="my-node"
          unmountOnExit
          timeout={5000}
        >
          <Alert
            variant="primary"
            dismissible
            onClose={() => setShowMessageModal(false)}
          >
            <Alert.Heading>
              <div className="cart-details-modal">
                <div className="cart-del-det">
                  <Link to="/">
                    <img className="cart-del-img" src={deleteCart} />
                  </Link>
                </div>
                <div className="show__specialist">
                  <p>Ваш заказ принят, дождитесь ответа специалиста</p>
                </div>
                <Link to="/">
                  <button className="cart-details-btn">
                    Вернуться в главное меню
                  </button>
                </Link>
              </div>
            </Alert.Heading>
          </Alert>
        </CSSTransition>
      </Container>
    </>
  );
};

export default Cart;
