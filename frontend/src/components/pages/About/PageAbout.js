import React, {useState} from 'react';
import { Container, Carousel, Jumbotron} from 'react-bootstrap';

function PageAbout() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container style={{ minHeight: '83vh' }}>
        <br/>
      <Container className="p-3 mb-2 bg-dark text-white">
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item as={Container}>
        <Jumbotron className="bg-dark text-center">
        <Container>
          <h1>About Us</h1>
          <hr class="my-4"></hr>
          <p class="lead">
          Kø is our solution to your problem.
          </p>
        </Container>
        </Jumbotron>
      </Carousel.Item>
      <Carousel.Item>
      <Jumbotron className="bg-dark text-center">
        <Container>
          <h1>MONITOR OCCUPANT DENSITY</h1>
          <h2>COVID 19 SAFETY</h2>
          <hr class="my-4"></hr>

          <p>
          Ensure optimal crowd management and social distancing in your establishment, thanks to our
            advanced livestream feed
          </p>
        </Container>
      </Jumbotron>
      </Carousel.Item>
      <Carousel.Item>
      <Jumbotron className="bg-dark text-center">
        <Container>
        <h1>Our Team</h1>
          <hr class="my-4"></hr>
          <p class="lead">
          We are the cyberducks.
          </p>
        </Container>
      </Jumbotron>
      </Carousel.Item>
    </Carousel>
      </Container>
    </Container>
  );
}

export default PageAbout;
