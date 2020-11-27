import React from 'react';
import { useMutation } from '@apollo/client';
import {useFormik} from "formik";
import { Link } from 'react-router-dom';
import { Container, Alert, Card, Form, Button } from 'react-bootstrap';
import signupQuery from '../../../../../client/api/queries/signup';


const SignupForm = () => {
  const [signingUp, { loading, error, data}] = useMutation(signupQuery);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      userType: '',
    },
    onSubmit: values => {
      signingUp({ variables: values}).catch(err => console.log('top error', err));
      formik.resetForm();
    },
  });
  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <Container className="d-flex align-items-center justify-content-center"
               style={{ minHeight: "100vh"}}>
      <div className="w-100" style={{ maxWidth: "400px"}}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign up</h2>
            {data
            ?   <Alert variant={'success'}>
                {data.signup.firstName}, your account was created.
                You can now <Alert.Link as={Link} to="/login">Login</Alert.Link> to your account.
                </Alert>
            : ''}
            {error
              ?   <Alert variant={'danger'}>
                Something went wrong...
              </Alert>
              : ''}
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  id='first-name'
                  type='text'
                  name='firstName'
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  id='last-name'
                  type='text'
                  name='lastName'
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
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
              <Form.Group>
                <Form.Control
                  as="select"
                  id="dropdown-basic"
                  name="userType"
                  value={formik.userType}
                  onChange={formik.handleChange}
                >
                  <option value="user">User</option>
                  <option value="business">Business</option>
                </Form.Control>
              </Form.Group>
              <Button type="submit" className="w-100 mt-2">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default SignupForm;
