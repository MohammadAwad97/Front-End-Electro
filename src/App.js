import LandingPage from "./Pages/LandingPage";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Checkout from "./Pages/Checkout";
import ProductListingsPage from "./Pages/ProductListingsPage";
function App() {
  return (
    <BrowserRouter>
      {/* <Checkout /> */}
      <ProductListingsPage />
    </BrowserRouter>
  );
}

export default App;
