import { gql } from '@apollo/client';

const oneVenue = gql`
    query venues ($id:ID!) {
  venues (id:$id) {name,
  address {
    street,
    city,
    country,
    postalCode},
  phoneNumber,
  maxCapacity, 
  hours {
    monday{open,close},
    tuesday{open,close},
    wednesday{open,close},
    thursday{open,close},
    friday{open,close},
    saturday{open,close},
    sunday{open,close},
  },
  venueType}
}
`;

export default oneVenue;
