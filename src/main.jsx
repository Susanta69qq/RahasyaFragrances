import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import LoginPage from "./Pages/LoginPage.jsx";
import SmoothScroll from "./components/SmoothScroller";
import RegisterPage from "./Pages/RegisterPage.jsx";
import Products from "./Pages/Products.jsx";
import Product from "./Pages/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <RegisterPage />
  },
  {
    path: "/collections",
    element: <Products />
  },
  {
    path: "/products/:name",
    element: <Product />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScroll />
    <RouterProvider router={router} />
  </StrictMode>
);
