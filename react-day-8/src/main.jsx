import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import Form from "./Components/Form.jsx";
import Admin from "./Components/Admin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar /> <Home />
      </div>
    ),
  },

  {
    path: "/about/:slug",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/form",
    element: (
      <div>
        <Navbar /> <Form />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Navbar />
        <Admin />
      </div>
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
