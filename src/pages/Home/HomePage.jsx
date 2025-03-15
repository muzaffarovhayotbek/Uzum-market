import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import db from '../../assets/db.json';
import Carousel from '../../components/Carusel';

function HomePage() {
  const navigate = useNavigate();

  const handleRedirect = (id) => {
    navigate(`/products/${id}`);
  };
  const calculateDiscountPrice = (price, discountPercentage) => {
    return (price - (price * discountPercentage) / 100).toFixed(2);
  };

  return (
    <div className="mt-[48px] mb-[32px]">
      <Carousel products={db.products} />
      <div className="container mx-auto p-4">
        <ul className="flex gap-4 overflow-x-auto whitespace-nowrap items-start mb-4 scrollbar-hide p-2"></ul>

        <h2 className="text-[28px] pt-5 pb-5 text-center">Mahsulotlar</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {db.products.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-gray-100 shadow-md rounded-xl overflow-hidden relative w-full"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-[320px] rounded-xl object-cover"
                />

                <div
                  onClick={() => handleRedirect(product.id)}
                  className="p-4 flex flex-col justify-start gap-2 items-start bg-gray-200 cursor-pointer h-full"
                >
                  <p>{product.id}</p>
                  <p className="text-center text-[12.8px] text-[#1f2026]">
                    {product.title}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {product.description.slice(0, 70)}...
                  </p>
                  <button className="bg-[#ffff00] text-[12px] p-1">
                    0 so'm/oyiga
                  </button>

                  <p className="text-[14px] text-[#1f2026] line-through font-semibold mt-2">
                    <p className="text-yellow-400">⭐{product.rating} / 5</p>
                    {product.price} som
                  </p>
                  <p className="text-sm px-2 bg-[#7F4DFF] rounded-md text-white font-semibold">
                    {calculateDiscountPrice(product.price, 10)}som{' '}
                    <span className="text-sm">(-10%)</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
