import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./HomePage.css";
import db from '../../assets/db.json'
import Carousel from "../../components/Carusel";

function HomePage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  console.log(db);



  function handleRedirect(id) {
    navigate(`/products/${id}`);
  }

  return (
    <div className="homePage">
      <Carousel />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6">Arzon narxlar</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {db.products.length > 0 &&
            db.products.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border rounded-lg p-4 shadow-md cursor-pointer hover:shadow-lg transition"
                onClick={() => handleRedirect(product.id)}
              >
                <img
                  className="w-[242px] h-[490px] object-cover rounded-md"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <h3 className="text-lg font-semibold mt-2 text-center">
                  {product.title}
                </h3>
                <p className="text-gray-600 font-medium text-center">
                  ${product.price}
                </p>
              </div>
            ))}


        </div>
      </div>
    </div>
  );
}

export default HomePage;
