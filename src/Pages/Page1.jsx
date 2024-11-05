import React from "react";

function Page1() {
  return (
    <div className="h-screen relative bg-[url(/images/mainbg.webp)] bg-cover bg-center overflow-hidden">
      <div>
        <img
          className="absolute w-[40vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
          src="/images/mainmodel.webp"
          alt=""
        />
        <h4
          className="absolute top-[65vh] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white uppercase font-[font2] 
        text-[.9vw] tracking-[1.5px] z-[3]"
        >
          explore the debut collection{" "}
          <span className="ml-2">
            <i class="ri-arrow-right-line"></i>
          </span>
        </h4>
      </div>
      <div className="movingTextContainer w-full h-full flex whitespace-nowrap justify-center items-center space-x-[3.75vw]">
        <h1 className="movingText text-white uppercase text-[3.85vw] font-[font3] inline-block">
          niche fine fragrances inspired by modern india
        </h1>
        <h1 className="movingText text-white uppercase text-[3.85vw] font-[font3] inline-block">
          niche fine fragrances inspired by modern india
        </h1>
        <h1 className="movingText text-white uppercase text-[3.85vw] font-[font3] inline-block">
          niche fine fragrances inspired by modern india
        </h1>
      </div>
    </div>
  );
}

export default Page1;
