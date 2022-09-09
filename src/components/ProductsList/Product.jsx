import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { editPosts } from "../../FoodSlice/FoodSlice";
import card from "../../assets/card.svg";
import { cartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Skeleton, Space } from "antd";
import { DotChartOutlined } from "@ant-design/icons";
import { useEffect } from "react";

const Product = ({ item }) => {
  const [elem, setElem] = useState(null);
  const [active, setActive] = useState(false);
  const notify = () => {
    toast.success("Товар добавлен в корзину", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setElem(item);
    }, 1000);
  }, []);

  const dispatch = useDispatch();
  const { addProductToCart, checkItemInCart, getCart } =
    useContext(cartContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
  const navigate = useNavigate();

  function clickCart() {
    addProductToCart(item);
    setCheckItem(checkItemInCart(item.id));
    notify();
    return getCart();
  }
  // console.log(elem);
  return elem ? (
    <div key={elem.id} className="popular_card">
      <img
        src={elem.cover_pic}
        alt="card image"
        className="image_cards"
        onClick={() => {
          dispatch(editPosts(elem));
          navigate(`/details/${elem.id}`);
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
        <div className="card_position-card" onClick={clickCart}>
          <img src={card} alt="card" />
        </div>
      </div>
      <ToastContainer />
    </div>
  ) : (
    <div className="popular_card">
      <Space>
        <Skeleton.Button
          active={active}
          style={{ width: "250px", height: "220px" }}
        />
      </Space>
      <div className="skeleton_block">
        <Space>
          <Skeleton.Button active={active} className="skeleton_button" />
        </Space>
        <Space>
          <Skeleton.Button active={active} className="skeleton_button" />
        </Space>
      </div>
    </div>
  );
};

export default Product;
