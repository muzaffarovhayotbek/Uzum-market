import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import db from "../../assets/db.json";
import './Products.css';
import heart from '../../assets/heart.png';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import toast from "react-hot-toast";
import { decrement, increment } from "../../store/counterSlice";

function Products() {
  const counter = useSelector(state => state.counter)
  const { products } = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const handleProducts = () => {
    const cardAdd = { ...product, quantity: counter.value };
    dispatch(addToCart(cardAdd));
    toast.success('Mahsulot savatga qo\'shildi');
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  function handleIncrement() {
    dispatch(increment())
  }
  function handleDecrement() {
    dispatch(decrement())
  }

  useEffect(() => {
    const foundProduct = db.products.find((item) => item.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto py-24 text-center">
        <h2>Mahsulot topilmadi</h2>
        <NavLink to="/" className="text-blue-500">Bosh sahifaga qaytish</NavLink>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-24 flex gap-10">
      <div className="product-info">
        <img
          className="object-cover"
          width={500}
          height={384}
          src={product.thumbnail}
          alt={product.title}
        />
        <div>
          <h2>{product.id}</h2>
          <h3 className="text-2xl font-bold">{product.title}</h3>
          <h4 className="text-lg">${product.price}</h4>
          <p className="text-yellow-400">⭐{product.rating} / 5</p>
        </div>
      </div>
      <div className="prices">
        <h2 className="text-[28px] text-[#1F2026] pb-4">${product.price}</h2>
        <div className="month">
          <h2 className="price-twen">24 oy</h2>
          <h2 className="price-twenty">12 oy</h2>
          <h2 className="price-sixMonth">6 oy</h2>
          <h2 className="price-three">3 oy</h2>
        </div>
        <div className=" xarid flex items-center justify-between">
          <button className="bg-[#E6E8ED] mt-[16px] text-[12px] text-[#1F]">1 kunga harid qilish</button>
          <button><img src={heart} alt="heart" width={24} /></button>
        </div>
        <div className="quantity">
          <label htmlFor="quantity" className="text-2xl mt-4 text-amber-800 font-bold">Miqdor:</label>
          <h3 className="text-[18px] pt-2 pb-3">{counter.value}</h3>
          <div className="flex gap-20">
            <button id="quantity" value={quantity} onChange={handleQuantityChange} onClick={handleIncrement} className="cursor-pointer bg-gray-500 rounded-md pt-2">+</button>
            <button className="bg-red-500 cursor-pointer rounded-2xl" onClick={handleDecrement}>-</button>
          </div>

        </div>
        <button className=" cart w-[300px] mt-[18px] p-[18px] bg-[#7000FF] cursor-pointer text-[16px] text-white " onClick={handleProducts}>Savatga qo'shish</button>
      </div>
    </div>
  );
}

export default Products;
