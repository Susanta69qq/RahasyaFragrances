import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";

function Page6() {
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
        start: "-70% 50%",
        end: "-30% 50%",
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  const mobileView = (
    <div className="h-[100vh] relative bg-[url(https://rahasyafragrances.com/cdn/shop/files/Love_Marriage_-_Mobile.png?v=1728510338&width=1200)] 
    bg-contain bg-no-repeat mt-[-44vw]">
    <div className="w-full h-full bg-black opacity-20"></div>
    <div
      ref={animatedRef}
      className="absolute w-full top-[35%] left-0 p-[2vw] text-white flex flex-col gap-[5vw]"
    >
      <h1 className="text-[9vw] leading-[4.5vw] font-[font4]">
        Love Marriage
      </h1>
      <p className="text-[2.65vw] font-[font2] ">
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
  )

  return (
   <>
    {isMobile ? mobileView : (
       <div className="h-screen relative bg-[url(/images/lovemarriage.webp)] bg-cover">
       <div className="w-full h-full bg-black opacity-20"></div>
       <div
         ref={animatedRef}
         className="absolute bottom-0 right-0 p-[2vw] text-white flex flex-col gap-[1vw]"
       >
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

export default Page6;
