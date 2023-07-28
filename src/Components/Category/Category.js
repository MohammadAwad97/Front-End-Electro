import React from "react";
import "./Category.css";

function Category() {
  return (
    <section className="category_container">
      <hr />
      <div className="title">
        <div className="redBox"></div>
        <p>Categories</p>
      </div>
      <h1 className="text-4xl browse-by">Browse by category</h1>
      <section className="cate_Cards">
        <div className="cate_datail">
          <i class="fa-solid fa-mobile-screen"></i>
          <p>Phones</p>
        </div>
        <div className="cate_datail">
          <i class="fa-solid fa-desktop"></i>
          <p>Computers</p>
        </div>
        <div className="cate_datail">
          <i class="fa-regular fa-clock"></i>
          <p>Watchs</p>
        </div>
        <div className="cate_datail">
          <i class="fa-solid fa-camera"></i>
          <p>Camera</p>
        </div>
        <div className="cate_datail">
          <i class="fa-solid fa-headphones"></i>
          <p>HeadPhones</p>
        </div>
        <div className="cate_datail">
          <i class="fa-solid fa-gamepad"></i>
          <p>Gaming</p>
        </div>
      </section>
      <hr />
    </section>
  );
}

export default Category;
