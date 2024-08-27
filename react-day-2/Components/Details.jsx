import React from "react";
import Page from "./Page";
import Button from "./Button";

let details = [
  {
    id: 1,
    q: "What is web development   0",
    a: "Web development is creating web apps 0",
  },
  {
    id: 2,
    q: "What is web development 1",
    a: "Web development is creating web apps 1",
  },
  {
    id: 3,
    q: "What is web development 2 ",
    a: "Web development is creating web apps 2",
  },
  {
    id: 4,
    q: "What is web development  3 ",
    a: "Web development is creating web apps 3",
  },
];

const Details = () => {
  return (
    <div>
      {details.map((el) => (
        <Page a={el.a} q={el.q} key={el.id} />
      ))}
      <Button>Click To Submit</Button>
    </div>
  );
};

export default Details;
