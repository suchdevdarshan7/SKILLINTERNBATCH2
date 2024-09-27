import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState(0);

  function handleClick() {
    setState((count) => count + 1);
    setState((count) => count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <h1>Count: {state}</h1>
    </div>
  );
};

export default App;
