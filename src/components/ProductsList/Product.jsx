import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPosts, getAllFoods } from "../../FoodSlice/FoodSlice";
import card from "../../assets/card.svg";
import { cartContext } from "../../context/cartContext";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Skeleton, Space } from "antd";
import { useEffect } from "react";
import deleteCard from "../../assets/close.svg";

const Product = ({ item, pages }) => {
  const [deletes, setDeletes] = useState(false);
  const [elem, setElem] = useState(null);
  const [active, setActive] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // const [page, setPage] = useState(
  //   searchParams.get("page") ? searchParams.get("page") : 1
  // );

  // const [limit, setLimit] = useState(1000);
  const notify = () => {
    toast.success("Товар добавлен в корзину", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const remove = () => {
    toast.warning("Товар удален из корзины", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // useEffect(() => {
  //   setSearchParams({
  //     page: page,
  //     page_size: 1000,
  //   });
  // }, [page, limit]);

  // useEffect(() => {
  //   dispatch(getAllFoods());
  // }, [searchParams]);

  const loc = location.pathname.slice(10, location.pathname.length);
  const locations = parseInt(loc);

  useEffect(() => {
    setTimeout(() => {
      setElem(item);
    }, 1000);
    window.scrollTo(0, 0);
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
    setDeletes(true);
    return getCart();
  }

  function deleteCart() {
    addProductToCart(item);
    setCheckItem(checkItemInCart(item.id));
    remove();
    setDeletes(false);
    return getCart();
  }

  return elem ? (
    locations == elem.category ? (
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
          {deletes ? (
            <div className="card_position-card" onClick={deleteCart}>
              <img src={deleteCard} alt="card" />
            </div>
          ) : (
            <div className="card_position-card" onClick={clickCart}>
              <img src={card} alt="card" />
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
    ) : null
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
