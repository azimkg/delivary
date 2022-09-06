import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllFoods } from "../../FoodSlice/FoodSlice";

import Breadcrumps from "../Breadcrumps/Breadcrumps";
import CartFoods from "../CartFoods/CartFoods";
import NavigationMenu3 from "../NavigationMenu2/NavigationMenu3";
import Product from "./Product";
import "./ProductList.css";

const ProductList = () => {
  const foods = useSelector((state) => state.food.foods);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFoods());
  }, []);

  return (
    <div className="container ">
      <div className="navigation_menu">
        <NavigationMenu3 />
      </div>
      <Breadcrumps />
      <div className="product_main-list">
        <div className="product_list-main">
          {foods.map((item) => (
            <Product item={item} />
          ))}
        </div>
        <div className="product_list-cart">
          <CartFoods />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
