import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import NavigationMenu2 from "../../components/NavigationMenu2/NavigationMenu2";
import Popular from "../../components/Popular/Popular";
import "./HomePage.css";

const Homepage = () => {
  return (
    <>
      <div className="navigation_menu">
        <NavigationMenu2 />
      </div>
      <Carousel />
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
