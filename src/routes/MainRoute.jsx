import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from '../pages/Projects'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route />
    </Routes>
  );
};

export default MainRoutes;
