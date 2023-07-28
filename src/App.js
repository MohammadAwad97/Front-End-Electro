import { Routes, Route } from "react-router-dom";
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
} from "./Pages/index";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/maindashboard" element={<MainDashBoard />} />
        <Route path="/product" element={<ProductListingsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
