import React, { useEffect } from 'react';
import Card from './Card';
import './Cards.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cards() {
  const [products, setProducts] = useState([]);

  const fetchDate = async () => {
    const res = await axios.get(
      'http://127.0.0.1:7000/api/v1/products/?page=1&limit=4'
    );
    console.log(res.data);
    setProducts(res.data.products);
  };
  useEffect(() => {
    fetchDate();
  }, []);

  return (
    <section className="explore_Products">
      <hr />
      <div className="title">
        <div className="redBox"></div>
        <p>Our Products</p>
      </div>
      <h2 className="text-4xl">Explore Our Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
      <div class="flex justify-center mt-6">
        <Link to="/product">
          <button class="bg-[#db4444] hover:bg-[#B43838] text-white font-bold py-3 px-4 rounded w-60">
            View All Products
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Cards;
