import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function PageAbout() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>About</h1>
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

export default PageAbout;
