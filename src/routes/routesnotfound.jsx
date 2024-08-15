import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "../pages/NofFound";

const AppRoutesNotFound = () => {
  return (
    <Router>
      {/* <WithSubnavigation /> */}
      <Routes>
        {/* Define a rota "Not Found" como principal, redirecionando todas as outras rotas para ela */}
        <Route path="*" element={<NotFound />} />
        {/* As rotas originais ainda estão definidas, mas não serão alcançadas
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutesNotFound;
