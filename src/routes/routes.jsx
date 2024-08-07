// src/routes/index.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import WithSubnavigation from "../components/navigation";
import About from "../pages/About";
import Services from "../pages/Services";

const AppRoutes = () => {
  return (
    <Router>
      <WithSubnavigation />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
