import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    console.log(data);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Link to="/">Home</Link>
      Product page
      {products.map((el) => (
        <li
          key={el.id}
          onClick={() => {
            navigate(`${el.id}`);
          }}>
          {el.title}
        </li>
      ))}
    </div>
  );
};

export default ProductPage;
