import React from 'react';
import { useQuery } from '@apollo/client';
import { allVenues } from '../../client/api/queries/venues';
import { Container, Col, Row } from 'react-bootstrap';
import VenueCard from '../VenueCard/VenueCard';

function VenueCardDeck() {
  const { loading, error, data } = useQuery(allVenues);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const venuesList = data.venues.map(venue => {
    return (
      <Row key={venue.is} xs={1}>
        <VenueCard name={venue.name} logo={venue.logo._id}/>
      </Row>
    );
  })

  return (
    <Container>
      <Col>
        {venuesList}
      </Col>
    </Container>
  )
}

export default VenueCardDeck;
