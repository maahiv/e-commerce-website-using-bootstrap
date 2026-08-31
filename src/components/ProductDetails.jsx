import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { productsArr } from "./ProductList";

function ProductDetails() {
  const { productId } = useParams();

  const product = productsArr.find(
    (item) => item.id === productId
  );

  if (!product) {
    return (
      <Container className="py-5">
        <h2>Product not found</h2>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">{product.title}</h1>

      <div className="text-center mb-5">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.title} ${index + 1}`}
            style={{
              width: "250px",
              height: "250px",
              objectFit: "contain",
              margin: "10px",
            }}
          />
        ))}
      </div>

      <h3 className="mb-3">Price: ₹{product.price}</h3>

      <h2 className="mb-3">Reviews</h2>

      {product.reviews.map((review, index) => (
        <Card className="mb-3" key={index}>
          <Card.Body>
            <Card.Title>{review.name}</Card.Title>
            <Card.Text>{review.review}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default ProductDetails;