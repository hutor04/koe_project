import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserprofileCard from './components/UserProfileCard/UserProfileCard';
import VenueCardDeckBusiness from './components/VenueCardDeckBusiness/VenueCardDeckBusiness';

function PageProfile() {
  return (
    <Container className={'min-vh-100'} fluid>
      <Row className={'mt-5'}>
        <Col md={'auto'}>
          <UserprofileCard />
        </Col>
        <Col>
          <Container>
            <Row>
              <h2>Your Locations</h2>
            </Row>
            <VenueCardDeckBusiness />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default PageProfile;
