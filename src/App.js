import { Routes, Route } from 'react-router-dom';
import {
  Footer,
  Header,
  LandingPage,
  Login,
  ProductListingsPage,
  Register,
  MainDashBoard,
  NotFound,
  Checkout,
} from './Pages/index';
import AddProduct from './Components/VendorDashBoard/AddProduct';
import EditProduct from './Components/VendorDashBoard/EditProduct';
import LoginVendor from './Components/VendorDashBoard/LoginVendor';
import Inbox from './Components/VendorDashBoard/Inbox';
import ProductList from './Components/VendorDashBoard/ProductList';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/maindashboard" element={<MainDashBoard />}>
          <Route path="login" element={<LoginVendor />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="product/:id" element={<EditProduct />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="product" element={<ProductList />} />
        </Route>

        <Route path="/product" element={<ProductListingsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
