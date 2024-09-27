import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ApiComponent = () => {
  return (
    <div>
      <h1 onClick={() => setCount(count + 1)}>Count: {count}</h1>
      {products.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </div>
  );
};

export default ApiComponent;
