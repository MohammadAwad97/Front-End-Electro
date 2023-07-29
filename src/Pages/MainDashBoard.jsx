import React from 'react';
import Aside from '../Components/VendorDashBoard/Aside';
import AddProduct from '../Components/VendorDashBoard/AddProduct';
import ProductList from '../Components/VendorDashBoard/ProductList';
import EditProduct from '../Components/VendorDashBoard/EditProduct';
import Inbox from '../Components/VendorDashBoard/Inbox';
import LoginVendor from '../Components/VendorDashBoard/LoginVendor';
import { Outlet, Route, Routes } from 'react-router-dom';

export default function MainDashBoard() {
  return (
    <>
      <Aside />
      
      <Outlet />
    </>
  );
}
