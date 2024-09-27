import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./Components/ProductPage.jsx";
import Home from "./Components/Home.jsx";
import Product from "./Components/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products/:slug",
    element: <Product />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </>
);
