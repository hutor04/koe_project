import { gql } from '@apollo/client';

export const userInfo = gql`
  query getUser($userId: ID) {
    user(id: $userId) {
      id
      email
      firstName
      lastName
    }
  }
`