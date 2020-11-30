import React from "react";
import {Form, Col, Container, Button, Alert, Accordion, Card} from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { Formik, FieldArray } from "formik";
import CREATE_VENUE from '../../client/api/queries/createVenue';

const OpeningHours = () => {
    const [createVenue, { loading, error, data}] = useMutation(CREATE_VENUE);
    const weekday = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    if (loading) {
      return <p>Loading...</p>
    }
    return (
        <Container>
        <Formik
          onSubmit={(values, {resetForm}) => {
              console.log(values);
            const vals = {...values};
            vals.maxCapacity = Number(values.maxCapacity);
            createVenue({ variables: vals}).catch(err => console.log('top error', err));
            resetForm();
          }}
          initialValues={{
            hours: {
              monday: {
                open: '',
                close:''
              },
              tuesday: {
                open: '',
                close:''
              },
              wednesday: {
                open: '',
                close:''
              },
              thursday: {
                open: '',
                close:''
              },
              friday: {
                open: '',
                close:''
              },
              saturday: {
                open: '',
                close:''
              },
              sunday: {
                open: '',
                close:''
              },
            }
          }}
        >
          {({
              handleSubmit,
              handleChange,
              resetForm,
              setFieldValue,
              values,
            }) => (
            <Form >
                <Accordion>
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
                                    </Card>))}>
                                </FieldArray>
                            </Accordion>
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
              
              <Button variant="outline-secondary" onClick={resetForm}>Clear</Button>{' '}
              <Button onClick={handleSubmit}>Add New Venue</Button>
            </Form>
          )}
        </Formik>
      </Container>
    )
}

export default OpeningHours
