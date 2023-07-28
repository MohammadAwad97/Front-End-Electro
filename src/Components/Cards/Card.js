import React from 'react'

function Card({product}) {
  return (
    <a key={product.id} href={product.href} className="group shadow-lg ">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75 "
        />
      </div>
      <h3 className="mt-4 text-m px-2">{product.name}</h3>
      <p className="mt-4  px-2  text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id harum
        repellendus eaque architecto adipisci delectus corrupti
      </p>
      <p className="px-2 mt-2 text-lg font-medium text-gray-900 ">
        {product.price}
      </p>
      <button className="bg-[black] hover:bg-[#B43838] text-white font-bold py-2 px-4 rounded w-full mt-4">
        Order now!
      </button>
    </a>
  )
}

export default Card;

// // <button className="bg-[#db4444] hover:bg-[#B43838] text-white font-bold py-2 px-4 rounded w-full mt-4">
// Order now!
// </button>