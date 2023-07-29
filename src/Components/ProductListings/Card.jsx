import { useContext } from 'react';
import CartContext from '../../store/cartContext';
import { useNavigate } from 'react-router-dom';

function Card({ product }) {
  const nav = useNavigate();
  const { addItem } = useContext(CartContext);
  const handelClick = () => {
    if (sessionStorage.getItem('currentUserId')) {
      addItem(product._id);
    } else {
      nav('/login');
    }
  };
  return (
    <a key={product._id} className="group shadow-lg ">
      <div className=" flex justify-center aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={product.img}
          alt="img"
          className="h-60 w-full object-cover object-center group-hover:opacity-75 "
        />
      </div>
      <h3 className="mt-4 text-m px-2 h-[30px] pb-[40px]">{product.name}</h3>
      <p className="mt-4  px-2  text-gray-500 text-sm h-[190px]">
        {product.desc}
      </p>
      <p className="px-2 mt-2 text-lg font-medium text-gray-900 ">
        {product.price}$
      </p>
      <button
        onClick={handelClick}
        className="bg-[#272525]  hover:bg-[#b5b188]   hover:text-black   text-white font-bold py-2 px-4 rounded w-full mt-4"
      >
        Add
      </button>
    </a>
  );
}

export default Card;
