import React from "react";
import logo from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <nav>
      <NavLink to={"/"}>About me</NavLink>
      <NavLink to={"/projects"}>Projects</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
