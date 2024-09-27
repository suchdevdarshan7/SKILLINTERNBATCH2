import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("I am working  !");
  });

  useEffect(() => {
    alert("I am working in empty dependicies");
  }, []);

  useEffect(() => {
    alert("The count is changed!");
  }, [count]);

  return (
    <div>
      <p>Count is: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Add
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}>
        Subtract
      </button>
    </div>
  );
};

export default Navbar;
