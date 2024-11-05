import React from "react";

function Page5() {
  return (
    <div className="h-screen relative bg-[url(/images/oud.webp)] bg-cover">
      <div className="w-full h-full bg-black opacity-20"></div>
      <div className="absolute top-[5vw] right-0 p-[3.2vw] text-white flex flex-col gap-[1.5vw]">
        <h1 className="text-[3.5vw] leading-[4.5vw] font-[font4]">
          Oud Mangifera
        </h1>
        <p className="text-[.95vw] font-[font2] ">
          For many in India, mangoes are synonymous with lazy summer days. We
          aim <br />
          to capture the richness of the royal mango, and pay tribute to its
          role as the <br />
          king of fruits through a unique blend of davana, mango, geranium,{" "}
          <br />
          blackcurrant, rose, leather, incense and oud.
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

export default Page5;
