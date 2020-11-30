import { gql } from '@apollo/client';

const UPDATE_VENUE = gql`    
    mutation updVenue(
        $id: ID!
        $name: String!
        $address: AddressInput!
        $maxCapacity: Int!
        $venueType: venueTypes!
        $phoneNumber: String
        $logo: Upload
        $hours: HoursInput
    ) {updateVenue(
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

export default UPDATE_VENUE;
