import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Products from "./components/products";

import "./App.css";

import { useFetch } from "./hooks/useFetch";
import { useCart } from "./hooks/useCart";

function App() {
  const {products} = useFetch();
  const {cart , addtoCart} = useCart();

  return (
    <div>
      <Router>
        <div>
          <Navbar count={cart.length} />   
            <Routes>
              <Route
                path="/"
                element={<Cards products={products} addtoCart={addtoCart} />}
              />
              <Route
                path="/products/:id"
                element={<Products products={products} />}
              />
              <Route
                path="/cart"
                element={<Cart cart={cart} />}
              />
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
