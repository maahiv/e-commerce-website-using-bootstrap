import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../Context/CartContext";

function Header({ onCartClick }) {
  const { cartQuantity } = useContext(CartContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h2 className="text-white mb-0">E-Commerce Store</h2>

      <div>
        <NavLink
          to="/"
          className="text-white text-decoration-none me-4"
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="text-white text-decoration-none me-4"
        >
          About
        </NavLink>

        <Button
          type="button"
          variant="outline-light"
          onClick={onCartClick}
        >
          🛒 Cart ({cartQuantity})
        </Button>
      </div>
    </nav>
  );
}

export default Header;