import React from 'react';
import VenueCardDeckWithFilter from '../../VenueCardDeck/venueCardDeckWithFilter';
import {Col, Container, Row} from "react-bootstrap";
import {useSpring, animated} from 'react-spring'

function PageHome() {
  const props = useSpring({opacity: 1, from: {opacity: 0 }})


  return (
    <animated.div style={props}>
      <Container style={{minHeight: "83vh"}}>
        <Row>
          <Col>
            <h1>Explore Queues</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <VenueCardDeckWithFilter />
          </Col>
        </Row>
      </Container>
    </animated.div>
  );
}

export default PageHome;
