import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Footer from "../components/Footer";
import { useLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Product() {
  const lenis = useLenis();
  const { name } = useParams();
  const [product, setProduct] = useState({});
  const [activeSection, setActiveSection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetch = await axios.get(
          `https://rahasyafragrances.onrender.com/collections/${name}`
        );
        setProduct(fetch.data.product);
        setLoading(false);

        if (lenis) {
          lenis.resize();
        }

        ScrollTrigger.refresh(); // Refresh after data update
      } catch (error) {
        console.log("Error fetching the desired product: ", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [name, lenis]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Cleanup old instances and refresh layout
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const trigger = ScrollTrigger.create({
      trigger: ".scrollContainer",
      start: "4% top",
      end: "90% bottom",
      pin: ".txtContainer",
      scrub: true,
    });

    return () => {
      trigger.kill(); // Remove the current ScrollTrigger instance
    };
  }, [product]);

  const sectionData = {
    INSPIRATION: product.inspiration,
    "SCENT NOTES": product.scentNotes,
    "HOW TO WEAR": product.howToWear,
    INGREDIENTS: product.ingredients,
    SUSTAINABILITY: product.sustainability,
  };

  return (
    <div className="min-h-screen overflow-auto">
      <Navbar textColor="text-black" />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader />
        </div>
      ) : (
        <div>
          <div className="scrollContainer flex justify-between items-start gap-[2vw]">
            <div className="imgContainer w-1/2">
              {product.images && (
                <div>
                  <img
                    className="w-full object-contain"
                    src={product?.images[0]}
                    alt=""
                  />
                  <img
                    className="w-full object-contain"
                    src={product?.images[1]}
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="txtContainer w-1/2 mt-[10vw] px-[3vw]">
              <h4 className="uppercase font-[font2] text-[.9vw]">
                Eau De Parfum
              </h4>
              <h1 className="font-[font4] text-[3.5vw]">{product.name}</h1>
              <h4 className="uppercase font-[font2] text-[.9vw]">
                {product.gender}
              </h4>
              <h4 className="font-[font2] text-[1vw] tracking-[1.5px] mt-[.8vw]">
                Rs. {product.price} | {product.bottleSize}
              </h4>
              {[
                "INSPIRATION",
                "SCENT NOTES",
                "HOW TO WEAR",
                "INGREDIENTS",
                "SUSTAINABILITY",
              ].map((item, index) => (
                <div className="mt-[1.5vw]" key={index}>
                  <span
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() =>
                      setActiveSection(activeSection === item ? null : item)
                    }
                  >
                    <h1 className="font-[font1] text-[1vw]">{item}</h1>{" "}
                    <i
                      className={`ri-arrow-${
                        activeSection === item ? "up" : "down"
                      }-s-line`}
                    ></i>
                  </span>
                  {activeSection === item && (
                    <div className="mt-[1vw]">
                      <p className="font-[font1] text-[1vw]">
                        {sectionData[item]}
                      </p>
                    </div>
                  )}
                  <div className="w-full h-[.5px] bg-gray-400 mt-[1vw]"></div>
                </div>
              ))}
              <h4 className="font-[font3] text-[.85vw] mt-[2vw] uppercase">
                Note: Pre-orders will come with exclusive limited edition merch.
                They will be shipped to you by mid November or can be picked up
                at Boutique Fairs Singapore between November 22-24
              </h4>
              <button
                className="mt-[2.5vw] uppercase font-[font2] text-[.9vw] tracking-[1.5px] w-full border 
          border-black py-[.5vw] cursor-pointer"
              >
                add to cart
              </button>
              <h5 className="font-[font3] text-[1vw] mt-[2vw]">
                ✔ Pickup available at Lien Towers
              </h5>
              <h5 className="font-[font3] text-[.9vw] mt-[.5vw]">
                Usually ready in 2 hours
              </h5>
            </div>
          </div>
          {product.images && (
            <img className="mt-[7.5vw]" src={product?.images[2]} alt="" />
          )}

          <div className="mb-[5vw]">
            {product.blendInfo?.length > 0 && (
              <div className="mt-[7.5vw] text-center">
                <h1 className="font-[font4] text-[3vw]">Story of our blend</h1>
                <h5 className="font-[font3] text-[.9vw] mt-[.5vw]">
                  Hover to learn more
                </h5>
              </div>
            )}
            <div>
              {product.images && (
                <div className="flex w-[18vw] gap-[1.8vw]">
                  <img
                    className="w-full object-contain"
                    src={product?.images[4]}
                    alt=""
                  />
                  <img
                    className="w-full object-contain"
                    src={product?.images[5]}
                    alt=""
                  />
                  <img
                    className="w-full object-contain"
                    src={product?.images[6]}
                    alt=""
                  />
                  <img
                    className="w-full object-contain"
                    src={product?.images[7]}
                    alt=""
                  />
                  <img
                    className="w-full object-contain"
                    src={product?.images[8]}
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Product;
