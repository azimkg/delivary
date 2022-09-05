import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Autorization from "./components/Autorization/Autorization";
import Details from "./components/Details/Details";
import Carousel from "./components/Carousel/Carousel";
import Enter from "./components/Enter/Enter";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AdminPage from "./pages/AdminPage/AdminPage";
import Homepage from "./pages/HomePage/Homepage";
import Cart from "./components/Cart/Cart";
import NavigationMenu2 from "./components/NavigationMenu2/NavigationMenu2";
import MyRoom from "./components/MyRoom/MyRoom";
import ProductList from "./components/ProductsList/ProductList";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Carousel /> */}
      <div className="navigation_menu">
        <NavigationMenu2 />
      </div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/autorization" element={<Autorization />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/privateRoute" element={<AdminPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/my" element={<MyRoom/>} />
        <Route path="/product" element={<ProductList />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
