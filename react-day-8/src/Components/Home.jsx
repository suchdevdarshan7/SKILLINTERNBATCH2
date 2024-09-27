import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      I am home
      <Link to={"/form"}>Contact Us</Link>
    </div>
  );
};

export default Home;
