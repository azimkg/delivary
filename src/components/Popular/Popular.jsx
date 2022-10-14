import React from "react";
import card from "../../assets/card.svg";
import "./Popular.css";
import { useDispatch, useSelector } from "react-redux";
import { editPosts, getAllFoods } from "../../FoodSlice/FoodSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

const Popular = () => {
  const foods = useSelector((state) => state.food.foods);
  const [eda, setEda] = useState("");

  const notify = () => {
    toast.success("Товар добавлен в корзину", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const dispatch = useDispatch();

  const { addProductToCart, checkItemInCart, getCart } =
    useContext(cartContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(foods.id));
  const navigate = useNavigate();

  return (
    <div className="container">
      <div>
        <h2 className="popular_food-text">Популярные товары</h2>
      </div>
      <div className="popular__product">
        {foods.slice(0, 5)?.map((elem) => (
          <div key={elem.id} className="popular_card">
            <img
              src={elem.cover_pic}
              alt="card image"
              className="image_cards"
              onClick={() => {
                dispatch(editPosts(elem));
                navigate(`/product/${elem.category}/details/${elem.id}`);
                console.log(elem.id);
              }}
            />
            <div className="popular_bottom-text">
              <h2 className="cards_title-name">{elem.product_name}</h2>
              <div className="card_blocked">
                <span className="cards_title-desc">
                  {elem.description.split(" ").slice(0, 3).join(" ")}...
                </span>
              </div>
              <span className="card_price-span">{elem.price}сом</span>
              <div
                className="card_position-card"
                onClick={() => {
                  addProductToCart(elem);
                  setCheckItem(checkItemInCart(elem.id));
                  notify();
                  getCart();
                }}
              >
                <img src={card} alt="card" />
              </div>
            </div>
            <ToastContainer />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
