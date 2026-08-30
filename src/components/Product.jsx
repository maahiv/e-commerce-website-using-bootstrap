import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

function Product({ title, price, imageUrl }) {
  const { addToCart } = useContext(CartContext);

  const product = {
    title,
    price,
    imageUrl,
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={title}
        style={{ height: "250px", objectFit: "contain" }}
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