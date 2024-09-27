import React, { useState } from "react";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <p>Your password is 123456</p>}
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
};

export default App;

//! Statefull components are class based components which were having state as a built in object

//! Stateleff are components which were not having state:

//! AFter the introduction of hooks functional components also were called as statefull components after 16.8
