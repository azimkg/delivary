import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Autorization from "./components/Autorization/Autorization";
import Details from "./components/Details/Details";
import Carousel from "./components/Carousel/Carousel";
import Enter from "./components/Enter/Enter";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AdminPage from "./pages/AdminPage/AdminPage";
import Homepage from "./pages/HomePage/Homepage";
import Cart from "./components/Cart/Cart";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Carousel />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/autorization" element={<Autorization />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/privateRoute" element={<AdminPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
