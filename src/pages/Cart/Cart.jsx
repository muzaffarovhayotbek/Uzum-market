import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";
import toast from "react-hot-toast";
import { addToOrders } from "../../store/orderSlice";
function Cart() {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleBy = () => {
    dispatch(addToOrders(products))
    toast.success('Buyurtma qoshildi')
  }
  function handleDelete(id) {
    dispatch(removeCart(id))
    toast.success('Maxsulot ochirildi')
  }
  return (
    <div className="container mx-auto py-24">
      <h2 className="text-[24px] font-bold mb-4 text-center">Savat</h2>
      {products.length === 0 ? (
        <p className="text-center text-[24px]"> 🛒 Savatingiz bo‘sh</p>
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
              <div className="flex flex-col gap-3">
                <button onClick={handleBy} type="submit" className="bg-[#7000FF] px-6 py-4 rounded-md cursor-pointer">Buyurtma qilish</button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(product.id)}
                >
                  O‘chirish
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
