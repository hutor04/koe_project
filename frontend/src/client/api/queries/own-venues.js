import { gql } from '@apollo/client';

const ownVenues = gql`
    query ListOwnVenues {
        listOwnVenues
        {
            id
            name
            logo {
                _id
            }
            address{
                street
            }
            maxCapacity
            venueType
        }
    }
`;

export default ownVenues;
