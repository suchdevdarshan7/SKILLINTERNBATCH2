import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Components/SignUp.jsx";
import Navbar from "./Components/Navbar.jsx";
import Login from "./Components/Login.jsx";
import Products from "./Components/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signIn",
    element: (
      <>
        <Navbar />
        <SignUp />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar /> <Login />
      </>
    ),
  },
  {
    path: "/products",
    element: (
      <>
        <Navbar /> <Products />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
