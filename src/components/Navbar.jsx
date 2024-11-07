import React, { useState } from "react";

function Navbar({ textColor = "text-white" }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [options, setOptions] = useState("");

  const toggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleOptions = (e) => {
    setOptions(e.target.innerText);
    setOpenDialog(false);
  };
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
        <a href="">cart</a>

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
    </div>
  );
}

export default Navbar;
