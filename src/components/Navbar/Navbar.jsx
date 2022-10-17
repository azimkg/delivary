import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import burgerb from "../../assets/burger.svg";
import burgermobile from "../../assets/burger-mobile.svg";
import closemobile from "../../assets/closemobile.svg";
import unionmobile from "../../assets/unionmobile.png";
import exit from "../../assets/exit.png";
import close from "../../assets/close.svg";
import union from "../../assets/Union.png";
import trash from "../../assets/card.svg";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { useSelector, useDispatch } from "react-redux";
import { editPosts, getAllFoods } from "../../FoodSlice/FoodSlice";
import card from "../../assets/card.svg";
import { authContext } from "../../context/authContext";
import { getAllCategories } from "../../FoodSlice/CategoriesSlice";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const [all, setAll] = useState(false);
  const [burger, setBurger] = useState(false);
  const [features, setFeatures] = useState(false);
  const [search, setSearch] = useState(false);
  const { cart, getCart } = useContext(cartContext);
  const foods = useSelector((state) => state.food.foods);
  const dispatch = useDispatch();
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(foods.id));
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") ? searchParams.get("search") : ""
  );
  const { user, logout } = useContext(authContext);

  const category = useSelector((state) => state.categories.category);

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
  const notifyExit = () => {
    toast.info(`Вы вышли со своего аккаунта`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    getCart();
    dispatch(getAllFoods());
    dispatch(getAllCategories());
  }, []);

  useEffect(() => {
    setSearchParams({
      product_name: searchValue,
    });
  }, [searchValue]);

  useEffect(() => {
    dispatch(getAllFoods());
  }, [searchParams]);

  return (
    <div className="container">
      <ToastContainer />
      <div className="navbar__top" onClick={() => setSearch(false)}>
        <div className="navbar__top-logo">
          <a href="/">
            <img src={logo} width="120" alt="image" />
          </a>
        </div>
        <div className="navbar__mobile">
          <div className="navbar__top-logo-mobile">
            <Link to="/">
              <img src={logo} width="120" alt="image" />
            </Link>
          </div>
          <div
            onClick={() => {
              setBurger(!burger);
            }}
            className="navbar__mobile-burger"
          >
            {burger ? (
              <img src={closemobile} alt="image" />
            ) : (
              <img src={burgermobile} alt="image" />
            )}
          </div>
        </div>
        <div className="navbar__right-mobile">
          <div className="navbar__bottom-user-mobile">
            <Link to="/enter">
              <img
                src={unionmobile}
                alt="image"
                className="navbar__bottom-user-link"
              />
            </Link>
          </div>
          <div className="navbar__bottom-trash-mobile">
            <Link to="/cart">
              <img
                src={trash}
                alt="image"
                className="navbar__bottom-trash-link"
              />
            </Link>
          </div>
          <div className="navbar__bottom-price-mobile">
            <span className="navbar__bottom-priceOfTrash">
              {cart.totalPrice} сом
            </span>
          </div>
        </div>
        <div className="navbar__top-stock">
          <Link to="/sales">
            <p className="navbar__top-stock-link">Акции</p>
          </Link>
          <Link to="/about">
            <p className="navbar__top-stock-link">О нас</p>
          </Link>
          <Link to="/my">
            <p className="navbar__top-stock-link">Личный кабинет</p>
          </Link>
        </div>
      </div>
      <div className="navbar__bottom">
        <div
          onClick={() => {
            setAll(!all);
            setFeatures(false);
          }}
          className="navbar__bottom-burger"
        >
          {all ? (
            <img className="navbar__burger" src={close} alt="image" />
          ) : (
            <img src={burgerb} alt="image" />
          )}
          <p className="navbar__bottom-catalog">Каталог продуктов</p>
        </div>
        <input
          type="search"
          className="navbar__bottom-search"
          placeholder="Поиск"
          onClick={() => setSearch(true)}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="navbar__bottom-right">
          <div className="navbar__bottom-user">
            {JSON.parse(localStorage.getItem("token"))?.access_token ? (
              <img
                src={exit}
                alt="image"
                className="navbar__bottom-user-link exit"
                onClick={() => {
                  logout();
                  notifyExit();
                  navigate("/");
                }}
              />
            ) : (
              <Link to="/enter">
                <img
                  src={union}
                  alt="image"
                  className="navbar__bottom-user-link"
                />
              </Link>
            )}
          </div>
          <div className="navbar__bottom-trash">
            <Link to="/cart">
              <img
                src={trash}
                alt="image"
                className="navbar__bottom-trash-link"
              />
            </Link>
          </div>
          <div className="navbar__bottom-price">
            <span className="navbar__bottom-priceOfTrash">
              {cart.totalPrice} сом
            </span>
          </div>
        </div>
      </div>
      {search ? (
        <div className="search_modal-window">
          <div className="search_modal-close container">
            <h2 className=" result_not-find ">
              Результаты поиска
              <span className="span_value">{searchValue}</span>
            </h2>
            <i onClick={() => setSearch(false)} className="bx bx-x close_x"></i>
          </div>

          <div className="search_modal-product container">
            {foods?.map((item) => (
              <div key={item.id} className="popular_card">
                <img
                  src={item.cover_pic}
                  alt="card image"
                  className="image_cards"
                  onClick={() => {
                    dispatch(editPosts(item));
                    navigate(`/product/${item.category}/details/${item.id}`);
                    setSearch(false);
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
                  <div
                    className="card_position-card"
                    onClick={() => {
                      addProductToCart(item);
                      setCheckItem(checkItemInCart(item.id));
                      getCart();
                      notify();
                    }}
                  >
                    <img src={card} alt="card" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {burger ? (
        <div
          className="all__burger"
          onClick={() => {
            setBurger(false);
          }}
        >
          <div className="burger__block-content">
            <div className="burger__block">
              <p
                className="burger__block-link"
                onClick={() => navigate("/sales")}
              >
                Акции
              </p>
            </div>
            <div className="burger__block">
              <p className="burger__block-link">График доставки</p>
            </div>
            <div className="burger__block">
              <p
                className="burger__block-link"
                onClick={() => navigate("/about")}
              >
                О компании
              </p>
            </div>
            <div className="burger__number-block">
              <p className="burger__number">+996778825885</p>
              <p className="burger__number">+996778825885</p>
            </div>
            {JSON.parse(localStorage.getItem("token"))?.access_token ? (
              <div
                className="burger__number-button"
                onClick={() => {
                  logout();
                  notifyExit();
                  navigate("/");
                }}
              >
                <button>Выйти из личного кабинета</button>
              </div>
            ) : (
              <div
                className="burger__number-button"
                onClick={() => navigate("/enter")}
              >
                <button>Войти в личный кабинет</button>
              </div>
            )}
          </div>
        </div>
      ) : null}
      {all ? (
        <div className="all__categories grow">
          {category?.map((item) => (
            <Link to={`/category/${item.id}/product`}>
              <div
                key={item.id}
                className="all__categories-link"
                onClick={() => {
                  setAll(false);
                }}
              >
                <p>{item.category_name}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
