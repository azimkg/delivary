import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage/AdminPage";
import Homepage from "./pages/HomePage/Homepage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<AdminPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
