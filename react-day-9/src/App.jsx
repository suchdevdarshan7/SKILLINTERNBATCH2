import React from "react";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/CounterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatcher = useDispatch();

  return (
    <div>
      <Navbar count={count} />
      Count: {count}
      <button onClick={() => dispatcher(increment())}></button>
    </div>
  );
};

export default App;
