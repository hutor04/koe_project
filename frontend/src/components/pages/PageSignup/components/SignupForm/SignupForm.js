import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Alert, Card, Form, Button } from 'react-bootstrap';
import {useFormik} from "formik";


const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      userType: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <Container className="d-flex align-items-center justify-content-center"
               style={{ minHeight: "100vh"}}>
      <div className="w-100" style={{ maxWidth: "400px"}}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign up</h2>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  id='first-name'
                  type='text'
                  name='firstName'
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  id='last-name'
                  type='text'
                  name='lastName'
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  id="form-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  id="form-password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  required
                />
              </Form.Group>
              <Button type="submit" className="w-100 mt-2">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Link to="#">Forgot password?</Link>
        </div>
        <div className="w-100 text-center mt-2">
          Don't have an account? <Link to="/signup">Sign Up Here</Link>
        </div>
      </div>
    </Container>
  );
};

export default SignupForm;
