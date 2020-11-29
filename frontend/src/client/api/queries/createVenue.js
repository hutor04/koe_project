import { gql } from '@apollo/client';

const CREATE_VENUE = gql`    
    mutation newVenue(
        $name: String!
        $address: AddressInput!
        $maxCapacity: Int!
        $venueType: venueTypes!
        $phoneNumber: String
        $logo: Upload
        $hours: HoursInput
    ) {createVenue(
        name: $name
        address: $address
        maxCapacity: $maxCapacity
        venueType: $venueType
        phoneNumber: $phoneNumber
        logo: $logo
        hours: $hours
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
