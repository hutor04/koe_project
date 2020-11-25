import React from 'react';
import { useQuery } from '@apollo/client';
import { allVenues } from '../../client/api/queries/venues';
import { Container, Col, Row } from 'react-bootstrap';
import VenueCard from '../VenueCard/VenueCard';
import { v4 as uuidv4 } from 'uuid';
function VenueCardDeck() {
  const { loading, error, data } = useQuery(allVenues);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const venuesList = data.venues.map(venue => {
    return (
      <Row key={venue.is} xs={1}>
        <VenueCard key={uuidv4} name={venue.name}/>
      </Row>
    );
  })

  return (
    <Container>
      <Col key={uuidv4} >
        {venuesList}
      </Col>
    </Container>
  )
}

export default VenueCardDeck;
