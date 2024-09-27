import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <h1>Amazon</h1>
      <ul>
        <li>
          <NavLink
            to={"/products"}
            onClick={() => navigate(`/products/${loggedIn}`)}>
            {" "}
            Products{" "}
          </NavLink>
        </li>
        <li>{!loggedIn && <NavLink to={"/signIn"}> SignUp</NavLink>}</li>
        <li>{!loggedIn && <NavLink to={"/login"}> Login</NavLink>}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
