import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
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
      stagger: 0.3,
      duration: 0.5,
      delay: 0.5,
    });
  }, []);

  return (
    <div className="h-screen bg-black">
      <div className="h-full text-white font-[font4] flex flex-col gap-[5vw] items-center justify-center px-[21vw]">
        <h1 className="target text-[3vw] max-sm:text-[6vw] leading-[4vw] max-sm:leading-[10vw]">
          Our mission is to put Indian inspired niche perfumery on the map
          through an uncompromising attitude towards quality and an obsession to
          represent the new India, one that is modern, youthful, vibrant and
          bold.{" "}
        </h1>

        <a
          className="target uppercase font-[font3] text-[.85vw] max-sm:text-[2.75vw] tracking-[1.5px] max-sm:mt-[10vw]"
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
