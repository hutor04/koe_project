import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
            <Row>
              <Button as={Link} to={'/add-venue'} variant="success"><i className="fas fa-plus"></i> Add New</Button>
            </Row>
            <VenueCardDeckBusiness />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default PageProfile;
