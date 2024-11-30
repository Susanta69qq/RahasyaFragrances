import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../redux/cartSlice";
import axios from "axios";
import Cookies from "js-cookie";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart);
  const cartTotal = useSelector(selectCartTotal);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("India");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("West Bengal");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [isAddressSaved, setIsAddressSaved] = useState(false);

  const token = Cookies.get("authToken");

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleAddressSave = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("You need to be logged in to be able to save your address");
      return;
    }

    const addressData = {
      firstName,
      lastName,
      address,
      city,
      country,
      postalCode,
      phone,
    };

    try {
      const response = await axios.post(
        "https://rahasyafragrances.onrender.com/address/add",
        addressData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Address saved successfully");
        setIsAddressSaved(true);
      }
    } catch (error) {
      console.error("Error saving address: ", error.response || error);
      alert("Failed to save the address.");
    }
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("You need to be logged in to be able to place an order");
      return;
    }

    //collect the orderData
    const orderData = {
      products: cartItems.map((item) => ({
        product: item._id,
        quantity: item.quantity,
      })),
      total: cartTotal,
      paymentMethod,
    };

    if (!isAddressSaved) {
      alert("Please save your address before placing the order.");
      return;
    }

    //The api request to place the order
    try {
      const response = await axios.post(
        "https://rahasyafragrances.onrender.com/orders/order",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Your order has been placed successfully!");
      }
    } catch (error) {
      console.error("Error placing the order: ", error.response || error);
      alert("Failed to place your order");
    }
  };

  return (
    <div>
      {/*Navigation*/}
      <nav className="w-full text-center py-[1.5vh] border-b border-gray-200">
        <a href={"/"}>
          <h1 className="text-[2.4vw] font-[font2] uppercase tracking-[1.5px]">
            Rahasya
          </h1>
        </a>
      </nav>
      {/*Checkout Form*/}
      <div className="flex">
        <div className="checkoutOptions w-1/2 px-[3vw] py-[1.5vh]">
          {/*Contact Section*/}
          <div className="contact">
            <div className=" w-full flex items-center justify-between">
              <h2 className="font-[font2] text-[1.65vw]">Contact</h2>
              <a className="font-[font2] text-[.95vw]" href={"/login"}>
                Log in
              </a>
            </div>
            <input
              className="w-full border border-gray-200 mt-[1.5vh] rounded-[.5vw] px-[1vw] py-[2vh] 
            placeholder:text-[.95vw] placeholder:font-[font3] placeholder:text-gray-500 text-[1.1vw] font-[font3]"
              type="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>

          {/*Delivery Section*/}
          <div className="delivery flex flex-col gap-[1vw] mt-[2vh]">
            <h2 className="font-[font2] text-[1.65vw]">Delivery</h2>
            <select
              className="w-full border border-gray-200 px-[1vw] py-[1.5vh] rounded-[.5vw] font-[font3] text-[1.1vw]"
              name="country/region"
              id="country/region"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option className="font-[font3] text-[1vw]" value="Australia">
                Australia
              </option>
              <option className="font-[font3] text-[1vw]" value="Hong Kong SAR">
                Hong Kong SAR
              </option>
              <option className="font-[font3] text-[1vw]" value="India">
                India
              </option>
              <option className="font-[font3] text-[1vw]" value="Singapore">
                Singapore
              </option>
              <option
                className="font-[font3] text-[1vw]"
                value="United Kingdom"
              >
                United Kingdom
              </option>
              <option className="font-[font3] text-[1vw]" value="United States">
                United States
              </option>
            </select>
          </div>

          {/*Address Details Section*/}
          <div className="details">
            <div className="w-full flex gap-[2vw]">
              <input
                className="w-[48%] border border-gray-200 mt-[1.5vh] rounded-[.5vw] px-[1vw] py-[2vh]"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
              />
              <input
                className="w-[48%] border border-gray-200 mt-[1.5vh] rounded-[.5vw] px-[1vw] py-[2vh]"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="address">
              <input
                className="w-full border border-gray-200 mt-[1.5vh] rounded-[.5vw] px-[1vw] py-[2vh]"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                required
              />
            </div>
            <div className="addressDetails w-full flex gap-[2vw]">
              <input
                className="w-[31%] border border-gray-200 mt-[1.5vh] rounded-[.5vw] px-[1vw] py-[2vh]"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                required
              />
              <select
                defaultValue="West Bengal"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-[31%] border border-gray-200 mt-[1.5vh] rounded-[.5vw] px-[1vw] py-[2vh]"
              >
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="West Bengal">West Bengal</option>
              </select>
              <input
                className="w-[31%] border border-gray-200 mt-[1.5vh] rounded-[.5vw] px-[1vw] py-[2vh]"
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="PIN code"
                required
              />
            </div>
            <div>
              <input
                className="w-full border border-gray-200 mt-[1.5vh] rounded-[.5vw] px-[1vw] py-[2vh]"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleAddressSave}
              className="w-full bg-black text-white py-[1.5vh] font-[font1] mt-[4vh]"
            >
              Save Address
            </button>
          </div>

          {/* Payment Method */}
          <div className="payment mt-[2vh]">
            <h2 className="text-[1.65vw] font-[font2]">Payment</h2>
            <p className="text-[1vw] text-gray-500">
              All transactions are secure and encrypted.
            </p>
            <div className="w-full border border-gray-200 mt-[1.5vh] rounded-[.5vw] px-[1vw] py-[2vh] flex justify-between">
              <div className="flex gap-[1vw] items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={"creditCard"}
                  checked={paymentMethod === "creditCard"}
                  onChange={handlePaymentChange}
                />
                <h4 className="text-[1.1vw] font-[font2]">Credit Card</h4>
              </div>
              <div className="images flex items-center gap-[1vw]">
                <img
                  src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg"
                  alt=""
                />
                <img
                  src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/mastercard.1c4_lyMp.svg"
                  alt=""
                />
                <img
                  src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/amex.Csr7hRoy.svg"
                  alt=""
                />
                <img
                  src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/unionpay.8M-Boq_z.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="cardDetails w-full bg-gray-300 p-[1vw] flex flex-col gap-[1vw] rounded-[.5vw]">
            <input
              className="bg-gray-300 w-full px-[1vw] py-[.5vh] border border-gray-400 
              placeholder:text-black placeholder:font-[font1]"
              type="text"
              placeholder="Card Number"
            />
            <div className="flex gap-[2vw]">
              <input
                className="bg-gray-300 w-[48%] px-[1vw] py-[.5vh] border border-gray-400 
                placeholder:text-black placeholder:font-[font1]"
                type="text"
                placeholder="Expiry Date (MM/YY)"
              />
              <input
                className="bg-gray-300 w-[48%] px-[1vw] py-[.5vh] border border-gray-400
                placeholder:text-black placeholder:font-[font1]"
                type="text"
                placeholder="CVV (Security Code)"
              />
            </div>
            <input
              className="bg-gray-300 w-full px-[1vw] py-[.5vh] border border-gray-400
              placeholder:text-black placeholder:font-[font1]"
              type="text"
              placeholder="Name on Card"
            />
          </div>
          <div className="w-full border border-gray-200 mt-[1.5vh] rounded-[.5vw] px-[1vw] py-[2vh] flex gap-[1vw]">
            <input
              type="radio"
              name="paymentMethod"
              value={"cod"}
              checked={paymentMethod === "cod"}
              onChange={handlePaymentChange}
            />
            <h4 className="text-[1.1vw] font-[font2]">Pay on Delivery</h4>
          </div>
          <button
            type="submit"
            onClick={handleOrderSubmit}
            className="w-full bg-black text-white py-[1.5vh] font-[font1] mt-[4vh]"
          >
            {paymentMethod === "cod" ? "Order Now" : "Pay Now"}
          </button>
          <p className="text-[.9vw] mt-[2vh]">
            Your info will be saved to a Shop account. By continuing, you agree
            to Shop’s Terms of Service and acknowledge the Privacy Policy.
          </p>
        </div>
        <div className="cartItems w-1/2 flex flex-col gap-[1vw] py-[2vw] px-[3.5vw]">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="w-[80%] flex items-center justify-between"
            >
              <div className="flex items-center gap-[1vw]">
                {item.images && (
                  <div className="relative">
                    <img
                      className="w-[5.5vw] border"
                      src={item.images[0]}
                      alt=""
                    />
                    <div
                      className="absolute top-[-.6vw] right-[-.8vw] w-[1.5vw] h-[1.5vw] rounded-full bg-[#707070] 
                    flex justify-center items-center"
                    >
                      <p className="text-[.8vw] text-white">{item.quantity}</p>
                    </div>
                  </div>
                )}
                <h3 className="text-[1vw] font-[font3]">{item.name}</h3>
              </div>
              <p className="text-[1vw] font-[font3]">Rs. {item.price}.00</p>
            </div>
          ))}
          <div className="w-[80%] flex gap-[1vw]">
            <input
              className="w-[90%] border border-gray-200 mt-[1.5vh] rounded-[.5vw] px-[1vw] py-[2vh]"
              type="text"
              placeholder="Discount code or gift card"
            />
            <button className="px-[1vw] py-[.5vh] bg-black text-white rounded-[.5vw] text-[1vw] font-[font3]">
              Apply
            </button>
          </div>
          <div className="w-[80%] flex items-center justify-between mt-[2vh]">
            <h1 className="text-[1.5vw] font-[font1]">Total</h1>
            <p>
              <span className="text-[.9vw] text-gray-400">INR</span>{" "}
              <span className="text-[1.5vw] font-[font1]">₹{cartTotal}.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
