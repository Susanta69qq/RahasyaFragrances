import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";

function Account() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleLogout = () => {
    Cookies.remove("authToken");
    navigate("/");
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const token = Cookies.get("authToken");
      setLoading(true);
      try {
        //fetch address of the user
        
        //fetch orders
        const OrderResponse = await axios.get(
          "https://rahasyafragrances.onrender.com/orders/user/orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrders(OrderResponse.data.orders);
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {loading ? (
        <div className="w-full min-h-screen flex items-center justify-center">
          <ClipLoader color="#fff" size={50} />
        </div>
      ) : (
        <div className="main min-h-screen flex items-start justify-between px-[2.75vw] pt-[8vw]">
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
              <h1 className="text-white font-[font4] text-[3vw] mb-[1vw]">
                Order History
              </h1>
              <div className="mt-2">
                {orders.length > 0 ? (
                  orders.map((order, orderIndex) => (
                    <div
                      key={order._id}
                      className="order-item bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg mb-6"
                    >
                      <div className="order-info mb-6">
                        <h3 className="text-white font-[font4] text-[2vw] mb-2">
                          Order #{orderIndex + 1}
                        </h3>
                        <p className="text-gray-400 text-[1.2vw]">
                          <strong>Date:</strong>{" "}
                          {new Date(order.date).toLocaleString()}
                        </p>
                        <p className="text-gray-400 text-[1.2vw]">
                          <strong>Cart Value:</strong> ₹ {order.total}.00
                        </p>
                        <p className="text-gray-400 text-[1.2vw]">
                          <strong>Payment Method:</strong>{" "}
                          {order.paymentMethod.toUpperCase()}
                        </p>
                      </div>

                      <div className="products pt-4 border-t border-gray-700">
                        <h4 className="text-gray-300 font-[font4] text-[1.5vw] mb-4">
                          Products
                        </h4>
                        <ul className="flex flex-wrap gap-6">
                          {order.products.map((product, productIndex) => (
                            <li
                              key={product._id}
                              className="product-item bg-gray-900 p-4 rounded-lg w-[15vw] shadow-md hover:shadow-xl transition-shadow"
                            >
                              <img
                                src={product.product.images[0]}
                                alt={product.product.name}
                                className="w-full h-[12vw] object-cover rounded-lg mb-3"
                              />
                              <p className="text-gray-300 font-[font3] text-[1.1vw]">
                                {productIndex + 1}. {product.product.name}
                              </p>
                              <p className="text-gray-500 text-[1vw]">
                                Quantity: {product.quantity}
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
                <h5 className="text-gray-200 font-[font3] text-[1.2vw]">
                  Name
                </h5>
                <h5 className="text-gray-200 font-[font3] text-[1.2vw]">
                  Country
                </h5>
              </div>
              <h5 className="text-gray-200 font-[font3] text-[1.2vw]">
                Address
              </h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Account;
