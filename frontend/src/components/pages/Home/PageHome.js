import React from 'react';
import VenueCardDeck from '../../VenueCardDeck/VenueCardDeck';
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
          <VenueCardDeck />
        </Col>
      </Row>
    </Container>
  );
}

export default PageHome;
