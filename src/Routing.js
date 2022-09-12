import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Autorization from "./components/Autorization/Autorization";
import Details from "./components/Details/Details";
import Enter from "./components/Enter/Enter";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/HomePage/Homepage";
import Cart from "./components/Cart/Cart";
import MyRoom from "./components/MyRoom/MyRoom";
import ProductList from "./components/ProductsList/ProductList";
import NavigationMenu2 from "./components/NavigationMenu2/NavigationMenu2";
import SalesProductPages from "./pages/SalesProductPage/SalesProductPages";
import AutoDone from "./components/AutoDone/AutoDone";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/autorization" element={<Autorization />} />
        <Route path="/product/:id/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/my" element={<MyRoom />} />
        <Route path="/category/:id/product" element={<ProductList />} />
        <Route path="/sales" element={<SalesProductPages />} />
        <Route path="/autodone" element={<AutoDone />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
