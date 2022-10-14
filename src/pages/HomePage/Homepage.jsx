import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import NavigationMenu2 from "../../components/NavigationMenu2/NavigationMenu2";
import Popular from "../../components/Popular/Popular";
import "./HomePage.css";

const Homepage = () => {
  const [view, setView] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setView(true);
    }, 2000);
  }, []);

  return (
    <>
      <div className="navigation_menu">
        <NavigationMenu2 />
      </div>
      {view ? (
        <>
          <Carousel />
          <div className="container">
            <Banner />
          </div>
          <div className="homepage container">
            <Categories />
          </div>
          <Popular />
        </>
      ) : (
        <div className="container svg_spinners">
          <svg
            className="spinner"
            width="40px"
            height="40px"
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
      )}
    </>
  );
};

export default Homepage;
