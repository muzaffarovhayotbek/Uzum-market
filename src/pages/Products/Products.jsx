import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import db from "../../assets/db.json";
import './Products.css';
import heart from '../../assets/heart.png';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import toast from "react-hot-toast";

function Products() {
  const { products } = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const handleProducts = () => {
    const cardAdd = { ...product, quantity };
    dispatch(addToCart(cardAdd));
    toast.success('Mahsulot savatga qo\'shildi');
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

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
          <p className="text-[20px]">{product.description}</p>
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
        <div className="xarid">
          <button>1 kunga harid qilish</button>
          <button><img src={heart} alt="heart" width={24} /></button>
        </div>
        <div className="quantity">
          <label htmlFor="quantity">Miqdor:</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            className="w-16 text-center"
          />
        </div>
        <button className="cart" onClick={handleProducts}>Savatga qo'shish</button>
      </div>
    </div>
  );
}

export default Products;
