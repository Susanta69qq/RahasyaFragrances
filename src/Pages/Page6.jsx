import React from "react";

function Page6() {
  return (
    <div className="h-screen relative bg-[url(/images/lovemarriage.webp)] bg-cover">
      <div className="w-full h-full bg-black opacity-20"></div>
      <div className="absolute bottom-0 right-0 p-[2vw] text-white flex flex-col gap-[1vw]">
        <h1 className="text-[3.5vw] leading-[4.5vw] font-[font4]">
          Love Marriage
        </h1>
        <p className="text-[.95vw] font-[font2] ">
          Ah, the Indian wedding. Extravagant decorations, delectable treats,
          boozy <br />
          festivities, and a union of two families - an Indian wedding is a
          spectacle like
          <br />
          no other. To recreate an atmosphere of love and passion, we blended
          notes <br />
          of pistachio, praline, saffron, rum, marigold, and sandalwood.
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

export default Page6;
