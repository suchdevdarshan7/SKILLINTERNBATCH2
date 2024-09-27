import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(function (response) {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      {products?.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </div>
  );
};

export default App;
