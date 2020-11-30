import React from 'react';
import { useQuery } from '@apollo/client';
import { Row } from 'react-bootstrap';
import VenueCardBusiness from '../VenueCardBusiness/VenueCardBusiness';
import ownVenues from '../../../../../client/api/queries/own-venues';

function VenueCardDeckBusiness() {
  const { loading, error, data, refetch } = useQuery(ownVenues);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const venuesList = data.listOwnVenues.map(venue => {
    return (
      <Row key={venue.id} xs={1}>
        <VenueCardBusiness
          id={venue.id}
          name={venue.name}
          logo={venue.logo._id}
          maxCapacity={venue.maxCapacity}
          street={venue.address.street}
          updateList={refetch}
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

export default VenueCardDeckBusiness;
