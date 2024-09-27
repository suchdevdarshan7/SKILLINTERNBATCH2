import React, { useState } from "react";

const HomeScreen = () => {
  const [value, setValue] = useState(10);

  function Add() {
    setValue(value + 1);
  }

  function Subtract() {
    setValue(value - 1);
  }

  return (
    <div>
      <button onClick={Add}>Add</button>
      <p>The value is : {value}</p>

      <button onClick={Subtract}>Subtract</button>
    </div>
  );
};

export default HomeScreen;
