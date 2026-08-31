import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import About from "./components/About";
import Films from './components/Films';

import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<ProductList />} />
        <Route path="/about" element={<About />} />
          <Route path="/films" element={<Films />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}

export default App;