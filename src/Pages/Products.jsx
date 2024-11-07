import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

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

  return (
    <div className="min-h-screen">
      <Navbar textColor="text-black" />
      <div className="grid grid-cols-3 w-full h-full">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card mt-[16vh] flex flex-col items-center"
          >
            <img src={product.images[0]} alt="product_images" />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
