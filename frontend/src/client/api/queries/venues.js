import { gql } from '@apollo/client';

export const allVenues = gql`
    query GetAllVenues($id: ID, $name: String, $venueStreet: String, $venueType: venueTypes) {
        venues(
            id: $id
            name: $name
            street: $venueStreet
            venueType: $venueType
        ) {
            id
            name
            maxCapacity
            venueType
            logo {
                _id
            }
            address {
                street
                house
        }
    }
    }
`;
