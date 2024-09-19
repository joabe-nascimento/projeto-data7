// src/routes/index.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WithSubnavigation from "../components/navigation";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Products from "../pages/Products";

const AppRoutes = () => {
  return (
    <Router>
      <WithSubnavigation />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
