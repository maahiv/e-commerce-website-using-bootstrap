import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./Product";

export const productsArr = [
  {
    id: "colors",
    title: "Colors",
    price: 100,
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    ],
    reviews: [
      {
        name: "Rahul",
        review: "Good product and nice quality.",
      },
      {
        name: "Priya",
        review: "I liked this product.",
      },
    ],
  },
  {
    id: "black-white",
    title: "Black and white Colors",
    price: 50,
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    ],
    reviews: [
      {
        name: "Aman",
        review: "Nice product for the price.",
      },
      {
        name: "Neha",
        review: "Product quality is good.",
      },
    ],
  },
  {
    id: "yellow-black",
    title: "Yellow and Black Colors",
    price: 70,
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    ],
    reviews: [
      {
        name: "Riya",
        review: "Very good product.",
      },
      {
        name: "Karan",
        review: "Worth buying.",
      },
    ],
  },
  {
    id: "blue",
    title: "Blue Color",
    price: 100,
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    ],
    reviews: [
      {
        name: "Arjun",
        review: "Good quality product.",
      },
      {
        name: "Simran",
        review: "Looks great.",
      },
    ],
  },
];

function ProductList() {
  return (
    <Container>
      <h2 className="text-center my-4">Products</h2>

      <Row>
        {productsArr.map((product) => (
          <Col
            md={3}
            sm={6}
            xs={12}
            className="mb-4"
            key={product.id}
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;