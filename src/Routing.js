import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Autorization from "./components/Autorization/Autorization";
import Carousel from "./components/Carousel/Carousel";
import Enter from "./components/Enter/Enter";
import Navbar from "./components/Navbar/Navbar";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
// import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Homepage from "./pages/HomePage/Homepage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Carousel />
      <AboutUs />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/autorization" element={<Autorization />} />
        <Route path="/nav" element={<NavigationMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
