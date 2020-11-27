import React from "react";
import {Form, Col, Container, Button, Alert, Card} from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { Formik } from "formik";
import CREATE_VENUE from '../../client/api/queries/createVenue';


const CreateVenue = () => {
  const [createVenue, { loading, error, data}] = useMutation(CREATE_VENUE);
  if (loading) {
    return <p>Loading...</p>
  }
  return(
  <Container>
    <Formik
      onSubmit={(values, {resetForm}) => {
        const vals = {...values};
        vals.maxCapacity = Number(values.maxCapacity);
        createVenue({ variables: vals}).catch(err => console.log('top error', err));
        resetForm();
      }}
      initialValues={{
        name: '',
        phoneNumber: '',
        address: {
          country: '',
          city: '',
          postalCode: '',
          street: ''
        },
        maxCapacity: '',
        venueType: '',
        logo: '',
      }}
    >
      {({
          handleSubmit,
          handleChange,
          resetForm,
          setFieldValue,
          values,
        }) => (
        <Form>
          {data
            ? <Alert variant={'success'}>
                You successfully created a new location.
              </Alert>
            : ''}
          {error
            ?   <Alert variant={'danger'}>
              Something went wrong...
            </Alert>
            : ''}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Venue Name</Form.Label>
              <Form.Control
                placeholder="Store name"
                onChange={handleChange("name")}
                value={values.name}
              />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Venue Type</Form.Label>
              <Form.Control
                as="select"
                placeholder="Venue Type"
                onChange={handleChange("venueType")}
                value={values.venueType}
              >
                <option value="" label="Select a Venue Type"/>
                <option value="restaurant">Restaurant</option>
                <option value="shop">Shop</option>
                <option value="bar">Bar</option>
                <option value="sport">Sport</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Max Capacity</Form.Label>
                <Form.Control
                  placeholder="Max Capacity"
                  onChange={handleChange("maxCapacity")}
                  value={values.maxCapacity}
                />
                <Form.Control.Feedback type="invalid">
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                placeholder="Phone number"
                onChange={handleChange("phoneNumber")}
                value={values.phoneNumber}
              />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                placeholder="Street Address"
                onChange={handleChange("address.street")}
                value={values.address.street}
              />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder="City"
                onChange={handleChange("address.city")}
                value={values.address.city}
              />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Country</Form.Label>
              <Form.Control
                placeholder="Country"
                onChange={handleChange('address.country')}
                value={values.address.country}
              />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Postal code</Form.Label>
              <Form.Control
                placeholder="Postal code"
                onChange={handleChange("address.postalCode")}
                value={values.address.postalCode}
              />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Add a logo</Form.Label>
              <Form.Control
                placeholder="Image"
                name={'logo'}
                type={'file'}
                onChange={(event) => {
                  setFieldValue('logo', event.target.files);
                }}
              />
            </Form.Group>
          </Form.Row>
          <Button variant="outline-secondary" onClick={resetForm}>Clear</Button>{' '}
          <Button onClick={handleSubmit}>Add New Venue</Button>
        </Form>
      )}
    </Formik>
  </Container>

)};

export default CreateVenue;
