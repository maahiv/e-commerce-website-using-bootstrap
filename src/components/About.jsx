import Container from "react-bootstrap/Container";

function About() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">About Us</h1>

      <div className="text-center">
        <p>
          Welcome to our E-Commerce Store.
        </p>

        <p>
          We provide a simple and easy way to explore and purchase
          different products.
        </p>

        <p>
          Our goal is to provide a smooth and user-friendly shopping
          experience.
        </p>
      </div>
    </Container>
  );
}

export default About;