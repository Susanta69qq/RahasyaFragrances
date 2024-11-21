import React, { useState, useEffect } from "react";

function Navbar({ textColor = "text-white" }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [options, setOptions] = useState("");
  const [openCart, setOpenCart] = useState(false);

  const toggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleOptions = (e) => {
    setOptions(e.target.innerText);
    setOpenDialog(false);
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
          cart
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
        <div className="w-full h-full flex justify-center items-center">
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
        </div>
      </div>
    </div>
  );
}

export default Navbar;
