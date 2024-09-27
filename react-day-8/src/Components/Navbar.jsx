import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/form">Contact Us</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </nav>
  );
};

export default Navbar;
