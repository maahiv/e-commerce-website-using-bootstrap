import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CartContext from "../Context/CartContext";

function Header() {
  const { cartQuantity } = useContext(CartContext);
  const location = useLocation();

  return (
    <nav style={{ backgroundColor: "black" }}>
      <div className="container position-relative">
        <div className="text-center py-2">
          <NavLink
            to="/"
            className="text-white text-decoration-none mx-5"
          >
            HOME
          </NavLink>

          <NavLink
            to="/store"
            className="text-white text-decoration-none mx-5"
          >
            STORE
          </NavLink>

          <NavLink
            to="/about"
            className="text-white text-decoration-none mx-5"
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/contact-us"
            className="text-white text-decoration-none mx-5"
          >
            CONTACT US
          </NavLink>
        </div>

        {location.pathname === "/store" && (
          <NavLink
            to="/cart"
            className="position-absolute top-50 end-0 translate-middle-y text-decoration-none"
          >
            <Button variant="outline-light">
              🛒 Cart ({cartQuantity})
            </Button>
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;