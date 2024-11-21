import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";
import { useLenis } from "lenis/react";
import { ClipLoader } from "react-spinners";

function Products() {
  const lenis = useLenis();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [occasion, setOccasion] = useState("");
  const [volume, setVolume] = useState("");
  const [sort, setSort] = useState("Featured");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetch = await axios.get(
          "https://rahasyafragrances.onrender.com/collections"
        );
        setProducts(fetch.data.products);
        setFilteredProducts(fetch.data.products);
        setLoading(false);

        if (lenis) {
          lenis.resize();
        }
      } catch (error) {
        console.log("Error fetching products: ", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [lenis]);

  const filterByOccasion = (product) => {
    if (!occasion) return true; // No filter applied
    const keywords = {
      Casual: ["Daily", "Everyday"],
      Formal: ["Formal", "Events"],
      "Special Occasion": ["Evening", "Special"],
    };
    const keywordsForOccasion = keywords[occasion];
    return keywordsForOccasion.some((keyword) =>
      product.howToWear.includes(keyword)
    );
  };

  useEffect(() => {
    let filtered = [...products];

    //occasion filter
    filtered = filtered.filter(filterByOccasion);

    //volume filter
    if (volume) {
      filtered = filtered.filter((product) => product.price === volume);
    }

    // Sort products based on selected option
    switch (sort) {
      case "Alphabetically, A-Z":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Alphabetically, Z-A":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Price, Low to High":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "Price, High to Low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [products, occasion, volume, sort]);

  const hoverImages = [
    "images/hoverImages/chapterOneHover.webp",
    "images/hoverImages/cuttingRainHover.webp",
    "images/hoverImages/oudHover.webp",
    "images/hoverImages/weddingHover.webp",
    "images/hoverImages/discoveryHover.webp",
    "images/hoverImages/samplerHover.webp",
  ];

  const toggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <div className="min-h-screen">
      <Navbar textColor="text-black" />
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <ClipLoader />
        </div>
      ) : (
        <div>
          <div className="filterOptions w-full pt-[10vw] px-[3vw] flex justify-between items-center font-[font2] text-[1vw]">
            <div className="flex gap-[2.5vw]">
              <h4>Filter:</h4>
              {/* Occasion filter */}
              <div className="cursor-pointer" onClick={toggleDialog}>
                <h4 className="relative">
                  Occasion{" "}
                  <span>
                    <i class="ri-arrow-down-s-line"></i>
                  </span>
                </h4>
                <div
                  className={`absolute w-[24vw] border-[0.5px] border-gray-300 z-[100] 
             bg-white mt-[1.75vw] ${openDialog ? "block" : "hidden"}`}
                >
                  <div className="flex justify-between font-[font3] text-[.95vw] tracking-[1.5px] px-[1.5vw] py-[1vw]">
                    <h4>0 Selected</h4>
                    <h4 onClick={() => setOccasion("")}>RESET</h4>
                  </div>
                  <div className="w-full border-b-[0.5px] border-gray-300"></div>
                  <div className="px-[1.5vw] py-[1vw] flex flex-col gap-[1vw]">
                    {["Casual", "Formal", "Special Occasion"].map(
                      (occ, index) => (
                        <div
                          className="flex items-center gap-[0.8vw]"
                          key={index}
                        >
                          <input
                            type="checkbox"
                            checked={occasion === occ}
                            onChange={() =>
                              setOccasion(occasion === occ ? "" : occ)
                            }
                          />
                          <h4>{occ}</h4>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Volume filter */}
              <h4>
                Volume{" "}
                <span>
                  <i class="ri-arrow-down-s-line"></i>
                </span>
              </h4>
            </div>

            {/* Sort filter */}
            <div className="flex gap-[1.2vw]">
              <h4>
                Sort by:{" "}
                <select className="border-[0.5px] border-gray-300">
                  {[
                    "Featured",
                    "Alphabetically, A-Z",
                    "Alphabetically, Z-A",
                    "Price, Low to High",
                    "Price, High to Low",
                  ].map((option, index) => (
                    <option
                      className="cursor-pointer font-[font3]"
                      key={index}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </h4>
              <h4>{products.length} products</h4>
            </div>
          </div>
          <div className="grid grid-cols-3 w-full h-full px-[3vw] gap-[2vw] pb-[3vw] items-center">
            {products.map((product, index) => (
              <a href={`/products/${product.name}`}>
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
              </a>
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
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Products;
