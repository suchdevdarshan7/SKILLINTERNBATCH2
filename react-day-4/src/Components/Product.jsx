import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});

  async function getProducts() {
    const response = await fetch(`https://fakestoreapi.com/products/${slug}`);
    const data = await response.json();
    setProduct(data);
    console.log(data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      I am product
      <h1>{product.title}</h1>
      <img src={product.image} alt="" />
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
