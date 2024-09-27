import React, { useState } from "react";

const App = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);

  return (
    <div>
      {data.map((el) => (
        <li>{el.title}</li>
      ))}
    </div>
  );
};

export default App;
