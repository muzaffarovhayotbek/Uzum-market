import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../../store/cartSlice";

function Cart() {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto py-24">
      <h2 className="text-[24px] font-bold mb-4 text-center">Savat</h2>
      {products.length === 0 ? (
        <p className="text-center text-[24px]">Savat bo‘sh</p>
      ) : (
        <div className="flex flex-col gap-4">
          {products.map((product) => (
            <div key={product.id} className="cart-item border p-4 flex justify-between items-center">
              <img src={product.thumbnail} alt={product.title} width={100} className="object-cover" />
              <div className="flex-1 px-4">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-gray-600">Narx: ${product.price}</p>
                <p>Miqdor: {product.quantity}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => dispatch(removeCart(product.id))}
              >
                O‘chirish
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
