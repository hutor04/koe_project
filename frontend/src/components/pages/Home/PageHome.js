import React from 'react';
import VenueCardDeckWithFilter from '../../VenueCardDeck/venueCardDeckWithFilter';
import {Col, Container, Row} from "react-bootstrap";

function PageHome() {
  return (
    <Container>
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
  );
}

export default PageHome;
