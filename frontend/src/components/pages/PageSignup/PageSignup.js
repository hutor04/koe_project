import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SignupForm from './components/SignupForm/SignupForm';

function PageSignup() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Signup</h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ height: '76vh' }}>
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
}

export default PageSignup;
