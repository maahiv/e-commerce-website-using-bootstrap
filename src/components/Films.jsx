import { useState } from "react";
import { Container, Card, Button, Spinner } from "react-bootstrap";

function Films() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  let retryTimeout;

  const fetchFilms = async () => {
    setIsLoading(true);
    setIsRetrying(false);

    try {
      const response = await fetch("https://swapi.info/api/films");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      setFilms(data);
      setIsLoading(false);
      setIsRetrying(false);
    } catch (error) {
      setIsRetrying(true);
      setIsLoading(false);

      retryTimeout = setTimeout(() => {
        fetchFilms();
      }, 5000);
    }
  };

  const cancelRetry = () => {
    clearTimeout(retryTimeout);
    setIsRetrying(false);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Star Wars Films</h1>

      {!isRetrying && (
        <div className="text-center mb-4">
          <Button onClick={fetchFilms}>Get Films</Button>
        </div>
      )}

      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}

      {isRetrying && (
        <div className="text-center mb-4">
          <p>Something went wrong ....Retrying</p>
          <Button variant="danger" onClick={cancelRetry}>
            Cancel
          </Button>
        </div>
      )}

      {!isLoading &&
        !isRetrying &&
        films.map((film) => (
          <Card className="mb-3" key={film.episode_id}>
            <Card.Body>
              <Card.Title>{film.title}</Card.Title>
              <Card.Text>Episode: {film.episode_id}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </Container>
  );
}

export default Films;