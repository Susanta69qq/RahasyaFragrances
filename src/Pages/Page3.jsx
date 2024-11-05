import React from "react";

function Page3() {
  return (
    <div className="h-screen relative bg-[url(/images/chapter1.webp)] bg-cover bg-center">
      <div className="w-full h-full bg-black opacity-20"></div>
      <div className="absolute bottom-0 left-0 p-[3.2vw] text-white flex flex-col gap-[1.5vw]">
        <h1 className="text-[3.5vw] leading-[4.5vw] font-[font4]">
          Chapter One
        </h1>
        <p className="text-[.95vw] font-[font2] ">
          An homage to the neighbourhood Indian bookstore, where rich scents of{" "}
          <br />
          aged books and fresh ink create a unique atmosphere. Infused with{" "}
          <br />
          sandalwood, leather, tobacco, cardamom and delicate floral notes, this{" "}
          <br />
          fragrance captures the charm of these analog havens.
        </p>
        <a
          className="uppercase text-[.95vw] font-[font3] tracking-[1.5px]"
          href=""
        >
          discover{" "}
          <span className="ml-2">
            <i class="ri-arrow-right-line"></i>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Page3;
