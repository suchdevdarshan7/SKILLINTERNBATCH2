import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <SignUp loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </>
  );
};

export default App;
