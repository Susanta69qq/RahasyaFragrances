import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  selectCartTotal,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Navbar({ textColor = "text-white" }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [options, setOptions] = useState("");
  const [openCart, setOpenCart] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const cartTotal = useSelector(selectCartTotal);

  const toggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleOptions = (e) => {
    setOptions(e.target.innerText);
    setOpenDialog(false);
  };

  //remove items from cart
  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart({ _id: itemId }));
  };

  useEffect(() => {
    if (openCart) {
      // Disable scroll and show overlay when cart is open
      document.body.style.overflow = "hidden";
      document.body.classList.add("overlay");
    } else {
      // Enable scroll and remove overlay when cart is closed
      document.body.style.overflow = "auto";
      document.body.classList.remove("overlay");
    }

    // Cleanup: reset when the component is unmounted or cart is closed
    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("overlay");
    };
  }, [openCart]);

  return (
    <div className="fixed w-full px-[2.75vw] py-[.5vw] z-[99] flex justify-between items-center">
      <div
        className={`${textColor} flex gap-[3.5vw] uppercase font-[font3] text-[1vw]`}
      >
        <a href={"/collections"}>collection</a>
        <a href="">secret</a>
        <a href="">about</a>
        <a href="">faq</a>
      </div>
      <div>
        <a href={"/"}>
          <h2 className={`${textColor} uppercase font-[font4] text-[3vw]`}>
            rahasya
          </h2>
        </a>
      </div>
      <div
        className={`${textColor} uppercase font-[font3] text-[1vw] flex items-center gap-[2vw] 
      transition-all duration-200`}
      >
        <a
          className="dialog w-[15vw] cursor-pointer"
          onClick={() => toggleDialog()}
        >
          {options ? options : "india | inr ₹"}
          <span>
            {openDialog ? (
              <i class="ri-arrow-up-s-line"></i>
            ) : (
              <i class="ri-arrow-down-s-line"></i>
            )}
          </span>
        </a>
        <a href="">search</a>
        <a href="/login">log in</a>
        <a className="cursor-pointer" onClick={() => setOpenCart(true)}>
          cart ({cartItems.length})
        </a>

        {openDialog && (
          <div
            className={`absolute top-[70%] w-[200px] max-h-[150px] bg-gray-800 ${textColor} rounded shadow-lg overflow-y-auto transition-opacity duration-200`}
          >
            <ul className="py-2">
              <li
                onClick={handleOptions}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                australia | aud $
              </li>
              <li
                onClick={handleOptions}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                hong kong | hkd $
              </li>
              <li
                onClick={handleOptions}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                india | inr ₹
              </li>
              <li
                onClick={handleOptions}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                malaysia | myr RM
              </li>
              <li
                onClick={handleOptions}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                singapore | sgd $
              </li>
              <li
                onClick={handleOptions}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                united kingdom | gbp £
              </li>
              <li
                onClick={handleOptions}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                united states | usd $
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        className={`absolute top-0 ${
          openCart ? "right-0" : "right-[-100%]"
        } w-[30vw] h-screen bg-white px-[1vw] py-[.65vw] text-black cursor-pointer transition-all duration-300`}
      >
        <div className="w-full flex justify-end">
          <i
            onClick={() => setOpenCart(false)}
            className="ri-close-large-line text-black text-[2vw] font-thin"
          ></i>
        </div>
        <div className="w-full flex flex-col items-center overflow-auto max-h-[90vh] px-[1vw]">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center">
              <h1 className="text-[2.5vw] font-[font4]">Your cart is empty</h1>
              <a className="mt-[2vw]" href={"/collections"}>
                <button className="bg-black text-white uppercase font-[font1] text-[1vw] px-[.5vw] py-[.35vw] tracking-[1.5px]">
                  continue shopping
                </button>
              </a>
              <div className="mt-[4vw] flex flex-col gap-[.65vw]">
                <h2 className="text-[1.5vw] font-[font2]">Have an account?</h2>
                <h4 className="text-[.95vw] font-[font3]">
                  <a href={"/login"}>LOG IN</a> to check out faster
                </h4>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <h1 className="text-[2vw] font-[font4]">Your cart</h1>
              <div className="w-full flex justify-between mt-[1.5vw] font-[font2] text-[.95vw] tracking-[1.5px]">
                <h3>PRODUCT</h3>
                <h3>TOTAL</h3>
              </div>
              <div className="w-full h-[.5px] bg-gray-400 mt-[1.5vw]"></div>
              <div className="cartItems flex flex-col gap-[1.5vw]">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center"
                  >
                    {item.images && (
                      <img className="w-[7.5vw]" src={item.images[0]} alt="" />
                    )}
                    <div className="flex flex-col gap-[.5vw]">
                      <h5 className="font-[font3] text-[.95vw]">{item.name}</h5>
                      <p className="font-[font3] text-[.95vw]">
                        Rs. {item.price}.00
                      </p>
                      <div className="flex gap-[2.5vw] border border-gray-400 p-[.5vw] w-[fit-content]">
                        <i
                          onClick={() =>
                            dispatch(decreaseQuantity({ _id: item._id }))
                          }
                          class="ri-subtract-fill"
                        ></i>
                        <span>{item.quantity}</span>
                        <i
                          onClick={() => dispatch(addToCart(item))}
                          class="ri-add-fill"
                        ></i>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[.5vw]">
                      <p className="font-[font3] text-[1.1vw]">
                        Rs. {item.total}.00
                      </p>
                      <i
                        onClick={() =>
                          dispatch(removeFromCart({ _id: item._id }))
                        }
                        className="ri-delete-bin-2-line text-[1.5vw]"
                      ></i>
                    </div>
                  </div>
                ))}
                <div className="border-t-[1px] border-gray-400 py-[.5vw] mb-[1.5vw]">
                  <div className="flex justify-between items-center">
                    <h2 className="font-[font3] text-[1.1vw]">
                      Estimated Total
                    </h2>
                    <p className="font-[font3] text-[1.1vw]">
                      Rs. {cartTotal}.00
                    </p>
                  </div>
                  <p className="font-[font3] text-[.95vw] mt-[.5vw]">
                    Taxes, discounts and shipping calculated at checkout.
                  </p>
                  <button
                    onClick={() => navigate("/checkout")}
                    className="w-full bg-black text-white uppercase text-[1vw] font-[font1] 
                  tracking-[1.5px] py-[.5vw] mt-[1.5vw]"
                  >
                    check out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
