import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddVenueForm from '../../VenueUpdates/CreateVenue';

function PageAddVenue() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Add Venue</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddVenueForm />
        </Col>
      </Row>
    </Container>
  );
}

export default PageAddVenue;
