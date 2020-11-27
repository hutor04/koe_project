import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SignupForm from './components/SignupForm/SignupForm';

function PageSignup() {
  return (
    <Container>
      <Row>
        <Col>
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
}

export default PageSignup;
