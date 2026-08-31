import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Home() {
  const tours = [
    {
      date: "JUL 16",
      location: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 19",
      location: "TORONTO, ON",
      venue: "BUDWEISER STAGE",
    },
    {
      date: "JUL 22",
      location: "BRISTOW, VA",
      venue: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 29",
      location: "PHOENIX, AZ",
      venue: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      location: "LAS VEGAS, NV",
      venue: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      location: "CONCORD, CA",
      venue: "CONCORD PAVILION",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white text-center"
        style={{
          backgroundColor: "#777",
          marginTop: "2px",
        //   paddingTop: "25px",
          paddingBottom: "40px",
        }}
      >
        <h1
          className="fw-bold"
          style={{
            fontSize: "90px",
            marginTop: "0",
            marginBottom: "45px",
          }}
        >
          The Generics
        </h1>

        <Button
          variant="outline-info"
          size="lg"
          style={{
            padding: "12px 35px",
            fontSize: "22px",
            marginBottom: "25px",
          }}
        >
          Get our Latest Album
        </Button>

        <div>
          <Button
            variant="outline-info"
            className="rounded-circle"
            style={{
              width: "80px",
              height: "80px",
              fontSize: "28px",
            }}
          >
            ▶
          </Button>
        </div>
      </section>

      {/* Tours */}
     {/* Tours */}
<Container className="py-4">
  <h2 className="text-center mb-3" style={{ fontSize: "28px" }}>
    TOURS
  </h2>

  <div className="mx-auto" style={{ maxWidth: "850px" }}>
    {tours.map((tour) => (
      <div
        key={tour.date}
        className="d-flex align-items-center border-bottom py-2"
        style={{ fontSize: "14px" }}
      >
        <div style={{ width: "100px" }}>
          {tour.date}
        </div>

        <div
          style={{
            width: "210px",
            color: "#777",
          }}
        >
          {tour.location}
        </div>

        <div
          className="flex-grow-1"
          style={{ color: "#777" }}
        >
          {tour.venue}
        </div>

        <Button
          variant="info"
          className="text-white fw-bold"
          size="sm"
        >
          BUY TICKETS
        </Button>
      </div>
    ))}
  </div>
</Container>

      {/* Footer */}
<footer
  className="py-4"
  style={{ backgroundColor: "#56c5e5" }}
>
  <Container>
    <h1
      className="text-white mb-0"
      style={{
        marginLeft: "180px",
        fontSize: "45px",
      }}
    >
      The Generics
    </h1>
  </Container>
</footer>
    </>
  );
}

export default Home;