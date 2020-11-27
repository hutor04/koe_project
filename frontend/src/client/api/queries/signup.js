import { gql } from '@apollo/client';

const signup = gql`
    mutation signup(
        $email: String!,
        $password: String!,
        $firstName: String!,
        $lastName: String!,
        $userType: userTypes!) {
        signup(
            email: $email,
            password:$password,
            firstName:$firstName,
            lastName: $lastName,
            userType: $userType) {
            id,firstName
        }
    }
`;

export default signup;
