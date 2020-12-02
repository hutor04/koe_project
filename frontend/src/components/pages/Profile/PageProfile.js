import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UserprofileCard from './components/UserProfileCard/UserProfileCard';
import VenueCardDeckBusiness from './components/VenueCardDeckBusiness/VenueCardDeckBusiness';
import { useSpring, animated } from 'react-spring';

function PageProfile() {
  const fadeprops = useSpring({opacity: 1, from: {opacity: 0 }})
  const slideprops= useSpring({opacity: 1, marginTop:0, from: {opacity: 0, marginTop:500 }})

  return (

      <Container style={{ minHeight: '83vh' }} fluid>
        <Row className={'mt-5'}>
        <animated.div style={fadeprops}>
          <Col md={'auto'}>
            <UserprofileCard />
          </Col>
          </animated.div>
          <Col>
            <Container>
            <animated.div style={fadeprops}>
              <Row>
                <h2>Your Locations</h2>
              </Row>
              <Row>
                <Button as={Link} to={'/add-venue'} variant="success"><i className="fas fa-plus"></i> Add New</Button>
              </Row>
              </animated.div>
              <animated.div style={slideprops}>
              <VenueCardDeckBusiness />
              </animated.div>
            </Container>
          </Col>
        </Row>
      </Container>

  );
}

export default PageProfile;
