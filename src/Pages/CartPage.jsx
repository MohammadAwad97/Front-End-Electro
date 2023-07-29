import React, { useEffect, useState, useContext } from 'react';
import CartContext from '../store/cartContext';

const CartPage = () => {
  const { cart, getCart, addItem, removeItem, removeAllItems, totalPrice } =
    useContext(CartContext);

  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cart?.map((item) => (
          <div key={item._id} className="flex justify-between mb-4">
            <span>
              {item.productId.name} -{item.quantity}
            </span>
            <div className="flex">
              <button
                onClick={() => removeItem(item.productId._id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded mr-2"
              >
                -
              </button>
              <button
                onClick={() => addItem(item.productId._id)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
              >
                +
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded">
                Remove
              </button>
            </div>
          </div>
        ))}
        {cart.length > 0 && <hr className="my-4" />}
        {cart.length > 0 && (
          <div className="flex justify-between">
            <span className="font-bold">Total:</span>
            <span>${totalPrice}</span>
          </div>
        )}
        {cart.length > 0 && (
          <button
            className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={removeAllItems}
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  );
};

export default CartPage;
