import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      I am Home
      <Link to="/products">GoTo products</Link>
    </div>
  );
};

export default Home;
