import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Account() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const handleLogout = () => {
    Cookies.remove("authToken");
    navigate("/");
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const token = Cookies.get("authToken");
      console.log(token);
      try {
        const response = await axios.get(
          "https://rahasyafragrances.onrender.com/orders/user/orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrders(response.data.orders);
      } catch (error) {
        console.log("Error fetching orders: ", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="h-screen bg-black">
      <Navbar />
      <div className="main h-full flex items-center justify-between px-[2.75vw]">
        <div className="left flex flex-col gap-[2.5vw]">
          <div className="account">
            <h1 className="text-white font-[font4] text-[4vw]">Account</h1>
            <span className="flex items-center gap-[1vw]">
              <i className="ri-user-3-line text-gray-400 text-[1.4vw]"></i>
              <a
                onClick={handleLogout}
                className="text-gray-400 font-[font3] text-[1vw] uppercase tracking-[1.5px] cursor-pointer"
              >
                log out
              </a>
            </span>
          </div>
          <div className="orders">
            <h1 className="text-white font-[font4] text-[3vw]">
              Order history
            </h1>
            <div className="mt-2">
              {orders.length > 0 ? (
                orders.map((order, orderIndex) => (
                  <div
                    key={order._id}
                    className="order-item text-gray-200 font-[font3] text-[1.2vw] mb-4"
                  >
                    <h3>Order #{order._id}</h3>
                    <p>Total: ${order.total / 100}</p>
                    <p>Status: {order.status}</p>
                    <p>Payment Method: {order.paymentMethod.toUpperCase()}</p>
                    <p>Date: {new Date(order.date).toLocaleString()}</p>

                    <div className="products">
                      <h4>Products:</h4>
                      <ul className="ml-4">
                        {order.products.map((product, productIndex) => (
                          <li key={product._id} className="product-item">
                            <p>
                              Product ID: {product.product} | Quantity:{" "}
                              {product.quantity}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-200 font-[font3] text-[1.2vw]">
                  You haven't made any orders yet.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="accountDetails flex flex-col gap-[.75vw]">
            <h1 className="text-white font-[font4] text-[3.5vw]">
              Account details
            </h1>
            <div>
              <h5 className="text-gray-200 font-[font3] text-[1.2vw]">Name</h5>
              <h5 className="text-gray-200 font-[font3] text-[1.2vw]">
                Country
              </h5>
            </div>
            <h5 className="text-gray-200 font-[font3] text-[1.2vw]">Address</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
