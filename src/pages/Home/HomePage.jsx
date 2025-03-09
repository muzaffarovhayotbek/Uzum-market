import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./HomePage.css";
import Carousel from "../../components/Carusel";

function HomePage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://strapi-store-server.onrender.com/api/products")
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data.data);
          console.log("products", response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  function handleRedirect(id) {
    navigate(`/products/${id}`);
  }

  return (
    <div className="homePage">
      <Carousel />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6">Arzon narxlar</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {products.length > 0 &&
            products.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border rounded-lg p-4 shadow-md cursor-pointer hover:shadow-lg transition"
                onClick={() => handleRedirect(product.id)}
              >
                <img
                  className="w-full h-64 object-cover rounded-md"
                  src={product.attributes.image}
                  alt={product.attributes.title}
                />
                <h3 className="text-lg font-semibold mt-2 text-center">
                  {product.attributes.title}
                </h3>
                <p className="text-gray-600 font-medium text-center">
                  ${product.attributes.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
