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
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar textColor="text-black" />
      <div className="text-black">
        <h1>{product.name}</h1>
      </div>
    </div>
  );
}

export default Product;
