import { gql } from '@apollo/client';

const DELETE_VENUE = gql`
mutation delVenue (
      $id: ID!,
){
  deleteVenue(id: $id)
}
`;
export default DELETE_VENUE;