import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from './userStatusSlice';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from './components/LoginForm/LoginForm';

function PageLogin() {
  const userStatus = useSelector(selectLoggedIn);
  if (userStatus) {
    return (
      <Redirect to="/" />
    );
  }
  return (
    <Container style={{ minHeight: '83vh' }}>
      <Row>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
}

export default PageLogin;
