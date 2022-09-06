import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { editPosts } from "../../FoodSlice/FoodSlice";
import card from "../../assets/card.svg";
import { cartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ item }) => {
  const notify = () => {
    toast.success('Товар добавлен в корзину', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };
  const dispatch = useDispatch();
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
  const navigate = useNavigate();

  function clickCart() {
    addProductToCart(item);
    setCheckItem(checkItemInCart(item.id));
    notify();
  }
  return (
    <div key={item.id} className="popular_card">
      <img
        src={item.cover_pic}
        alt="card image"
        className="image_cards"
        onClick={() => {
          dispatch(editPosts(item));
          navigate(`/details/${item.id}`);
          console.log(item.id);
        }}
      />
      <div className="popular_bottom-text">
        <h2 className="cards_title-name">{item.product_name}</h2>
        <div className="card_blocked">
          <span className="cards_title-desc">
            {item.description.split(" ").slice(0, 3).join(" ")}...
          </span>
        </div>
        <span className="card_price-span">{item.price}сом</span>
        <div className="card_position-card" onClick={clickCart}>
          <img src={card} alt="card" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
