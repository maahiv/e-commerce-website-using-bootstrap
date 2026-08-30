import Button from "react-bootstrap/Button";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

function Header({ onCartClick }) {
  const { cartQuantity } = useContext(CartContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h2 className="text-white mb-0">E-Commerce Store</h2>

      <Button
        type="button"
        variant="outline-light"
        onClick={onCartClick}
      >
        🛒 Cart ({cartQuantity})
      </Button>
    </nav>
  );
}

export default Header;