import React from "react";

const Checkout = () => {
  return (
    <div>
      <nav className="w-full text-center py-[1.5vh] border-b border-gray-200">
        <h1 className="text-[2.4vw] font-[font2] uppercase tracking-[1.5px]">
          Rahasya
        </h1>
      </nav>
      <div>
        <div className="checkoutOptions">
          <div className="text-center">
            <h5>Express checkout</h5>
          </div>
        </div>
        <div className="cartItems"></div>
      </div>
    </div>
  );
};

export default Checkout;
