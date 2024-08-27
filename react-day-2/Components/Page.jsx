import React from "react";

const Page = ({ q, a }) => {
  return (
    <div>
      <h1>Question : {q}</h1>
      <p>Answer: {a}</p>
    </div>
  );
};

export default Page;
