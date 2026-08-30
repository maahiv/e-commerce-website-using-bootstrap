import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(cartElements);

  const removeItem = (title) => {
    const updatedCart = cartItems.filter((item) => item.title !== title);
    setCartItems(updatedCart);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Cart</h2>

      {cartItems.map((item) => (
        <Card className="mb-3" key={item.title}>
          <Card.Body className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img
                src={item.imageUrl}
                alt={item.title}
                width="80"
                height="80"
                style={{ objectFit: "contain" }}
              />

              <div className="ms-3">
                <h5>{item.title}</h5>
                <p className="mb-0">₹{item.price}</p>
              </div>
            </div>

            <div>
              <span className="me-4">Quantity: {item.quantity}</span>

              <Button
                variant="danger"
                onClick={() => removeItem(item.title)}
              >
                Remove
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cart;