import React from "react";
import Footer from "../components/Footer";

function Page7() {
  return (
    <>
      <div
        className="mainScreen h-screen max-sm:h-[50vh] bg-black flex max-sm:flex-col items-center 
      justify-between max-sm:justify-evenly max-sm:gap-[4vw] px-[4.5vw] max-sm:mt-[-44vw]"
      >
        <div className="text-white font-[font3] flex flex-col gap-[2vw]">
          <h1 className="text-[2.75vw] max-sm:text-[4vw]">
            JOIN THE COMMUNITY
          </h1>
          <p className="text-[.9vw] max-sm:text-[2.25vw] max-sm:leading-[4vw]">
            We're here to represent the modern Indian identity through fine
            fragrance. Along the <br /> way, we hope to celebrate new age music,
            art and culture that is being pushed by <br /> talented Indian
            creators and world class brands. India is quickly redefining <br />{" "}
            boundaries, and breaking stereotypes. We couldn’t resist being part
            of this <br /> movement, and we want you to join us on this journey.
          </p>
        </div>
        <div className="w-[51vw] max-sm:w-full max-sm:px-[4.5vw]">
          <form
            className="flex flex-col gap-[1.5vw] max-sm:gap-[3vw]"
            action=""
            method="post"
          >
            <div className="flex gap-[1vw] max-sm:gap-[3vw]">
              <input
                className="bg-transparent border border-white px-[1vw] max-sm:px-[2vw] py-[.75vw] 
                max-sm:py-[1.5vw] w-full 
                placeholder:font-[font3] placeholder:text-[.9vw] max-sm:placeholder:text-[3.2vw] text-white 
                font-[font3] text-[1vw] max-sm:text-[3.2vw]"
                type="text"
                name="firstname"
                placeholder="First Name"
              />
              <input
                className="bg-transparent border border-white px-[1vw] max-sm:px-[2vw] py-[.75vw] max-sm:py-[1.5vw] w-full 
              placeholder:font-[font3] placeholder:text-[.9vw] max-sm:placeholder:text-[3.2vw] 
              text-white font-[font3] text-[1vw] max-sm:text-[3.2vw]"
                type="text"
                name="lastname"
                placeholder="Last Name"
              />
            </div>
            <input
              className="bg-transparent border border-white px-[1vw] max-sm:px-[2vw] py-[.75vw] max-sm:py-[1.5vw] w-full 
            placeholder:font-[font3] placeholder:text-[.9vw] max-sm:placeholder:text-[3.2vw] 
            text-white font-[font3] text-[1vw] max-sm:text-[3.2vw]"
              type="email"
              name="email"
              placeholder="Email"
            />

            <a
              className="text-[.9vw] max-sm:text-[3.2vw] text-white uppercase font-[font3] tracking-[1.5px] max-sm:pt-[8vw]"
              href=""
            >
              subscribe{" "}
              <span className="ml-2">
                <i class="ri-arrow-right-line"></i>
              </span>
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

export default Page7;
