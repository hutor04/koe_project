import React from 'react';
import { useFormik } from 'formik';
import { Container, Form, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setFilter, resetFilter } from '../../venueCardDeckSlice';

const FilterForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      type: '',
    },
    onSubmit: values => {
      dispatch(setFilter(values));
    },
  });
  return (
      <Container className={'p-0'}>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Row className="align-items-center">
            <Col sm={3} className="my-1">
              <Form.Control
                id="venue-name"
                type="text"
                name="name"
                placeholder="Name..."
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </Col>
            <Col sm={3} className="my-1">
              <Form.Control
                id="venue-address"
                placeholder="Street"
                type="text"
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
            </Col>
            <Col  sm={3} className="my-1">
              <Form.Control
                as={'select'}
                className="mr-sm-2"
                id="venue-type"
                name="type"
                value={formik.type}
                onChange={formik.handleChange}
              >
                <option value="">Type...</option>
                <option value="shop">Shop</option>
                <option value="restaurant">Restaurants</option>
                <option value="bar">Bars</option>
                <option value="sport">Sport</option>
              </Form.Control>
            </Col>
            <Col xs="auto" className="my-1">
              <Button className={'mr-2'} variant={'info'} type="submit">Filter <i className="fas fa-filter"></i></Button>
              <Button variant={'light'} onClick={() => {
                formik.resetForm();
                dispatch(resetFilter())
              }}>Rest <i className="fas fa-times"></i></Button>
            </Col>
          </Form.Row>
        </Form>
      </Container>
  );
}

export default FilterForm;
