import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./Product";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function ProductList() {
  return (
    <Container>
      <h2 className="text-center my-4">Products</h2>

      <Row>
        {productsArr.map((product) => (
          <Col md={3} sm={6} xs={12} className="mb-4" key={product.title}>
            <Product
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;