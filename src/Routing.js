import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Autorization from "./components/Autorization/Autorization";
import Details from "./components/Details/Details";
import Enter from "./components/Enter/Enter";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/HomePage/Homepage";

const Routing = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/autorization" element={<Autorization />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
