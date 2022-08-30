import React from "react";

const CartFoods = () => {
  return (
    <div>
      <div className="cart-cart">
        <div>
          <h2 className="cart__title">Корзина</h2>
        </div>
        <div className="cart-typeOfDelivery">
          <div className="cart-typeOfDelivery-1">
            <div className="input">
              <input type="radio" name="1" class="strong-aggree" checked />
              <span className="input__span">Доставка</span>
            </div>
          </div>
          <div className="cart-typeOfDelivery-2">
            <div className="input">
              <input type="radio" name="2" class="strong-aggree" />
              <span className="input__span">На вынос</span>
            </div>
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
                    Гамбургер с говядиной
                  </p>
                  <p>135 сом</p>
                </div>
                <div className="cart__block-price">
                  <h3 className="cart-product-card-title-price">13500 сом</h3>
                  <div className="cart-product-card-count">
                    <button className="cart__product-btn">-</button>
                    <span className="cart__product-total">1</span>
                    <button className="cart__product-btn">+</button>
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
    </div>
  );
};

export default CartFoods;
