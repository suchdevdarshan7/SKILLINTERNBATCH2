import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../store/CounterSlice";

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatcher = useDispatch();

  return (
    <div>
      Navbar : {count}
      <button onClick={() => dispatcher(decrement())}>Dec</button>
    </div>
  );
};

export default Navbar;
