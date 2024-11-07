import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetch = await axios.get(
          "https://rahasyafragrances.onrender.com/collections"
        );
        console.log(fetch.data.products);
        setProducts(fetch.data.products);
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  const hoverImages = [
    "images/hoverImages/chapterOneHover.webp",
    "images/hoverImages/cuttingRainHover.webp",
    "images/hoverImages/oudHover.webp",
    "images/hoverImages/weddingHover.webp",
    "images/hoverImages/discoveryHover.webp",
    "images/hoverImages/samplerHover.webp",
  ];

  return (
    <div className="min-h-screen">
      <Navbar textColor="text-black" />
      <div className="filterOptions w-full pt-[10vw] px-[3vw] flex justify-between items-center font-[font2] text-[1vw]">
        <div className="flex gap-[1.2vw]">
          <h4>Filter:</h4>
          <h4>
            Availability{" "}
            <span>
              <i class="ri-arrow-down-s-line"></i>
            </span>
          </h4>
          <h4>
            Occasion{" "}
            <span>
              <i class="ri-arrow-down-s-line"></i>
            </span>
          </h4>
          <h4>
            Volume{" "}
            <span>
              <i class="ri-arrow-down-s-line"></i>
            </span>
          </h4>
          <h4>
            Hero Ingredient{" "}
            <span>
              <i class="ri-arrow-down-s-line"></i>
            </span>
          </h4>
        </div>
        <div className="flex gap-[1.2vw]">
          <h4>
            Sort by:{" "}
            <span className="ml-[4vw]">
              <i class="ri-arrow-down-s-line"></i>
            </span>
          </h4>
          <h4>{products.length} products</h4>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full h-full px-[3vw] gap-[2vw] pb-[3vw] items-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card mt-[3vw] flex flex-col items-center"
          >
            <div className="relative w-[28vw] h-[60vh] overflow-hidden mb-[1vw]">
              <img src={product.images[0]} alt="product_images" />
              <img
                className="absolute top-0 opacity-0 hover:opacity-100 hover:scale-105 
                transition-all duration-500 ease-in-out object-contain"
                src={hoverImages[index]}
                alt=""
              />
            </div>
            <div className="flex flex-col items-start w-[30vw]">
              <h3 className="uppercase font-[font1]">{product.name}</h3>
              <div className="flex justify-between items-center w-full">
                <h4 className="uppercase font-[font2] text-[.8vw]">
                  eau de parfum
                </h4>
                <h4 className="font-[font2] text-[1vw] tracking-[1.5px]">
                  ₹ {product.price} | {product.bottleSize}
                </h4>
              </div>
              <button
                className="uppercase w-full font-[font3] text-[.9vw] tracking-[1.5px] 
              border border-black py-[.5vw] mt-[1.5vw]"
              >
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full pb-[3vw] relative">
        <img
          className="w-full object-contain"
          src="/images/collectionSecondary.webp"
          alt=""
        />
        <div
          className="movingTextContainer w-full absolute text-center top-1/2 text-white text-[1.5vw] font-[font3] 
        flex whitespace-nowrap gap-[2.5vw] overflow-hidden"
        >
          <h4 className="movingText2">Bottle your own Rahasya</h4>
          <h4 className="movingText2">Bottle your own Rahasya</h4>
          <h4 className="movingText2">Bottle your own Rahasya</h4>
          <h4 className="movingText2">Bottle your own Rahasya</h4>
          <h4 className="movingText2">Bottle your own Rahasya</h4>
          <h4 className="movingText2">Bottle your own Rahasya</h4>
          <h4 className="movingText2">Bottle your own Rahasya</h4>
          <h4 className="movingText2">Bottle your own Rahasya</h4>
          <h4 className="movingText2">Bottle your own Rahasya</h4>
          <h4 className="movingText2">Bottle your own Rahasya</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
