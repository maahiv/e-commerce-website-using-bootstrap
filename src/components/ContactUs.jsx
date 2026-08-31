import { Container, Form, Button } from "react-bootstrap";

function ContactUs() {
  return (
    <Container className="py-5" style={{ maxWidth: "600px" }}>
      <h1 className="text-center mb-4">Contact Us</h1>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your problem"
          />
        </Form.Group>

        <Button type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactUs;