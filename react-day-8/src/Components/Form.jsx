import React, { useState } from "react";
import { useNavigate } from "react-router";

const Form = () => {
  let navigate = useNavigate();
  let [data, setData] = useState({ username: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    navigate("/login");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
