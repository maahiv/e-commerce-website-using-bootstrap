import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <Header onCartClick={handleCartClick} />

      {!showCart && <ProductList />}

      {showCart && <Cart />}
    </div>
  );
}

export default App;