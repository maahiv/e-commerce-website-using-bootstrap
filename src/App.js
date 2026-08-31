import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import About from "./components/About";
import Films from "./components/Films";
import ContactUs from "./components/ContactUs";
import ProductDetails from "./components/ProductDetails";

import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />

        <Switch>
  <Route path="/" exact component={Home} />
  <Route path="/product/:productId" component={ProductDetails} />
  <Route path="/store" component={ProductList} />
  <Route path="/about" component={About} />
  <Route path="/films" component={Films} />
  <Route path="/cart" component={Cart} />
  <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;