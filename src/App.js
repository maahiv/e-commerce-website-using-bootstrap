import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./Context/CartContext";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <CartProvider>
      <div className="App">
        <Header onCartClick={handleCartClick} />

        {!showCart && <ProductList />}

        {showCart && <Cart />}
      </div>
    </CartProvider>
  );
}

export default App;