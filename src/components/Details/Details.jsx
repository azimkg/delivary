import React, { useEffect, useState } from "react";
import "./Details.css";
import vector from "../../assets/Vector.png";
import Breadcrumps from "../Breadcrumps/Breadcrumps";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Skeleton, Space } from "antd";
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getAllCategories } from "../../FoodSlice/CategoriesSlice";
import NavigationMenu3 from "../NavigationMenu2/NavigationMenu3";

const Details = () => {
  const edit = useSelector((state) => state.food.edit);
  const category = useSelector((state) => state.categories.category);

  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const [edited, setEdited] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setEdited(edit);
    }, 1000);
  }, [edit]);
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

  const loc = location.pathname.slice(9, location.pathname.length);
  const locations = parseInt(loc);
  console.log(loc);

  const { addProductToCart, checkItemInCart, getCart } =
    useContext(cartContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(edited));

  console.log(edited);
  return edited ? (
    <div className="container">
      <div className="navigation_menu">
        <NavigationMenu3 />
      </div>
      {category?.map((item) =>
        item.id == locations ? (
          <Breadcrumps loc={item.category_name} item={edited.product_name} />
        ) : null
      )}
      <div className="details">
        <div className="details__block">
          <img src={edited.cover_pic} alt="image" className="details__photos" />
        </div>
        <div className="details__block-right">
          <h1 className="details__right-title">{edited.product_name}</h1>
          <p className="details__right-description">{edited.description}</p>
          <div className="details__right-footer">
            <div className="details__right-price">
              <span className="details__right-cost">{edited.price} сом</span>
            </div>
            <div className="details__cart-block">
              <img src={vector} alt="image" />
              <button
                className="details__cart"
                onClick={() => {
                  addProductToCart(edited);
                  checkItemInCart(edited.id);
                  getCart();
                  notify();
                }}
              >
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  ) : (
    <>
      <div className="container space_none">
        <Breadcrumps />
        <div className="navigation_menu">
          <NavigationMenu3 />
        </div>
        <div className="details">
          <div className="details__block">
            <Space>
              <Skeleton.Button active={active} className="details__photoser" />
            </Space>
          </div>
          <div className="skeleton_block">
            <Space>
              <Skeleton.Button active={active} className="text12" />
            </Space>
            <Space>
              <Skeleton.Button active={active} className="text12" />
            </Space>
          </div>
        </div>
      </div>
      <div className="container svg_spinner">
        <svg
          className="spinner"
          width="25px"
          height="25px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            class="path"
            fill="none"
            stroke-width="6"
            stroke-linecap="round"
            cx="33"
            cy="33"
            r="30"
          ></circle>
        </svg>
      </div>
    </>
  );
};

export default Details;
