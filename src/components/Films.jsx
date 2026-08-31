import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Container, Card, Button, Spinner, Form } from "react-bootstrap";

const DATABASE_URL =
  "https://ecommerce-website-9c26e-default-rtdb.firebaseio.com/movies";

function Films() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState(false);

  const [movie, setMovie] = useState({
    title: "",
    openingText: "",
    releaseDate: "",
  });

  const retryTimeout = useRef(null);

  const fetchFilms = useCallback(async () => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch(`${DATABASE_URL}.json`);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      if (data) {
        const loadedMovies = Object.entries(data).map(([id, movie]) => ({
          id,
          ...movie,
        }));

        setFilms(loadedMovies);
      } else {
        setFilms([]);
      }
    } catch (error) {
      setError(true);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchFilms();

    return () => {
      if (retryTimeout.current) {
        clearTimeout(retryTimeout.current);
      }
    };
  }, [fetchFilms]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const NewMovieObj = {
        title: movie.title,
        openingText: movie.openingText,
        releaseDate: movie.releaseDate,
      };

      console.log(NewMovieObj);

      setIsAdding(true);

      try {
        const response = await fetch(`${DATABASE_URL}.json`, {
          method: "POST",
          body: JSON.stringify(NewMovieObj),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Could not add movie");
        }

        const data = await response.json();

        setFilms((prevFilms) => [
          ...prevFilms,
          {
            id: data.name,
            ...NewMovieObj,
          },
        ]);

        setMovie({
          title: "",
          openingText: "",
          releaseDate: "",
        });
      } catch (error) {
        console.log(error);
      }

      setIsAdding(false);
    },
    [movie]
  );

  const deleteMovie = useCallback(async (id) => {
    try {
      const response = await fetch(`${DATABASE_URL}/${id}.json`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Could not delete movie");
      }

      setFilms((prevFilms) =>
        prevFilms.filter((film) => film.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  const movieList = useMemo(() => {
    return films.map((film) => (
      <Card className="mb-3" key={film.id}>
        <Card.Body>
          <Card.Title>{film.title}</Card.Title>

          <Card.Text>{film.openingText}</Card.Text>

          <Card.Text>
            Release Date: {film.releaseDate}
          </Card.Text>

          <Button
            variant="danger"
            onClick={() => deleteMovie(film.id)}
          >
            Delete Movie
          </Button>
        </Card.Body>
      </Card>
    ));
  }, [films, deleteMovie]);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Movies</h1>

      <Form
        onSubmit={handleSubmit}
        className="mx-auto mb-4"
        style={{ maxWidth: "600px" }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Opening Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="openingText"
            value={movie.openingText}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Release Date</Form.Label>
          <Form.Control
            type="text"
            name="releaseDate"
            value={movie.releaseDate}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button type="submit" disabled={isAdding}>
            {isAdding ? "Adding..." : "Add Movie"}
          </Button>
        </div>
      </Form>

      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}

      {error && (
        <div className="text-center">
          <h4 className="text-danger">Something went wrong</h4>

          <Button onClick={fetchFilms}>Retry</Button>
        </div>
      )}

      {!isLoading && !error && movieList}
    </Container>
  );
}

export default Films;