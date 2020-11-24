import { useQuery } from '@apollo/client';
import { allVenues } from '../client/api/queries/venues';

function VenuesList() {
  const { loading, error, data } = useQuery(allVenues);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const venuesList = data.venues.map(venue => {
    return (
      <li key={venue.id}>Name: {venue.name} Capacity: {venue.maxCapacity} Type: {venue.venueType}</li>
    );
  })

  return (
    <ul>
      {venuesList}
    </ul>
  )
}

export default VenuesList;
