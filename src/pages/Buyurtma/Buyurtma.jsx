import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../../store/cartSlice'

function Buyurtma() {
  const dispatch = useDispatch()
  const { orders } = useSelector((state) => state.orders)
  return (
    <div className='container mx-auto'>
      <h2 className='text-[28px]'>Buyurtmalaringiz</h2>
      {orders.length === 0 ? (
        <p className="text-center text-[24px]">Buyurtma bo‘sh</p>
      ) : (
        <div className="w-[300px]">
          {orders.map((product) => (
            <div key={product.id} className="cart-item border p-4 flex justify-between items-center">
              <img src={product.thumbnail} alt={product.title} width={100} className="object-cover" />
              <div className="flex-1 px-4">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-gray-600">Narx: ${product.price}</p>
                <p>Miqdor: {product.quantity}</p>
              </div>
              <button onClick={() => dispatch(removeCart(product.id))}>O‘chirish</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Buyurtma
