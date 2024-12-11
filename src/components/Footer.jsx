import React from "react";

function Footer() {
  return (
    <div className="w-full h-[50vh] max-sm:h-[fit-content] px-[3vw] py-[1.5vh] flex flex-col justify-between z-[98]">
      <div className="py-[4vw] flex justify-between items-start">
        <div className="uppercase font-[font3] text-[2.5vw] tracking-[1.5px] flex flex-col gap-[.5vw]">
          <a href={"/collections"}>collection</a>
          <a href="">find us</a>
          <a href="">about</a>
          <a href="">faq</a>
          <a href="">contact us</a>
        </div>

        <div>
          <img
            className="w-[55vw] object-cover"
            src="/svgs/rahasyalogohindi.svg"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-[.5vw] items-end uppercase font-[font3] text-[2.5vw] tracking-[1.5px]">
          <a href="">press</a>
          <a href="">shipping</a>
          <a href="">refund</a>
          <a href="">terms</a>
          <a href="">privacy</a>
          <div className="text-[3vw] flex gap-[1vw]">
            <i class="ri-instagram-line"></i>
            <i class="ri-tiktok-fill"></i>
          </div>
        </div>
      </div>
      <a className="font-[font3] text-[1.8vw]" href="">
        © 2024, RAHASYA
      </a>
    </div>
  );
}

export default Footer;
