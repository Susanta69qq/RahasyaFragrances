import React from "react";
import Footer from "../components/Footer";

function Page7() {
  return (
    <>
      <div className="mainScreen h-screen bg-black flex items-center justify-between px-[4.5vw]">
        <div className="text-white font-[font3] flex flex-col gap-[2vw]">
          <h1 className="text-[2.75vw]">JOIN THE COMMUNITY</h1>
          <p className="text-[.9vw]">
            We're here to represent the modern Indian identity through fine
            fragrance. Along the <br /> way, we hope to celebrate new age music,
            art and culture that is being pushed by <br /> talented Indian
            creators and world class brands. India is quickly redefining <br />{" "}
            boundaries, and breaking stereotypes. We couldn’t resist being part
            of this <br /> movement, and we want you to join us on this journey.
          </p>
        </div>
        <div className="w-[51vw]">
          <form className="flex flex-col gap-[1.5vw]" action="" method="post">
            <div className="flex gap-[1vw]">
              <input
                className="bg-transparent border border-white px-[1vw] py-[.75vw] w-full 
              placeholder:font-[font3] placeholder:text-[.9vw] text-white font-[font3] text-[1vw]"
                type="text"
                name="firstname"
                placeholder="First Name"
              />
              <input
                className="bg-transparent border border-white px-[1vw] py-[.75vw] w-full 
              placeholder:font-[font3] placeholder:text-[.9vw] text-white font-[font3] text-[1vw]"
                type="text"
                name="lastname"
                placeholder="Last Name"
              />
            </div>
            <input
              className="bg-transparent border border-white px-[1vw] py-[.75vw] w-full 
            placeholder:font-[font3] placeholder:text-[.9vw] text-white font-[font3] text-[1vw]"
              type="email"
              name="email"
              placeholder="Email"
            />

            <a
              className="text-[.9vw] text-white uppercase font-[font3] tracking-[1.5px]"
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
