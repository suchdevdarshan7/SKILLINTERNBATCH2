import React from "react";
import "./Navbar.css";
import Button from "./Button";

import { navstyles } from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navstyles}>
      <h1>Website</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Carrers</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <Button className={"reset"}>Click Me</Button>
    </nav>
  );
};

export default Navbar;
