import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import SplitType from "split-type";

function Page2() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const splitTexts = new SplitType(".target", { types: "chars" });

    gsap.from(splitTexts.chars, {
      scrollTrigger: {
        trigger: ".target",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
      opacity: 0.2,
      stagger: 0.1,
    });
  });
  return (
    <div className="h-screen bg-black">
      <div className="h-full text-white font-[font4] flex flex-col gap-[5vw] items-center justify-center ">
        <h1 className="target text-center text-[3vw] leading-[4vw]">
          Our mission is to put Indian inspired niche <br /> perfumery on the
          map through an <br /> uncompromising attitude towards quality and an{" "}
          <br /> obsession to represent the new India, one that is <br />{" "}
          modern, youthful, vibrant and bold.{" "}
        </h1>

        <a
          className="target uppercase font-[font3] text-[.85vw] tracking-[1.5px]"
          href=""
        >
          about rahasya{" "}
          <span className="target ml-2">
            <i class="ri-arrow-right-line"></i>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Page2;
