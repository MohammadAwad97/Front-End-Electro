import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const CartContext = createContext();
export default CartContext;

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //get user object from local storage

  const customerId = sessionStorage.getItem('currentUserId');

  const getCart = () => {
    axios
      .get(`http://127.0.0.1:7000/api/v1/cart/64c53da3474eb8afaea05f7f`)
      .then(({ data }) => {
        setCart(data.cart.productList);
      });
  };

  //add  to the cart
  const addItem = async (productId) => {
    // if (!currentUserId) return navigate('/signIn');
    const { data } = await axios.post(
      `http://127.0.0.1:7000/api/v1/cart/addItem/64c53da3474eb8afaea05f7f`,
      {
        productId,
      }
    );
    setCart(data.productList);
  };
  const removeItem = async (productId) => {
    const { data } = await axios.patch(
      `http://127.0.0.1:7000/api/v1/cart/removeItem/64c53da3474eb8afaea05f7f`,
      {
        productId,
      }
    );
    setCart(data.productList);
  };


  const removeAllItems = async () => {
    await axios.patch(
      `http://127.0.0.1:7000/api/v1/cart/removeAllItems/64c53da3474eb8afaea05f7f`
    );
    setCart([]);
  };

  const totalPrice = cart.reduce((acc, current) => {
    return current.productId.price * current.quantity + acc;
  }, 0);

  //share all function using context
  const value = {
    addItem,
    removeItem,
    cart,
    removeAllItems,
    getCart,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}