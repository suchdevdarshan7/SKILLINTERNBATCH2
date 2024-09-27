import React from "react";
import { useParams } from "react-router";
const About = () => {
  const { slug } = useParams();

  return <div>I am about {slug}</div>;
};

export default About;
