import { gql } from '@apollo/client';

export const login = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password:$password) {
    user{
    id
    firstName
    lastName
    userType
  }
  token
  tokenExpiration
}
}
`;