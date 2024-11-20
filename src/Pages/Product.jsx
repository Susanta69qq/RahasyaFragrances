import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

function Product() {
  const { name } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetch = await axios.get(
          `https://rahasyafragrances.onrender.com/collections/${name}`
        );
        setProduct(fetch.data.product);
        console.log(fetch.data.product);
      } catch (error) {
        console.log("Error fetching the desired product: ", error);
      }
    };
    fetchProduct();
  }, [name]);
  return (
    <div className="min-h-screen">
      <Navbar textColor="text-black" />
      <div className="flex justify-between items-start gap-[5vw]">
        <div className="imgContainer w-1/2">
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
        <div className="txtContainer w-1/2 mt-[10vw]">
          <h4 className="uppercase font-[font2] text-[.9vw]">Eau De Parfum</h4>
          <h1 className="font-[font4] text-[3.5vw]">{product.name}</h1>
          <h4 className="uppercase font-[font2] text-[.9vw]">
            {product.gender}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Product;
