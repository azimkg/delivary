import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { editPosts } from "../../FoodSlice/FoodSlice";
import card from "../../assets/card.svg";
import { cartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const { addProductToCart, checkItemInCart, getCart } =
    useContext(cartContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
  const navigate = useNavigate();

  function clickCart() {
    addProductToCart(item);
    setCheckItem(checkItemInCart(item.id));
    getCart();
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
    </div>
  );
};

export default Product;
