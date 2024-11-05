import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

function Page4() {
  const animatedRef = useRef(null);
  const linkRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(animatedRef.current, {
      scrollTrigger: {
        trigger: animatedRef.current,
        start: "top 80%",
        end: "top 30%",
      },
      opacity: 0,
      y: 100,
      stagger: 0.3,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(linkRef.current, {
      scrollTrigger: {
        trigger: animatedRef.current,
        start: "-30% 50%",
        end: "-30% 50%",
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });
  })
  return (
    <div className="h-screen relative bg-[url(/images/cuttingrain.webp)] bg-cover">
      <div className="w-full h-full bg-black opacity-20"></div>
      <div ref={animatedRef} className="absolute top-1/3 left-0 p-[3.2vw] text-white flex flex-col gap-[1.5vw]">
        <h1 className="text-[3.5vw] leading-[4.5vw] font-[font4]">
          Cutting Rain
        </h1>
        <p className="text-[.95vw] font-[font2] ">
          As India’s summer heat peaks, anticipation builds for the first
          monsoon rains, <br />
          symbolizing renewal and celebration. Evoking this joy, our fragrance
          blends <br />
          saffron, grapefruit, rose, marigold, sandalwood, and tea, capturing
          the <br />
          refreshing spirit of rain-soaked verandahs and warm chai with loved
          ones.
        </p>
        <a ref={linkRef}
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

export default Page4;
