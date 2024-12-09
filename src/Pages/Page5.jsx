import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
function Page5() {
  const animatedRef = useRef(null);
  const linkRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  }, []);

  const mobileView = (
    <div className="h-[100vh] relative bg-[url(https://rahasyafragrances.com/cdn/shop/files/Oud_Mangi_-_Mobile.png?v=1728510357&width=1200)] 
    bg-contain bg-no-repeat mt-[-44vw]">
      <div className="w-full h-full bg-black opacity-20"></div>
      <div
        ref={animatedRef}
        className="absolute w-full top-[35%] left-0 p-[3.2vw] text-white flex flex-col gap-[5vw]"
      >
        <h1 className="text-[9vw] leading-[4.5vw] font-[font4]">
          Oud Mangifera
        </h1>
        <p className="text-[2.65vw] font-[font2]">
          For many in India, mangoes are synonymous with lazy summer days. We
          aim <br />
          to capture the richness of the royal mango, and pay tribute to its
          role as the <br />
          king of fruits through a unique blend of davana, mango, geranium,{" "}
          <br />
          blackcurrant, rose, leather, incense and oud.
        </p>
        <a
          ref={linkRef}
          className="uppercase text-[3vw] font-[font3] tracking-[1.5px]"
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

  return (
    <>
      {isMobile ? (
        mobileView
      ) : (
        <div className="h-screen relative bg-[url(/images/oud.webp)] bg-cover">
          <div className="w-full h-full bg-black opacity-20"></div>
          <div
            ref={animatedRef}
            className="absolute top-[5vw] right-0 p-[3.2vw] text-white flex flex-col gap-[1.5vw]"
          >
            <h1 className="text-[3.5vw] leading-[4.5vw] font-[font4]">
              Oud Mangifera
            </h1>
            <p className="text-[.95vw] font-[font2] ">
              For many in India, mangoes are synonymous with lazy summer days.
              We aim <br />
              to capture the richness of the royal mango, and pay tribute to its
              role as the <br />
              king of fruits through a unique blend of davana, mango, geranium,{" "}
              <br />
              blackcurrant, rose, leather, incense and oud.
            </p>
            <a
              ref={linkRef}
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
      )}
    </>
  );
}

export default Page5;
