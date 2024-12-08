import React, { useEffect, useState } from "react";

function Page1() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileView = (
    <div className="h-screen relative bg-[url(/images/mainbg.webp)] bg-cover bg-center overflow-hidden">
      <div>
        <img
          className="absolute w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
          src="https://rahasyafragrances.com/cdn/shop/files/Final_Green_Nails_-_Mobile_Solo_1024x1024.png?v=1728549246"
          alt=""
        />
        <h4
          className="absolute top-[65vh] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white uppercase font-[font2] 
      text-[3.75vw] mt-[20vw] tracking-[1.5px] z-[4] text-center"
        >
          explore the debut collection{" "}
          <span className="ml-2">
            <i class="ri-arrow-right-line"></i>
          </span>
        </h4>
      </div>
      <div className="movingTextContainer absolute z-[3] w-full h-full flex whitespace-nowrap justify-center items-center space-x-[3.75vw]">
        <h1 className="movingText text-white uppercase text-[12vw] font-[font3] inline-block">
          niche fine fragrances inspired by modern india
        </h1>
        <h1 className="movingText text-white uppercase text-[12vw] font-[font3] inline-block">
          niche fine fragrances inspired by modern india
        </h1>
        <h1 className="movingText text-white uppercase text-[12vw] font-[font3] inline-block">
          niche fine fragrances inspired by modern india
        </h1>
      </div>
    </div>
  );

  return (
    <>
      {isMobile ? (
        mobileView
      ) : (
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
      )}
    </>
  );
}

export default Page1;
