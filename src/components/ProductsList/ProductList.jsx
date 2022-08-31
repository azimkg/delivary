import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllFoods } from "../../FoodSlice/FoodSlice";

import Breadcrumps from "../Breadcrumps/Breadcrumps";
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
      <Breadcrumps />
      <div className="product_list-main">
        {foods.map((item) => (
          <Product item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
