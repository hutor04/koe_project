import React from 'react'
import { useSelector } from 'react-redux';
import {Col, Container, Row} from "react-bootstrap";
import { selectFilter } from './venueCardDeckSlice';
import { allVenues } from '../../client/api/queries/venues';
import FilterForm from './components/FilterForm/FilterForm';
import VenueCardDeck from './components/VenueCardDeck/VenueCardDeck';
import VenueCard from './components/VenueCard/VenueCard';

function VenuCardDeckWithFilter() {
  const filter = useSelector(selectFilter);
  return (
    <Container>
      <Col>
        <Row xs={1}>
          <FilterForm />
        </Row>
        <VenueCardDeck query={allVenues} filter={filter} card={VenueCard}/>
      </Col>
    </Container>
  );
}

export default VenuCardDeckWithFilter;
