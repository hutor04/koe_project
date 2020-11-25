import { gql } from '@apollo/client';

export const me = gql`
    query me {
        me {
            id
            email
            firstName
            lastName
    }
}
`;
