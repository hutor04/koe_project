import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function PageLogin() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Login</h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ height: '76vh' }}>
          <p>Some content</p>
        </Col>
      </Row>
    </Container>
  );
}

export default PageLogin;
