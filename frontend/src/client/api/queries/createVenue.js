import { gql } from '@apollo/client';

const CREATE_VENUE = gql`    
    mutation newVenue(
        $name: String!
        $address: AddressInput!
        $maxCapacity: Int!
        $venueType: venueTypes!
        $logo: Upload
    ) {createVenue(
        name: $name
        address: $address
        maxCapacity: $maxCapacity
        venueType: $venueType
        logo: $logo
    ){
        id
        name
        address {
            city
            street
        }
        maxCapacity
    }
    }
`;

export default CREATE_VENUE;
