import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Container, Card, Button, Spinner, Form } from "react-bootstrap";

function Films() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  const [movie, setMovie] = useState({
    title: "",
    episode_id: "",
    opening_crawl: "",
    director: "",
    producer: "",
    release_date: "",
  });

  const retryTimeout = useRef(null);

  const fetchFilms = useCallback(async () => {
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
      setIsLoading(false);
      setIsRetrying(true);

      retryTimeout.current = setTimeout(() => {
        fetchFilms();
      }, 5000);
    }
  }, []);

  useEffect(() => {
    fetchFilms();

    return () => {
      clearTimeout(retryTimeout.current);
    };
  }, [fetchFilms]);

  const cancelRetry = () => {
    clearTimeout(retryTimeout.current);
    setIsRetrying(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const addMovieHandler = (event) => {
    event.preventDefault();

    const NewMovieObj = {
      ...movie,
    };

    console.log(NewMovieObj);
  };

  const filmCards = useMemo(() => {
    return films.map((film) => (
      <Card className="mb-3" key={film.episode_id}>
        <Card.Body>
          <Card.Title>{film.title}</Card.Title>
          <Card.Text>Episode: {film.episode_id}</Card.Text>
        </Card.Body>
      </Card>
    ));
  }, [films]);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Star Wars Films</h1>

      <Form onSubmit={addMovieHandler} className="mb-5">
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
            placeholder="Enter movie title"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Episode ID</Form.Label>
          <Form.Control
            type="number"
            name="episode_id"
            value={movie.episode_id}
            onChange={handleChange}
            placeholder="Enter episode ID"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Opening Crawl</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="opening_crawl"
            value={movie.opening_crawl}
            onChange={handleChange}
            placeholder="Enter opening crawl"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Director</Form.Label>
          <Form.Control
            type="text"
            name="director"
            value={movie.director}
            onChange={handleChange}
            placeholder="Enter director"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Producer</Form.Label>
          <Form.Control
            type="text"
            name="producer"
            value={movie.producer}
            onChange={handleChange}
            placeholder="Enter producer"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Release Date</Form.Label>
          <Form.Control
            type="date"
            name="release_date"
            value={movie.release_date}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">Add Movie</Button>
      </Form>

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

      {!isLoading && !isRetrying && filmCards}
    </Container>
  );
}

export default Films;