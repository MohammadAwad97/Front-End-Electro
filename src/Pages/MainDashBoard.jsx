import React from "react";
import Aside from "../Components/VendorDashBoard/Aside";
import AddProduct from "../Components/VendorDashBoard/AddProduct";
import ProductList from "../Components/VendorDashBoard/ProductList";
import EditProduct from "../Components/VendorDashBoard/EditProduct";
import Inbox from "../Components/VendorDashBoard/Inbox";

export default function MainDashBoard() {
  return (
    <>
      <Aside />
      <AddProduct />
      <ProductList />
      <EditProduct />
      <Inbox />
    </>
  );
}
