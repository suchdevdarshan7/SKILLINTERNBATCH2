import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

const Products = () => {
  console.log(useParams());

  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    console.log(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return <div>{}</div>;
};

export default Products;
