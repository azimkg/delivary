// import { Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getAllCategories } from "../../FoodSlice/CategoriesSlice";
import { getAllFoods } from "../../FoodSlice/FoodSlice";

import Breadcrumps from "../Breadcrumps/Breadcrumps";
import Carousel from "../Carousel/Carousel";
import CartFoods from "../CartFoods/CartFoods";
import NavigationMenu3 from "../NavigationMenu2/NavigationMenu3";
import Product from "./Product";
import "./ProductList.css";

const ProductList = () => {
  const foods = useSelector((state) => state.food.foods);
  const pages = useSelector((state) => state.food.pages);
  const category = useSelector((state) => state.categories.category);

  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const loc = location.pathname.slice(10, location.pathname.length);
  const locations = parseInt(loc);

  return (
    <>
      <Carousel />
      <div className="container ">
        <div className="navigation_menu">
          <NavigationMenu3 />
        </div>
        {category.map((item) =>
          item.id == locations ? <Breadcrumps loc={item.category_name} /> : null
        )}

        <div className="product_main-list">
          <div className="product_list-main">
            {foods?.map((item) => (
              <Product item={item} />
            ))}
          </div>
          <div className="product_list-cart">
            <CartFoods />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
