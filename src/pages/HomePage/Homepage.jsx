import React from "react";

import Carousel from "../../components/Carousel/Carousel";
import Categories from "../../components/Categories/Categories";
import Popular from "../../components/Popular/Popular";
import "./HomePage.css";

const Homepage = () => {
  return (
    <>
      {/* <Carousel /> */}
      <Categories />
      <Popular />
    </>
  );
};

export default Homepage;
