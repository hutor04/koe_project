import { gql } from '@apollo/client';

export const allVenues = gql`
    query GetAllVenues {
        venues {
            id
            name
            maxCapacity
            venueType
            logo {
                _id
                filename
                encoding
                mimetype
            }
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
