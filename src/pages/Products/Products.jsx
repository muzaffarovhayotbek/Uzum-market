import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import db from "../../assets/db.json";
import './Products.css';
import heart from '../../assets/heart.png'

function Products() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundProduct = db.products.find((item) => item.id === Number(id));
    setProduct(foundProduct);
  }, [id]);



  return (
    <div className="container mx-auto mx-auto py-24 flex gap-10">

      <header className="header">
        <NavLink to='/'>Bosh sahifa</NavLink>
      </header>
      <img
        className="object-cover"
        width={500}
        height={384}
        src={product.thumbnail}
        alt={product.title}
      />
      <div>
        <h3 className="">{product.title}</h3>
        <h3 className="">{product.company}</h3>
        <h4 className="">${product.price}</h4>
        <p className="">{product.description}</p>
      </div>
      <div className="prices">
        <h2 className="text-[28px] text-[#1F2026] pb-4">${product.price}</h2>
        <div className="month">
          <h2 className="price-twen">24 oy</h2>
          <h2 className="price-twenty">12 oy</h2>
          <h2 className="price-sixMonth">6 oy</h2>
          <h2 className="price-three">3 oy</h2>
        </div>
        <div className="xarid">
          <button>1 kunga harid qilish</button>
          <button><img src={heart} alt="" width={24} /></button>
        </div>
        <button className="cart">Savatga qo'shish</button>
      </div>
    </div>
  );
}

export default Products;
