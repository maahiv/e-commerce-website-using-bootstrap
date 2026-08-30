import Button from "react-bootstrap/Button";

function Header({ onCartClick }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h2 className="text-white mb-0">E-Commerce Store</h2>

      <Button variant="outline-light" onClick={onCartClick}>
        🛒 Cart
      </Button>
    </nav>
  );
}

export default Header;