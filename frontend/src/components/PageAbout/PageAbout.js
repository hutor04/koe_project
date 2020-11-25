import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function PageAbout() {
  return (
    <Container>
      <Row key={uuidv4}>
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
