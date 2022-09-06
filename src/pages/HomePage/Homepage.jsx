import React from "react";
import Banner from "../../components/Banner/Banner";
import CartFoods from "../../components/CartFoods/CartFoods";
import Categories from "../../components/Categories/Categories";
import Popular from "../../components/Popular/Popular";
import "./HomePage.css";

const Homepage = () => {
  return (
    <>
      <div className="container">
        <Banner />
      </div>
      <div className="homepage container">
        <Categories />
      </div>
      <Popular />
    </>
  );
};

export default Homepage;
