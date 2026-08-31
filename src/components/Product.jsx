import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import CartContext from "../Context/CartContext";

function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  const history = useHistory();

  const { id, title, price, images } = product;

  const handleProductClick = () => {
    history.push(`/product/${id}`);
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={images[0]}
        alt={title}
        onClick={handleProductClick}
        style={{
          height: "250px",
          objectFit: "contain",
          cursor: "pointer",
        }}
      />

      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>

        <Card.Text>₹{price}</Card.Text>

        <Button
          variant="primary"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;