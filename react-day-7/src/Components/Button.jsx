import React, { useContext } from "react";
import { setterFunction } from "../App";

const Button = ({ children }) => {
  const setCount = useContext(setterFunction);

  return <button onClick={() => setCount((c) => c + 1)}>{children}</button>;
};

export default Button;
