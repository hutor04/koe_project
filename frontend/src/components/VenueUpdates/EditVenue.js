import React, {useState} from "react";
import {Form, Col, Container, Button, Alert, Accordion, Card} from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/client';
import { Formik, FieldArray } from "formik";
import oneVenue from '../../client/api/queries/oneVenue';
import CREATE_VENUE from '../../client/api/queries/createVenue';


const EditVenue = ({id}) => {
  const [createVenue, { loading, error, data}] = useMutation(CREATE_VENUE);
  console.log('id', id)
  let filledData;

  let queryData = useQuery(oneVenue, {variables: {id: id}});

 if (!queryData.loading) {
  filledData = queryData.data.venues[0];
 } else{
  return 'loading';
 };

  console.log(filledData, 'this is printing');

  const weekday = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  if (queryData.loading) {
    return <p>Loading...</p>
  }
  return(
  <Container>
    <Formik
    enableReinitialize={true}
      onSubmit={(values, {resetForm}) => {
        console.log(values);
        const vals = {...values};
        vals.maxCapacity = Number(values.maxCapacity);
        createVenue({ variables: vals}).catch(err => console.log('top error', err));
        resetForm();
      }}
      initialValues={{
        name: filledData.name,
        phoneNumber: filledData.phoneNumber,
        address: {
          country: filledData.address.country,
          city: filledData.address.city,
          postalCode: filledData.address.postalCode,
          street: filledData.address.street
        },
        maxCapacity: filledData.maxCapacity,
        venueType: filledData.venueType,
        logo: filledData.name,
        hours: {
          monday: {
            open: filledData.hours.monday.open,
            close:filledData.hours.monday.close
          },
          tuesday: {
            open: filledData.hours.tuesday.open,
            close:filledData.hours.tuesday.close
          },
          wednesday: {
            open: filledData.hours.wednesday.open,
            close:filledData.hours.wednesday.close
          },
          thursday: {
            open: filledData.hours.thursday.open,
            close:filledData.hours.thursday.close
          },
          friday: {
            open: filledData.hours.friday.open,
            close:filledData.hours.friday.close
          },
          saturday: {
            open: filledData.hours.friday.open,
            close:filledData.hours.friday.close
          },
          sunday: {
            open: filledData.hours.sunday.open,
            close:filledData.hours.sunday.close
          },
        }
      }}
      // weekday.forEach(day => {
      //   return  obj = { [day]: {
      //       open: 'filledData.hours[day].open,',
      //       close: 'filledData.hours[day].close'
      //   } }
      // })
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
                You successfully edited your location.
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
          <Form.Row >
          <Accordion className='col' >
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                    Opening Hours
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Accordion className='row'>
                          <FieldArray
                            name='weekday'
                            render= {()=>
                              weekday.map(day =>  (
                                <Card className='col'>
                                  <Card.Header variant="primary">
                                  {day}
                                  </Card.Header>
                                  <Card.Body>
                                    <Form.Row>
                                      <Form.Group as={Col}>
                                        <Form.Label>Open</Form.Label>
                                        <Form.Control
                                        placeholder="Open"
                                        onChange={handleChange(`hours.${day}.open`)}
                                        value={values.hours[`${day}`]["open"]}
                                        />
                                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        <Form.Label>Close</Form.Label>
                                        <Form.Control
                                        placeholder="Close"
                                        onChange={handleChange(`hours.${day}.close`)}
                                        value={values.hours[`${day}`]["close"]}
                                        />
                                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                      </Form.Group>   
                                    </Form.Row>
                                  </Card.Body>
                                </Card>))
                              }>
                          </FieldArray>
                        </Accordion>
                      </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
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

export default EditVenue;
