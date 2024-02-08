import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
