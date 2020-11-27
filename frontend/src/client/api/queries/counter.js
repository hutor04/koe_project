import { gql } from '@apollo/client';

const COUNTER = gql`
    mutation counter (
        $id: ID!,
        $delta: Delta!,
    ){
        updateVenueCounter(
            id: $id
            delta: $delta
        )
    }
`;
export default COUNTER;
