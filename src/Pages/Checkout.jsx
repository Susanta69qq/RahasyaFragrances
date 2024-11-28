import React, { useEffect, useState } from "react";

const Checkout = () => {
  return (
    <div>
      <nav className="w-full text-center py-[1.5vh] border-b border-gray-200">
        <h1 className="text-[2.4vw] font-[font2] uppercase tracking-[1.5px]">
          Rahasya
        </h1>
      </nav>
      <div>
        <div className="checkoutOptions w-1/2 px-[3vw] py-[1.5vh]">
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
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="delivery">
            <h2 className="font-[font2] text-[1.65vw]">Delivery</h2>
          </div>
        </div>
        <div className="cartItems w-1/2"></div>
      </div>
    </div>
  );
};

export default Checkout;
