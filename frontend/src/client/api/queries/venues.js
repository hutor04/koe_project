import { gql } from '@apollo/client';

export const allVenues = gql`
    query GetAllVenues {
        venues {
            id
            name
            maxCapacity
            venueType
            address {
                street
                house
            }
            hours {
                monday {
                    open
                    close
                }
            }
        }
    }
`;
