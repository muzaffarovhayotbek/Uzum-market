import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../../store/cartSlice';
import toast from 'react-hot-toast';

function Buyurtma() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  function handleDelete(id) {
    dispatch(removeCart(id));
    toast.success('Buyurtmalaringiz o`chirildi');
  }
  return (
    <div className="container mx-auto">
      <h2 className="text-[28px]">Buyurtmalaringiz</h2>
      {orders.length === 0 ? (
        <p className="text-center text-[24px]">Buyurtma bo‘sh</p>
      ) : (
        <div className="w-[300px]">
          {orders.map((product) => (
            <div
              key={product.id}
              className="cart-item border p-4 flex justify-between items-center"
            >
              <img
                src={product.images}
                alt={product.title}
                width={100}
                className="object-cover"
              />
              <div className="flex-1 px-4">
                <h2>{product.id}</h2>
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-gray-600">Narx: ${product.price}</p>
                <p>Miqdor: {product.quantity}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleDelete(product.id)}
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

export default Buyurtma;
