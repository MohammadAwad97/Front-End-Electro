import LandingPage from './Pages/LandingPage'
import { BrowserRouter } from 'react-router-dom'
import NotFound from './Pages/NotFound';
import Checkout from './Pages/Checkout';
function App() {
  return (
    <BrowserRouter>
     <Checkout/>
    </BrowserRouter>
  );
}

export default App;
