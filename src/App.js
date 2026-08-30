import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import About from "./components/About";

import { CartProvider } from "./Context/CartContext";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <CartProvider>
      <Header onCartClick={handleCartClick} />

      <Routes>
        <Route
          path="/"
          element={showCart ? <Cart /> : <ProductList />}
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </CartProvider>
  );
}

export default App;