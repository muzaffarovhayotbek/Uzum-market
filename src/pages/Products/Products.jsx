import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Products() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("Product ID:", id); // ID to'g'ri kelayotganini tekshirish
    localStorage.setItem("productId", id);

    axios
      .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((response) => {
        console.log("Response data:", response.data); // API dan nima kelayotganini ko'rish
        if (response.status === 200 && response.data.data) {
          setProduct(response.data.data);
        } else {
          console.error("Unexpected response format", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  if (!product) {
    return <div className="text-center text-xl font-bold">Loading...</div>;
  }

  if (!product.attributes) {
    return <div className="text-center text-red-500">Mahsulot topilmadi!</div>;
  }

  return (
    <div className="max-w-[1100px] w-full mx-auto py-24 flex gap-10">
      <img
        className="img"
        width={500}
        height={384}
        src={product.attributes.image}
        alt={product.attributes.title}
      />
      <div>
        <h3 className="title">{product.attributes.title}</h3>
        <h3 className="company">{product.attributes.company}</h3>
        <h4 className="price">${product.attributes.price}</h4>
        <p className="desc">{product.attributes.description}</p>
        <div className="mt-6">
          <h4 className="text-md font-medium tracking-wider capitalize pl-9">
            Color
          </h4>
          <div className="mt-2">
            <button className="btn-colors badge w-6 h-6 mr-2 border-2 border-secondary"></button>
            <button className="btn-green badge w-6 h-6 mr-2"></button>
            <button className="blues badge w-6 h-6 mr-2"></button>
          </div>
        </div>
        <div className="selects text-md font-medium tracking-wider capitalize">
          <h2>Amount</h2>
        </div>
        <button className="btn">ADD TO BAG</button>
      </div>
    </div>
  );
}

export default Products;
