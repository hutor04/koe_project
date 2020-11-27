import React from 'react'
import { useSelector } from 'react-redux';
import {Col, Container, Row} from "react-bootstrap";
import { selectFilter } from './venueCardDeckSlice';
import FilterForm from './components/FilterForm/FilterForm';
import VenueCardDeck from './components/VenueCardDeck/VenueCardDeck';


function VenuCardDeckWithFilter() {
  const filter = useSelector(selectFilter);
  return (
    <Container>
      <Col>
        <Row xs={1}>
          <FilterForm />
        </Row>
        <VenueCardDeck filter={filter}/>
      </Col>
    </Container>
  );
}

export default VenuCardDeckWithFilter;
