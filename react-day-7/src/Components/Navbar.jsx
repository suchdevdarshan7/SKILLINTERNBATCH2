import React, { useContext } from "react";
import Button from "./Button";
import "./Navbar.css";
import { setterFunction } from "../App";

const Navbar = ({ setter }) => {
  const setCount = useContext(setterFunction);
  return (
    <nav>
      <h2>Welcome to my website</h2>
      <Button>Click me</Button>
      <button onClick={() => setCount((c) => c + 1)}>Increase count</button>
    </nav>
  );
};

export default Navbar;
