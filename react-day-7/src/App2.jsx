import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { createContext } from "react";

export const setterFunction = createContext(null);

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <setterFunction.Provider value={setCount}>
      <div>
        <Navbar />
        <h1>Count : {count}</h1>
      </div>
    </setterFunction.Provider>
  );
};

export default App;
