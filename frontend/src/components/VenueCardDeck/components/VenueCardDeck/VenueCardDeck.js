import React from 'react';
import { useQuery } from '@apollo/client';
import { Row } from 'react-bootstrap';
import VenueCard from '../VenueCard/VenueCard';

function VenueCardDeck({ query, filter }) {
  const variables = {};
  for (const prop in filter) {
    if (filter[prop] !== '') {
      variables[prop] = filter[prop];
    }
  }
  const { loading, error, data } = useQuery(query, { variables: variables });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const venuesList = data.venues.map(venue => {
    return (
      <Row key={venue.id} xs={1}>
        <VenueCard
          id={venue.id}
          name={venue.name}
          logo={venue.logo._id}
          maxCapacity={venue.maxCapacity}
          street={venue.address.street}
        />
      </Row>
    );
  })
  return (
    <div>
      {venuesList}
    </div>
  );
}

export default VenueCardDeck;
