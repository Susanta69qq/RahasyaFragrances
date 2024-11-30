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
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Checkout from "./Pages/Checkout.jsx";
import Account from "./Pages/Account.jsx";

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
    element: <RegisterPage />,
  },
  {
    path: "/collections",
    element: <Products />,
  },
  {
    path: "/products/:name",
    element: <Product />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/account",
    element: <Account />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScroll>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </SmoothScroll>
  </StrictMode>
);
