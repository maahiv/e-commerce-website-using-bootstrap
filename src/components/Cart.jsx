import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Cart</h2>

      {cartItems.length === 0 ? (
        <h4 className="text-center">Your cart is empty</h4>
      ) : (
        cartItems.map((item) => (
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
                <span className="me-4">
                  Quantity: {item.quantity}
                </span>

                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.title)}
                >
                  Remove
                </Button>
              </div>

            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
}

export default Cart;